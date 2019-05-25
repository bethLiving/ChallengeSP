function flip() {
    return Math.random() >= 0.5;
  }
  
function randomNumber(n) {
    if(n == undefined || n == ' ') 
        alert("you must enter a number"); 
        
    else if(n === 1) 
       return 0;

    else if(n <= 0) 
        alert("the number must be greater than zero");
    
    else if(n > 1000000)
         alert("the number must be lower than 1000 000");
    
    var maxVal = (n-1).toString(2).length;
    var numF;
    do {
      numF = parseInt(preRandom(maxVal), 2);
    } while (numF > (n-1));
    
    return numF;
  }

 function preRandom(val){
        numT = "";
        for (var i=0; i<val; i++) {
            if(flip())
                numT+= "1"
            else
                numT+= "0";
        }
        return numT;
      }     