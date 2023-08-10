const convertBtn = document.getElementById("convertBtn");
const error_div = document.getElementById("error-div");

convertBtn.addEventListener("click", () => {
    const temperatureInput = document.getElementById("temperature").value;
    const temperatureOutput = document.getElementById("result");
    const unit1 = document.getElementById("unit1").value;
    const unit2 = document.getElementById("unit2").value;

    if (temperatureInput !== "") {
        const temperature = parseFloat(temperatureInput);
        if (unit1 === "celsius") {
            if(unit2==="fahrenheit"){
                temperatureOutput.value = ((temperature * 9 / 5) + 32).toFixed(2);
            }else if(unit2==="kelvin"){
                temperatureOutput.value = (temperature + 273.15).toFixed(2);
            }else{
                temperatureOutput.value = temperature.toFixed(2);
            }
        } else if (unit1 === "fahrenheit") {
            if(unit2==="fahrenheit"){
                temperatureOutput.value = temperature.toFixed(2);
            }else if(unit2==="kelvin"){
                temperatureOutput.value = ((temperature - 32) * 5 / 9 + 273.15).toFixed(2);
            }else{
                temperatureOutput.value = ((temperature - 32) * 5 / 9).toFixed(2);
            }
        } else if (unit1 === "kelvin") {
            if(unit2==="fahrenheit"){
                temperatureOutput.value = ((temperature - 273.15) * 9 / 5 + 32).toFixed(2);
            }else if(unit2==="kelvin"){
                temperatureOutput.value = (temperature).toFixed(2);
            }else{
                temperatureOutput.value = (temperature - 273.15).toFixed(2);
            }
        }
        error_div.textContent = "";
    } else {
        error_div.textContent = "Please enter a valid temperature.";
        temperatureOutput.value = null;
    }
});