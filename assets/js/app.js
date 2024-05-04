const hamburgermenu = document.querySelector(".hamburger-menu");
const sidemenu = document.querySelector(".side-menu");

hamburgermenu.addEventListener("click", function() {
    hamburgermenu.classList.toggle("hamburger-active");

    if (sidemenu.classList.contains("gorunur")) {
        sidemenu.style.right = "-70%";
        sidemenu.classList.remove("gorunur"); 
        setTimeout(() => {
            sidemenu.style.display = "none";
        }, 500); 
    } else {
        sidemenu.style.display = "block"; 
        
        setTimeout(() => {
            sidemenu.style.right = "0"; 
            sidemenu.classList.add("gorunur"); 
        }, 0);
    }
});

var video = document.getElementById("myVideo");

if (video) {
    video.addEventListener('loadedmetadata', function() {
        this.play();
    });

    video.addEventListener('ended', function() {
        this.currentTime = 0; 
        this.play(); 
    });
} else {
    console.error("Video element with id 'myVideo' not found.");
}


window.addEventListener('scroll', function() {
    var flexb25Elements = document.querySelectorAll('.flexb25');
    var scrollPosition = window.scrollY + window.innerHeight;
    
    flexb25Elements.forEach(function(element) {
      var elementPosition = element.offsetTop + (element.offsetHeight / 2);
      if (scrollPosition > elementPosition) {
        element.classList.add('visible');
      }
    });
  });
   