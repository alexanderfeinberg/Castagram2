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
    button.addEventListener("click", event =>{

        // fetchImage()
            onDelete()
            onLoad();



    })
}

const scoreDisplay = () =>{
    const container = document.querySelector(".container")
    const wrapper = document.createElement('div')
    // wrapper.style.display = "flex";
    // wrapper.style.flexDirection = "column"


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
    centeralAll("flex","column","center",h2)
    centeralAll("flex","row","center",wrapper)
    container.appendChild(h2)
    container.appendChild(wrapper)
    wrapper.appendChild(upVote)
    wrapper.appendChild(downVote)
    // wrapper.append(upVote, downVote)

}

const centeralAll = (display, direction, justify, element) => {


    element.style.display = display;
    element.style.flexDirection = direction;
    element.style.justifyContent = justify


}

const comments = () =>{

    const container = document.querySelector(".container")
    const wrapper = document.createElement('div')
    const textWrapper = document.createElement('div')

    const commentTitle = document.createElement('h2')
    commentTitle.innerText = "Comments"
    commentTitle.style.display="inline"


    const text = document.createElement('input')
    text.setAttribute("size","20")


    const commentBtn = document.createElement('button')
    commentBtn.innerText = "Comment"


    let textVal;
    const textArea = document.createElement("div")
    textArea.style.display = "flex";
    textArea.style.flexDirection = "column-reverse";
    textArea.style.height = "100%";
    textArea.style.width = "1500px";




    text.addEventListener("input", event=>{
        textVal = event.target.value;
        console.log(textVal)
    })


    commentBtn.setAttribute("type","submit")
    commentBtn.addEventListener("click", event=>{
        const commentText = document.createElement('p')
        commentText.innerText = textVal
        textArea.append(commentText)
        textArea.style.border = '2px solid black';



    })
    centeralAll("inline", "row", "center", wrapper)
    wrapper.style.margin = "0 auto"
    centeralAll("flex", "column", "center", textWrapper)
    container.appendChild(wrapper)
    wrapper.append(commentTitle, text, commentBtn)
    container.appendChild(textWrapper)
    textWrapper.append(textArea)





}
function onLoad(){
    initializePage();
    createMainContent();
    addBtn();
    scoreDisplay(false);
    comments(false);
}
function onDelete(){
    const sections = document.body.querySelectorAll("section")
    sections.forEach(sect =>sect.remove())
}
window.onload = () => {
    onLoad()
};
