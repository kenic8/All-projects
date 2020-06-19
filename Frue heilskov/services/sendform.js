class Sendform {
  constructor() {
  }

  createForm() {
      document.getElementById("Fname").value = "\xa0"+document.getElementById("fname").value
      document.getElementById("Femail").value = "\xa0"+document.getElementById("femail").value
      document.getElementById("Ftlf").value = "\xa0"+document.getElementById("ftlf").value
      document.getElementById("Fbesked").value = document.getElementById("textarea").value
      document.getElementById("Fextra").value = "ekstra rengøring:\xa0"
      for (let i = 0; i<document.getElementsByClassName("checkbox").length; i++) {
        if (document.getElementsByClassName("checkbox")[i].checked) {
          document.getElementById("Fextra").value += document.getElementsByClassName("checkbox")[i].value+",\xa0"
        }
      }
      console.log(document.getElementById("Fextra").value);
      this.sendform()
  }

  sendform() {
    emailjs.init("user_7OlbNMQJxuiGzEYzNmtRN");
    // email JS user id  -- Sikkerheds acesstoken til SMTP SERVICE
  
  
          // email.js service CdN med Hendes  ( id, og hvilken "email form vi bruger")
          emailjs.sendForm('fru_heilskov_reng_ring', 'template_AoF9pWqk', document.getElementById("formama"));
          alert("Alert Så der sendt, måske en catch error her ved fejl")
      };
  


}




const sendform = new Sendform();
export default sendform;



//   <form style="display: none;">
//   <input type="text" id="Fname" name="Fname">
//   <input type="text" id="Femail" name="Femail">
//   <input type="text" id="Ftlf" name="Ftlf">
//   <input type="text" id="Fextra" name="Fextra">
//   <input type="text" id="Fbesked" name="Fbesked">
// </form>