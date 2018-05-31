function firstButton(){
    document.getElementById('righttext').innerHTML = "I'm Right";
}
function secondButton(){
    document.getElementById('righttext').innerHTML = "No, I'm Right!";
}

function dontHover(){
    alert("Hey, I told you not to hover over me!");
}

function getSphereRadius(){
    var radius = document.getElementById('sphereRadius').value
    var volume = Math.PI * 4/3 * Math.pow(radius,3);
    volume = volume.toFixed(2)
    alert('The volume is ' + volume);
}
