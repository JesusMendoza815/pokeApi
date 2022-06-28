
let message;
const form = document.querySelector('.form');
const container = document.querySelector('.container');

// document.addEventListener('DOMContentLoaded', () => {
//     fetchData()
// })

form.addEventListener('submit', (e) => {
    e.preventDefault();
    container.innerHTML = '';
    let name = form.querySelector('#namePoke').value;
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`
    console.log(name);

    const fetchData = async () => {
    
        try {
            const res = await fetch(url);
            const data = await res.json();
    
            const div = document.createElement('div');
            const img = document.createElement('img');
            const cardBody = document.createElement('div');
            const h5 = document.createElement('h5');
            const p = document.createElement('p');

            div.classList.add("card", "m-auto");
            img.classList.add("card-img-top");
            cardBody.classList.add("card-body");
            h5.classList.add("card-title", "text-center");
            p.classList.add("card-text");
    
            img.setAttribute('src', data.sprites.front_default);
            h5.textContent = data.name.toUpperCase();
            p.textContent = data.name;
    
            div.appendChild(img);
            div.appendChild(cardBody);
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            container.appendChild(div);
            console.log(data);

            /* <div class="card m-auto" style="width: 18rem;">
<img src="" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div> */
        } catch (error) {
            console.log(error);
        }
    }

    fetchData();
})



// const createCard = () => {
//     const div = document.createElement('div');
//     const img = document.createElement('img');
//     const h5 = document.createElement('h5');
//     const p = document.createElement('p');

// }



// const showError = (message) => {
//     alert(message);
// }
