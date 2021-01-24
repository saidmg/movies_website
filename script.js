function fetchMovie() {
    var searchedMovie = document.getElementById("movieNameId").value
    var request = new XMLHttpRequest()
    request.open('GET', `https://www.omdbapi.com/?t=${searchedMovie}&apikey=trilogy`, true)

    if (searchedMovie) {
        console.log("Movie name entered")


        request.onload = function () {
            // Begin accessing JSON data here

            var data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                if (data.Title) {
                    console.log(`We have found ${data.Title}`)
                    const movieColumn = document.createElement('div')
                    movieColumn.setAttribute('class', 'col-3 card')
                    const h5 = document.createElement('h5')
                    h5.setAttribute('class', 'card-header')
                    h5.textContent = data.Title
                    const movieBody = document.createElement('div')
                    movieBody.setAttribute('class', 'card-body')
                    const hh5 = document.createElement('h5')
                    hh5.setAttribute('class', 'card-title')
                    hh5.textContent = `Runtime :  ${data.Runtime}`
                    const hhh5 = document.createElement('h5')
                    hhh5.setAttribute('class', 'card-title')
                    hhh5.textContent = `Released :  ${data.Released}`
                    const logo = document.createElement('img')
                    logo.src = data.Poster
                    logo.alt = `couldnt find an image for ${data.Title}`
                    logo.setAttribute('class', 'card-text')

                    document.getElementById("movieAppend").appendChild(movieColumn)
                    movieColumn.appendChild(h5)
                    movieColumn.appendChild(movieBody)
                    movieColumn.appendChild(hh5)
                    movieColumn.appendChild(hhh5)
                    movieColumn.appendChild(logo)
                    // ----------------
                    const buttonName = document.createElement('button')
                    buttonName.setAttribute('class', 'btn btn-warning')
                    buttonName.setAttribute('id', 'deleted-when-cleared')
                    buttonName.textContent = `${data.Title}`
                    document.getElementById("buttontest").appendChild(buttonName)
                    // -------------------

                }
                else {
                    console.log("didnt Find the movie")
                }
            }
            // }
            
        }

        request.send()
    }
    else { console.log("No Movie Selected") }
}

function clearSearch() {
    console.log('deleting seach buttons')
    while (document.getElementById('deleted-when-cleared'))
        document.getElementById('deleted-when-cleared').remove()
}