const input = document.querySelector('#search');
const result = document.querySelector('#searchResults')
const searchResults = document.querySelector('#searchResults')
const genres = document.querySelector(".dropdownContent")
const randomize = document.querySelector(".randomize")
input.classList.add("navBar")
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        search()
    }
})

function clearResults() {
    result.replaceChildren()
}
let genreArr = ["Action Adventure", "Fantasy", "Historical Fiction", "Classic", "Graphic Novel", "Drama", "Comedy", "Fable", "Mystery", "Horror"]
for (let i = 0; i < 10; i++) {
    let dropdowntab = document.createElement("a")
    dropdowntab.innerText = genreArr[i]
    dropdowntab.classList.add('.dropdowntab')
    genres.append(dropdowntab)
    dropdowntab.addEventListener('click', () => {
        console.log(`clicked on ${genreArr[i]}`)
        genreSearch(genreArr[i])
    })
}

function search() {
    clearResults();
    let inputText = input.value;
    fetch(`https://openlibrary.org/search.json?title=${inputText}`, {mode : "cors"})
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const heading = document.createElement('div');
            // heading.textContent = "Search Results  ";
            heading.classList.add(".searchResults")
            result.appendChild(heading);
            result.style.display = "flex";
            result.style.flexWrap = "wrap";
            result.style.justifyContent = "space-between"
            result.style.alignItems = "center"
            result.style.gap = "10px"
            for (let i = 0; i < response.docs.length; i++) {
                const book = response.docs[i];
                const title = book.title;
                const author = book.author_name ? book.author_name.join(", ") : "Unknown";
                const year = book.first_publish_year ? book.first_publish_year : "Unknown";
                const bookInfo = `${title} by ${author}, ${year}`;  //, https://www.amazon.com/s?k=${title}
                const paragraph = document.createElement('div');
                paragraph.textContent = bookInfo;
                paragraph.classList.add("resultGraphic")
                paragraph.style.width = "80px";
                result.appendChild(paragraph);
            }
        })
  }

randomize.addEventListener("click", () => {
    console.log("random :)")
    randomBooks()
})

function randomBooks() {
    clearResults();
    let randomString = ''
    for (let i = 0; i < 2; i++) {
        let randomNumber = Math.floor(Math.random()*26) 
        let randomChar = randomNumber + 97
        randomString += String.fromCharCode(randomChar)
    }
    fetch(`https://openlibrary.org/search.json?title=${randomString}`, {mode : "cors"})
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const heading = document.createElement('div');
            // heading.textContent = "Search Results  ";
            heading.classList.add(".searchResults")
            result.appendChild(heading);
            result.style.display = "flex";
            result.style.flexWrap = "wrap";
            result.style.justifyContent = "space-between"
            result.style.alignItems = "center"
            result.style.gap = "10px"
            for (let i = 0; i < response.docs.length; i++) {
                const book = response.docs[i];
                const title = book.title;
                const author = book.author_name ? book.author_name.join(", ") : "Unknown";
                const year = book.first_publish_year ? book.first_publish_year : "Unknown";
                const bookInfo = `${title} by ${author}, ${year}`;  //, https://www.amazon.com/s?k=${title}
                const paragraph = document.createElement('div');
                paragraph.textContent = bookInfo;
                paragraph.classList.add("resultGraphic")
                paragraph.style.width = "80px";
                result.appendChild(paragraph);
            }
        })
  }




  function genreSearch(genre) {
    clearResults();
    // for (let i = 0; i < 14; i++) {

    // }
    fetch(`https://openlibrary.org/search.json?subject_facet=`, {mode : "cors"})
        .then(response => response.json())
        .then(response => {
            const heading = document.createElement('div');
            heading.classList.add(".searchResults")
            result.appendChild(heading);
            result.style.display = "flex";
            result.style.flexWrap = "wrap";
            result.style.justifyContent = "space-between"
            result.style.alignItems = "center"
            result.style.gap = "10px"
            for (let i = 0; i < response.docs.length; i++) {
                const book = response.docs[i];
                const title = book.title;
                const author = book.author_name ? book.author_name.join(", ") : "Unknown";
                const year = book.first_publish_year ? book.first_publish_year : "Unknown";
                const bookInfo = `${title} by ${author}, ${year}`;  //, https://www.amazon.com/s?k=${title}
                const paragraph = document.createElement('div');
                paragraph.textContent = bookInfo;
                paragraph.classList.add("resultGraphic")
                paragraph.style.width = "80px";
                result.appendChild(paragraph);
            }
        })
  }


// function genreSearch() {
//     clearResults()
//     let inputText = input.value
//     fetch(`https://openlibrary.org/search.json?title=${inputText}`, {mode : "cors"})
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             const heading = document.createElement('div');
//             heading.textContent = "Search Results";
//             result.appendChild(heading);
//             for (let i = 0; i < response.docs.length; i++) {
//                 const book = response.docs[i];
//                 const title = book.title;
//                 const author = book.author_name ? book.author_name.join(", ") : "Unknown";
//                 const year = book.first_publish_year ? book.first_publish_year : "Unknown";
//                 const bookInfo = `${title} by ${author}, ${year}`;
//                 const paragraph = document.createElement('div');
//                 paragraph.textContent = bookInfo;
//                 paragraph.classList.add("resultGraphic")
//                 result.appendChild(paragraph);
//             }
//         })
//     }

//     function card(book) {
//         searchResults.append($(`<span class="resultGraphic">
//         <h3>${book.title}<h3>
//         <h3>${book.author}
//         <h2>${book.subject_key}<h2>`))
// }

// document
//   .querySelector('.guess')
//   .addEventListener(
//     'keydown', (event) => {
//       // if not 'enter key' just exit here
//       if (event.keyCode !== 13) return
      
//       console.log(event.target.value)
//     })

