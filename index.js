let hamburger = document.querySelector ('#hamburger')
let closeNav = document.querySelector('#close')

hamburger.addEventListener('click', function(){
    document.getElementById("mySidenav").style.width = "250px";

})
closeNav.addEventListener('click', function(){
    document.getElementById("mySidenav").style.width = "0";

})