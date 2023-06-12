function yes(){
    alert( "<3")
}
let noButton = document.getElementById('mybutton');

noButton.addEventListener('mouseover', function() {

    let newX = Math.random() * window.innerWidth;
    let newY = Math.random() * window.innerHeight;


    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});