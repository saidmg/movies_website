function fetchMovie() {
    var searchedMovie = document.getElementById("movieNameId").value
    var request = new XMLHttpRequest()
    request.open('GET', `https://www.omdbapi.com/?t=${searchedMovie}&apikey=trilogy`, true)

    if (searchedMovie)
    { console.log("Movie name entered")
    

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
        //  if (!data === undefined){ console.log(`NOoooooooooooo`)
        
            const movieColumn = document.createElement('div')
            movieColumn.setAttribute('class', 'col-3 card')
            const h5 = document.createElement('h5')
            h5.setAttribute('class', 'card-header')
            h5.textContent = data.Title
            const movieBody = document.createElement('div')
            movieBody.setAttribute('class', 'card-body')
            const hh5 = document.createElement('h5')
            hh5.setAttribute('class', 'card-title')
            hh5.textContent = `Released on :  ${data.Released}`
            const logo = document.createElement('img')
            logo.src = data.Poster
            logo.setAttribute('class', 'card-text')

            document.getElementById("test").appendChild(movieColumn)
            movieColumn.appendChild(h5)
            movieColumn.appendChild(movieBody)
            movieColumn.appendChild(hh5)
            movieColumn.appendChild(logo)
// ----------------
const buttonName = document.createElement('button')
buttonName.setAttribute('class', 'btn btn-warning')
buttonName.setAttribute('id','deleted-when-cleared')
buttonName.textContent = `${data.Title}`
document.getElementById("buttontest").appendChild(buttonName)
// -------------------


            console.log(`Movie ${data.Title}`)}
        // }
         else {
            console.log("didnt Find the movie")
        }
    }

    request.send()
}
else{console.log("No MOVIE")}
}

function clearSearch(){
    console.log('trying to delete')
  while(document.getElementById('deleted-when-cleared'))
    document.getElementById('deleted-when-cleared').remove()
}