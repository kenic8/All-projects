import scrollhandler from "./scrollhandler.js";

class SpaService {
  constructor() {
    this.defaultPage = "home";
  }

  init() {
    this.pages = document.querySelectorAll(".page");
    this.navItems = document.querySelectorAll(".tabbar a");
    this.pageChange();
  }

  // hide all pages
  hideAllPages() {
    for (let page of this.pages) {
      page.style.display = "none";
    }
  }

  // show page or tab
  showPage(pageId) {
    this.hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
    this.setActiveTab(pageId);
  }

  // sets active tabbar/ menu item
  setActiveTab(pageId) {
    for (let navItem of this.navItems) {
      if (`#${pageId}` === navItem.getAttribute("href")) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    }
  }

  // navigate to a new view/page by changing href
  // navigateTo(pageId) {
  //   window.location.href = `#${pageId}`;
  // }

  // set default page or given page by the hash url
  // function is called 'onhashchange'
  pageChange() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
   });
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
      console.log(page)
      if (page != "home") {
        scrollhandler.barstageW()
      } else {
        scrollhandler.barstageE()
      }
    } else {
      window.location.href = `#${this.defaultPage}`
    }
    this.showPage(page);
  }

  // show and hide tabbar
  hideTabbar(hide) {
    let tabbar = document.querySelector('#tabbar');
    if (hide) {
      tabbar.classList.add("hide");
    } else {
      tabbar.classList.remove("hide");
    }
  }

  burgernav(wast) {
    console.log(wast)
    if (wast == 1) {
      burgermode = 1;
    }
    if (burgermode == 0) {
      bar1.style.transform = "translateY(10px) rotate(45deg)";
      bar2.style.opacity = "0";
      bar3.style.transform = "translatey(-8px) rotate(-45deg)";
      bar1.style.background = "#0cb425"
      bar3.style.background = "#0cb425"
      bar1.style.height = "4px"
      bar3.style.height = "4px"
      document.getElementById("darkOlay").style.opacity = 0.5;
      document.getElementById("darkOlay").style.pointerEvents = "inherit"
      document.getElementsByClassName("Mtabbar")[0].style.left = 0
      // navmenu.style.transform = "translateX(0%)"
      // darkolay2.style.opacity = "0.7"
      // darkolay2.style.transition = "0.4s"
      // darkolay2.style.pointerEvents = "initial"
      burgermode = 1;
      } else {
        document.getElementsByClassName("Mtabbar")[0].style.left = "-75%";
        document.getElementById("darkOlay").style.opacity = 0;
        document.getElementById("darkOlay").style.pointerEvents = "none"
      bar1.style.transform = "translateY(0) rotate(0)";
      bar2.style.opacity = "1";
      bar3.style.transform = "translateY(0) rotate(0)";
      bar1.style.background = "#322c35a8"
      bar3.style.background = "#322c35a8"
      bar1.style.height = "2px"
      bar3.style.height = "2px"
      // navmenu.style.transform = "translateX(-100%)";
      // darkolay2.style.opacity = "0"
      // darkolay2.style.transition = "0.4s"
      // darkolay2.style.pointerEvents = "none"
      burgermode = 0;
      }
  }
}

let burgermode = 0;
const spaService = new SpaService();
export default spaService;