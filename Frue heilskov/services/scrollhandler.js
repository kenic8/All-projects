class Scrollhandler {
    constructor() {
    }
  
    checker() {
        this.closenrfunk();
        if (window.location.hash == "#home") {
            if (window.pageYOffset >= 100) {
                this.barstageW();
            } else {
                this.barstageE();
            }
        } else {
            this.barstageW();
        }
    }

    barstageW() {
        document.querySelector(".tabbar").classList.add("stagetobar")
        for (let i=0; i < document.querySelector(".tabbarbutwrap").children.length; i++) {
            if (document.querySelector(".tabbarbutwrap").children[i].tagName == "A" && !document.querySelector(".tabbarbutwrap").children[i].classList.contains("active")) {
                document.querySelector(".tabbarbutwrap").children[i].classList.add("menitem")
            } 
        }
        document.querySelector(".ikontekst").style.opacity = 1
        // if (document.querySelector(".tabbar").children)
        // document.querySelector(".tabbar").children
        // document.querySelector(".tabbar").style.background = "white"
        // document.querySelector(".tabbar").style.boxShadow = "0px -5px 5px 8px rgba(0,0,0,0.75);"
        // document.querySelector(".ikontekst").style.opacity = 1
        // document.getElementsByClassName("menitem")[1].style.color = "black"
        // document.getElementsByClassName("menitem")[0].style.color = "black"

    }


    barstageE() {
        document.querySelector(".ikontekst").style.opacity = 0
        document.querySelector(".tabbar").classList.remove("stagetobar")
        for (let i=0; i < document.querySelector(".tabbarbutwrap").children.length; i++) {
            if (document.querySelector(".tabbarbutwrap").children[i].tagName == "A" && document.querySelector(".tabbarbutwrap").children[i].classList.contains("menitem")) {
                document.querySelector(".tabbarbutwrap").children[i].classList.remove("menitem")
            } 
        }
    }

    jumptoform() {
        let whatpage = 0
        if (window.location.hash == "#home") {
            whatpage = 1
        }
        if (window.location.hash == "#galleri") {
            whatpage = 2
        }
        if (window.location.hash == "#OmMig") {
            whatpage = 3
        }
        window.scroll({
            top: document.getElementById("howtosection"+whatpage+"").offsetTop-54.5,
            left: 0,
            behavior: 'smooth'
         });
    }


    opennrfunk() {
        document.getElementById("phonenr").style.width = "120px"
        document.getElementById("phoneF").style.backgroundColor = "#0cb425b4"
    }

    closenrfunk() {
        document.getElementById("phonenr").style.width = "0px"
        document.getElementById("phoneF").style.backgroundColor = "#00800054"
    }
  }
  
  const scrollhandler = new Scrollhandler();
  export default scrollhandler;