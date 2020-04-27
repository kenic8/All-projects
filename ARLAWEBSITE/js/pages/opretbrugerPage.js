  // import opretbrugerservice from "../loginService.js";
//   let savedimgurl

// import opretbrugerservice2 from "../loginService";

 
 
  class OpretbrugerPage {
    constructor() {
      this.template();
    //   let hejder = mapService;
    }
    
    template() {
      document.getElementById('content').innerHTML += /*html*/ `
      <section id="opretBruger" class="page">
      <div class="loginwrap">
      <img class="data" src="images/kisspng-logo-arla-foods-portable-network-graphics-vector-g-arla-foods-wikipedia-cars-trends-2-15-5bfeaeca2211f0.3078411115434175461396.png">
      <div class="opretwrap">
      <h2>Opsæt bruger</h2>
      <form class="formstyle">
        <input type="text" class="opsetinput" id="name" placeholder="Navn" required />
        <br>
        <input type="text" class="opsetinput" id="name" placeholder="Farm Id" required />
        <br>
        <div id="uploadimg">
        <div id="previewimg"> </div>
        <div>
        <input class="opsetinput2" type="file" id="img" accept="image/*" onchange="previewImage(this.files[0])">
        </div>
        </div>
        <br>
        <button id="butopret" type="button" name="button" onclick="createbrugerbut()">
          Opret!
          </button>
      </form>
      </div>
      </div>
    </section>
      `;
    }

      
    //   profileimagePreviewFunk(dispic) {
    //     savedimgurl = dispic;
    //     for (let i = 0; i < imagePreview.length; i++) {
    //       imagePreview[i].style.background = "url(" + dispic + ")";
    //       }
    //   }
      
  }
//   export let savedimgurl2;
  let test2 = new OpretbrugerPage();
  export default test2;
  
  