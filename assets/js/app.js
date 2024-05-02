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
