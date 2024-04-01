var aBox = document.getElementById("a");
var bBox = document.getElementById("b");
var cBox = document.getElementById("c");
var aaBox = document.getElementById("aa");
var hBox = document.getElementById("h")
var kBox = document.getElementById("k")

var othereqn = document.getElementById("othereqn")
var eqn = document.getElementById("eqn");
var ref = document.getElementById("ref");
var vertex = document.getElementById("vertex");

var minmax = document.getElementById("minmax");
var minmaxval = document.getElementById("minmaxval");

var solns = document.getElementById("solns");
var fct = document.getElementById("fct");


function solveStandard() {
  var a = Number(aBox.value);
  var b = Number(bBox.value);
  var c = Number(cBox.value);
  var equation = a + "x² + " + b + "x + " + c;
  var refx = (-b / (2 * a));
  var vtx = a * (refx * refx) + (b * refx) + c
  if (a > 0) {
    var mm = ">";
  } else {
    var mm = "<";
  }
  var sol1 = Number((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a))
  var sol2 = Number((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a))
  if (a == 1) {
    var factored = `(x + ${-sol1})(x + ${-sol2})`
  }
  var h = -b / (2 * a);
  var k = (a * h * h) + (b * h) + c;
  var vertexForm = `${a}(x - ${h})² + ${k}`;

  
  eqn.innerHTML = "Equation: " + equation;
  othereqn.innerHTML = "Vertex form: " + vertexForm;
  ref.innerHTML = "AOS: " + refx
  vertex.innerHTML = "vertex: " + ("(" + refx + " , " + vtx + ")");
  minmax.innerHTML = mm;
  minmaxval.innerHTML = "min/max value: " + vtx;
  if (sol1 == sol2) {
    solns.innerHTML = "Solutions: " + sol1;
  } else {
    solns.innerHTML = "Solutions: " + sol1 + " and " + sol2;
  }
  fct.innerHTML = "Factored: " + factored;
}

function solveVertex() {
  var a = Number(aaBox.value);
  var h = Number(hBox.value);
  var k = Number(kBox.value);
  var equation = a + "(x - " + h + ")² + " + k;
  var refx = h;
  var vtx = k;
  if (aa > 0) {
    var mm = ">";
  } else {
    var mm = "<";
  }
  var b = -2 * a * h;
  var c = a * (h ** 2) + k;
  var standardForm = `${a}x^2 + ${b}x + ${c}`;
  
  eqn.innerHTML = "Equation: " + equation;
  othereqn.innerHTML = "Standard form: " + standardForm;
  ref.innerHTML = "AOS: " + refx
  vertex.innerHTML = "vertex: " + ("(" + refx + " , " + vtx + ")");
}

function showhide() {
  var calc = document.getElementById("calc");
  if (calc.hidden == true) {
    calc.hidden = false;
  } else {
    calc.hidden = true;
  }
}

function inst() {
  window.location.href = "inst/inst.html";
}
