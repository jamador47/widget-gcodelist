              if (idnum == contadordelinea)
                {

            
                    //MESA A SUBIR

//TERMINAN POSICIONADORES

                    var gcodeline = this.gcode.lines[idnum-1];
                    var gcodelineplus = this.gcode.lines[idnum];
                    var gcodelineplusp = this.gcode.lines[idnum+1];

         /*
                   if (gcodeline.match(/A/i)) {

                            if(aentrabajo != 1){
                                var cmd  = "!";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                        var cmd  = "Revisando A";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

                          var cmd  = gcodeline;
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

                                var HttpClient = function() {
                  this.get = function(aUrl, aCallback) {
                      var anHttpRequest = new XMLHttpRequest();
                      anHttpRequest.onreadystatechange = function() {
                          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                              aCallback(anHttpRequest.responseText);
                      }
                      anHttpRequest.open("GET", aUrl, true);
                      anHttpRequest.send(null);
                  }
              }
              var theurl = 'http://192.168.0.98/api/estados';
              var client = new HttpClient();
              client.get(theurl, function(response) {
    var obj = JSON.parse(response);
                                
                        if (parseInt(obj['I']["307"]) != 0 && parseInt(obj['I']["306"]) != 0 && parseInt(obj['I']["309"]) != 0 && parseInt(obj['I']["310"]) != 0){
                        aentrabajo = 1;
                        yentrabajo=0;
                        var cmd  = "~";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                        }
                        else{
                            var erroresexistentes = document.getElementById("textoerrores").value;
             
             erroresexistentes = erroresexistentes.concat("\\\n\\\n");
             
             erroresexistentes = erroresexistentes.concat("Mesa A No esta lista para ser llamada por Código G, Error de Movimiento");
             
             document.getElementById("textoerrores").value = erroresexistentes;
                 document.getElementById("indicadorerrorejec").className = "led-red";

                        }
                    });}


                    }
                    

                    
                    if (gcodeline.match(/Y/i)){
                        if(yentrabajo != 1){
                            var cmd  = "!";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                        var cmd  = "Revisando Y";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

                          var cmd  = gcodeline;
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

                            var HttpClient = function() {
                  this.get = function(aUrl, aCallback) {
                      var anHttpRequest = new XMLHttpRequest();
                      anHttpRequest.onreadystatechange = function() {
                          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                              aCallback(anHttpRequest.responseText);
                      }
                      anHttpRequest.open("GET", aUrl, true);
                      anHttpRequest.send(null);
                  }
              }
              var theurl = 'http://192.168.0.98/api/estados';
              var client = new HttpClient();
              client.get(theurl, function(response) { 
    var obj = JSON.parse(response);
                               
                        if ( parseInt(obj['I']["259"]) != 0 && parseInt(obj['I']["258"]) != 0 && parseInt(obj['I']["261"]) != 0 && parseInt(obj['I']["262"]) != 0){
                        yentrabajo = 1;
                        aentrabajo=0;
                        var cmd  = "~";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                        }
                        else{
                            var erroresexistentes = document.getElementById("textoerrores").value;
             
             erroresexistentes = erroresexistentes.concat("\\\n\\\n");
             
             erroresexistentes = erroresexistentes.concat("Mesa Y No esta lista para ser llamada por Código G, Error de Movimiento");
             
             document.getElementById("textoerrores").value = erroresexistentes;
    document.getElementById("indicadorerrorejec").className = "led-red";
                        }
                            
                    });}


                    }*/

                    if (gcodelineplus.match(/\bM6\b/i) || gcodelineplus.match(/\bM3\b/i) || gcodelineplus.match(/\bM67\b/i) 
                    || gcodelineplus.match(/\bM58\b/i) || gcodelineplus.match(/\bM57\b/i) ||  gcodelineplus.match(/\bM68\b/i)
      || gcodelineplus.match(/\bM5\b/i) || gcodelineplus.match(/\bM199\b/i) || gcodelineplus.match(/\bM116\b/i) || 
        gcodelineplus.match(/\bM115\b/i) || gcodelineplus.match(/\bM114\b/i) || gcodelineplus.match(/\bM113\b/i) || gcodelineplus.match(/\bM112\b/i) ||
         gcodelineplus.match(/\bM111\b/i) || gcodelineplus.match(/\bM110\b/i) || gcodelineplus.match(/\bM109\b/i) || gcodelineplus.match(/\bM108\b/i) ||
          gcodelineplus.match(/\bM107\b/i) || gcodelineplus.match(/\bM106\b/i) || gcodelineplus.match(/\bM105\b/i) || gcodelineplus.match(/\bM104\b/i) || 
          gcodelineplus.match(/\bM103\b/i) || gcodelineplus.match(/\bM102\b/i) || gcodelineplus.match(/\bM101\b/i) || gcodelineplus.match(/\bM100\b/i) || 
          gcodelineplus.match(/\bM22\b/i) || gcodelineplus.match(/\bM12\b/i) || gcodelineplus.match(/\bM9\b/i) || gcodelineplus.match(/\bM8\b/i) || 
          gcodelineplus.match(/\bM701\b/i) || gcodelineplus.match(/\bM20\b/i) || gcodelineplus.match(/\bM10\b/i)|| gcodelineplusp.match(/\bM6\b/i) || gcodelineplusp.match(/\bM3\b/i) || gcodelineplusp.match(/\bM67\b/i) 
                    || gcodelineplusp.match(/\bM58\b/i) || gcodelineplusp.match(/\bM57\b/i) ||  gcodelineplusp.match(/\bM68\b/i)
      || gcodelineplusp.match(/\bM5\b/i) || gcodelineplusp.match(/\bM199\b/i) || gcodelineplusp.match(/\bM116\b/i) || 
        gcodelineplusp.match(/\bM115\b/i) || gcodelineplusp.match(/\bM114\b/i) || gcodelineplusp.match(/\bM113\b/i) || gcodelineplusp.match(/\bM112\b/i) ||
         gcodelineplusp.match(/\bM111\b/i) || gcodelineplusp.match(/\bM110\b/i) || gcodelineplusp.match(/\bM109\b/i) || gcodelineplusp.match(/\bM108\b/i) ||
          gcodelineplusp.match(/\bM107\b/i) || gcodelineplusp.match(/\bM106\b/i) || gcodelineplusp.match(/\bM105\b/i) || gcodelineplusp.match(/\bM104\b/i) || 
          gcodelineplusp.match(/\bM103\b/i) || gcodelineplusp.match(/\bM102\b/i) || gcodelineplusp.match(/\bM101\b/i) || gcodelineplusp.match(/\bM100\b/i) || 
          gcodelineplusp.match(/\bM22\b/i) || gcodelineplusp.match(/\bM12\b/i) || gcodelineplusp.match(/\bM9\b/i) || gcodelineplusp.match(/\bM8\b/i) || 
          gcodelineplusp.match(/\bM701\b/i) || gcodelineplusp.match(/\bM20\b/i) || gcodelineplusp.match(/\bM10\b/i))  {

            if( gcodelineplus.match(/\bM57\b/i) || gcodelineplusp.match(/\bM57\b/i)){

                var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

              
 var cmd  = "Revisando A";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + " " + cmd);
 var HttpClient = function() {
this.get = function(aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function() {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/api/estados';
var client = new HttpClient();
client.get(theurl, function(response) {
var obj = JSON.parse(response);
 
if (parseInt(obj['I']["307"]) != 0 && parseInt(obj['I']["306"]) != 0 && parseInt(obj['I']["309"]) != 0 && parseInt(obj['I']["310"]) != 0){
aentrabajo = 1;
yentrabajo=0;
var cmd  = "~";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

}
else{

 sigespecial = 1;
 var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Mesa A No esta lista para ser llamada por Código G, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";

}
});


}


           
           if( gcodelineplus.match(/\bM58\b/i) || gcodelineplusp.match(/\bM58\b/i)  ){
        
            var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);


                         var cmd  = "Revisando Y";
                     chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf "+ " " + cmd);

                  
                         var HttpClient = function() {
               this.get = function(aUrl, aCallback) {
                   var anHttpRequest = new XMLHttpRequest();
                   anHttpRequest.onreadystatechange = function() {
                       if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                           aCallback(anHttpRequest.responseText);
                   }
                   anHttpRequest.open("GET", aUrl, true);
                   anHttpRequest.send(null);
               }
           }
           var theurl = 'http://192.168.0.98/api/estados';
           var client = new HttpClient();
           client.get(theurl, function(response) { 
 var obj = JSON.parse(response);
                            
                     if ( parseInt(obj['I']["259"]) != 0 && parseInt(obj['I']["258"]) != 0 && parseInt(obj['I']["261"]) != 0 && parseInt(obj['I']["262"]) != 0){
                     yentrabajo = 1;
                     aentrabajo=0;
                     var cmd  = "~";
                     chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                   
                      }
                     else{
                         var cmd  = "!";
                     chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                   
                         sigespecial=1;
                         var erroresexistentes = document.getElementById("textoerrores").value;
          
          erroresexistentes = erroresexistentes.concat("\\\n\\\n");
          
          erroresexistentes = erroresexistentes.concat("Mesa Y No esta lista para ser llamada por Código G, Error de Movimiento");
          
          document.getElementById("textoerrores").value = erroresexistentes;
 document.getElementById("indicadorerrorejec").className = "led-red";
                     }
                         
                 });


           }


         sigespecial = 1;

            

          }
          else{
              sigespecial = 0;

              if( gcodelineplus.match(/\bA\b/i) ){

if(aentrabajo != 1){  
    var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
var cmd  = "Revisando A";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + " " + cmd);

    var HttpClient = function() {
this.get = function(aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function() {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
  aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/api/estados';
var client = new HttpClient();
client.get(theurl, function(response) {
var obj = JSON.parse(response);
    
if (parseInt(obj['I']["307"]) != 0 && parseInt(obj['I']["306"]) != 0 && parseInt(obj['I']["309"]) != 0 && parseInt(obj['I']["310"]) != 0){
aentrabajo = 1;
yentrabajo=0;
var cmd  = "~";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

}
else{

    sigespecial = 1;
    var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Mesa A No esta lista para ser llamada por Código G, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";

}
});}


}


              
              if( gcodelineplus.match(/\bY\b/i) ){
                if(yentrabajo != 1){
                            var cmd  = "!";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                        var cmd  = "Revisando Y";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " +  " " + cmd);

                       
                            var HttpClient = function() {
                  this.get = function(aUrl, aCallback) {
                      var anHttpRequest = new XMLHttpRequest();
                      anHttpRequest.onreadystatechange = function() {
                          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                              aCallback(anHttpRequest.responseText);
                      }
                      anHttpRequest.open("GET", aUrl, true);
                      anHttpRequest.send(null);
                  }
              }
              var theurl = 'http://192.168.0.98/api/estados';
              var client = new HttpClient();
              client.get(theurl, function(response) { 
    var obj = JSON.parse(response);
                               
                        if ( parseInt(obj['I']["259"]) != 0 && parseInt(obj['I']["258"]) != 0 && parseInt(obj['I']["261"]) != 0 && parseInt(obj['I']["262"]) != 0){
                        yentrabajo = 1;
                        aentrabajo=0;
                        var cmd  = "~";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

                         }
                        else{
                            sigespecial=1;
                            var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                            var erroresexistentes = document.getElementById("textoerrores").value;
             
             erroresexistentes = erroresexistentes.concat("\\\n\\\n");
             
             erroresexistentes = erroresexistentes.concat("Mesa Y No esta lista para ser llamada por Código G, Error de Movimiento");
             
             document.getElementById("textoerrores").value = erroresexistentes;
    document.getElementById("indicadorerrorejec").className = "led-red";
                        }
                            
                    });}


              }



          }
                    

                    if (gcodeline.match(/\bM6\b/i) || gcodeline.match(/\bM3\b/i) || gcodeline.match(/\bM67\b/i) 
                    || gcodeline.match(/\bM58\b/i) || gcodeline.match(/\bM57\b/i) ||  gcodeline.match(/\bM68\b/i)
      || gcodeline.match(/\bM5\b/i) || gcodeline.match(/\bM199\b/i) || gcodeline.match(/\bM116\b/i) || 
        gcodeline.match(/\bM115\b/i) || gcodeline.match(/\bM114\b/i) || gcodeline.match(/\bM113\b/i) || gcodeline.match(/\bM112\b/i) ||
         gcodeline.match(/\bM111\b/i) || gcodeline.match(/\bM110\b/i) || gcodeline.match(/\bM109\b/i) || gcodeline.match(/\bM108\b/i) ||
          gcodeline.match(/\bM107\b/i) || gcodeline.match(/\bM106\b/i) || gcodeline.match(/\bM105\b/i) || gcodeline.match(/\bM104\b/i) || 
          gcodeline.match(/\bM103\b/i) || gcodeline.match(/\bM102\b/i) || gcodeline.match(/\bM101\b/i) || gcodeline.match(/\bM100\b/i) || 
          gcodeline.match(/\bM22\b/i) || gcodeline.match(/\bM12\b/i) || gcodeline.match(/\bM9\b/i) || gcodeline.match(/\bM8\b/i) || 
          gcodeline.match(/\bM701\b/i) || gcodeline.match(/\bM20\b/i) || gcodeline.match(/\bM10\b/i) )  {
                    

           
ocupado = 1;

////alert("Es una especial");

if (!sigespecial){
                        var cmd  = "!";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                        var cmd  = "YOFUI EL STOP.";
                       // chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + " " + cmd);
                    }
            
/*************************************INICIA SWITCH ***********************/

  
switch (gcodeline) {


    /**************************************INICIA M6***********************/
case (gcodeline.match(/\bM6\b/i) || {}).input :
          
        /* CONSULTA SI ESTÁ EN MODO H */ 
     var esto = this;
                
var HttpClient = function () {
         
         this.get = function (aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function () {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/geth';
var client = new HttpClient();
client.get(theurl, function (response) {

    var obj = JSON.parse(response);
    var modoh = obj[0]['modoh'];

var linea = gcodeline.replace('M6', "").trim();
        linea = linea.replace('M7', "").trim();
        linea = linea.replace('T', "").trim();
        var linean = "N"+(idnum);
        linea = linea.replace(linean, "").trim();
        var toolausar = parseInt(linea);
//alert(toolausar);

// SI ES MODO H:
    if (modoh){

            // Loop para encontrar que pocket tiene la herramienta pedida.
                for( var i = 0; i < 17; i++){

                if (obj[i]['herramienta'] == toolausar){
                    // NUMERO DE INDEX DEL POCKET A COPIAR DATOS DE LONGITUD.
                    var indexher = i;
                    var valortool = i+1;
                }
                 }


if (!(obj[indexher]['enhusillo'])){


        // CAMBIO BRAZO

cmd = "T"+valortool+";"+obj[indexher]['longitud'];
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");



 //Cambio brazo en la tabla.
        var HttpClient = function () {
         
         this.get = function (aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function () {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/cambiobrazomodoh';
var client = new HttpClient();
client.get(theurl, function (response) {

});

}
  //ROTACIÓN a nueva posicion.


  //codigo de busqueda de siguiente herramienta
 var largodecodigo = esto.gcode.lines.length;
 var valorsiguientetool = 1000;
  
 for (var n=(idnum); n<largodecodigo; n++){

    var gcodetemporal = esto.gcode.lines[n];
    if(gcodetemporal.match(/\bM6\b/i)){
        var linean = "N"+(n+1);
        var lineatemporal = gcodelinetemporal.replace('M6', "").trim();
        lineatemporal = lineatemporal.replace('T', "").trim();
        lineatemporal = lineatemporal.replace('M7', "").trim();
        lineatemporal = lineatemporal.replace(linean, "").trim();

        var valorstool = parseInt(lineatemporal);
                            n=100000;

                        }
                    }

                    for( var i = 0; i < 17; i++){
if (parseInt(obj[i]['herramienta']) == valorstool){
    // NUMERO DE INDEX DEL POCKET A COPIAR DATOS DE LONGITUD.
    var indexher = i;
   valorsiguientetool = i+1;
}}

//si existe alguna siguiente tool hacer rotacion. si no, no hacer nada.


setTimeout(function(){
    if(valorsiguientetool != 1000){

    cmd = "i"+valorsiguientetool;
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");
 //Cambio brazo en la tabla.
        var HttpClient = function () {
         
         this.get = function (aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function () {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/rotarcar/'+valorsiguientetool;
var client = new HttpClient();
client.get(theurl, function (response) {

});
   
}




},15000);
      

var tiempo = 15000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

    }

// SI ES MODO LINEAL:  ***********************************************************************************************
    else{
        var indexher = toolausar - 1;
        var valortool = toolausar;


var enhusillo = 100;

//BUSCAR SI HAY HERRAMIENTA EN EL HUSILLO
        for( var i = 0; i < 17; i++){

if (obj[i]['enhusillo'] == 1){
    enhusillo = 1;
    var indexherenhusillo = i;
    var valortoolenhusillo = i+1;
}

 }

 if (valortoolenhusillo != valortool)
{
 //SI HAY: REGRESARLA A POSICIÓN ORIGINAL  Y luego cambiar nueva
 if (enhusillo == 1){

    // cambio posicion original.


    // ROTAR EN TABLA
            var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/rotarcar/'+valortoolenhusillo;
        var client = new HttpClient();
        client.get(theurl, function (response) {

           // CAMBIAR EN TABLA
           var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/cambiobrazomodop';
        var client = new HttpClient();
        client.get(theurl, function (response) {
        });

        });

     

    cmd = "T"+valortoolenhusillo+";"+obj[indexherenhusillo]['longitud'];
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");

setTimeout( function(){


    var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/rotarcar/'+toolausar;
        var client = new HttpClient();
        client.get(theurl, function (response) {
            var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/cambiobrazomodop';
        var client = new HttpClient();
        client.get(theurl, function (response) {
        });
        });

        // CAMBIAR EN TABLA

    cmd = "T"+toolausar+";"+obj[(toolausar-1)]['longitud'];
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");
setTimeout(function(){

   
},16000);

var tiempo = 16000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

},7000);


 }
}
 // Si no hay cambiar nueva.
 else{


    var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/rotarcar/'+toolausar;
        var client = new HttpClient();
        client.get(theurl, function (response) {

           // CAMBIAR EN TABLA
           var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/cambiobrazomodop';
        var client = new HttpClient();
        client.get(theurl, function (response) {
        });
        
        });

    cmd = "T"+toolausar+";"+obj[(toolausar-1)]['longitud'];
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");

setTimeout(function(){

   
},16000);

var tiempo = 16000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
 }

    }

});


         
          break;
          
          
          
              /***********************************FIN M6 *********************************/

/**************************************INICIA M3***********************/
case (gcodeline.match(/\bM3\b/i) || {}).input :
ocupado = 1;
this.activarm3();
//alert ("M3");    
           
var tiempo = 8000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;



    /***********************************FIN M3 *********************************/


/**************************************INICIO M5********************************/

case (gcodeline.match(/\bM5\b/i) || {}).input :
ocupado = 1;
  this.activarm5();

// alert ("M5");
var tiempo = 4000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
break;

/*************************************FIN M5 ***********************************/

/***************************************INICIO M57 SACAR PALETA DERECHA*********/
case (gcodeline.match(/\bM57\b/i) || {}).input :

this.activarM57();

ocupado = 0;
if (!sigespecial){
        var cmd = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
}
// alert ("M57");

   break;
/***************************************INICIO M67 SACAR PALETA DERECHA*********/

/*
case (gcodeline.match(/\bM67\b/i) || {}).input :

this.bajartstopsBtnClick();
setTimeout(function(){
                var self = this;

    



                var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.82/arduino/digital/45';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D45 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.82/arduino/digital/36';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D36 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {


var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.83/arduino/digital/27';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D27 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                                                
                                            var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }

//Arduino 8.
var theurl = 'http://192.168.0.83/arduino/digital/28';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D28 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                                                
                                            
this.activarM67();                } else{

                    // MESA A NO ESTA EN POSICION CERO ABSOLUTO
                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";

var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 

                }});
                
                } else{

                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
                    // MESA A NO ESTA EN POSICION DE TRABAJO
                    
                }

 });
                
                } else{

                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
                    // MESA A NO ESTA EN POSICION DE TRABAJO
                    
                }

});
} else{

var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
// MESA A NO ESTA EN POSICION DE TRABAJO

}

});

           // CODIGO A PEGAR 
        }, 8000);
     

// alert ("M67");

   break;
/*************************************FIN M67 ***********************************/
/***************************************INICIO M58 Meter PALETA DERECHA*********/


case (gcodeline.match(/\bM58\b/i) || {}).input :

this.activarM58();
ocupado = 0;
if (!sigespecial){
    var cmd  = "~";
  chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

}
// alert ("M58");


   break;
/*************************************FIN M57 ***********************************/

/***************************************INICIO M68 Meter PALETA DERECHA*********/

/*
case (gcodeline.match(/\bM68\b/i) || {}).input :

                var self = this;

    



                var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.82/arduino/digital/45';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D45 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.82/arduino/digital/36';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D36 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {


var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.83/arduino/digital/27';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D27 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                                                
                                            var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }

//Arduino 8.
var theurl = 'http://192.168.0.83/arduino/digital/28';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D28 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                                                
                                            
this.activarM68();

                } else{

                    // MESA A NO ESTA EN POSICION CERO ABSOLUTO
                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 

                }});
                
                } else{

                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
                    // MESA A NO ESTA EN POSICION DE TRABAJO
                    
                }

 });
                
                } else{

                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
                    // MESA A NO ESTA EN POSICION DE TRABAJO
                    
                }

});
} else{

var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
// MESA A NO ESTA EN POSICION DE TRABAJO

}

});

           // CODIGO A PEGAR 
        
     
// alert ("M68");

   break;
/*************************************FIN M57 ***********************************/

/*************************************FIN M57 ***********************************/



/***************************************INICIO M116*********/


case (gcodeline.match(/\bM116\b/i) || {}).input :

numerobroca = "16"; 

ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
break;
/*************************************FIN M116 ***********************************/

/***************************************INICIO M115*********/


case (gcodeline.match(/\bM115\b/i) || {}).input :

numerobroca = "15"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M115 ***********************************/

  /***************************************INICIO M114*********/


case (gcodeline.match(/\bM114\b/i) || {}).input :

numerobroca = "14"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M114 ***********************************/

  /***************************************INICIO M113*********/


case (gcodeline.match(/\bM113\b/i) || {}).input :

numerobroca = "13"; 
  
ocupado = 1;
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M113 ***********************************/
  /***************************************INICIO M112*********/


case (gcodeline.match(/\bM112\b/i) || {}).input :

numerobroca = "12"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M112 ***********************************/

  /***************************************INICIO M111*********/


case (gcodeline.match(/\bM111\b/i) || {}).input :

numerobroca = "11"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M111 ***********************************/

  /***************************************INICIO M110*********/


case (gcodeline.match(/\bM110\b/i) || {}).input :

numerobroca = "10"; 
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M110 ***********************************/


  /***************************************INICIO M109*********/


case (gcodeline.match(/\bM109\b/i) || {}).input :

numerobroca = "9"; 
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M109 ***********************************/
  /***************************************INICIO M108*********/


case (gcodeline.match(/\bM108\b/i) || {}).input :

numerobroca = "8"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M108 ***********************************/

  /***************************************INICIO M107*********/


case (gcodeline.match(/\bM107\b/i) || {}).input :

numerobroca = "7"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M107 ***********************************/
  /***************************************INICIO M106*********/


case (gcodeline.match(/\bM106\b/i) || {}).input :

numerobroca = "6"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M106 ***********************************/

  /***************************************INICIO M105*********/


case (gcodeline.match(/\bM105\b/i) || {}).input :

numerobroca = "5"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M105 ***********************************/

  /***************************************INICIO M104*********/


case (gcodeline.match(/\bM104\b/i) || {}).input :

numerobroca = "4"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M104 ***********************************/
  /***************************************INICIO M103*********/


case (gcodeline.match(/\bM103\b/i) || {}).input :

numerobroca = "3"; 
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M103 ***********************************/
  /***************************************INICIO M102*********/


case (gcodeline.match(/\bM102\b/i) || {}).input :

numerobroca = "2"; 
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M102 ***********************************/
  /***************************************INICIO M101*********/


case (gcodeline.match(/\bM101\b/i) || {}).input :
ocupado = 1;
numerobroca = "1"; 
  
  // alert ("M101");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M101 ***********************************/
/***************************************INICIO M100*********/


case (gcodeline.match(/\bM100\b/i) || {}).input :
ocupado = 1;
this.subirtbrocaBtnClick();  
  
  // alert ("M100");
  var tiempo = 2000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
  break;
  /*************************************FIN M100 ***********************************/

/***************************************INICIO M22*********/


case (gcodeline.match(/\bM22\b/i) || {}).input :
ocupado = 1;
this.taladroarribaBtnClick();  
     
     // alert ("M22");
     var tiempo = 2000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
   break;
     /*************************************FIN M22 ***********************************/

/***************************************INICIO M20*********/


case (gcodeline.match(/\bM20\b/i) || {}).input :

ocupado = 1;
        this.onM20BtnClick();
     // alert ("M20");
     var tiempo = 4000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
     
     break;
     /*************************************FIN M20 ***********************************/

/***************************************INICIO M10*********/


case (gcodeline.match(/\bM10\b/i) || {}).input :
ocupado = 1;
this.onM10BtnClick();
// alert ("M10");
var tiempo = 4000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M10 ***********************************/

/***************************************INICIO M12*********/


case (gcodeline.match(/\bM12\b/i) || {}).input :
ocupado = 1;
this.taladroabajoBtnClick();

// alert ("M12");
var tiempo = 2000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M12 ***********************************/


/***************************************INICIO M9*********/


case (gcodeline.match(/\bM9\b/i) || {}).input :
ocupado = 1;
this.taladrooffBtnClick();

// alert ("M9");
var tiempo = 4000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M9***********************************/
/***************************************INICIO M8*********/


case (gcodeline.match(/\bM8\b/i) || {}).input :
ocupado = 1;
this.taladroonBtnClick();

// alert ("M8");
var tiempo = 6000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M9***********************************/

/***************************************INICIO M199*********/


case (gcodeline.match(/\bM199\b/i) || {}).input :

ocupado = 1;


this.activarM199();

// alert ("M199");
var tiempo = 4000;
temp = temp+tiempo;
//alert(sigespecial);
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M199***********************************/

  
  
/*************************** FIN SWITCH***********************/
} 
                        
                        
                                        
            
                        
                        
                                        
                      
                        
                                        
                        
                    
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        //++++++++++++++++
                        
                        
                    }
                    else{
                        temp=0;
                        if(gcodeline.match(/^((?!(y|a)).)*$/i)){
              var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
          }

          
          //alert ("CONTINUO");
      
          
          if (gcodeline.match(/A/i)) {
      
      if(aentrabajo != 1){
          var cmd  = "!mesaa";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
      var cmd  = "Revisando A";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
      
   
          var HttpClient = function() {
      this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
      }
      anHttpRequest.open("GET", aUrl, true);
      anHttpRequest.send(null);
      }
      }
      var theurl = 'http://192.168.0.98/api/estados';
      var client = new HttpClient();
      client.get(theurl, function(response) {
      var obj = JSON.parse(response);
          
      if (parseInt(obj['I']["307"]) != 0 && parseInt(obj['I']["306"]) != 0 && parseInt(obj['I']["309"]) != 0 && parseInt(obj['I']["310"]) != 0){
      aentrabajo = 1;
      yentrabajo=0;
      var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
      }
      else{
      var erroresexistentes = document.getElementById("textoerrores").value;
      
      erroresexistentes = erroresexistentes.concat("\\\n\\\n");
      
      erroresexistentes = erroresexistentes.concat("Mesa A No esta lista para ser llamada por Código G, Error de Movimiento");
      
      document.getElementById("textoerrores").value = erroresexistentes;
      document.getElementById("indicadorerrorejec").className = "led-red";
      
      }
      });}
      else{
          var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
      }
      
      }
      
      
      
      if (gcodeline.match(/Y/i)){
      if(yentrabajo != 1){
      var cmd  = "!mesay";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
      var cmd  = "Revisando Y";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
      
     
      var HttpClient = function() {
      this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
      }
      anHttpRequest.open("GET", aUrl, true);
      anHttpRequest.send(null);
      }
      }
      var theurl = 'http://192.168.0.98/api/estados';
      var client = new HttpClient();
      client.get(theurl, function(response) { 
      var obj = JSON.parse(response);
         
      if ( parseInt(obj['I']["259"]) != 0 && parseInt(obj['I']["258"]) != 0 && parseInt(obj['I']["261"]) != 0 && parseInt(obj['I']["262"]) != 0){
      yentrabajo = 1;
      aentrabajo=0;
      var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
      }
      else{
      var erroresexistentes = document.getElementById("textoerrores").value;
      
      erroresexistentes = erroresexistentes.concat("\\\n\\\n");
      
      erroresexistentes = erroresexistentes.concat("Mesa Y No esta lista para ser llamada por Código G, Error de Movimiento");
      
      document.getElementById("textoerrores").value = erroresexistentes;
      document.getElementById("indicadorerrorejec").className = "led-red";
      }
      
      });}
      else{
       var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      
      }      


                    }
                    
                }
                else{
                    
                    var gcodelineantes = this.gcode.lines[idnum-1];

                    // Parar el procesamiento en tinyG

                    // Si el contador esta retrasado.    
                    
       /*         
                    
                 //alert("IDNUM");                
//alert(idnum);
//alert("CL");
//alert(contadordelinea);*/   
                     while(idnum>contadordelinea){

                        var cmd  = "!";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                       
                        
  //alert (contadordelinea);
                         var numrestar = idnum - contadordelinea;
                        var gcodeline = this.gcode.lines[contadordelinea-1];
                        var cmd  = gcodeline;
                       // chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + " " + cmd);
                       
                        var gcodelineplus = this.gcode.lines[contadordelinea];
                        var gcodelineplusp = this.gcode.lines[contadordelinea+1];

   
                        if (gcodelineplus.match(/\bM6\b/i) || gcodelineplus.match(/\bM3\b/i) || gcodelineplus.match(/\bM67\b/i) 
                    || gcodelineplus.match(/\bM58\b/i) || gcodelineplus.match(/\bM57\b/i) ||  gcodelineplus.match(/\bM68\b/i)
      || gcodelineplus.match(/\bM5\b/i) || gcodelineplus.match(/\bM199\b/i) || gcodelineplus.match(/\bM116\b/i) || 
        gcodelineplus.match(/\bM115\b/i) || gcodelineplus.match(/\bM114\b/i) || gcodelineplus.match(/\bM113\b/i) || gcodelineplus.match(/\bM112\b/i) ||
         gcodelineplus.match(/\bM111\b/i) || gcodelineplus.match(/\bM110\b/i) || gcodelineplus.match(/\bM109\b/i) || gcodelineplus.match(/\bM108\b/i) ||
          gcodelineplus.match(/\bM107\b/i) || gcodelineplus.match(/\bM106\b/i) || gcodelineplus.match(/\bM105\b/i) || gcodelineplus.match(/\bM104\b/i) || 
          gcodelineplus.match(/\bM103\b/i) || gcodelineplus.match(/\bM102\b/i) || gcodelineplus.match(/\bM101\b/i) || gcodelineplus.match(/\bM100\b/i) || 
          gcodelineplus.match(/\bM22\b/i) || gcodelineplus.match(/\bM12\b/i) || gcodelineplus.match(/\bM9\b/i) || gcodelineplus.match(/\bM8\b/i) || 
          gcodelineplus.match(/\bM701\b/i) || gcodelineplus.match(/\bM20\b/i) || gcodelineplus.match(/\bM10\b/i) || gcodelineplusp.match(/\bM6\b/i) || gcodelineplusp.match(/\bM3\b/i) || gcodelineplusp.match(/\bM67\b/i) 
                    || gcodelineplusp.match(/\bM58\b/i) || gcodelineplusp.match(/\bM57\b/i) ||  gcodelineplusp.match(/\bM68\b/i)
      || gcodelineplusp.match(/\bM5\b/i) || gcodelineplusp.match(/\bM199\b/i) || gcodelineplusp.match(/\bM116\b/i) || 
        gcodelineplusp.match(/\bM115\b/i) || gcodelineplusp.match(/\bM114\b/i) || gcodelineplusp.match(/\bM113\b/i) || gcodelineplusp.match(/\bM112\b/i) ||
         gcodelineplusp.match(/\bM111\b/i) || gcodelineplusp.match(/\bM110\b/i) || gcodelineplusp.match(/\bM109\b/i) || gcodelineplusp.match(/\bM108\b/i) ||
          gcodelineplusp.match(/\bM107\b/i) || gcodelineplusp.match(/\bM106\b/i) || gcodelineplusp.match(/\bM105\b/i) || gcodelineplusp.match(/\bM104\b/i) || 
          gcodelineplusp.match(/\bM103\b/i) || gcodelineplusp.match(/\bM102\b/i) || gcodelineplusp.match(/\bM101\b/i) || gcodelineplusp.match(/\bM100\b/i) || 
          gcodelineplusp.match(/\bM22\b/i) || gcodelineplusp.match(/\bM12\b/i) || gcodelineplusp.match(/\bM9\b/i) || gcodelineplusp.match(/\bM8\b/i) || 
          gcodelineplusp.match(/\bM701\b/i) || gcodelineplusp.match(/\bM20\b/i) || gcodelineplusp.match(/\bM10\b/i) )  {

            if( gcodelineplus.match(/\bM57\b/i) || gcodelineplusp.match(/\bM57\b/i) ){

                var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

             
 var cmd  = "Revisando A";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
 var HttpClient = function() {
this.get = function(aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function() {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/api/estados';
var client = new HttpClient();
client.get(theurl, function(response) {
var obj = JSON.parse(response);
 
if (parseInt(obj['I']["307"]) != 0 && parseInt(obj['I']["306"]) != 0 && parseInt(obj['I']["309"]) != 0 && parseInt(obj['I']["310"]) != 0){
aentrabajo = 1;
yentrabajo=0;
var cmd  = "~";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

}
else{

 sigespecial = 1;
 var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Mesa A No esta lista para ser llamada por Código G, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";

}
});


}


           
           if( gcodelineplus.match(/\bM58\b/i) || gcodelineplusp.match(/\bM58\b/i)  ){
           
            var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);


                         var cmd  = "Revisando Y";
                     chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

                  
                         var HttpClient = function() {
               this.get = function(aUrl, aCallback) {
                   var anHttpRequest = new XMLHttpRequest();
                   anHttpRequest.onreadystatechange = function() {
                       if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                           aCallback(anHttpRequest.responseText);
                   }
                   anHttpRequest.open("GET", aUrl, true);
                   anHttpRequest.send(null);
               }
           }
           var theurl = 'http://192.168.0.98/api/estados';
           var client = new HttpClient();
           client.get(theurl, function(response) { 
 var obj = JSON.parse(response);
                            
                     if ( parseInt(obj['I']["259"]) != 0 && parseInt(obj['I']["258"]) != 0 && parseInt(obj['I']["261"]) != 0 && parseInt(obj['I']["262"]) != 0){
                     yentrabajo = 1;
                     aentrabajo=0;
                     var cmd  = "~";
                     chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                   
                      }
                     else{
                         var cmd  = "!";
                     chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                   
                         sigespecial=1;
                         var erroresexistentes = document.getElementById("textoerrores").value;
          
          erroresexistentes = erroresexistentes.concat("\\\n\\\n");
          
          erroresexistentes = erroresexistentes.concat("Mesa Y No esta lista para ser llamada por Código G, Error de Movimiento");
          
          document.getElementById("textoerrores").value = erroresexistentes;
 document.getElementById("indicadorerrorejec").className = "led-red";
                     }
                         
                 });


           }


         sigespecial = 1;

            

          }
          else{
              sigespecial = 0;

              if( gcodelineplus.match(/\bA\b/i) ){

if(aentrabajo != 1){  
    var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
var cmd  = "Revisando A";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + " " + cmd);

    var HttpClient = function() {
this.get = function(aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function() {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
  aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/api/estados';
var client = new HttpClient();
client.get(theurl, function(response) {
var obj = JSON.parse(response);
    
if (parseInt(obj['I']["307"]) != 0 && parseInt(obj['I']["306"]) != 0 && parseInt(obj['I']["309"]) != 0 && parseInt(obj['I']["310"]) != 0){
aentrabajo = 1;
yentrabajo=0;
var cmd  = "~";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

}
else{

    sigespecial = 1;
    var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Mesa A No esta lista para ser llamada por Código G, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";

}
});}


}


              
              if( gcodelineplus.match(/\bY\b/i) ){
                if(yentrabajo != 1){
                            var cmd  = "!";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                        var cmd  = "Revisando Y";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf "  + cmd);

                       
                            var HttpClient = function() {
                  this.get = function(aUrl, aCallback) {
                      var anHttpRequest = new XMLHttpRequest();
                      anHttpRequest.onreadystatechange = function() {
                          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                              aCallback(anHttpRequest.responseText);
                      }
                      anHttpRequest.open("GET", aUrl, true);
                      anHttpRequest.send(null);
                  }
              }
              var theurl = 'http://192.168.0.98/api/estados';
              var client = new HttpClient();
              client.get(theurl, function(response) { 
    var obj = JSON.parse(response);
                               
                        if ( parseInt(obj['I']["259"]) != 0 && parseInt(obj['I']["258"]) != 0 && parseInt(obj['I']["261"]) != 0 && parseInt(obj['I']["262"]) != 0){
                        yentrabajo = 1;
                        aentrabajo=0;
                        var cmd  = "~";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

                         }
                        else{
                            sigespecial=1;
                            var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
                            var erroresexistentes = document.getElementById("textoerrores").value;
             
             erroresexistentes = erroresexistentes.concat("\\\n\\\n");
             
             erroresexistentes = erroresexistentes.concat("Mesa Y No esta lista para ser llamada por Código G, Error de Movimiento");
             
             document.getElementById("textoerrores").value = erroresexistentes;
    document.getElementById("indicadorerrorejec").className = "led-red";
                        }
                            
                    });}


              }



          }

//MESA A SUBIR

////alert(gcodeline);
    //TERMINAN POSICIONADORES
    if (gcodeline.match(/\bM6\b/i) || gcodeline.match(/\bM3\b/i) || gcodeline.match(/\bM67\b/i) 
                    || gcodeline.match(/\bM58\b/i) || gcodeline.match(/\bM57\b/i) ||  gcodeline.match(/\bM68\b/i)
      || gcodeline.match(/\bM5\b/i) || gcodeline.match(/\bM199\b/i) || gcodeline.match(/\bM116\b/i) || 
        gcodeline.match(/\bM115\b/i) || gcodeline.match(/\bM114\b/i) || gcodeline.match(/\bM113\b/i) || gcodeline.match(/\bM112\b/i) ||
         gcodeline.match(/\bM111\b/i) || gcodeline.match(/\bM110\b/i) || gcodeline.match(/\bM109\b/i) || gcodeline.match(/\bM108\b/i) ||
          gcodeline.match(/\bM107\b/i) || gcodeline.match(/\bM106\b/i) || gcodeline.match(/\bM105\b/i) || gcodeline.match(/\bM104\b/i) || 
          gcodeline.match(/\bM103\b/i) || gcodeline.match(/\bM102\b/i) || gcodeline.match(/\bM101\b/i) || gcodeline.match(/\bM100\b/i) || 
          gcodeline.match(/\bM22\b/i) || gcodeline.match(/\bM12\b/i) || gcodeline.match(/\bM9\b/i) || gcodeline.match(/\bM8\b/i) || 
          gcodeline.match(/\bM701\b/i) || gcodeline.match(/\bM20\b/i) || gcodeline.match(/\bM10\b/i) )  {
                    
ocupado = 1;

////alert("Es una especial");
//alert(gcodeline);
                        var cmd  = "!";
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

  
/*************************************INICIA SWITCH ***********************/

  
switch (gcodeline) {


    /**************************************INICIA M6***********************/
case (gcodeline.match(/\bM6\b/i) || {}).input :
          
        /* CONSULTA SI ESTÁ EN MODO H */ 
     var esto = this;
                
var HttpClient = function () {
         
         this.get = function (aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function () {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/geth';
var client = new HttpClient();
client.get(theurl, function (response) {

    var obj = JSON.parse(response);
    var modoh = obj[0]['modoh'];

var linea = gcodeline.replace('M6', "").trim();
        linea = linea.replace('M7', "").trim();
        linea = linea.replace('T', "").trim();
        var linean = "N"+(idnum);
        linea = linea.replace(linean, "").trim();
        var toolausar = parseInt(linea);
//alert(toolausar);

// SI ES MODO H:
    if (modoh){

            // Loop para encontrar que pocket tiene la herramienta pedida.
                for( var i = 0; i < 17; i++){

                if (obj[i]['herramienta'] == toolausar){
                    // NUMERO DE INDEX DEL POCKET A COPIAR DATOS DE LONGITUD.
                    var indexher = i;
                    var valortool = i+1;
                }
                 }


if (!(obj[indexher]['enhusillo'])){


        // CAMBIO BRAZO

cmd = "T"+valortool+";"+obj[indexher]['longitud'];
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");



 //Cambio brazo en la tabla.
        var HttpClient = function () {
         
         this.get = function (aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function () {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/cambiobrazomodoh';
var client = new HttpClient();
client.get(theurl, function (response) {

});

}
  //ROTACIÓN a nueva posicion.


  //codigo de busqueda de siguiente herramienta
 var largodecodigo = esto.gcode.lines.length;
 var valorsiguientetool = 1000;
  
 for (var n=(idnum); n<largodecodigo; n++){

    var gcodetemporal = esto.gcode.lines[n];
    if(gcodetemporal.match(/\bM6\b/i)){
        var linean = "N"+(n+1);
        var lineatemporal = gcodelinetemporal.replace('M6', "").trim();
        lineatemporal = lineatemporal.replace('T', "").trim();
        lineatemporal = lineatemporal.replace('M7', "").trim();
        lineatemporal = lineatemporal.replace(linean, "").trim();

        var valorstool = parseInt(lineatemporal);
                            n=100000;

                        }
                    }

                    for( var i = 0; i < 17; i++){
if (parseInt(obj[i]['herramienta']) == valorstool){
    // NUMERO DE INDEX DEL POCKET A COPIAR DATOS DE LONGITUD.
    var indexher = i;
   valorsiguientetool = i+1;
}}

//si existe alguna siguiente tool hacer rotacion. si no, no hacer nada.


setTimeout(function(){
    if(valorsiguientetool != 1000){

    cmd = "i"+valorsiguientetool;
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");
 //Cambio brazo en la tabla.
        var HttpClient = function () {
         
         this.get = function (aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function () {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open("GET", aUrl, true);
anHttpRequest.send(null);
}
}
var theurl = 'http://192.168.0.98/rotarcar/'+valorsiguientetool;
var client = new HttpClient();
client.get(theurl, function (response) {

});
   
}




},15000);
      

var tiempo = 15000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

    }

// SI ES MODO LINEAL:  ***********************************************************************************************
    else{
        var indexher = toolausar - 1;
        var valortool = toolausar;


var enhusillo = 100;

//BUSCAR SI HAY HERRAMIENTA EN EL HUSILLO
        for( var i = 0; i < 17; i++){

if (obj[i]['enhusillo'] == 1){
    enhusillo = 1;
    var indexherenhusillo = i;
    var valortoolenhusillo = i+1;
}

 }

 if (valortoolenhusillo != valortool)
{
 //SI HAY: REGRESARLA A POSICIÓN ORIGINAL  Y luego cambiar nueva
 if (enhusillo == 1){

    // cambio posicion original.


    // ROTAR EN TABLA
            var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/rotarcar/'+valortoolenhusillo;
        var client = new HttpClient();
        client.get(theurl, function (response) {

           // CAMBIAR EN TABLA
           var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/cambiobrazomodop';
        var client = new HttpClient();
        client.get(theurl, function (response) {
        });

        });

     

    cmd = "T"+valortoolenhusillo+";"+obj[indexherenhusillo]['longitud'];
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");

setTimeout( function(){


    var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/rotarcar/'+toolausar;
        var client = new HttpClient();
        client.get(theurl, function (response) {
            var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/cambiobrazomodop';
        var client = new HttpClient();
        client.get(theurl, function (response) {
        });
        });

        // CAMBIAR EN TABLA

    cmd = "T"+toolausar+";"+obj[(toolausar-1)]['longitud'];
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");
setTimeout(function(){

   
},16000);

var tiempo = 16000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

},7000);


 }
}
 // Si no hay cambiar nueva.
 else{


    var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/rotarcar/'+toolausar;
        var client = new HttpClient();
        client.get(theurl, function (response) {

           // CAMBIAR EN TABLA
           var HttpClient = function () {
                
                this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
        }
        }
        var theurl = 'http://192.168.0.98/cambiobrazomodop';
        var client = new HttpClient();
        client.get(theurl, function (response) {
        });
        
        });

    cmd = "T"+toolausar+";"+obj[(toolausar-1)]['longitud'];
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "send /dev/ttyACM0 " + cmd + "\n");

setTimeout(function(){

   
},16000);

var tiempo = 16000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
 }

    }

});


         
          break;
          
          
          
              /***********************************FIN M6 *********************************/

/**************************************INICIA M3***********************/
case (gcodeline.match(/\bM3\b/i) || {}).input :
ocupado = 1;
this.activarm3();
//alert ("M3");    
           
var tiempo = 8000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;



    /***********************************FIN M3 *********************************/


/**************************************INICIO M5********************************/

case (gcodeline.match(/\bM5\b/i) || {}).input :
ocupado = 1;
  this.activarm5();

// alert ("M5");
var tiempo = 4000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
break;

/*************************************FIN M5 ***********************************/

/***************************************INICIO M57 SACAR PALETA DERECHA*********/
case (gcodeline.match(/\bM57\b/i) || {}).input :


this.activarM57();

ocupado = 0;
if (!sigespecial){
        var cmd = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
}
// alert ("M57");

   break;
/***************************************INICIO M67 SACAR PALETA DERECHA*********/

/*
case (gcodeline.match(/\bM67\b/i) || {}).input :

this.bajartstopsBtnClick();
setTimeout(function(){
                var self = this;

    



                var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.82/arduino/digital/45';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D45 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.82/arduino/digital/36';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D36 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {


var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.83/arduino/digital/27';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D27 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                                                
                                            var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }

//Arduino 8.
var theurl = 'http://192.168.0.83/arduino/digital/28';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D28 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                                                
                                            
this.activarM67();                } else{

                    // MESA A NO ESTA EN POSICION CERO ABSOLUTO
                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";

var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 

                }});
                
                } else{

                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
                    // MESA A NO ESTA EN POSICION DE TRABAJO
                    
                }

 });
                
                } else{

                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
                    // MESA A NO ESTA EN POSICION DE TRABAJO
                    
                }

});
} else{

var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
// MESA A NO ESTA EN POSICION DE TRABAJO

}

});

           // CODIGO A PEGAR 
        }, 8000);
     

// alert ("M67");

   break;
/*************************************FIN M67 ***********************************/
/***************************************INICIO M58 Meter PALETA DERECHA*********/


case (gcodeline.match(/\bM58\b/i) || {}).input :

this.activarM58();
ocupado = 0;
if (!sigespecial){
    var cmd  = "~";
  chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);

}
// alert ("M58");


   break;
/*************************************FIN M57 ***********************************/

/***************************************INICIO M68 Meter PALETA DERECHA*********/

/*
case (gcodeline.match(/\bM68\b/i) || {}).input :

                var self = this;

    



                var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.82/arduino/digital/45';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D45 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.82/arduino/digital/36';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D36 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {


var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }


var theurl = 'http://192.168.0.83/arduino/digital/27';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D27 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                                                
                                            var HttpClient = function () {
                        this.get = function (aUrl, aCallback) {
                            var anHttpRequest = new XMLHttpRequest();
                            anHttpRequest.onreadystatechange = function () {
                                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                                    aCallback(anHttpRequest.responseText);
                            }
                            anHttpRequest.open("GET", aUrl, true);
                            anHttpRequest.send(null);
                        }
                    }

//Arduino 8.
var theurl = 'http://192.168.0.83/arduino/digital/28';
                    var client = new HttpClient();
                    client.get(theurl, function (response) {

var res = response.split("Pin D28 set to ");

                                        response = parseInt(res[1]);

                                        if (response == 1) {
                                                
                                            
this.activarM68();

                } else{

                    // MESA A NO ESTA EN POSICION CERO ABSOLUTO
                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 

                }});
                
                } else{

                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
                    // MESA A NO ESTA EN POSICION DE TRABAJO
                    
                }

 });
                
                } else{

                    var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
                    // MESA A NO ESTA EN POSICION DE TRABAJO
                    
                }

});
} else{

var erroresexistentes = document.getElementById("textoerrores").value;

erroresexistentes = erroresexistentes.concat("\\\n\\\n");

erroresexistentes = erroresexistentes.concat("Pines no lograron bajar, Error de Movimiento");

document.getElementById("textoerrores").value = erroresexistentes;
document.getElementById("indicadorerrorejec").className = "led-red";
var cmd  = "!";
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd); 
// MESA A NO ESTA EN POSICION DE TRABAJO

}

});

           // CODIGO A PEGAR 
        
     
// alert ("M68");

   break;
/*************************************FIN M57 ***********************************/

/*************************************FIN M57 ***********************************/



/***************************************INICIO M116*********/


case (gcodeline.match(/\bM116\b/i) || {}).input :

numerobroca = "16"; 

ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
break;
/*************************************FIN M116 ***********************************/

/***************************************INICIO M115*********/


case (gcodeline.match(/\bM115\b/i) || {}).input :

numerobroca = "15"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M115 ***********************************/

  /***************************************INICIO M114*********/


case (gcodeline.match(/\bM114\b/i) || {}).input :

numerobroca = "14"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M114 ***********************************/

  /***************************************INICIO M113*********/


case (gcodeline.match(/\bM113\b/i) || {}).input :

numerobroca = "13"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M113 ***********************************/
  /***************************************INICIO M112*********/


case (gcodeline.match(/\bM112\b/i) || {}).input :

numerobroca = "12"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M112 ***********************************/

  /***************************************INICIO M111*********/


case (gcodeline.match(/\bM111\b/i) || {}).input :

numerobroca = "11"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M111 ***********************************/

  /***************************************INICIO M110*********/


case (gcodeline.match(/\bM110\b/i) || {}).input :

numerobroca = "10"; 
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M110 ***********************************/


  /***************************************INICIO M109*********/


case (gcodeline.match(/\bM109\b/i) || {}).input :

numerobroca = "9"; 
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M109 ***********************************/
  /***************************************INICIO M108*********/


case (gcodeline.match(/\bM108\b/i) || {}).input :

numerobroca = "8"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M108 ***********************************/

  /***************************************INICIO M107*********/


case (gcodeline.match(/\bM107\b/i) || {}).input :

numerobroca = "7"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M107 ***********************************/
  /***************************************INICIO M106*********/


case (gcodeline.match(/\bM106\b/i) || {}).input :

numerobroca = "6"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M106 ***********************************/

  /***************************************INICIO M105*********/


case (gcodeline.match(/\bM105\b/i) || {}).input :

numerobroca = "5"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M105 ***********************************/

  /***************************************INICIO M104*********/


case (gcodeline.match(/\bM104\b/i) || {}).input :

numerobroca = "4"; 
  
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M104 ***********************************/
  /***************************************INICIO M103*********/


case (gcodeline.match(/\bM103\b/i) || {}).input :

numerobroca = "3"; 
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M103 ***********************************/
  /***************************************INICIO M102*********/


case (gcodeline.match(/\bM102\b/i) || {}).input :

numerobroca = "2"; 
ocupado = 1;
  // alert ("M102");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M102 ***********************************/
  /***************************************INICIO M101*********/


case (gcodeline.match(/\bM101\b/i) || {}).input :
ocupado = 1;
numerobroca = "1"; 
  
  // alert ("M101");
  if (!sigespecial){
  var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);}
      ocupado = 0;
  break;
  /*************************************FIN M101 ***********************************/
/***************************************INICIO M100*********/


case (gcodeline.match(/\bM100\b/i) || {}).input :
ocupado = 1;
this.subirtbrocaBtnClick();  
  
  // alert ("M100");
  var tiempo = 2000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
  break;
  /*************************************FIN M100 ***********************************/

/***************************************INICIO M22*********/


case (gcodeline.match(/\bM22\b/i) || {}).input :
ocupado = 1;
this.taladroarribaBtnClick();  
     
     // alert ("M22");
     var tiempo = 2000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
   break;
     /*************************************FIN M22 ***********************************/

/***************************************INICIO M20*********/


case (gcodeline.match(/\bM20\b/i) || {}).input :

ocupado = 1;
        this.onM20BtnClick();
     // alert ("M20");
     var tiempo = 4000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }
     
     break;
     /*************************************FIN M20 ***********************************/

/***************************************INICIO M10*********/


case (gcodeline.match(/\bM10\b/i) || {}).input :
ocupado = 1;
this.onM10BtnClick();
// alert ("M10");
var tiempo = 4000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M10 ***********************************/

/***************************************INICIO M12*********/


case (gcodeline.match(/\bM12\b/i) || {}).input :
ocupado = 1;
this.taladroabajoBtnClick();

// alert ("M12");
var tiempo = 2000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M12 ***********************************/


/***************************************INICIO M9*********/


case (gcodeline.match(/\bM9\b/i) || {}).input :
ocupado = 1;
this.taladrooffBtnClick();

// alert ("M9");
var tiempo = 4000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M9***********************************/
/***************************************INICIO M8*********/


case (gcodeline.match(/\bM8\b/i) || {}).input :
ocupado = 1;
this.taladroonBtnClick();

// alert ("M8");
var tiempo = 6000;
temp = temp+tiempo;
if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M9***********************************/

/***************************************INICIO M199*********/


case (gcodeline.match(/\bM199\b/i) || {}).input :

//alert(sigespecial);
ocupado = 1;
this.activarM199();

// alert ("M199");
var tiempo = 4000;
temp = temp+tiempo;

if (!sigespecial){
    setTimeout(function(){
var cmd  = "~";
   chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
},temp);
   }

break;
/*************************************FIN M199***********************************/

  
  
/*************************** FIN SWITCH***********************/
} 
                        
                        
                                        
            
                        
                        
                                        
                      
                        
                                        
                        
                    
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        //++++++++++++++++
                        
                        
                    }
                    else{


temp = 0;
if(gcodeline.match(/^((?!(y|a)).)*$/i)){
              
             setTimeout(function(){var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);},100);
          }
          //alert ("CONTINUO");
      
          
          if (gcodeline.match(/A/i)) {
      
      if(aentrabajo != 1){
          var cmd  = "!mesaa";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
      var cmd  = "Revisando A";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + cmd);
      
   
          var HttpClient = function() {
      this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
      }
      anHttpRequest.open("GET", aUrl, true);
      anHttpRequest.send(null);
      }
      }
      var theurl = 'http://192.168.0.98/api/estados';
      var client = new HttpClient();
      client.get(theurl, function(response) {
      var obj = JSON.parse(response);
          
      if (parseInt(obj['I']["307"]) != 0 && parseInt(obj['I']["306"]) != 0 && parseInt(obj['I']["309"]) != 0 && parseInt(obj['I']["310"]) != 0){
      aentrabajo = 1;
      yentrabajo=0;
      setTimeout(function(){var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);},100);  }
      else{
      var erroresexistentes = document.getElementById("textoerrores").value;
      
      erroresexistentes = erroresexistentes.concat("\\\n\\\n");
      
      erroresexistentes = erroresexistentes.concat("Mesa A No esta lista para ser llamada por Código G, Error de Movimiento");
      
      document.getElementById("textoerrores").value = erroresexistentes;
      document.getElementById("indicadorerrorejec").className = "led-red";
      
      }
      });}
      else{
        setTimeout(function(){var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);},100); }
      
      }
      
      
      
      if (gcodeline.match(/Y/i)){
      if(yentrabajo != 1){
      var cmd  = "!mesay";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);
      var cmd  = "Revisando Y";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " +" " + cmd);

      var HttpClient = function() {
      this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
      }
      anHttpRequest.open("GET", aUrl, true);
      anHttpRequest.send(null);
      }
      }
      var theurl = 'http://192.168.0.98/api/estados';
      var client = new HttpClient();
      client.get(theurl, function(response) { 
      var obj = JSON.parse(response);
         
      if ( parseInt(obj['I']["259"]) != 0 && parseInt(obj['I']["258"]) != 0 && parseInt(obj['I']["261"]) != 0 && parseInt(obj['I']["262"]) != 0){
      yentrabajo = 1;
      aentrabajo=0;
      setTimeout(function(){var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);},100); }
      else{
      var erroresexistentes = document.getElementById("textoerrores").value;
      
      erroresexistentes = erroresexistentes.concat("\\\n\\\n");
      
      erroresexistentes = erroresexistentes.concat("Mesa Y No esta lista para ser llamada por Código G, Error de Movimiento");
      
      document.getElementById("textoerrores").value = erroresexistentes;
      document.getElementById("indicadorerrorejec").className = "led-red";
      }
      
      });}
      else{
        setTimeout(function(){var cmd  = "~";
      chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + serialPort + " " + cmd);},100);}
      
      }


}


                        contadordelinea = contadordelinea+1;
                                    
                     
                     }
                    
                        
                    // continuar el procesamiento en tinyG
               
                             
                }
                
         