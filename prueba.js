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
 var theurl = 'http://192.168.0.88/arduino/analog/5';
 var client = new HttpClient();
 client.get(theurl, function(response) {

     if (response > 900) {
         var cmd = "~";
         chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + this.serialPort + " " + cmd);
         chilipeppr.publish('/com-chilipeppr-interface-cnccontroller/plannerresume', "");
     } else {

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
         var theurl = 'http://192.168.0.88/arduino/analog/5';
         var client = new HttpClient();
         client.get(theurl, function(response) {

             if (response > 900) {
                 var cmd = "~";
                 chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", "sendnobuf " + this.serialPort + " " + cmd);
                 chilipeppr.publish('/com-chilipeppr-interface-cnccontroller/plannerresume', "");
             } else {

                 var erroresexistentes = document.getElementById("textoerrores").value;
                 erroresexistentes = erroresexistentes.concat("\\\n\\\n");
                 erroresexistentes = erroresexistentes.concat("HUSILLO NO COMENZO A GIRAR");
                 document.getElementById("textoerrores").value = erroresexistentes;
                 document.getElementById("indicadorerrorejec").className = "led-red";
             }


         });



     }

 });