// constante con la API de giphy
const API_KEY = "n0hvNHn92ZmtH0DOPflLvzX2C24cXmR2"


// esti sirve para que el metodo addevenlistener y el DOMcontent
// carguenn elementos en la pagina cuando el DOM este casi completo
document.addEventListener("DOMContentLoaded", init);


function init() {

    document.getElementById("btnBuscar").addEventListener("click", ev => {

        ev.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=5&q=`;
        let str = document.getElementById("buscar").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(content => {

                console.log(content.data)
                console.log('META', content.meta);

                let out = document.querySelector('.salida');

                for(let i = 0; i < 5; i++) {
                  let fig = document.createElement('figure');
                  let img = document.createElement('img');
                  let fc = document.createElement('figcaption');
                  img.src = content.data[i].images.downsized.url;
                  img.alt = content.data[i].tittle;
                  fc.textContent = content.data[i].tittle;
                  fig.appendChild(img);
                  fig.appendChild(fc);
                  out.insertAdjacentElement('afterbegin', fig);
                }

            })
            .catch(err => {
                console.error(err)
            })

    });

}
