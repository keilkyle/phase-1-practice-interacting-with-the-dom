document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", function(e){
      e.preventDefault()
    });});
  

let number = 0

let counter = document.querySelector("#counter");
counter.innerText = number;

const pause = document.querySelector("#pause")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const heart = document.querySelector("#heart")
const loveList = document.querySelector(".likes")

// timer start and stop

tickUp();

function tickUp () {
    tick = setInterval(addSecond,1000);
    pause.removeEventListener("click", tickUp);
    plus.addEventListener("click", addSecond);
    minus.addEventListener("click", subtractSecond);
    pause.addEventListener("click", pauseTimer);
    pause.innerText = "pause"
}

function pauseTimer () {
    clearInterval(tick);
    pause.removeEventListener("click", pauseTimer);
    plus.removeEventListener("click", addSecond);
    minus.removeEventListener("click", subtractSecond);
    pause.addEventListener("click",tickUp)
    pause.innerText = "resume"
}

// add and subtract

function addSecond () {
    number += 1;
    counter.innerText = number;
}

function subtractSecond () {
    number -= 1;
    counter.innerText = number;
}

// hearts

heart.addEventListener("click", loveTime)

function loveTime () {
    const li = document.createElement("li");
    li.innerText = `I love ${number}`
    loveList.appendChild(li)
}

// comments

let form = document.querySelector("#comment-form")
form.addEventListener("submit", logComment);

function logComment(e) {
    comment = document.querySelector("#comment-input").value
    const p = document.createElement("p");
    const commentList = document.querySelector("#list")
    p.innerText = comment
    commentList.appendChild(p)
}
