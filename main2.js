
function poista1(event){
    event.preventDefault();

    const varoitus = window.confirm("Oletko varma että haluat poistaa tämän äänestyksen?")

    if(varoitus){

    

    const poisto = document.getElementById("aanestys1")

    if(poisto){
        poisto.remove();
    }
    }
}




function poista2(){


    const varoitus = window.confirm("Oletko varma että haluat poistaa tämän äänestyksen?")

    if(varoitus){

    

    const poisto = document.getElementById("aanestys2")

    if(poisto){
        poisto.remove();
    }
    }
}




function poista3(){

    const varoitus = window.confirm("Oletko varma että haluat poistaa tämän äänestyksen?")

    if(varoitus){

    

    const poisto = document.getElementById("aanestys3")

    if(poisto){
        poisto.remove();
    }
    }
}