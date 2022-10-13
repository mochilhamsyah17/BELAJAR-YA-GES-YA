//ambil data API dan kita Unboxing ya ges ya

let containerFilm = document.getElementById("main")
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=2208bb218ff6e7d51d00f5babdc1f702";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

const form = document.getElementById("form");
const search = document.getElementById("search");

let getDaftarFilm = async () =>{
    let response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2208bb218ff6e7d51d00f5babdc1f702")
    let films = await response.json()
    
    console.log(films)

    let DataFilm = films.results

    DataFilm.forEach(item => {
        containerFilm.innerHTML += `
        <div class="col-sm" style = "">
            <div class="card m-2" style="width: 15rem; box-shadow: 0.2px 4px 5px rgba(0,0,0,0.1); border-radius: 10px">
                <img src="${IMG_URL+item.poster_path}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h4 class="card-title">${item.title}</h4>
                    <h6 class="card-title" style="display:flex;">
                    <iconify-icon icon="bxs:star" style="color: black; margin-right:5px;">
                    </iconify-icon>
                        ${item.vote_average}
                    </h6>
                    <p class="card-text" style="margin-top: 8px; margin-bottom:0;">
                        ${item.release_date}
                    </p>
                <div>
        </div>
    </div>
        `
    });
    
}

getDaftarFilm()

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getDaftarFilm(searchURL+'&query='+searchTerm)
    }else{
        
    }
})