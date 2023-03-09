var sale = [
  ["Car", 2023, "Audi", "Car1.jpg"],
  ["Car", 2018, "Skoda", "Car2.jpg"],
  ["Car", 2022, "Toyota", "Car3.jpg"],
  ["Car", 2018, "Aston Martin", "Car4.jpg"],
  ["Car", 2022, "BMW", "Car5.jpg"],
  ["Sport", 2016, "Lambo", "Sport1.jpg"],
  ["Sport", 1954, "Alpine", "Sport2.jpg"],
  ["Sport", 2012, "Cobra", "Sport3.jpg"],
  ["Sport", 2022, "Mercedes", "Sport4.jpg"],
  ["Sport", 2018, "Porsche", "Sport5.jpg"],
  ["Sport", 1967, "Mustang", "Sport6.jpg"],
  ["Truck", 2015, "Man", "Truck1.jpg"],
  ["Truck", 2012, "Scania", "Truck2.jpg"],
  ["Truck", 1948, "Chevy", "Truck3.jpg"],
  ["Bike", 2016, "Harley", "Bike1.jpg"],
  ["Bike", 1998, "Guzzi", "Bike2.jpg"],
  ["Bike", 2018, "Forty", "Bike3.jpg"],
  ["Bike", 2022, "Harley", "Bike4.jpg"]
];
let MarkaNoReapet = [];
let Mark = [];
let NadwozieNR = [];
let RocznikNR = [];
let length = sale.length;
let Mlength = MarkaNoReapet.length;
let Nlength = NadwozieNR.length;



function OffertView() {
  let i = length - 1;
  clear();
  OffertViewReplay();
  
  function OffertViewReplay() {
    if (i > -1) {
      document.getElementById("AboutUs").innerHTML +=
        '<div class="JsView"><h2>' +
        sale[i][2] +
        '</h2><img src="/Image/' +
        sale[i][3] +
        '"><p>' +
        sale[i][1] +
        "<br>" +
        sale[i][2] +
        "</br></p></div>";
      i--;
      OffertViewReplay();
    }
  }
}

function KontaktView() {
  clear();
  document.getElementById("AboutUs").innerHTML +='<div class="JsView"><h2>Salon Samochodowy</h2><img src="/Image/Parking.jpg">';
  document.getElementById("AboutUs").innerHTML +='<div class="JsView"><h2>Telefon 123-123-123</h2>';
  document.getElementById("AboutUs").innerHTML +='<div class="JsView"><h2>E-mail: salon@ samochodowy.com</h2>';
  
}

function WizytaView() {
  clear()
  document.getElementById("form").style.display = "block";
}

function Marka() {
  let i = length - 1;
  document.getElementById("SideBar").innerHTML = "";
  MarkaCount()
  function MarkaCount() {
    if (i > -1) {
      MarkaNoReapet.push(sale[i][2]);
      i--
      MarkaCount();
    }
  };
  let uniqueSet = new Set(MarkaNoReapet);
  MarkaNoReapet = [...uniqueSet];
  MarkaNoReapet.sort();
  MarkaNoReapet.reverse();
  let a = MarkaNoReapet.length -1;
  MarkView()
  function MarkView() {
    if (a > -1) {
    document.getElementById("SideBar").innerHTML += '<a id="' + MarkaNoReapet[a] + '" onclick="ViewMarka(this.id)"><h4>' + MarkaNoReapet[a] + '</h4></a>';
    a --;
    MarkView();
  }};
}

function Nadwozia() {
  let i = length -1;
  document.getElementById("SideBar").innerHTML = "";
  NadwozieCount()
  function NadwozieCount() {
    if (i > -1) {
      NadwozieNR.push(sale[i][0]);
      i--;
      NadwozieCount();
    }
  };
  let uniqueSet = new Set(NadwozieNR);
  NadwozieNR = [...uniqueSet];
  NadwozieNR.sort();
  NadwozieNR.reverse();
  let a = NadwozieNR.length -1;
  MarkView()
  function MarkView() {
    if (a > -1) {
    document.getElementById("SideBar").innerHTML += '<a id="' + NadwozieNR[a] + '" onclick="VievNadwozia(this.id)"><h4>' + NadwozieNR[a] + '</h4></a>';
    a --;
    MarkView();
  }};
};
function Rocznik() {
  let i = length -1;
  document.getElementById("SideBar").innerHTML = "";
  RocznikCount();
  function RocznikCount () {
    if (i > -1) {
      RocznikNR.push(sale[i][1]);
      i--;
      RocznikCount();
    }
  };
  let uniqueSet = new Set(RocznikNR);
  RocznikNR = [...uniqueSet];
  RocznikNR.sort();
  RocznikNR.reverse();
  let a = RocznikNR.length -1;
  RocznikView()
  function RocznikView() {
    if (a > -1) {
      document.getElementById("SideBar").innerHTML += '<a id="' + RocznikNR[a] + '" onclick="ViewRocznik(this.id)"><h4>' + RocznikNR[a] + '</h4></a>';
      a --;
      RocznikView();
    }
  }
}
function VievNadwozia(ClickedId) {
  let i = length - 1;
  clear();
  OffertViewNadwozia();
  function OffertViewNadwozia(Id) {
    let temp = sale[i][0];
    let result = ClickedId.localeCompare(temp);
    if (i > -1 && result == 0) {
      document.getElementById("AboutUs").innerHTML +=
        '<div class="JsView"><h2>' +
        sale[i][2] +
        '</h2><img src="/Image/' +
        sale[i][3] +
        '"><p>' +
        sale[i][1] +
        "<br>" +
        sale[i][2] +
        "</br></p></div>";
      i--;
      OffertViewNadwozia();
  } else {
    i--;
    OffertViewNadwozia();
  }
  }
}
function ViewRocznik(ClickedId,) {
  let i = length - 1;
  clear();
  OffertViewRocznik();
  function OffertViewRocznik() {
    let temp = sale[i][1];
    let result = ClickedId.localeCompare(temp);
    if (i>-1 && result == 0) {
      document.getElementById("AboutUs").innerHTML +=
        '<div class="JsView"><h2>' +
        sale[i][2] +
        '</h2><img src="/Image/' +
        sale[i][3] +
        '"><p>' +
        sale[i][1] +
        "<br>" +
        sale[i][2] +
        "</br></p></div>";
      i--;
      OffertViewRocznik();
    }
    else {
      i--;
      OffertViewRocznik();
    }
  }
}

function ViewMarka(ClickedId,) {
  let i = length - 1;
  clear();
  OffertViewMarka();
  function OffertViewMarka() {
    let temp = sale[i][2];
    let result = ClickedId.localeCompare(temp);
    if (i>-1 && result == 0) {
      document.getElementById("AboutUs").innerHTML +=
        '<div class="JsView"><h2>' +
        sale[i][2] +
        '</h2><img src="/Image/' +
        sale[i][3] +
        '"><p>' +
        sale[i][1] +
        "<br>" +
        sale[i][2] +
        "</br></p></div>";
      i--;
      OffertViewMarka();
    }
    else {
      i--;
      OffertViewMarka();
    }
  }
}

function clear() {
  document.getElementById("AboutUs").innerHTML = "<div></div>";
  document.getElementById("form").style.display = "none";
  
}
