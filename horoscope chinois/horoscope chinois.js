exports.action = function(data){

JarvisAskMe('tu es né en quelle année ...',function(result){
    console.log("donc vous êtes né en : "+result.trim())

  var result=result
    
function getpet (result) {

        var toyear = 1901;
        var birthyear = result;
     
        x = (toyear - birthyear) % 12
        if ((x == 11) || (x == -1)) { birthpet="Tigre"}
        if ((x == 10) || (x == -2)) { birthpet="lapin"}
        if ((x == 9) || (x == -3))  { birthpet="Dragon"}
        if ((x == 8) || (x == -4))  { birthpet="Serpent"}
        if ((x == 7) || (x == -5))  { birthpet="Cheval"}
        if ((x == 6) || (x == -6))  { birthpet="Chèvre"}
        if ((x == 5) || (x == -7))  { birthpet="Singe"}
        if ((x == 4) || (x == -8))  { birthpet="Coq"}
        if ((x == 3) || (x == -9))  { birthpet="Chien"}
        if ((x == 2) || (x == -10))  { birthpet="Cochon"}  
        if ((x == 1) || (x == -11)) { birthpet="Rat"}
        if (x == 0){birthpet="Buffle"}
        
            console.log(birthpet);
        JarvisIASpeech("Votre signe chinois est le ... "+birthpet);
}
  getpet (result)
return  
})//fin ask
}