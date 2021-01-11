const welcome = document.querySelector(".name-input"),
        userName = welcome.querySelector("input"),
        welcomeMessage = document.querySelector(".welcome-message");

const USER_NW = "currentUser", //localstorage 이름 저장 변수이름
    USER_EX ="showing"; //보이기위한 클래스

function saveName(text) {
    localStorage.setItem(USER_NW, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentUser = userName.value;
    showName(currentUser);
    saveName(currentUser);
}

function askForName() {
    welcome.classList.add(USER_EX);
    welcome.addEventListener("submit", handleSubmit);
}

function showName(text) {
    welcome.classList.remove(USER_EX); //이름받는 창 지우고
    welcomeMessage.classList.add(USER_EX); //hello 멘트만 띄우기
    welcomeMessage.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_NW);
    
    if(currentUser === null) {
        askForName();
    } else {
        showName(currentUser);
    }
}


function init() {
    loadName();
}

init();