const cspan = document.getElementById('confirmed');
const dspan = document.getElementById('death');
const rspan = document.getElementById('recovered');

const apiLink = 'https://api.covid19api.com/live/country/india/status/confirmed';

var confirmed = 0;
var death = 0;
var recovered = 0;

function updateData(){
    fetch(apiLink)
    .then(response => response.json())
    .then(rsp => {
        rsp.forEach(element => {
            lat = element.Lat;
            lon = element.Lon;

            confirmed += element.Confirmed;
            death += element.Death;
            recovered += element.Recovered;
                        
            new mapboxgl.Marker({
                color : "red",
            })
                .setLngLat([lon,lat])
                .addTo(map);

        })
    })
}


updateData();

confirmed = "2.94 Cr + 80,834";
death = "2.8 Cr + 1.32 L";
recovered = "3.7 L + 3,303";

cspan.innerHTML = confirmed;
dspan.innerHTML = death;
rspan.innerHTML = recovered;

setInterval(updateData,100000);
