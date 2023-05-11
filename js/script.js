const input = document.getElementById("input");
const img = document.querySelector('#digimon-img');
const title = document.querySelector('.card-title');
const text = document.querySelector('.card-text');
const form = document.querySelector('.form');

const fetchDigimon = async (digimon) => {
    const APIResponse = await fetch(`https://digimon-api.com/api/v1/digimon/${digimon}`);
    const data = await APIResponse.json();
    return data;
}
fetchDigimon('agumon');
const render = async (digimon) => {

    const data = await fetchDigimon(digimon);

    text.innerText = `${data.name} ID n° ${data.id}`;
    title.innerHTML = data.name;
    img.src = data['images'][0]['href'];
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    render(input.value);
})
