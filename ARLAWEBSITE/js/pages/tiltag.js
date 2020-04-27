// import opretbrugerservice from "../loginService.js";
export default class TiltagPage {
    constructor() {
      this.template();
    //   let hejder = mapService;
    }
    
    template() {
      document.getElementById('content').innerHTML += /*html*/ `
      <section id="tiltag" class="page">
      <div id="topbar">
      <div id="topbarU">
      <h1>TILTAG</h1>
      <div id="breakline2"></div>
      </div>
      </div>
      </div>

      <div id="extraspacesmall"></div>
      <div class="seriostqwrap2">

      <div id="tiltagwrap">
      <div><img src="../images/hus.png"></div>
      <div><img src="../images/kvæg.png"></div>
      <div><img src="../images/træ.png"></div>
      <div><img src="../images/traktor.png"></div>
      </div>

      </div>
      </div>
    </section> 
      `;
    //   new opretbrugerservice();
    }
  }
