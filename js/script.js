$(".menu > ul > li").click(function (e) {
   //remove active from already active
   $(this).siblings().removeClass("active");
   //add active to clicked
   $(this).toggleClass("active");
   //if has sub menu open it
   $(this).find("ul").slideToggle();
   //close other sub menu if any open
   $(this).siblings().find("ul").slideUp();
   //remove active class of sub menu items
   $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
   $(".sidebar").toggleClass("active");
})


var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
   sidebar.classList.toggle("active-nav");
   container.classList.toggle("active-cont");
});
document.addEventListener("DOMContentLoaded", function () {
   const toggleButton = document.getElementById("toggleButton");
   const sidebar = document.getElementById("sidebar");

   toggleButton.addEventListener("click", function () {
      sidebar.classList.toggle("active");
   });

   // Recolhe o menu quando a largura da tela for menor que 768px
   window.addEventListener("resize", function () {
      if (window.innerWidth < 768) {
         sidebar.classList.remove("active");
      }
   });
});
