  
var endDate = new Date("DEc 31, 2019 12:00:00").getTime(); 
  
var interv = setInterval(
    function() {  
        const calcMin = 3600000; //1000 * 60 * 60
        var diff = endDate - new Date().getTime(); 
        var days = Math.floor(diff / (calcMin * 24)); //funcion piso entero 
        var hours = Math.floor((diff %(calcMin * 24))/(calcMin)); 
        var mins = Math.floor((diff % calcMin) / (1000 * 60)); 
        var secs = Math.floor((diff % (1000 * 60)) / 1000); 

        document.getElementById("day").innerHTML =days ; 
        document.getElementById("hour").innerHTML =hours; 
        document.getElementById("minute").innerHTML = mins;  
        document.getElementById("second").innerHTML =secs;  
        
        if (diff < 0) { 
            clearInterval(interv); 
            document.getElementById("day").innerHTML ='0'; 
            document.getElementById("hour").innerHTML ='0'; 
            document.getElementById("minute").innerHTML ='0' ;  
            document.getElementById("second").innerHTML = '0';
        } 

     }, 1000); 
