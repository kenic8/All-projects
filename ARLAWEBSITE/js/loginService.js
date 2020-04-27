"use strict";
import {firebaseDB} from "./firebase.js";
import initialiseAfterSetup from "../main.js"
// import {beaconsService} from "./beaconService.js";
import {savedimgurl2} from "../main.js";


class opretbrugerservice {
  constructor() {
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    this.bruger = firebaseDB.collection("bruger")
    this.docRef;
  }


// export let docRef;
  // ========== FIREBASE AUTH ========== //
// Listen on authentication state change
init() {
firebase.auth().onAuthStateChanged(brugere => {
    if (brugere) { // if user exists and is authenticated
      this.userAuthenticated();
    } else { // if user is not logged in
      this.userNotAuthenticated();
    }
  });
}
  
  userAuthenticated() {
    let authUser = firebase.auth().currentUser;
    this.docRef = firebaseDB.collection("bruger").doc(authUser.uid);
    docRef = this.docRef;
    this.docRef.get().then(function(doc) {
    if (doc.exists) {
      document.location.href = "#home"
      document.getElementById("navwrap").classList.remove("active2")
      document.getElementsByClassName("sidebarbtn")[0].classList.add("toggle")
     
      document.getElementsByClassName("sidebarbtn")[0].style.display = "initial"
      document.getElementsByClassName("tabbar")[0].style.left = "0px"
      initialiseAfterSetup(doc.data());
    } else {
      document.location.href = "#opretBruger"
      document.getElementById("opretBruger").style.display = "inherit"
      document.getElementById("firebaseui-auth-container").style.display = "none"
    }

}).catch(function(error) {
    console.log("Error getting document:", error);
});
}
  
  userNotAuthenticated() {
    document.getElementsByClassName("sidebarbtn")[0].style.display = "none"
    document.getElementsByClassName("tabbar")[0].style.left = "-250px"
    document.getElementById("navwrap").classList.add("active2")
    document.location.href = "#login"

    // Firebase UI configuration
    const uiConfig = {
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
        {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false
        }
      ],
      signInSuccessUrl: "#login"
    };
    // Init Firebase UI Authentication
    console.log("hed")
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

logout() {
    firebase.auth().signOut();
}

sendbrugerdata() {
  console.log(savedimgurl2)
    this.navn = document.querySelector("#name").value;
    this.createbruger(this.navn, savedimgurl2);
    this.userAuthenticated();
}


createbruger(navn, savedimgurl2) {
  let Nybruger = {
    navn: navn,
    img: savedimgurl2
  };
  
  this.docRef.set({
    Nybruger
  }, { merge: true });
}

}

export let docRef;
// firebase.auth().signOut();
const opretbrugerservice2 = new opretbrugerservice();
export default opretbrugerservice2;
