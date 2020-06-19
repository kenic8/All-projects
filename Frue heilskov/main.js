// import your hideAllPages
import HomePage from "./pages/home.js";
import GalleriPage from "./pages/galleri.js";
import oMigPage from "./pages/omig.js";

// import your services
import spaService from "./services/spa.js";
import scrollhandler from "./services/scrollhandler.js";
import sendform from "./services/sendform.js";
import postService from "./services/galleriservice.js";;

// Declare and init pages
let homePage = new HomePage();
let galleriPage = new GalleriPage();
let OMigPage = new oMigPage();

// // Declare serv
let PostService = new postService();

// init services
// scrollhandler.init();
spaService.init();

// events

window.pageChange = () => spaService.pageChange();
window.onscroll = () => scrollhandler.checker();
window.sendform = () => sendform.createForm()
window.jumptoform = () => scrollhandler.jumptoform();
window.mouseoverHbox = () => PostService.mouseoverevent(event);
window.mouseleaveHbox = () => PostService.mouseoverevent("leave");
window.openOpslag = () =>  PostService.OpenOpslag(event);
window.mouseoverevent2 = () => PostService.mouseoverevent2(event);
window.mouseleaveHbox2 = () => PostService.mouseoverevent2("leave");
window.popfunction = (wast) => spaService.burgernav(wast);
window.opennr = () => scrollhandler.opennrfunk();



