// import {involveUrl,apiId} from './data.js'
// require('dotenv').config()

const apiId = 'j26xtAx7qVMwcqU9i8K3';
const involveUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const baseUrl = involveUrl + apiId;

// console.log("involveUrl")

const likesEndpoint = `${baseUrl}/likes/`;

async function postLikes(showIdArray) {
  const likesArray = [];
  showIdArray.forEach((id) => {
    const like = {
      likes: 0,
      item_id: id,
    };
    likesArray.push(like);
  });

  const response = await fetch(likesEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(likesArray),

  });

  await response.json();
}

postLikes(['101', '102', '103', '104']);

// export default getLikes