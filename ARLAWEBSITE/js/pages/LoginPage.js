// import opretbrugerservice from "../loginService.js";
export default class LoginPage {
    constructor() {
      this.template();
    //   let hejder = mapService;
    }
    
    template() {
      document.getElementById('content').innerHTML += /*html*/ `
      <section id="login" class="page">
      <!-- firebase auth container  -->
      <div class="loginwrap">
<img class="data" src="images/kisspng-logo-arla-foods-portable-network-graphics-vector-g-arla-foods-wikipedia-cars-trends-2-15-5bfeaeca2211f0.3078411115434175461396.png">
      <section id="firebaseui-auth-container"></section>
      </div>
      <!-- <a class="" href="#opret" onclick="">Opret bruger</a> -->
    </section> 
      `;
    //   new opretbrugerservice();
    }
  }
