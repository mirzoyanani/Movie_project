let movieId = location.search.split("=")[1];
let api_key = "89c6d3005f9f41a577a5cda1e1b60dd0";

 async function printMoviePage() {
   let rsp = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
   let rspJson = await rsp.json();
   designHompage(rspJson); 
}
printMoviePage();
function designHompage(movie) {
  let homeImg = document.createElement("img");
  let movieBack = document.querySelector(".moviebackround");
  movie.poster_path != null
    ? homeImg.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      )
    : homeImg.setAttribute(
        "src",
        "data:image/png;base64,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"
      );

  movieBack.appendChild(homeImg);
  homeImg.setAttribute("class", "movBack");

  let posterImg = document.createElement("img");
  let moviePic = document.querySelector(".moviePic");
  movie.poster_path != null
    ? posterImg.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/original${movie.poster_path}`
      )
    : posterImg.setAttribute(
        "src",
        "https://icon-library.com/images/person-icon-gif/person-icon-gif-10.jpg"
      );
  moviePic.appendChild(posterImg);
  posterImg.setAttribute("class", "posterBack");

  let title = document.querySelector(".title");
  title.innerText = movie.title;

  let aboutmovie = document.querySelector(".about");
  aboutmovie.innerText = movie.overview;
}
 
  async  function getPopHumansPics(){
    let rsp = await  fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`
      )
    let rspJson = await rsp.json();   
   CreatepopHumans(rspJson.cast);   
    }
    getPopHumansPics()
let erk = 0;
function lengthOfArr(long) {
  return long;
}
function CreatepopHumans(peoples) {
  if (peoples.length == 0) {
    let slider = document.querySelector(".popHumansSlider");
    slider.style.display = " none";
  }
  erk += lengthOfArr(peoples.length);
  let silderLine = document.querySelector(".slider-line");
  peoples.forEach((el) => {
    let posterImg = document.createElement("img");
    el.profile_path != null
      ? posterImg.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original${el.profile_path}`
        )
      : posterImg.setAttribute(
          "src",
          "data:image/png;base64,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"
        );

    silderLine.appendChild(posterImg);
    posterImg.setAttribute("class", "imgs");
  });
}

let left = 0;
let silderLine = document.querySelector(".slider-line");

function seeNext() {
  left += 200;
  if (left > erk * 200 - 1200) {
    left = 0;
  }
  silderLine.style.left = -left + "px";
}
function seePrev() {
  left -= 200;
  if (left < 0) {
    left = erk * 200 - 1200;
  }
  silderLine.style.left = -left + "px";
}

document.querySelector(".next").addEventListener("click", function () {
  seeNext();
});

document.querySelector(".prev").addEventListener("click", function () {
  seePrev();
});

function Deletechilds() {
  let modal = document.querySelector(".modal");
  if (modal.lastChild != document.querySelector(".closeIcon")) {
    modal.removeChild(modal.lastChild);
  }
}
   async function getTrailerPics(){
   let rsp = await  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`)
      let rspJson = await rsp.json();
      createTrailerSlider(rspJson.results);
   }
   getTrailerPics()
let erk1 = 0;

function createTrailerSlider(trailers) {
  erk1 += lengthOfArr(trailers.length);
  if (trailers.length == 0) {
    let slider = document.querySelector(".trailersSlider");
    slider.style.display = " none";
  }

  trailers.forEach((el) => {
    let silderLine1 = document.querySelector(".slider-line1");
    let div = document.createElement("div");
    let videoPic = document.createElement("img");

    videoPic.setAttribute(
      "src",
      `https://img.youtube.com/vi/${el.key}/hqdefault.jpg`
    );
    videoPic.setAttribute("class", "videoImg");
    let modal = document.querySelector(".modal");
    div.appendChild(videoPic);
    div.setAttribute("class", "videoDiv");
    let videoPlay = document.createElement("i");
    videoPlay.setAttribute("class", "fa fa-youtube-play");
    videoPlay.setAttribute("id", "playIcon");
    div.appendChild(videoPlay);

    videoPlay.addEventListener("click", () => {
      Deletechilds();
      modal.style.left = "300px";
      let iframe = document.createElement("iframe");
      iframe.setAttribute("src", `https://www.youtube.com/embed/${el.key}`);
      modal.appendChild(iframe);
    });

    document.querySelector(".closeIcon").addEventListener("click", () => {
      modal.style.left = "-1000px";
      Deletechilds();
    });
    silderLine1.appendChild(div);
  });
} 

let silderLine1 = document.querySelector(".slider-line1");
document.querySelector(".nextTrailer").addEventListener("click", function () {
  left += 200;
  if (left > erk1 * 200 - 1200) {
    left = 0;
  }
  silderLine1.style.left = -left + "px";
});
document.querySelector(".prevTRailer").addEventListener("click", function () {
  left -= 200;
  if (left < 0) {
    left = erk1 * 200 - 1200;
  }
  silderLine1.style.left = -left + "px";
});
