import football from "./football.json";
import templatefootball from "./template-football.hbs"
// console.log(templatefootball);




const listRef = document.querySelector(".list")
// listRef.innerHTML = templatefootball({football})
function createMarkUp (array) {
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

createMarkUp(football)
