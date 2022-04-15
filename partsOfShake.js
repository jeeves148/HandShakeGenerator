function handShakeGenerator() {
  //declaring variables
  var l = document.getElementById("length").value;
  var ob = document.getElementById("output-box");

  function output(i, type) {
    var output = document.createElement(type);
    document.body.ob.appendChild(output);
    output.innerHTML += i;
  }

  output("hand shake:", "h1");

  output.innerHTML = " ";

  var partsOfShake = [
    "high five",
    "low five",
    "Fist bump",
    "finger guns",
    "back hand",
    "click",
    "wind mill",
    "head nod",
  ];

  //how long the user wants the hand shake to be
  for (let i = 0; i < l; i++) {
    //generate random from array
    const partOfShake = Math.floor(Math.random() * partsOfShake.length);
    theGesture = partsOfShake[partOfShake];

    console.log(partOfShake, theGesture);

    //printing
    output(theGesture, "p");
  }
}
