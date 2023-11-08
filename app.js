/*
let point = 0;
let counter = 0;
const newRow = "\r\n";

let wagon1 = {};
let wagon2 = {};
let wagon3 = {};
let wagon4 = {};
let wagon5 = {};
let wagon6 = {};
let wagon7 = {};
let wagon8 = {};
let wagon9 = {};
let wagon10 = {};


do {
    let answer = prompt("Find Ahmet!!");
    if (answer == "wagon7") {
        console.log(alert("Congratulations!!!!"));
        console.log("Attempts : " + counter + newRow + "Point : " + point);
        
    } else if (answer < wagon7) {
        console.log(alert("forward!!"))
    } else if (answer > wagon7) {
        console.log(alert("back!!"))
    }
    counter++;
} while (counter <=4);

if (counter == 1) {
    point == 100;
} else if (counter == 2) {
    point == 75;
} else if (counter == 3) {
    point == 50;
} else if (counter == 4) {
    point == 25;
}
*/


let guessButton = document.getElementById("guess");
let resultElement = document.getElementById("result");



const newRow = "\r\n";
let maxVagon = 10;
let minVagon = 1
let puan = 100;
let maxDenemeSayisi = 4;
let denemeSayisi = 0;
let ahmetinVagon = Math.floor(Math.random() * (maxVagon - minVagon + 1));


//Kullanicidan tahmin almak
function guess() {
    
    denemeSayisi++;
    let tahmin = parseInt(document.getElementById("number").value);
    console.log(tahmin);

    //Tahminin kontrolü
    if (tahmin === ahmetinVagon) {
        resultElement.innerHTML = ("Tahmin : " + denemeSayisi + newRow + "Puan : " + puan);
    } 
    else if (tahmin != ahmetinVagon) {
        puan -= 10;


        //Kullaniciyi yönlendirme
        if (tahmin < ahmetinVagon) {
             resultElement.innerHTML = ("Forward...");
            
        } else {
            resultElement.innerHTML = ("Backwards...")
        } 
        

        if (denemeSayisi >= maxDenemeSayisi) {
            resultElement.innerHTML =("Try is over!!" + newRow + "Guess : " + denemeSayisi + newRow + "Point : " + puan);
        } else {
        }
    }
    console.log("ahmet burda : "+ahmetinVagon);
    document.getElementById("number").value=""; //Kutucugu her seferinde sifirlamak icin
}



