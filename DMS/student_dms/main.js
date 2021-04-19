$(document).ready(function () {
  ;



  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
})

var modal = document.getElementById('id02');

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(() => {
  $(".home").on("mouseover", () => {
    $(".mainMenu li .subMenu.homeSubMenu").fadeIn();
    $(".mainMenu li .subMenu.requiredSubMenu").fadeOut();
    setTimeout(function () {
      $(".mainMenu li .subMenu.homeSubMenu").fadeOut();
    }, 4000);
  });

  $(".mainMenu li .subMenu.homeSubMenu").on("mouseleave", () => {
    $(".mainMenu li .subMenu.homeSubMenu").fadeOut();
  })

  $(".requiredDoc").on("mouseover", () => {
    $(".mainMenu li .subMenu.requiredSubMenu").fadeIn();
    $(".mainMenu li .subMenu.homeSubMenu").fadeOut();
    setTimeout(function () {
      $(".mainMenu li .subMenu.requiredSubMenu").fadeOut();
    }, 4000);
  });

  $(".mainMenu li .subMenu.requiredSubMenu").on("mouseleave", () => {
    $(".mainMenu li .subMenu.requiredSubMenu").fadeOut();
  });

  $(".collapsible").on("click", function () {
    if ($(this).parent().find(".internalList").attr('aria-expanded') === true) {
      console.log("abriu essa porra");
      $(this).find(".collapsibleIcon").empty();
      $(this).find(".collapsibleIcon").append("+");
    } else {
      $(this).find(".collapsibleIcon").empty();
      $(this).find(".collapsibleIcon").append("-");
    }
  })
})