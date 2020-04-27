// import opretbrugerservice from "../loginService.js";
export default class SammenlignPage {
    constructor() {
        this.template();
    }

    template() {
        document.getElementById('content').innerHTML += /*html*/ `
      <section id="sammenlign" class="page">
      <div id="topbar">
      <div id="topbarU">
      <h1>SAMMENLIGN</h1>
      <div id="breakline2"></div>
      </div>
      </div>
      </div>
      <div id="extraspacesmall"></div>
      <div class="seriostqwrap">
    
      <div id="sammenlignwrap">
      <div id="dennebrugerdata">
      </div>



      <div id="andrebrugerdata">
      <input type="text" placeholder="Søg" id="søgp">
      <div id="scoreboardwrap">
      </div>
      </div>
      </div>
      </div>
      </section>
      `;

    //   new opretbrugerservice();
    }

    filldata(plads, brugernav, brugerimg, diesel, el, foder, koerprut, overall) {
        document.getElementById('dennebrugerdata').innerHTML = `
        <p id="pnr">#${plads}</p>
        <div class="pimgwrap">
        <div id="pimg"></div>
        </div>
        <h2 id="pnavn">${brugernav}</h2>
        <div id="pdatawrap">
        <div id="pbl"></div>
        <div class="pdata1">
        <div><p>Co2 aftryk:</p></div>
        <div><p>${overall} ton</p></div>
        </div>
        <div class="pdata">
        <div><p>Co2 Diesel pr. kg mælk:</p></div>
        <div><p>${diesel} kg</p></div>
        </div>
        <div class="pdata">
        <div><p>Co2 el pr. kg mælk:</p></div>
        <div><p>${el} kg</p></div>
        </div>
        <div class="pdata">
        <div><p>Co2 methan pr. kg mælk:</p></div>
        <div><p>${koerprut} kg</p></div>
        </div>
        <div class="pdata">
        <div><p>Co2 foder pr. kg mælk:</p></div>
        <div><p>${foder} kg</p></div>
        </div>
        </div>
        `;
        document.getElementById('pimg').style.background = "url("+brugerimg+")"
    }

  }

//   let sammenlignpage = new SammenlignPage();
//   export default sammenlignpage;
      
    //   <div id="dennebrugerdata>
    //   </div>

    //   <div id="andrebrugerdata>
    //   </div>