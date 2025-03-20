async function getWeather() {
    const apiKey = "60ff18732d6940cda2985332252003"; // Replace with your API key
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // 👉 This will help us see the full response in the console

        if (data.error) {
            alert("City not found! Try again.");
            return;
        }

        document.getElementById("cityName").innerText = `Weather in ${data.location.name}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById("weatherCondition").innerText = `Condition: ${data.current.condition.text}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
