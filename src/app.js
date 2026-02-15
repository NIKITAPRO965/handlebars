import data from "./data.json";
import template from "./template.hbs"
console.log(template);




const listRef = document.querySelector(".list")
// listRef.innerHTML = templatefootball({football})
function createItemsMarkUp (array) {
    const item = array.map(({name, image, team, position, rating}) => {
        return `<li class="${item}">
    <img class="images" src="${image}" width="300px" alt="${name}">
    <h2 class="title">${name}</h2>
    <h3 class="subtitle">${team}</h3>
    <p class="text">${position}</p>
    <p class="number">${rating}</p>
    </li>`
    }).join("")
    listRef.innerHTML = item
}

createItemsMarkUp(data)
