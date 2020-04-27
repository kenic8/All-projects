// new liveupdate2();
// import FavoritesPage from "./js/pages/OpslagPage.js";
import Main from "./js/pages/Main.js";
import grafer from "./js/pages/fremskridt.js";
import LoginPage from "./js/pages/loginPage.js";
import test2 from "./js/pages/opretbrugerPage.js";
import TiltagPage from "./js/pages/tiltag.js";
import MissionPage from "./js/pages/mission.js";
import SammenlignPage from "./js/pages/sammenlign.js";
// import test2 from "./js/pages/opretbrugerPage.js";

// // import your services
import SpaService from "./js/spa.js";
import opretbrugerservice2 from "./js/loginService.js";
import calculator from "./js/weakarlacalculatorService.js";

// functioner
import initgraf from "./js/grafservice.js";

import Updatesc from "./js/ScoreService.js"
let updatesc = Updatesc

// Declare and init pages
let spaService = new SpaService();
let test22 = test2;
let main = new Main();
let tiltag = new TiltagPage();
let mission = new MissionPage();
let loginPage = new LoginPage();
let opretbrugerservice = opretbrugerservice2;
let sammenlign = new SammenlignPage();
let graf = new grafer();


export default function initialiseAfterSetup(thisBruger) {
  initgraf(thisBruger.data);
  let brugernav = thisBruger.Nybruger.navn
  let brugerimg = thisBruger.Nybruger.img
  let diesel = "??"
  let el = "??"
  let foder = "??"
  let koerprut = "??"
  let overall = "??"
  let plads = thisBruger.plads
  if (thisBruger.data) {
    diesel = thisBruger.data.diesel.toFixed(2)
    el = thisBruger.data.el.toFixed(2)
    foder = thisBruger.data.foder.toFixed(2)
    koerprut = thisBruger.data.koerprut.toFixed(2)
    overall = thisBruger.data.overall.toFixed(2)
  }
  updatesc.scoredatshit()
  sammenlign.filldata(plads, brugernav, brugerimg, diesel, el, foder, koerprut, overall)
}


spaService.init();
opretbrugerservice2.init();
// opretbrugerservice2.init();
window.pageChange = () => spaService.pageChange();
window.logoutbut = () => opretbrugerservice2.logout();
// window.pageChange = () => spaService.pageChange();
// window.createbrugerbut = () => opretbrugerservice2.sendbrugerdata();
// window.logoutbut = () => opretbrugerservice2.logout();
window.createbrugerbut = () => opretbrugerservice2.sendbrugerdata();
window.previewImage = (file) => uploadFileImg(file);
window.openbar = (dis) => openclose(dis)
window.grafskift = (dis) => graf.skift(dis);
window.senddata = () => calculator.calculateandupdate();


function uploadFileImg(file) {
    let reader = new FileReader();
    reader.onload = function () {
      savedimgurl2 = reader.result;
      document.getElementById("previewimg").style.backgroundImage = "url(" + savedimgurl2 + ")";
    };
      if (file) {
        reader.readAsDataURL(file);
      }
    }

export let savedimgurl2;
export let saveddisbruger2;











let toggler = 0;
document.getElementsByClassName("sidebarbtn")[0].addEventListener("click", function() {
  if (toggler == 1) {
  document.getElementById("navwrap").classList.remove("active2")
  document.getElementsByClassName("sidebarbtn")[0].classList.add("toggle")
  document.getElementsByClassName("tabbar")[0].style.left = "0"
  toggler = 0
  } else {
    document.getElementById("navwrap").classList.add("active2")
    document.getElementsByClassName("sidebarbtn")[0].classList.remove("toggle")
    document.getElementsByClassName("tabbar")[0].style.left = "-250px"
    toggler = 1
  }
})
  // document.getElementsByClassName("sidebar")[0]


  let togglet = false
  let disprev = 0;
  function openclose(dis) {
    //   }
    // }
    // disprev = dis;
  //   if (document.getElementsByClassName("Qwrap")[dis].offsetHeight == 0) {
  //     disprev = 200;
  // } 
  // else {
  //   disprev = 0;
  // }
  // document.getElementsByClassName("Qwrap")[dis].style.height = ""+disprev+"px"
}

let disabler = false;
let i
let activecounter = 0;
let men1count = 0;
let men2count = 0;
let men3count = 0;
let men4count = 0;
for (i=0; i<document.getElementsByClassName("spogsmolO").length; i++) {
  document.getElementsByClassName("spogsmolO")[i].addEventListener("mouseover", function () {
    this.classList.add("hoverqbar")

  })
  document.getElementsByClassName("spogsmolO")[i].addEventListener("mouseleave", function () {
    this.classList.remove("hoverqbar")
  })
  document.getElementsByClassName("spogsmolO")[i].addEventListener("click", function () {
    if (document.getElementsByClassName("Qwrap")[this.id].offsetHeight == 0) {
      disprev = 200;
      disabler = true;
      this.classList.add("clickedqbar")
      document.querySelectorAll("svg")[this.id].style.transform = "translateY(-50%) rotate(90deg)"
  } 
  else {
    disprev = 0;
    disabler = false;
    this.classList.remove("clickedqbar")
    document.querySelectorAll("svg")[this.id].style.transform = "translateY(-50%) rotate(0deg)"
  }
  document.getElementsByClassName("Qwrap")[this.id].style.height = ""+disprev+"px"
  })
}

let deccount = 0;
let dotstart = false
let u
for (u=0; u<document.getElementsByClassName("inputData").length; u++) {
  document.getElementsByClassName("inputData")[u].oninput = function() {
    if (this.id != "koer") {
    restrictoption1(this);
    } else {
      restrictoption2(this); 
    }



   activecounter = 0;
   men1count = 0;
   men2count = 0;
   men3count = 0;
   men4count = 0;
   for (let q=0; q<document.getElementsByClassName("inputData").length; q++) {
    if (document.getElementsByClassName("inputData")[q].value !="" && !document.getElementsByClassName("inputData")[q].classList.contains("fejlinput")) {
        if (q<2) {
          men1count++
        } else if (q<3) {
          men2count++
        } else if (q<4) {
          men3count++
        } else if (q<5) {
          men4count++
        }
      activecounter +=1
    }
   }
   if (activecounter == 5) {
    document.getElementsByClassName("skift")[0].style.opacity = "1"
    document.getElementsByClassName("skift")[0].style.pointerEvents = "initial"
   } else {
    document.getElementsByClassName("skift")[0].style.opacity = "0.5"
    document.getElementsByClassName("skift")[0].style.pointerEvents = "none"
  }
   let amount = activecounter;
   document.getElementsByClassName("mencount")[0].innerHTML = ""+men1count+"/2"
   document.getElementsByClassName("mencount")[1].innerHTML = ""+men2count+"/1"
   document.getElementsByClassName("mencount")[2].innerHTML = ""+men3count+"/1"
   document.getElementsByClassName("mencount")[3].innerHTML = ""+men4count+"/1"
   if(men1count == 2) {
    document.getElementsByClassName("spogsmolO")[0].classList.add("donesection")
    document.getElementsByClassName("st0")[0].style.stroke = "white"
   } else {
    document.getElementsByClassName("spogsmolO")[0].classList.remove("donesection")
    document.getElementsByClassName("st0")[0].style.stroke = "inherit"
  }
  if(men2count == 1) {
    document.getElementsByClassName("spogsmolO")[1].classList.add("donesection")
    document.getElementsByClassName("st0")[1].style.stroke = "white"
   } else {
    document.getElementsByClassName("spogsmolO")[1].classList.remove("donesection")
    document.getElementsByClassName("st0")[1].style.stroke = "inherit"
  }
  if(men3count == 1) {
    document.getElementsByClassName("spogsmolO")[2].classList.add("donesection")
    document.getElementsByClassName("st0")[2].style.stroke = "white"
   } else {
    document.getElementsByClassName("spogsmolO")[2].classList.remove("donesection")
    document.getElementsByClassName("st0")[2].style.stroke = "inherit"
  }
  if(men4count == 1) {
    document.getElementsByClassName("spogsmolO")[3].classList.add("donesection")
    document.getElementsByClassName("st0")[3].style.stroke = "white"
   } else {
    document.getElementsByClassName("spogsmolO")[3].classList.remove("donesection")
    document.getElementsByClassName("st0")[3].style.stroke = "inherit"
  }


   let percentcomplete = (Math.round(amount/document.getElementsByClassName("inputData").length*100));
   document.getElementById("ptext").innerHTML = ""+percentcomplete+"%"
   document.getElementById("pbar").style.width = ""+percentcomplete+"%"
  };
}

window.addEventListener('scroll', function(e) {
  if ( window.pageYOffset >= 70) {
    document.getElementById("topbar").style.position = "sticky"
    document.getElementById("topbar").style.top = "-70px"
    // document.getElementById("topbar").style.background = "#ffffff5b"
  } else {
    document.getElementById("topbar").style.position = "relative"
    document.getElementById("topbar").style.top = "0"
    // document.getElementById("topbar").style.background = "#ffffffc7"
  }
})
function restrictoption2(dis) {
  if (dis.value != "") {
    if (dis.value.match(/^[0-9]+$/)) {
      dis.style.borderColor = "green"
      dis.classList.remove("fejlinput")
      valdatorfunk(dis.id,0)
    } else {
      dis.classList.add("fejlinput")
      dis.style.borderColor = "red"
      valdatorfunk(dis.id,1)
    }
  } else {
    valdatorfunk(dis.id,-1)
    dis.style.borderColor = ""
   }
}


function restrictoption1(dis) {
  if (dis.value != "") {
    if (dis.value.charAt(dis.value.length-1) == "." && dis.value.length-1>0) {
      deccount +=1
    } else if (dis.value.charAt(0) == ".") {
      dotstart = true;
    } else {
      dotstart = false;
    }
    if (dis.value.match(/^[0-9]+$/)) {
      deccount = 0;
    }
      if (dis.value.match(/^[0-9.]+$/)) {
        dis.classList.remove("fejlinput")
        valdatorfunk(dis.id, 0)
        dis.style.borderColor = "green"
        if (dis.value.match(/^(?<=^| )\d+(\.\d+)?(?=$| )+$/)) {
        } else {
          dis.style.borderColor = "red"
          dis.classList.add("fejlinput")
          if (!dotstart) {
          if (dis.value.charAt(dis.value.length-1) && deccount == 1) {
            valdatorfunk(dis.id,2)
          } else {
            valdatorfunk(dis.id,3)
          }
          } else {
            valdatorfunk(dis.id,4)
          }
        }

  } else {
    dis.classList.add("fejlinput")
    dis.style.borderColor = "red"
    valdatorfunk(dis.id,5)
  }
  } else {
    valdatorfunk(dis.id,-1)
    deccount = 0;
    dis.style.borderColor = ""
   }
}


let whatinp;
let whaticon;
let whatmessega = "";
let whathtmltemp = "";
function valdatorfunk(Inr, Fnr) {
  if (Inr == "mælk") {
    whatinp = 0;
  } else if (Inr == "koer") {
    whatinp = 1;
  } else if (Inr == "diesel") {
    whatinp = 2;
  } else if (Inr == "el") {
    whatinp = 3;
  } else if (Inr == "foder") {
    whatinp = 4;
  }

  if (Fnr == 0) {
    whaticon = "../../images/iconer/sucicon.png"
    whatmessega = ""
  } else if (Fnr > 0) {
    whaticon = "../../images/iconer/fejlicon.png"
  }

  if (Fnr == 1) {
    whatmessega = "skriv kun hele tal"
  }
  if (Fnr == 2) {
    whatmessega = "skriv et decimal tal"
  }
  if (Fnr == 3) {
    whatmessega = "skriv max et decimal"
  }
  if (Fnr == 4) {
    whatmessega = "Start ikke med et decimal"
  }
  if (Fnr == 5) {
    whatmessega = "skriv kun tal"
  }

  if (Fnr < 0) {
    whathtmltemp = ``;
  } else {
    whathtmltemp = `<div>
    <img src=${whaticon}>
    </div>
    <div>
    <p>${whatmessega}</p>
    </div>`;
  }

  document.getElementsByClassName("validatorti")[whatinp].innerHTML = whathtmltemp;

}

document.getElementById("wrapmission").addEventListener("click", function(event) {
  console.log(event.target.id)
  if (event.target.id == 1) {
    document.getElementById("overlayimg").src = "images/VÆRDIER.png"
  } else if (event.target.id == 2) {
    document.getElementById("overlayimg").src = "images/VISION.png"
  } else if (event.target.id == 3) {
    document.getElementById("overlayimg").src = "images/MISSION.png"
  }
  document.getElementById("overlay").style.display = "flex"

})

document.getElementById("closepobox").addEventListener("click", function(event) {
  document.getElementById("overlay").style.display = "none"
  console.log(event.target.id)
  
})

