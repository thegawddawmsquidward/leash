const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const bodyDOM = document.getElementsByTagName("body")[0];
const schemeDOM = document.querySelector(".switch input");
schemeDOM.addEventListener("change" , function(event){
    const thisElement = event.target;
    if(thisElement.checked){
        // Dark Mode
        bodyDOM.classList.add("dark-mode");
    }else{
        // Light Mode
        bodyDOM.classList.remove("dark-mode");
    }
});
function messageBox() {
    var no = document.getElementById("yes");
    no.classList.toggle("show");
}

function die() {
    var no = document.getElementById("yes");
    no.classList.toggle("show");
}
