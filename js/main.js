

var elOpen = document.querySelector(".js-modal-btn");
var elModal = document.querySelector(".modal");
var elClose = document.querySelector(".js-close-btn");

elOpen.addEventListener("click", function(){
elModal.classList.add("modal-open")
});

elClose.addEventListener("click", function(){
elModal.classList.remove("modal-open")
});

