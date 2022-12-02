// import {involve_url,api_id} from './data.js'
// require('dotenv').config()

const api_id = 'j26xtAx7qVMwcqU9i8K3';
const involve_url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const tvmaze_url = "https://api.tvmaze.com/schedule/web?date=2022-11-30&country=US";

const base_url = involve_url+api_id

// console.log("involve_url")

async function getLikes(){

    // console.log('get likes')
    let response = await fetch(base_url)
    let data = await response.JSON.parse()
    return data
}

let likesEndpoint = base_url + '/likes/'

console.log(likesEndpoint)
async function postLikes(showIdArray){
    

    let likesArray = []
    showIdArray.forEach((id)=>{
        let like = {
            "likes":0,
            "item_id":id
        }
        likesArray.push(like)
    })

    let response = await fetch(likesEndpoint,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(likesArray)

    });

    const reply = await response.json()
    console.log(reply)
    

}

postLikes(['101','102','103','104'])

// export default getLikes