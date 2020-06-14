var body = document.querySelector('body');
var hex =  document.querySelector('.hex');
var hexbtn = document.querySelector('.hexbtn');

var hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

hexbtn.addEventListener('click',function(){
    let hash = '#';
    for(var i = 0; i < 6; i++){

        var random = Math.floor(Math.random()*hexColors.length);
        hash +=hexColors[random];
       
    }

    body.style.backgroundColor = hash;
    hex.innerHTML = hash;

});