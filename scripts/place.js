const calculateWindChill = (temperature, windSpeed) => 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

let temperature = -10;
let windSpeed = 20;
let windChill = "N/A"

if (temperature <= 10 && windSpeed > 4.8)
    windChill = calculateWindChill(temperature, windSpeed);

document.querySelector("#temp").textContent = `${temperature}°C`;
document.querySelector("#wind-speed").textContent = `${windSpeed} km/h`;
document.querySelector("#wind-chill").textContent = windChill === "N/A" ? windChill : `${Math.round(windChill * 10) / 10}°C`;
