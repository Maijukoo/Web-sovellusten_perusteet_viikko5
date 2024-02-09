document.getElementById("dice").addEventListener("click", randomNumber) 
function randomNumber () { 
    random = Math.floor(Math.random() * 6) + 1  
    document.querySelector('img').src = './img/' + random + '.png'  
} 
