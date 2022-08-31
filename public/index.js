import { createMainContent } from './main.js';
import { fetchImage } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

const addBtn = ()=>{
    const button = document.createElement('button')
    const h1 = document.body.querySelector('h1')
    h1.appendChild(button)
    h1.style.display = "flex";
    h1.style.flexDirection = "column"

    button.innerText = "Fetch"
    button.addEventListener("click", fetchImage)
}

const scoreDisplay = () =>{
    const h2 = document.createElement('h2')
    let score = 0;
    h2.innerText = `Popularity Score: ${score}`
    const upVote = document.createElement('button')
    upVote.innerText = "Up vote"
    const downVote = document.createElement('button')
    downVote.innerText = "Down Vote"
    upVote.addEventListener("click", event =>{
        score+=1;
        h2.innerText = `Popularity Score: ${score}`

    })
    downVote.addEventListener("click", event =>{
        score-=1;
        h2.innerText = `Popularity Score: ${score}`
    })

    // const img = document.querySelector('img')
    document.body.appendChild(h2)
    document.body.append(upVote, downVote)

}

const comments = () =>{

}

window.onload = () => {
    initializePage();
    createMainContent();
    addBtn();
    scoreDisplay();
};
