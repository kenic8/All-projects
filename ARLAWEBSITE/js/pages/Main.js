// import opretbrugerservice from "../loginService.js";
export default class Main {
    constructor() {
      this.template();
    //   let hejder = mapService;
    }
    
    template() {
      document.getElementById('content').innerHTML += /*html*/ `
      <section id="home" class="page">
      <div id="topbar">
      <div id="topbarU">
      <h1>INDTAST DATA</h1>
      <div id="breakline2"></div>
      <div id="progressbar">
      <p id=ptext>0%</p>
      <div id=pbar></div>
      </div>
      </div>
      </div>

      <div id="extraspacesmall"></div>
      <div class="seriostqwrap">
      <div id="0" class="spogsmolO" onclick="openbar(0)">
      <div class="dmenstextdiv">
      <h2>Overordnet</h2>
      </div>
      <div>
      <h2 class="mencount" >0/2</h2>
      </div>
      <div>
      <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 294 288" style="enable-background:new 0 0 294 288;" xml:space="preserve">
<polygon class="st0" points="263,141.9 30,266.5 33.3,21.5 "/>
</svg>
</div>
  </div>
      <div class="Qwrap"> 
      <div>
      <div><h2>Kg mælk om året:</h2></div>
      <div>
      <input type="text" placeholder="kg" id="mælk" class="inputData">
      <div class="validatorti">

      </div>
      </div>
      </div>

      <div>
      <div><h2>Antal køer:</h2></div>
      <div>
      <input type="text" placeholder="Antal" id="koer" class="inputData">
      <div class="validatorti"></div>
      </div>
      </div>

     
      </div>




      </div>



      <div class="seriostqwrap">
      <div id="1" class="spogsmolO" onclick="openbar(1)">
      <div class="dmenstextdiv">
      <h2>Diesel</h2>
      </div>
      <div>
      <h2 class="mencount">0/1</h2>
      </div>
      <div>
      <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 294 288" style="enable-background:new 0 0 294 288;" xml:space="preserve">
<polygon class="st0" points="263,141.9 30,266.5 33.3,21.5 "/>
</svg>
</div>
  </div>
      <div class="Qwrap"> 
      <div>
      <div><h2>Liter om året:</h2></div>
      <div>
      <input type="text" placeholder="Liter" id="diesel" class="inputData">
      <div class="validatorti"></div>
      </div>
      </div>

      </div>
      </div>



      <div class="seriostqwrap">
      <div id="2" class="spogsmolO" onclick="openbar(2)">
      <div class="dmenstextdiv">
      <h2>Elektricitet</h2>
      </div>
      <div>
      <h2 class="mencount">0/1</h2>
      </div>
      <div>
      <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 294 288" style="enable-background:new 0 0 294 288;" xml:space="preserve">
<polygon class="st0" points="263,141.9 30,266.5 33.3,21.5 "/>
</svg>
</div>
  </div>
      <div class="Qwrap"> 
      <div>
      <div><h2>Kwh om året:</h2></div>
      <div>
      <input type="text" placeholder="Kwh" id="el" class="inputData">
      <div class="validatorti"></div>
      </div>
      </div>
      </div>
      </div>
      



      <div class="seriostqwrap">
      <div id="3" class="spogsmolO" onclick="openbar(3)">
      <div class="dmenstextdiv">
      <h2>Foder</h2>
      </div>
      <div>
      <h2 class="mencount">0/1</h2>
      </div>
      <div>
      <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 294 288" style="enable-background:new 0 0 294 288;" xml:space="preserve">
<polygon class="st0" points="263,141.9 30,266.5 33.3,21.5 "/>
</svg>
</div>
  </div>
      <div class="Qwrap"> 
      <div>
      <div><h2>kg foder om året:</h2></div>
      <div>
      <input type="text" placeholder="kg" id="foder" class="inputData">
      <div class="validatorti"></div>
      </div>
      </div>
      </div>
      <a class="skift" onclick="senddata();">send</a>
      </section>
      `;
    //   new opretbrugerservice();
    }
  }

