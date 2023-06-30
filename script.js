let titles = ["Banners", "Websites", "Things"];
  let currentIndex = 0;
  setInterval(() => {
    document.getElementById("profession").innerHTML=titles[currentIndex];   
    currentIndex++;
    if (currentIndex == 3){
      currentIndex = 0;
    }
 }, 1000);

/*  To make the navbar sticky */
window.addEventListener("scroll", function(){
  var navbar = document.querySelector("#navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add('fixed');
    console.log("out of page");
  } else {
    navbar.classList.remove('fixed');
    console.log("no");
  }
});