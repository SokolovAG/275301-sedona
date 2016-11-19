var popup = document.querySelector(".choose-hotel-btn");

var open = document.querySelector(".form");

popup.addEventListener("click", function(event)
                      {
    event.preventDefault();

open.classList.toggle("popup-close");
    })