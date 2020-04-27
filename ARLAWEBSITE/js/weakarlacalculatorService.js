import { firebaseDB } from "./firebase.js";
import opretbrugerservice2 from "../js/loginService.js";
let docRef;
class Opretbrugerservice {
  constructor() {}
  tureperår = 12;

  // km
  kmfodertransport = 35;

  // liter
  DiselperKm = 0.883;
  Diselpertur = this.DiselperKm * this.kmfodertransport;
  Diselperårture = this.Diselpertur * this.tureperår;

  // kg
  Co2perLiterDiesel = 2.66;
  Co2perkwh = 0.15;
  co2perårture = this.Diselperårture * this.Co2perLiterDiesel;

  // om året stadig kg
  Co2perKoprut = 2600;

  //   InputMelk = "";
  //   InputKwh = "";
  //   Inputkøer = "";
  //   InputDisel = "";

  calculateandupdate() {
    this.InputMelk = document.getElementById("mælk").value;
    this.InputKwh = document.querySelector("#el").value;
    this.Inputkøer = document.querySelector("#koer").value;
    this.InputDisel = document.querySelector("#diesel").value;

    this.calcCo2Diesel = (this.InputDisel * this.Co2perLiterDiesel) / this.InputMelk;
    this.calcCo2Strom = (this.Co2perkwh * this.InputKwh) / this.InputMelk;
    this.calcCo2Prut = (this.Co2perKoprut * this.Inputkøer) / this.InputMelk;
    this.calcCo2perfodertranport = this.co2perårture / this.InputMelk;
    this.Co2orall = ((this.calcCo2perfodertranport+this.calcCo2Prut+this.calcCo2Strom+this.calcCo2Diesel) * this.InputMelk) / 1000;

    console.log(
      this.calcCo2Diesel,
      this.calcCo2Strom,
      this.calcCo2Prut,
      this.calcCo2perfodertranport,
      this.Co2orall
    );
    this.sendCalcData(
        this.calcCo2Diesel,
        this.calcCo2Strom,
        this.calcCo2Prut,
        this.calcCo2perfodertranport,
        this.Co2orall
    );
  }

  sendCalcData(
    calcCo2Diesel,
    calcCo2Strom,
    calcCo2Prut,
    calcCo2perfodertranport,
    Co2orall
  ) {
    let data = {
      diesel: calcCo2Diesel,
      el: calcCo2Strom,
      koerprut: calcCo2Prut,
      foder: calcCo2perfodertranport,
      overall: Co2orall
    };
    this.authUser = firebase.auth().currentUser;
    this.docRef = firebaseDB.collection("bruger").doc(this.authUser.uid);

    this.docRef.set({
        data
      }, { merge: true });
  }
}
export let data;
let calculator = new Opretbrugerservice();
export default calculator;
