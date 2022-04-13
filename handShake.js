function handShakeGenerator()
{
    //declaring variables
    var l = document.getElementById("length").value;
    var output = document.getElementById("output");

    output.innerHTML = " ";

    var partsOfShake = new Array("Fist bump" , "High five" , "Low five" , "Elbow bump")

    //how long the user wants the hand shake to be
    for (let i = 0; i < l; i++) {
        
        //generate random from array
        const partOfShake = Math.floor(Math.random() * partsOfShake.length);
        console.log(partOfShake , partsOfShake[partOfShake]);    
        
        //printing 
        output.innerHTML += partsOfShake[partOfShake] + "\n";        
    }

}


