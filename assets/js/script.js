const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
$(function(){
   
    $("h1").on("mouseenter", function(){
        $(this).addClass("destacado");
    });

    $("h1").on("mouseleave", function(){
        $(this).removeClass("destacado");
    });
});