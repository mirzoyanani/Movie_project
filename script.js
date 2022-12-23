// /* Created by Ani Mirzoyan
//    01.10.2020
//    11:00
// */

const api_key = "89c6d3005f9f41a577a5cda1e1b60dd0";
const base_url = "https://api.themoviedb.org/3";
const movie_name = document.querySelector("#myInput");

function Deletechilds() {
  let contentdiv = document.querySelector(".content");
  contentdiv.innerHTML = "";
}

let search_button = document.querySelector(".search_icon");
let loading_page = document.querySelector(".loading");
async function serachMovie() {
  if (movie_name.value != "") {
    Deletechilds();
    loading_page.style.display = "block";
    let rsp = await fetch(
      `${base_url}/search/movie?api_key=${api_key}&query=${movie_name.value}`
    );
    let rspJson = await rsp.json();
    printMovies(rspJson.results);
    loading_page.style.display = "none";
  }

  movie_name.value = "";
}
search_button.addEventListener("click", () => {
  serachMovie();
});
movie_name.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    serachMovie();
  }
});

async function get_populars() {
  loading_page.style.display = "block";
  let rsp = await fetch(
    `${base_url}/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );
  let rspJson = await rsp.json();
  printPopularMovies(rspJson.results);
  loading_page.style.display = "none";
}
get_populars();

function printMovies(movies) {
  if (movies.length == 0) {
    let contentdiv = document.querySelector(".content");
    document.querySelector(".main").style.height = "120vh";
    let noteDoundDiv = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://siempredepaso.es/wp-content/uploads/2019/05/error-404.png"
    );
    img.setAttribute("class", "notFoundImg");
    noteDoundDiv.appendChild(img);
    contentdiv.appendChild(noteDoundDiv);
  }

  movies.forEach((el) => {
    let contentdiv = document.querySelector(".content");
    let movieDiv = document.createElement("div");
    let img = document.createElement("img");
    // condition ? exprIfTrue : exprIfFalse
    el.backdrop_path != null
      ? img.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original${el.backdrop_path}`
        )
      : img.setAttribute(
          "src",
          "https://siempredepaso.es/wp-content/uploads/2019/05/error-404.png"
        );
    img.setAttribute("class", "movieImg");
    movieDiv.appendChild(img);
    let h1 = document.createElement("p");
    h1.innerText = el.original_title;
    h1.setAttribute("class", "filmtitle");
    movieDiv.appendChild(h1);
    contentdiv.appendChild(movieDiv);
    movieDiv.setAttribute("class", "movieDivs");
    movieDiv.addEventListener("click", () => {
      location.href = `HTML/movie.html?id=${el.id}`;
    });
  });
}
function printPopularMovies(movies) {
  movies.forEach((el) => {
    let contentdiv = document.querySelector(".content");
    let movieDiv = document.createElement("div");
    let img = document.createElement("img");
    el.backdrop_path != null
      ? img.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original${el.backdrop_path}`
        )
      : img.setAttribute(
          "src",
          "https://siempredepaso.es/wp-content/uploads/2019/05/error-404.png"
        );
    img.setAttribute("class", "movieImg");
    movieDiv.appendChild(img);
    let h1 = document.createElement("p");
    h1.innerText = el.original_title;
    h1.setAttribute("class", "filmtitle");
    movieDiv.appendChild(h1);
    contentdiv.appendChild(movieDiv);
    movieDiv.setAttribute("class", "movieDivs");
    movieDiv.addEventListener("click", () => {
      location.href = `HTML/movie.html?id=${el.id}`;
    });
  });
}
function reloadPage() {
  location.reload();
}

// function returnCountOfMems(arr){
//    arr.reduce((prev,next)=>{
//     if(){

//     }
//    })
// }





// function returnCountOfMems(arr) {
//   let count = 0;
//   let memCountArr = [];
//   let usedMemsArr = [];
//   let obj = {};
//   let newArr = arr.slice(0);
//   for (let i = 0; i < arr.length; i++) {
//   if(!usedMemsArr.includes(arr[i])){
//     usedMemsArr.push(arr[i]);

//     for (let j = 0; j < newArr.length; j++) {
//         if (arr[i] == newArr[j]) {
//             count++;

//        }
//     }
//     memCountArr.push(count);
//     count = 0;
//   }}
//   for (let i = 0; i < usedMemsArr.length; i++) {
//     obj[usedMemsArr[i]] = memCountArr[i]
//   }
//   return obj;
// }
// console.log(returnCountOfMems(["a",'l','b', "b", "c", "a"]));


// const arr = ["a",'l','b', "b", "c", "a"];
// const reducedArr = arr.reduce(function(arggr,val){
//   if(val in arggr){
//       arggr[val]=arggr[val] + 1;
//   }
//   else{
//    arggr[val]=1
//   }
//   return arggr; 
// },{})

// console.log(reducedArr);


// function getTrueDate(str){
//   let hanvoxMasnikner = /str\//;search_button
//   return res
// }
// console.log(getTrueDate('22/25/2222'));


// function getSimpleNUms(arr){
//   simpleNUmsArr = [];
//   for (let j = 0; j < arr.length; j++) {  
//     let count = 0;
//   for(let i = 2;i<=arr[j];++i){
//       if(arr[j]%i==0){
//         count++;
//       }
//   }
//   if(count==1){
//     simpleNUmsArr.push(arr[j])
//   }
// }
// console.log(simpleNUmsArr);
// }

// getSimpleNUms([2,4,9,11,13,16,121]);




// const arr = ["a",'l','b', "b", "c", "a"];
// const reducedArr = arr.reduce(function(arggr,val){
//   if(val in arggr){
//       arggr[val]=arggr[val] + 1;
//   }
//   else{
//    arggr[val]=1
//   }
//   return arggr; 
// },{})



// let reducedArr = sortedStiring.reduce(function(arggr,val){
//   if(val in arggr){
//       arggr[val]=arggr[val] + 1;
//   }
//   else{
//    arggr[val]=1
//   }
//   return arggr; 
// },{})
   
//    let counts =  Object.values(reducedArr);
   
//    for (let i = 0; i < counts.length; i++) {
//        if(counts[i]>counts[i+1]){
//         return false;
//        }
//    }
//    return counts;

function solution(inputString) {
  let sortedStiring =  inputString.split('').sort();
  let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z' ];
   let counts = [];
   for (let i = 0; i <= alphabet.length; i++) {
    let count = 0;
        for (let j = 0; j < inputString.length; j++) {
         if(alphabet[i]==inputString[j]){
          count++;
         }
        }
        counts.push(count);
   }
console.log(counts);

// for (let i = 0; i < counts.length-1; i++) {
//   if(counts[i]<counts[i+1]){
//     return false
//   }
// }
  return sortedStiring
  }

  console.log(solution("bbbaacdafe"));
  