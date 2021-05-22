const canvas = document.querySelector("canvas"); 
const ctx = canvas.getContext("2d");
const margin = 30;

let fileInput = document.querySelector('#fileLoader');

/* wybór obrazka pod mem */
const chooseImg = function() {
    let mood = document.askMood.mood;
    if (mood.value.length > 0) {
        return mood.value + `.jpg`
} 
    else if (mood.value.length == 0 && fileInput.files.length == 0) {
        return 'typical.jpg';
}
    else {
        let url = URL.createObjectURL(fileInput.files[0]);
        return url;
}

}

/* odpalenie canvas wraz z tekstami */
function startCanvas() {
    let showCanvas = document.getElementById("canvas");
    showCanvas.height = 350;
    const image = new Image();
    image.src = chooseImg();
    image.addEventListener("load", e => {
    showCanvas.height = image.height+(2*margin);
    ctx.drawImage(image, ((canvas.width-image.width)/2), margin, image.naturalWidth, image.height);
    /* obsługa tekstów mema */
    let txt = {
        upText: document.getElementById("txtLoader1").value,
        downText: document.getElementById("txtLoader2").value,
    };
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 40px Impact";
    ctx.strokeText(txt.upText.toUpperCase(), canvas.width / 2, margin);  
    ctx.font = "bold 40px Impact";
    ctx.fillText(txt.downText.toUpperCase(),  canvas.width / 2, canvas.height - margin);
});  
/* czyszczenie poprzedniego wyboru */
let allMoods = document.askMood;
for (let i = 0; i < allMoods.mood.length; i++) {
    if (allMoods.mood[i].checked == true) {
    allMoods.mood[i].checked = false;
    }
    else {
        continue
    }
}
fileInput.value = null;

};

function clearCanvas() {
/* czyszczenie i chowanie pustego canvas */
    let showCanvas = document.getElementById("canvas");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    showCanvas.height = 0;
/* czyszczenie inputów */
    let allMoods = document.askMood;
    for (let i = 0; i < allMoods.mood.length; i++) {
        if (allMoods.mood[i].checked == true) {
        allMoods.mood[i].checked = false;
        }
        else {
            continue
        }
    }

    let upText = document.getElementById("txtLoader1");
    upText.value = 'WPISZ TEKST GÓRNY';
    let downText = document.getElementById("txtLoader2");
    downText.value = 'WPISZ TEKST DOLNY';
}