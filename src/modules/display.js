import * as Vibrant from 'node-vibrant';

const main = document.querySelector('.main-section');

let opts =  {
	colorCount: 64,
	quality: 5,

}
//*Begining of function

const showItems = ({index,showId,name,imgMediumUrl},likes = 10) => {

let currentLikes = likes
//    main card body 
const item_display =document.createElement('div');
item_display.classList.add('movie-card');

//image div
const movie_cards = document.createElement('div');
movie_cards.classList.add ('movie-image-div');
const Img = document.createElement('img');
Img.setAttribute('src', imgMediumUrl);
Img.setAttribute('alt', `image of ${name}`);
// Img.setAttribute('class', 'movie-img');
movie_cards.append(Img);

Vibrant.from(imgMediumUrl).getPalette()
  .then((palette) => console.log(palette))

item_display.append(movie_cards);

//description div
const card_description = document.createElement('div');
card_description.classList.add('card-description');

const tv_title = document.createElement('h3');
tv_title.textContent = name
card_description.append(tv_title);

const like_icon_div = document.createElement('div');
like_icon_div.classList.add('like-div');

//like button
const like_btn = document.createElement('button');
like_btn.classList.add('like-button');
like_btn.setAttribute('id','like-button')

like_btn.dataset.showId =showId 



//*increment number of likes
like_btn.addEventListener('click',()=>{
	currentLikes += 1
	likeCount.textContent = `${currentLikes}  likes`
})


const like = document.createElement('i');
like.classList.add('fa-regular','fa-heart')
like_btn.append(like);
like_icon_div.append(like_btn)

//like Count
const likeCount = document.createElement('span');
likeCount.textContent = `${currentLikes} likes`
like_icon_div.append(likeCount)

card_description.appendChild(like_icon_div);
//comment Button
const commentBtn = document.createElement('button');
commentBtn.setAttribute('id','comment-button');
// commentBtn.setAttribute('comment-button', `${data.id}`);

commentBtn.dataset.id = index
commentBtn.innerHTML = 'Comments';
card_description.append(commentBtn)

item_display.appendChild(card_description);

return item_display
}

export default showItems;