const Image = document.getElementById("Image");
// const dogButton = document.getElementById('dogButton')

// const getNewDog = () => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then(response => response.json())
//         .then(json => {
//             dogImageDiv.innerHTML = `<img src="${json.message}"
//             height = 300 width = 300/>`
//         })
// }

// dogButton.addEventListener("click", () => {
//     getNewDog()
// })

// const getSuperHero = () => {
//     fetch("https://superheroapi.com/api/10223569761528853/245")
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

//https://api.themoviedb.org/3/trending/all/week?api_key=<<api_key>>
//https://api.themoviedb.org/3/trending/all/week?api_key=a527eb9bc54324ce4f762ac2b6d36ae6

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "a527eb9bc54324ce4f762ac2b6d36ae6";
const request = "/trending/all/week?api_key=";
const search = `/search/movie?api_key=${API_KEY}&query=`;

const image_url = "https://image.tmdb.org/t/p/original/";

const Name = document.getElementById("name");
const body = document.getElementById("body");

const newMovie = () => {
    fetch(`${BASE_URL}${request}${API_KEY}`)
        .then((response) => response.json())
        .then((json) => {
            const random = Math.floor(Math.random() * 20 + 1)
            Image.innerHTML = `<img src="${image_url}${json.results[`${random}`].backdrop_path}"
            width = 500/>`;
        })

    // ALL IMAGE
    // .then((json) => {
    //     console.log(json.results.forEach(function(results){
    //         console.log(results)

    //         body.innerHTML += `<img src="${image_url}${results.backdrop_path}"
    //         // width = 500/> <h1>${results.original_title}</h1>`
    //     }))
    // })


};

Button.addEventListener("click", () => {
    newMovie()
})



const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const searchMovie = (name) => {
    console.log(searchInput.value)

    fetch(`${BASE_URL}${search}${name}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            const random = Math.floor(Math.random() * 20 + 1)
            if (json.results[`${random}` ].backdrop_path != null) {
                Image.innerHTML = `<img src="${image_url}${json.results[`${random}`].backdrop_path}"width = 500/>`;
            }else{
                Image.innerHTML = "";
            }

            Name.innerHTML = `<h1>${json.results[`${random}`].original_title}</h1>`;
        })
};
searchBtn.addEventListener("click", () => {
    searchMovie(searchInput.value);
})
    .catch(err);
