// Ali code



"use strict"
        const timeDelay = 10000; // time delay refresh data
        let refreshTimer = window.setInterval(renderData, timeDelay); // timer data opvragen van server
        
        // jouw persoonlijke URL
        const mijnDataURL = "https://data.softwaredeveloper.amsterdam/api/device/eb460430/latest"; 
        
        const dataDiv1 = document.getElementById("dataDiv1"); // hier komt de data
        
        async function getSensorData() {
            let url = mijnDataURL;
            try {
                let response = await fetch(url);
                return await response.json();
            } catch (error) {
                console.log(error);
            }
        }
        
        async function renderData() {
                let measurementRaw = await getSensorData();
                let measurement = measurementRaw.data[0];
                console.log(measurement);

                 // Nieuwe Javascript date maken met de de datum en tijd van de meting
                 let datum =  new Date(measurement.datum);
               
                 // De meting gegevens wegschrijven naar de div                
                 dataDiv1.innerHTML = `<h3>Binnentemperatuur: </h3><p>Sensor: ${measurement.sensor} 
                    &nbsp;
                    <p>Kamer :</p>
                    </p><p>Temperature: ${measurement.value1}
                    </p><p> Vochtigheid: ${measurement.value2}
                    </p><p> Hitte-index: ${measurement.value3}</p>`;
            }
            
        renderData(); // start immediately
        