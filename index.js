
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
            const divRow = document.createElement('div');
            const divCol = document.createElement('div');
            const img = document.createElement('img');

            const divCard = document.createElement('div');
            const cardBody = document.createElement('div');
            const h5 = document.createElement('h5');
            const p = document.createElement('p');

            div.classList.add("card", "m-auto", 'd-block');
            divRow.classList.add("row",'g-0');
            divCol.classList.add("col-3",'col-md-5');
            img.classList.add("img-fluid" ,"rounded-end");

            divCard.classList.add("col");
            cardBody.classList.add("card-body");
            h5.classList.add("card-title");
            p.classList.add("card-text");
    
            img.setAttribute('src', data.sprites.front_default);
            div.setAttribute('style', 'max-width: 540px');
            h5.textContent = data.name.toUpperCase();
            p.textContent = data.name;
    
            div.appendChild(divRow);
            divRow.appendChild(divCol);
            divCol.appendChild(img);

            divRow.appendChild(divCard);
            divCard.appendChild(cardBody);
            cardBody.appendChild(h5);
            cardBody.appendChild(p);

            container.appendChild(div);
            console.log(data);

            /* 
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
            */
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
