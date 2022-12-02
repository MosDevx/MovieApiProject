// import getLikes from './modules/involvment.js'
import showItems from './modules/display.js'
import getMovies from './modules/getMovies.js';

import './style.css';

const mainSection = document.getElementById('main-section')


const movieArray = await getMovies()

movieArray.forEach((movie)=>{
	let card = showItems(movie,5)
	mainSection.append(card)
})



// movieArray.forEach((movie)=>{
// 	console.log( movie.showId)
// })


let card = showItems({index:10,name:"Show Name",imgMediumUrl:"/src/assets/logo-pop.png",likes:10 })


// mainSection.append(card)
// mainSection.append(card2)
// mainSection.append(card3)
// mainSection.append(card4)
// mainSection.append(card5
// mainSection.append(card6)


// let likes = getLikes()

// console.log(likes)
// console.log("index js called")

// (async () => {
//     try {
//         let likes = await getLikes()
//         console.log(likes)
//     } catch (err) {
//       // pass
//     }
//   }
//   )();