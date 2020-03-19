///////////------------------ vi går igennem odmmen via vores jquery selecter på elementes id og ændre src tagget i htmlen, for at skifte video dette sker også igennem dommen

$(document).ready(function() {
  $("#yoga1").click(function() {
    $("#video").html(
      '<source src="../images/tisvildevid.mp4" type="video/mp4"></source>'
    );
    video.load();
    $("body").css("background-color", "white");
  });
});
///////////------------------ Det samme her
$(document).ready(function() {
  $("#yoga2").click(function() {
    $("#video").html(
      '<source src="../images/tisvildevid.mp4" type="video/mp4"></source>'
    );
    video.load();
  });
}); ///////////------------------

$(document).ready(function() {
  $("#yoga3").click(function() {
    $("#video").html(
      '<source src="../images/aarhusyoga.mp4" type="video/mp4"></source>'
    );
    video.load();
  });
});
///////////------------------
$(document).ready(function() {
  $("#beloud").click(function() {
    $("#video").html(
      '<source src="../images/Beloudvid.mp4" type="video/mp4"></source>'
    );
    video.load();
  });
});
///////////--------------------------------------------------------fade in puligin at

$(window).on("load", function() {
  $(window)
    .scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Her ser vi hvor objectet befinder sig på siden */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* hvis elementer er i "view" så toggler vi fade classen via dommen og ind i css */
        if (objectBottom < windowBottom) {
          //Her øger vi langsomt opaciteten på css classen i css( når vi scroller ned)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(700, 1);
          }
        } else {
          //modsat fjerner vi den langsomt igen når der scrolles op
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(300, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});
var slideimages = new Array(); // array for at preload i dommen
slideimages[0] = new Image(); // vi laver en instanse til hvert billede så det kan hentes via src
slideimages[0].src = "../images/insta_temp_2.jpg"; // vi sætter sorce til arrayet
slideimages[1] = new Image();
slideimages[1].src = "../images/post_5.jpg";
slideimages[2] = new Image();
slideimages[2].src = "../images/post_1.jpg";

// i incrementer igennem som variable det vil sige at den stiger med 1
var i = 0;

function slideit() {
  if (!document.images) return;
  document.getElementById("slide").src = slideimages[i].src;
  if (i < 2) i++;
  else i = 0;
  //call function "slideit()"  her har vi et delay på hvornår billedet skiftes i millisekunder
  setTimeout("slideit()", 5000);
}

slideit();
/////burger js

$(document).ready(function() {
  $(".menu-burger").hide();
  $("#nav-burger").click(function() {
    $(this).toggleClass("open");
    $(".menu-burger").slideToggle("slow");
  });
});

///////burger close
$(".menu-burger li ").on("click", function() {
  $(".menu-burger").hide();
  $("#nav-burger").click(function() {
    $(this).toggleClass("open");
  });
});

/// autoplay film til sæts

$(document).ready(function() {
  $("#start").on("ended", function() {
    this.play();
  });
});

//////// Når documentet åbnes

$(document).ready(function() {
  jQuery.fx.off = true; /// slå aniation fra
  $(".popup-brev").hide();
  $(".newsletter").click(function() {
    $(".popup-brev").toggle("true");
    $("#bodyshade").show();
  });
});

///// for at være sikker på at den shaderen gemmes

$(document).ready(function() {
  $("#bodyshade").hide();
});

////// viser popup og shader og fixer body man ikke kan scrolle og sætter timer til hvornår
$(document).ready(function() {
  function loadup() {
    $("body").css("position", "fixed");
    $(".popup-brev").show();
    $("#bodyshade").show();
  }
  setTimeout(loadup, 4000);
});

/// læser op for scroll og fjerner popbrev og shader
$(document).ready(function() {
  $("#kryds").click(function() {
    $(".popup-brev").toggle("true");
    $("body").css("position", "relative");
    $("#bodyshade").hide();
  });
});
