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
  document.getElementById("AboutUs").innerHTML +='<div class="JsView"><h2>E-mail: salon@samochodowy.com</h2>';
  
}

function WizytaView() {
  clear()
  document.getElementById("form").style.display = "block";
}

function Marka() {
  let i = length - 1;
  document.getElementById("SideBar").innerHTML = "Dostępne Marki:";
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
    document.getElementById("SideBar").innerHTML += '<h4>' + MarkaNoReapet[a] + '</h4>';
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
      i--
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
    document.getElementById("SideBar").innerHTML += '<h4>' + NadwozieNR[a] + '</h4>';
    a --;
    MarkView();
  }};
}

function clear() {
  document.getElementById("AboutUs").innerHTML = "<div></div>";
  document.getElementById("form").style.display = "none";
  
}
