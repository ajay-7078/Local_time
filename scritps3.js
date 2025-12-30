
function updateTime(){
    document.getElementById("india-date").innerText = new Date().toLocaleDateString("en-US",{timeZone:"Asia/Kolkata", weekday:"long", year:"numeric", month:"long", day:"numeric"});
    document.getElementById("usa-date").innerText = new Date().toLocaleDateString("en-US",{timeZone:"America/New_York", weekday:"long", year:"numeric", month:"long", day:"numeric"});
    document.getElementById("uk-date").innerText = new Date().toLocaleDateString("en-US",{timeZone:"Europe/London", weekday:"long", year:"numeric", month:"long", day:"numeric"});
    document.getElementById("japan-date").innerText = new Date().toLocaleDateString("en-US",{timeZone:"Asia/Tokyo", weekday:"long", year:"numeric", month:"long", day:"numeric"});

    document.getElementById("india").innerText = new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Kolkata"});
    document.getElementById("usa").innerText = new Date().toLocaleTimeString("en-US",{timeZone:"America/New_York"});
    document.getElementById("uk").innerText = new Date().toLocaleTimeString("en-US",{timeZone:"Europe/London"});
    document.getElementById("japan").innerText = new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Tokyo"});
}{
    document.getElementById("india").innerText = new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Kolkata"});
    document.getElementById("usa").innerText = new Date().toLocaleTimeString("en-US",{timeZone:"America/New_York"});
    document.getElementById("uk").innerText = new Date().toLocaleTimeString("en-US",{timeZone:"Europe/London"});
    document.getElementById("japan").innerText = new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Tokyo"});
}
setInterval(updateTime,1000);
updateTime();

