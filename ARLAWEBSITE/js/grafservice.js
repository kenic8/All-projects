export default function initgraf(brugerdata) {
    let _diesel = [
      {
        Year: "2001",
        Co2: brugerdata.diesel,
      },
      {
        Year: "2002",
        Co2: brugerdata.diesel,
      },
      {
        Year: "2003",
        Co2: brugerdata.diesel,
      },
      {
        Year: "2004",
        Co2: brugerdata.diesel,
      },
      {
        Year: "2005",
        Co2: brugerdata.diesel,
      },
    ];
  

  
    // Array af co2 udslip per år med el og varm
    let _strømOgVarm = [
      {
        Year: "2001",
        Co2: brugerdata.el,
      },
      {
        Year: "2002",
        Co2: brugerdata.el,
      },
      {
        Year: "2003",
        Co2: brugerdata.el,
      },
      {
        Year: "2004",
        Co2: brugerdata.el,
      },
      {
        Year: "2005",
        Co2: brugerdata.el,
      },
    ];
  
  
    // Array af co2 udslip per år med ko fordøjelse - metan
    let _metan = [
      {
        Year: "2001",
        Co2: brugerdata.koerprut,
      },
      {
        Year: "2002",
        Co2: brugerdata.koerprut,
      },
      {
        Year: "2003",
        Co2: brugerdata.koerprut,
      },
      {
        Year: "2004",
        Co2: brugerdata.koerprut,
      },
      {
        Year: "2005",
        Co2: brugerdata.koerprut,
      },
    ];
  
  
    // Array af co2 udslip per år med importerede foder
    let _foder = [
      {
        Year: "2001",
        Co2: brugerdata.foder,
      },
      {
        Year: "2002",
        Co2: brugerdata.foder,
      },
      {
        Year: "2003",
        Co2: brugerdata.foder,
      },
      {
        Year: "2004",
        Co2: brugerdata.foder,
      },
      {
        Year: "2005",
        Co2: brugerdata.foder,
      },
    ];

  
    // array data i ton af C02 udslip for hvert år
    let _ton = [
      {
        Year: "2001",
        Co2: brugerdata.overall,
      },
      {
        Year: "2002",
        Co2: brugerdata.overall,
      },
      {
        Year: "2003",
        Co2: brugerdata.overall,
      },
      {
        Year: "2004",
        Co2: brugerdata.overall,
      },
      {
        Year: "2005",
        Co2: brugerdata.overall,
      },
    ];
  
    // 2: udarbejde data til graf
    // adskille objektet af array til Year og Co2
    // sådan at chart.js kan læse data
    function prepareData(data) {
      // laver to tomme array for at gemme data
      let Year = [];
      let Co2 = [];
      // loop igennem global array data
      for (const udslipObject of data) {
        // tilføj værdier til de forskellige tomme array
        Year.push(udslipObject.Year);
        Co2.push(udslipObject.Co2);
      }
      // return de to arrays (years & co2) ind til objektet
      return {
        Year,
        Co2,
      };
    }
  
    // 3: kald grafen
    function appendChart() {
      // bruge prepareData() for at hente data
      let diesel = prepareData(_diesel);
      let strømOgVarm = prepareData(_strømOgVarm);
      let foder = prepareData(_foder);
      let metan = prepareData(_metan);

      //-----UDSLIP I KG FOR DEN TOTALE TAL FORDELT IGENNEM ÅRENE SOM ER VIST PÅ GRAFEN
  
      let kgUdslipTal = document.getElementById("kgUdslipTal");
      let chart = new Chart(kgUdslipTal, {
        // den type graf man vil lave
        type: "line",
        // data er for den dataset man vil hente
        data: {
          labels: diesel.Year, // referere til data objektet, der indholder data fra prepareData(). Her henter bare årstal til at sætte som label ellers kan selv skriv det manuelt
          datasets: [
            // første dataset
            {
              data: diesel.Co2, // referere til data objektet, der indholder data fra prepareData()
              fill: false,
              label: "Diesel",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "#ffcc32",
            },
            // andet dataset
            {
              data: strømOgVarm.Co2,
              fill: false,
              label: "Strøm og Varm",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "#4bb131",
            },
            // tredje dataset
            {
              data: foder.Co2,
              fill: false,
              label: "Foder",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "#006c3a",
            },
            // fjerde dataset
            {
              data: metan.Co2,
              fill: false,
              label: "Ko fordøjelse, Metan",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "#7c8180",
            },
          ],
        },
        // Konfigurationer af "options"
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          scales: {
            xAxes: [
              {
                display: true,
                ticks: {
                  fontSize: 15,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Year", //FINDE UD AF OM KAN FLYTTES TIL ENDEN AF X-AKSEN------------------SKAL KIGGES PÅ!!!
                  fontSize: 15,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  fontSize: 15,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Kg", //FINDE UD AF OM KAN FLYTTES TIL ENDEN AF Y-AKSEN------------------SKAL KIGGES PÅ!!!
                  fontSize: 15,
                },
              },
            ],
          },
        },
      });
    }
  
    appendChart();
  
    //-----UDSLIP I TON FOR DEN TOTALE TAL FORDELT IGENNEM ÅRENE SOM ER VIST PÅ GRAFEN
  
    function tonChart() {
      // bruge prepareData() for at hente data
  
      let ton = prepareData(_ton);
  
      //-----UDSLIP I KG FOR DEN TOTALE TAL FORDELT IGENNEM ÅRENE SOM ER VIST PÅ GRAFEN
  
      let tonTal = document.getElementById("tonTal");
      let chart = new Chart(tonTal, {
        // den type graf man vil lave
        type: "line",
        // data er for den dataset man vil hente
        data: {
          labels: ton.Year, // referere til data objektet, der indholder data fra prepareData(). Her henter bare årstal til at sætte som label ellers kan selv skriv det manuelt
          datasets: [
            {
              data: ton.Co2, // referere til data objektet, der indholder data fra prepareData()
              fill: false,
              label: "Total Udslip i Ton",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "#006c3a",
            },
          ],
        },
        // Konfigurationer af "options"
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          scales: {
            xAxes: [
              {
                display: true,
                ticks: {
                  fontSize: 15,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Year", //FINDE UD AF OM KAN FLYTTES TIL ENDEN AF X-AKSEN------------------SKAL KIGGES PÅ!!!
                  fontSize: 15,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  fontSize: 15,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Ton", //FINDE UD AF OM KAN FLYTTES TIL ENDEN AF Y-AKSEN------------------SKAL KIGGES PÅ!!!
                  fontSize: 15,
                },
              },
            ],
          },
        },
      });
    }
  
    tonChart();
  }