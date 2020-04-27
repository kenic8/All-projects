import { firebaseDB } from "./firebase.js";
let brugers;
let sortedp = [];
let sortedarray

let test = Array();
let testnew = []
class liveupdate2 {
    constructor() {
      this.bruger = firebaseDB.collection("bruger");
      this.read();
    }
  
    read() {
      // ========== READ ==========
      // watch the database ref for changes
      this.bruger.onSnapshot(snapshotData => {
        brugers = [];
  
        snapshotData.forEach(doc => {
          const brugersS = doc.data();
          brugersS.id = doc.id;
          brugers.push(brugersS);
          
        });
        // this.value1 = 0;
        // this.whatpage = 2;
        // // filter start på opstart
        // // checksideforrender
        // // Opslaggenerater2.checksideforrender(opslag, this.value1, this.whatpage)
        // new Opslaggenerater(opslag, this.value1, this.whatpage);
        // Opslaggenerater2.checksideforrender();
        // console.log(Opslaggenerater2)
      });
    }
    
    scoredatshit() {
        sortedp = []
        
        for (let i=0; i<brugers.length; i++) {
            let a = new Object()
            a.val = brugers[i].data.overall
            a.nr = i
            sortedp.push(a)
        }

        sortedarray = sortedp.sort(compareValues("val"))
        for (let i=0; i<brugers.length; i++) {
            this.bruger.doc(brugers[sortedarray[i].nr].id).set({
                    plads: i+1
                  }, { merge: true });
        }
        this.setuphieri();
    }

    setuphieri() {
        test = []
        for (let z=0; z<sortedarray.length; z++) {
            this.bruger.doc(brugers[sortedarray[z].nr].id).get().then(function(doc) {
                if (doc.exists) {
                    let c = new Object();
                    c.id = doc.id
                    c.plads = doc.data().plads
                    c.navn = doc.data().Nybruger.navn
                    c.img = doc.data().Nybruger.img
                    c.værdi = doc.data().data.overall.toFixed(2)
                    test.push(c)
                    if (z == test.length-1) {
                        showstuff(test)
                        document.getElementById("søgp").addEventListener("input", hedu)
                    }
                } else {
                    displads = "fejl!"
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        }
    }
  }

//   let searchInput = document.getElementById("søgp");
  function hedu() {
    testnew = []
    for (let g=0; g<sortedarray.length; g++) {
        let filterinput = test[g].navn.toLowerCase();
      if (filterinput.includes(document.getElementById("søgp").value.toLowerCase()))  {
        let c = new Object();
        c.id = test[g].id
        c.plads = test[g].plads
        c.navn = test[g].navn
        c.img = test[g].img
        c.værdi = test[g].værdi
        testnew.push(c)
      }
  }
  console.log(testnew)
  showstuff(testnew)
}
//   searchInput.addEventListener("input", function() {
//       let filterinput = disnavn.toLowerCase();
//       if (filterinput.includes(searchInput.value.toLowerCase()))  {
//           showstuff(displads, disnavn, disimg, disverdi);
//       }
//   })

  
  function showstuff(testS) {
    document.getElementById("scoreboardwrap").innerHTML = ""
    document.getElementById("andrebrugerdata").style.background = "none"
    for (let q=0; q<testS.length; q++) {
    
    document.getElementById("scoreboardwrap").innerHTML += `
    <div class="psp">
    <div>
    <div class="imgpsp">
    </div>
    <div id="infwrappsp">
    <p>${testS[q].navn}</p>
    <p>${testS[q].værdi}</p>
    </div>
    </div>
    <div id="pladswrappsp">
    <p>#${testS[q].plads}</p>
    </div>
    </div>
    </div>
    `;
    document.getElementsByClassName("imgpsp")[q].style.background = "url("+testS[q].img+")"
    document.getElementsByClassName("psp")[q].setAttribute('data-id', testS[q].id)
    }
    var base = document.getElementById("scoreboardwrap"); // the container for the variable content
    var selector = '.psp'; // any css selector for children
    
    base.addEventListener('click', function(event) {
      document.getElementById("andrebrugerdata").style.background = "rgba(0, 110, 0, 0.924)"
      var closest = event.target.closest(selector);
      if (closest && base.contains(closest)) {
        firebaseDB.collection("bruger").doc(event.target.getAttribute('data-id')).get().then(function(doc) {
        // handle class event
        
        document.getElementById('andrebrugerdata').innerHTML = `
        <p id="pnr">#${doc.data().plads}</p>
        <a id="closeS">X</a>
        <div class="pimgwrap">
        <div id="pimg2"></div>
        </div>
        <h2 id="pnavn">${doc.data().Nybruger.navn}</h2>
        <div id="pdatawrap">
        <div id="pbl"></div>
        <div class="pdata1">
        <div><p>Co2 aftryk:</p></div>
        <div><p>${(doc.data().data.overall).toFixed(2)} ton</p></div>
        </div>
        <div class="pdata">
        <div><p>Co2 Diesel pr. kg mælk:</p></div>
        <div><p>${(doc.data().data.diesel).toFixed(2)} kg</p></div>
        </div>
        <div class="pdata">
        <div><p>Co2 el pr. kg mælk:</p></div>
        <div><p>${(doc.data().data.el).toFixed(2)} kg</p></div>
        </div>
        <div class="pdata">
        <div><p>Co2 methan pr. kg mælk:</p></div>
        <div><p>${(doc.data().data.koerprut).toFixed(2)} kg</p></div>
        </div>
        <div class="pdata">
        <div><p>Co2 foder pr. kg mælk:</p></div>
        <div><p>${(doc.data().data.foder).toFixed(2)} kg</p></div>
        </div>
        </div>
        `;
        document.getElementById('andrebrugerdata').classList.add("nywrap")
        document.getElementById('pimg2').style.background = "url("+doc.data().Nybruger.img+")"
        document.getElementById("closeS").addEventListener("click", function() {
            console.log("hej")
            document.getElementById('andrebrugerdata').innerHTML = `
            <input type="text" placeholder="Søg" id="søgp">
            <div id="scoreboardwrap">
            </div>
            `;
            Updatesc.setuphieri();
            document.getElementById('andrebrugerdata').classList.remove("nywrap")
        })
    })
      }
    })
}

  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }


let Updatesc = new liveupdate2();
export default Updatesc;