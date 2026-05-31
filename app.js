// Тоглогчийн ээлжийг хадгалах хувьсагч. Нэгдүгээр тоглочийг 0, Хоёрдугаар тоглогчийн 1 гэсэн утгаар илэрхийлж явна.
var activePlayer = 0;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0,0]; 
// Тоглочийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0; 

//Тоглолт эхлэхэд бэлдэх
document.getElementById("score-0").textContent = 0; 
document.getElementById("score-1").textContent = 0; 
document.getElementById("current-0").textContent = 0; 
document.getElementById("current-1").textContent = 0;
document.querySelector(".dice").style.display = 'none';
var diceDom = document.querySelector(".dice");
document.querySelector(".btn-roll").addEventListener("click", shooShid); 

function shooShid(){
    // Шооны аль талаараа буусныг хадгалах хувьсагч. Энэ нь 1-6 хооронд утга авна.
    var diceScore = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceScore + '.png';
    if(diceScore != 1){
        roundScore += diceScore; 
        document.querySelector("#current-" + activePlayer).textContent = roundScore; 
    }
    else{
        scores[activePlayer] += roundScore;
        if(scores[activePlayer] >= 100){
            console.log(activePlayer + "-r toglogch yallaa.")
            return;
        }
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        roundScore = 0; 
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
}
