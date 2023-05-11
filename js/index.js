const input = document.getElementById("input");
const img = document.querySelector('#digimon-img');
const title = document.querySelector('.card-title');
const text = document.querySelector('.card-text');

const fetchDigimonData = async() => {
    const response = await fetch('https://digimon-api.com/api/v1/digimon?pageSize=15000');
    const data = await response.json();
    return data.content;
}

async function test(event) {
    const digiArr = await fetchDigimonData();
    const find = digiArr.find((digimon) => digimon.name.toLowerCase() === event.target.value.toLowerCase());
    console.log(event.target.value);
    console.log(find)
    if (!find) return alert('Digimon não encontrado');

    text.innerText = `${find.name} ID n° ${find.id}`;
    title.innerHTML = find.name;
    img.src = find.image;
}

function digiAPI() {
    input.addEventListener('submit', test);
    event.preventDefault();
}
window.onload = () => digiAPI();