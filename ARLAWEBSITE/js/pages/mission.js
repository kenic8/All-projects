// import opretbrugerservice from "../loginService.js";
export default class MissionPage {
    constructor() {
      this.template();
    //   let hejder = mapService;
    }
    
    template() {
      document.getElementById('content').innerHTML += /*html*/ `
      <section id="mission" class="page">
      <div id="topbar">
      <div id="topbarU">
      <h1>MISSION</h1>
      <div id="breakline2"></div>
      </div>
      </div>
      </div>
        
      <div class="seriostqwrap2">
      <div id=overlay>
      <div>
      <p id="closepobox">X</p>
      <img id="overlayimg"  src="../images/VISION.png">
      </div>
      </div>
      <div id="wrapmission">
      <div>
      <img class="hover" id="1" src="../images/værdierbilled.png">
      </div>
      <div>
      <img class="hover" id="2" src="../images/visionbilled.png">
      </div>
      <div>
      <img class="hover" id="3" src="../images/missionbilled.png">
      </div>
      </div>
      </div>

      </section>
      `;
    //   new opretbrugerservice();

    // }
    }
  }



//   <section class="mission-content">

//   <section id="billed1" class="mission-billed">

//     <img src="../images/værdierbilled.png">

//   </section>

//   <div class="mission-tekst" id="tekst1">
//             <img src="../images/VÆRDIER.png">
//             <span class="close">&times;</span>
//   </div>


//   <section id="billed2" class="mission-billed">

//     <img src="../images/visionbilled.png">

//   </section>

//   <div class="mission-tekst" id="tekst2">
//             <img src="../images/VISION.png">
//             <span class="close">&times;</span>
//   </div>

//   <section id="billed3" class="mission-billed">

//     <img src="../images/missionbilled.png">

//   </section>

//   <div class="mission-tekst" id="tekst3">
//             <img src="../images/MISSION.png">
//             <span class="close">&times;</span>
//   </div>

  
// </section>