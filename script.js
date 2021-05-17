const canvas = document.querySelector("canvas"); 
const ctx = canvas.getContext("2d");

function startCanvas() {
    let showCanvas = document.getElementById("canvas");
    showCanvas.height = 350;
    clearCanvas()
    const image = new Image();
    image.addEventListener("load", e => {
    ctx.drawImage(image, 0, 30, canvas.width, 256);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 40px Impact";
    ctx.fillText(txt.upText.toUpperCase(), canvas.width / 2, 30);
    ctx.font = "bold 40px Impact";
    ctx.fillText(txt.downText.toUpperCase(), canvas.width / 2, canvas.height - 30);  
});

let txt = {
    upText: document.getElementById("txtLoader1").value,
    downText: document.getElementById("txtLoader2").value,
}

const chooseImg = function() {
    let mood = document.askMood.mood;
    let fileInput = document.querySelector('#fileLoader');
 
console.log(mood.value.length)
if (mood.value.length > 0)
{
    return mood.value + `.jpg`
} 
else if (mood.value.length == 0 && fileInput.files.length == 0) {
    return 'typical.jpg';
}
else {
    let url = URL.createObjectURL(fileInput.files[0]);
    return url;

}}
image.src = chooseImg();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clearRadios() {
// chowanie pustego canvas przy czyszczeniu
    let showCanvas = document.getElementById("canvas");
showCanvas.height = 0;
// czyszczenie inputów
    let allMoods = document.askMood;
    for (let i = 0; i < allMoods.mood.length; i++) {
        if (allMoods.mood[i].checked == true) {
        allMoods.mood[i].checked = false;
        }
        else {
            continue
        }
    }
}

function leaveFile() {
    let allMoods = document.askMood;
    for (let i = 0; i < allMoods.mood.length; i++) {
        if (allMoods.mood[i].checked == true) {
        allMoods.mood[i].checked = false;
        }
        else {
            continue
        }
    }
}

