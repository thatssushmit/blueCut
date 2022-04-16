 // slide-up script
const trigger= document.querySelector("menu>.trigger");
trigger.addEventListener('click',(e)=>{
    e.currentTarget.parentElement.classList.toggle("open");
});
scrollupbtn = document.getElementById("scroll-up-btn");
navBarSelector = document.getElementById("navbar")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(this.scrollY > 50){
        navBarSelector.classList.add("sticky")
    }
    else{
        navBarSelector.classList.remove("sticky")
    }
    if (this.scrollY > 500) {
        scrollupbtn.classList.add("show")

    } else {
        scrollupbtn.classList.remove("show")
    }
  }
  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


stringsArrays = ["News","Analysis","Documentries","Perspectives of Current situation","Public views","And many more things"]
typingHomeSelector = document.getElementsByClassName("typing")


window.onload = function() {
    var typed = new Typed(".typing", {
        strings: stringsArrays,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: stringsArrays,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Immediately invoked function to set the theme on initial load
    if (window.matchMedia) {
        // Check if the dark-mode Media-Query matches
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('theme-dark');
            document.getElementById('theme-icon').className = 'moon'

        } else {
            setTheme('theme-light');
            document.getElementById('theme-icon').className = 'sun'

        }
      }

}


$(document).ready(function(){
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script


});


 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}



// function to toggle between light and dark theme
document.getElementsByClassName('theme')[0].addEventListener('click',function(event){
    let themeButton = document.getElementById('theme-icon').className
    console.log(themeButton)
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        document.getElementById('theme-icon').className = 'sun'
    } else if(localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-dark');
        document.getElementById('theme-icon').className = 'moon'
    }


})


