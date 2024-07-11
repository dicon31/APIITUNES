const artista = document.getElementById("artista");
const button = document.querySelector("button");
const div = document.getElementById("iniettiamo");

button.addEventListener("click", ()=>{
    const input = artista.value;
    console.log(input);
    const ApiUrl = `https://itunes.apple.com/search?term=${input}&media=music&limit=10`;
    console.log(ApiUrl);
    
    fetch(ApiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);

            let str = `
                <ul>
                    <li>Copertina</li>
                    <li>Brano</li>
                    <li>Artista / Gruppo</li>
                    <li>Anteprima</li>
                </ul>
            `;

            data.results.forEach(element => {
                str += `
                <ul>
                    <li><img src="${element.artworkUrl60}" alt="Copertina"></li>
                    <li>${element.trackName}</li>
                    <li>${element.artistName}</li>
                    <li><audio controls src="${element.previewUrl}"></audio></li>
                </ul>
                `;
            });

            div.innerHTML = str;
        })
        .catch(error => console.log(error));
});