export default class grafer {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById("content").innerHTML += /*html*/ `
      <section id="fremskridt" class="page">
      <div id="topbar">
      <div id="topbarU">
      <h1>FREMSKRIDT</h1>
      <div id="breakline2"></div>
      <div id="skiftgrapgh">
      <div id=pbar>
      <div id="engraf" onclick="grafskift(2)">
      <p>Factore</p>
      </div>
      <div id="tograf" onclick="grafskift(1)">
      <p>Ton</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div id="extraspacesmall"></div>
      <div class="seriostqwrap">
    
  
      <div id="skifter2">
      <canvas id="kgUdslipTal"></canvas>
    </div>
  
      <div id="skifter1">
      <canvas id="tonTal"></canvas>
      </div>
      </div>
      </section>
  `;
    }
    state2 = 1;
    skift(state2) {
        console.log(this.state2)
      if (state2 == 1) {
        document.getElementById("skifter1").style.display = "block";
        document.getElementById("engraf").style.background = "none";
        document.getElementById("tograf").style.background = "green";
        document.getElementById("engraf").style.color = "black";
        document.getElementById("tograf").style.color = "white";
        document.getElementById("skifter2").style.display = "none";
  
        this.state = 0;
      } else {
        document.getElementById("skifter1").style.display = "none";
        document.getElementById("engraf").style.background = "green";
        document.getElementById("engraf").style.color = "white";
        document.getElementById("tograf").style.color = "black";
        document.getElementById("tograf").style.background = "none";
        document.getElementById("skifter2").style.display = "block";
        this.state = 1;
      }
    }
  }
  