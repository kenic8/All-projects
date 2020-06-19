export default class oMigPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
    <section id="OmMig" class="page">
    <section id="omigsection">
    
    <div id="partom">
    <div id="imgwrap2">
    <div id="imgclipom"></div>
    <div id="borderclip"></div>
    </div>
    <div id="infwrap2">

    <div id="infbox2">
    <div id="sectionheaderwrap2">
    <h3>Mit arbejde</h3>
    <div id="emnehline2"></div>
    </div>
    <p class="sectiontext2">
    Jeg er rengøringsdame Fru Heilskovs Rengøring. Jeg er den eneste ansat i firmaet, derfor  kan du  altid være helt sikker på, at det er personlig kontakt du kommer til at have med mig. 

<br>Jeg kan både hyres på ugentlig basis og eller bare en enkelt gang. Jeg kommer altid med et smil og sørger for at opgaven bliver løst til perfektion. Det er nemlig med stolthed, jeg kan sige at jeg er meget grundig, når det kommer til diverse rengøringsopgaver.

<br><br>Jeg er meget fleksibel når det kommer til lige præcis den rengøring du har brug for, og jeg bruger kun det bedste professionelle udstyr. Der er ikke nogle kroge eller områder der er for store opgaver for mig. Så sig bare til!


<br><br>Mine services:
 Jeg kan både hyres til rengøring på ugentlig basis, men sagtens også  hver anden og tredje uge. Hvad der passer dig bedst er i centrum for min services. 
      
    </p>
    <div id= "omlister"> 
        <div>
        
    <ul class="omliste">
    <p><u>Standart rengøring</u></p>
    <li>Støvsugning</li>
    <li>Gulvvask</li>
    <li>Køkken</li>
    <li>Badeværelse</li>
    <li>Spindelvæv</li>
    <li>Støv</li>
    <li>Fodpaneler</li>
    <li>Dødsbo</li>
    <li>Slutrengøring</li>
    </ul>
       </div>

        <div>
    <ul class="omliste">
    <p><u>Vinduespudsning</u></p>
    <li>10 kr pr rude indvendig</li>
    <li>15 kr udvendig</li>
    <li>Max op til 1 sal (6 meter)</li>
    </ul>
    </div>
        </div>
           </div>

    </div>
    </div>
    </div>
    </section>
    <footer>
    <div id="howtosection3" class="howtosection">
    <div id="howto1">
    <img src="../images/illustrations/howto1.svg">
    <p>Kontakt mig</p>
    </div>

    <div id="arrow"></div>

    <div id="howto2">
    <img src="../images/illustrations/howto2.svg">
    <p>Kundemøde</p>
    </div>

    <div id="arrow"></div>

    <div id="howto3">
    <img src="../images/illustrations/howto3.svg">
    <p>Første rengøring</p>
    </div>

    <div id="arrow"></div>

    <div id="howto4">
    <img src="../images/illustrations/howto4.svg">
    <p>Bestem aftale</p>
    </div>
    </div>


    <div id="footerwrapp">
    <div id="footerwrappOlay"></div>
    <div id="formsection">
    <h3>Kontakt mig</h3>
    <div id="formwrap">
    <div id="formapart1">
    <h6>Extra rengøring:<h6>
    
    <div id="extraformwrap">
    <label class="container">Ovn rengøring
    <input type="checkbox" class="checkbox" value="Ovn rengøring">
    <span class="checkmark"></span>
  </label>

  <label class="container">Bruseniche og/eller badeværelse
  <input type="checkbox" class="checkbox" value="Bruseniche og/eller badeværelse">
  <span class="checkmark"></span>
</label>

<label class="container">Plantepasning
<input type="checkbox" class="checkbox" value="Plantepasning">
<span class="checkmark"></span>
</label>

<label class="container">Vask og stryg
<input type="checkbox" class="checkbox" value="Vask og stryg">
<span class="checkmark"></span>
</label>

<label class="container">Køleskab
<input type="checkbox" class="checkbox" value="Køleskab">
<span class="checkmark"></span>
</label>

</div>
    <h6>Andet:<h6>
    <textarea name="Text1" cols="40" rows="5" id="textarea"></textarea>
    </div>


  
    <div id="formapart2">
    <div id="inputwrap">
    <h6>Navn:<h6>
    <input type="text" id="fname" class="Pinput" name="firstname" placeholder="Navn">
    </div>
    <div id="inputwrap">
    <h6>Email:<h6>
    <input type="text" id="femail" class="Pinput" name="firstname" placeholder="Email">
    </div>
    <div id="inputwrap">
    <h6>Tlf: (valgfrit)<h6>
    <input type="text" id="ftlf" class="Pinput" name="firstname" placeholder="Tlf nr">
   </div>

    <div id="sendformknap" onclick="sendform()"> 
    <p>Send</p>
    </div>
    </div>
    
    </div>
    </div>
    <div id="realfooter">
    <div id="footerline"></div>
    <div id="footercontent">
    <div>
    <a><p>Tlf: 4529398366</p></a>
    <a><p>Email: frueheilskov@hotmail.dk</p></a>
    <a><p>CVR: 3387992133</p></a>
    </div>
    <div>
    <a href ="https://www.facebook.com/fruheilskov/">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
<g>
<path class="st0" d="M100.4,7.8c51-0.5,93.5,42.1,92.7,94.2c-0.8,50.4-42.8,91.9-94.3,91.1c-50.5-0.8-91.9-42.9-91-94.3
C8.6,48.6,50.1,7.4,100.4,7.8z M112.1,135.5c0-11.1,0-22.3,0-33.4c0-1.4,0.3-1.9,1.8-1.8c5.7,0.1,11.5,0,17.2,0.1
c1.2,0,1.8-0.1,1.9-1.6c0.7-6.7,1.5-13.4,2.4-20.1c0.2-1.5-0.2-1.7-1.5-1.7c-6.6,0.1-13.3,0-19.9,0.1c-1.4,0-1.9-0.3-1.9-1.8
c0.1-3.7,0-7.4,0-11.1c0-8.4,2.1-10.5,10.6-10.6c3.8,0,7.6,0,11.3,0c0.8,0,1.5,0.1,1.5-1.2c0-7,0-14.1,0-21.1
c0-0.8-0.2-1.2-1.1-1.1c-9.2,0.2-18.5-0.5-27.7,0.5c-5.5,0.6-10.7,2.1-15.2,5.5C85,41,82.7,48,82,55.7c-0.6,6.4-0.3,12.9-0.3,19.3
c0,1.7-0.5,2-2.1,2c-4.2-0.1-8.5,0-12.7-0.1c-1.3,0-1.8,0.2-1.8,1.6c0.1,6.8,0.1,13.5,0,20.3c0,1.3,0.4,1.5,1.5,1.5
c4.3-0.1,8.6,0.1,12.9-0.1c1.7-0.1,2.1,0.4,2.1,2.1c-0.1,22,0,44-0.1,66c0,1.7,0.2,2.3,2.2,2.3c8.7-0.1,17.4-0.1,26.2,0
c1.8,0,2.1-0.6,2.1-2.2C112,157.6,112.1,146.5,112.1,135.5z"/>
</g>
</svg>

    
    </a>
    </div>
    
    </div>
    
    </div>
  </footer>
  </section>
    `;
  }
}
