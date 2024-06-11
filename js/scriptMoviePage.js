let movies
const moviesListEl = document.getElementsByClassName("suggested-movie")[0]

function fetchMovies(page = 1) {
    fetch('https://moviesapi.codingfront.dev/api/v1/movies?page=' + page).then(function (response) {
        return response.json()
    }).then(function (json) {
        const indexGenres=findGenresMovie(json.data);
        renderCard(json.data,indexGenres)

    }).catch(function (e) {
        console.log(e)
    })
}


function findGenresMovie(data){
    const arrayDetailsMovies=Object.values(data)
    const arrayIndexGenres=[]
    arrayDetailsMovies.forEach((element,index) => {
        const genres=element.genres.includes('Crime');
        if(genres==true)
            arrayIndexGenres.push(index)
    });
    return arrayIndexGenres
}



function renderCard(movie,index) {
    console.log();
    for(let i=0;i<movie.length;i++){
        if(movie[i].genres.includes('Crime')==true)
        {
            const colEl = document.createElement('div')
            colEl.className = 'col-lg-3 col-md-4'
        
            const cardEl = document.createElement('div')
            cardEl.className = 'suggested-movie-box  h-100'
        
            const imgEl = document.createElement("img")
            imgEl.className = "card-img-top h-75 mb-3 rounded"
            imgEl.src = movie[i].poster
            cardEl.appendChild(imgEl)
        
            const cardTitle = document.createElement('h5')
            cardTitle.className = "card-title"
            cardTitle.innerHTML = movie[i].title
            cardEl.appendChild(cardTitle)

            colEl.appendChild(cardEl)
            moviesListEl.appendChild(colEl)
            console.log(moviesListEl);


        }
    }

}




fetchMovies()


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const moviePart=document.getElementsByClassName('movie-part')[0]
const imageMovie=document.getElementsByClassName('image_movie')[0];
const detailsMovie=document.getElementsByClassName('details-movie')[0];
const downloadMovie=document.getElementsByClassName('download-movie')[0]

function fetchMovie(id = 1) {
    fetch('https://moviesapi.codingfront.dev/api/v1/movies/'+ id).then(function (response) {
        return response.json()
    }).then(function (json) {
        movieBox(json);
    }).catch(function (e) {
        console.log(e)
    })
};


function movieBox(data){
    moviePart.style.background="linear-gradient(264deg, rgba(0,0,0,0.7) 1%, rgba(0,0,0,0.7) 65%, rgba(8,6,6,0.7) 100%), url("+data.images[0]+")"
    moviePart.classList.add="movie-part"
//poster
    const posterMovie=document.createElement('img')
    posterMovie.src=data.poster;
    posterMovie.classList=" w-50 rounded"
    imageMovie.appendChild(posterMovie)
//end poster

//details
    const movieName=document.createElement('h3')
    movieName.innerHTML=data.title;
    detailsMovie.appendChild(movieName)

    const movieYear=document.createElement('p')
    movieYear.innerHTML=`سال ساخت : ${data.year}`
    movieYear.classList="mt-4"
    detailsMovie.appendChild(movieYear)

    const movieDirector=document.createElement('p')
    movieDirector.innerHTML=` کارگردان : ${data.director}`
    detailsMovie.appendChild(movieDirector)

    const movieActors=document.createElement('p')
    movieActors.innerHTML=` بازیگران : ${data.actors}`
    detailsMovie.appendChild(movieActors)


    const movieImdbRating=document.createElement('p')
    movieImdbRating.innerHTML=` امتیاز  : ${data.imdb_rating}`
    detailsMovie.appendChild(movieImdbRating)

    const moviePlot=document.createElement('p')
    moviePlot.innerHTML=` خلاصه فیلم  : ${data.plot}`
    detailsMovie.appendChild(moviePlot)

    const downloadH=document.createElement('h5')
    downloadH.innerHTML=`جهت دانلود فیلم  ${data.title} روی لینک های زیر کلیک کنید`;
    downloadH.classList="text-center lh-lg"
    downloadMovie.appendChild(downloadH)

    const downloadButton1080=document.createElement('button')
    downloadButton1080.innerHTML="Download 1080px"
    downloadButton1080.classList="btn btn-info text-white text-center w-100 p-2 mt-5"
    downloadMovie.appendChild(downloadButton1080)

    const downloadButton720=document.createElement('button')
    downloadButton720.innerHTML="Download 720px"
    downloadButton720.classList="btn btn-info text-white text-center w-100 p-2 mt-5"
    downloadMovie.appendChild(downloadButton720)


//end details
    
}

fetchMovie()


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
