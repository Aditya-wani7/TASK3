function convertTemperature() {
    let temp = parseFloat(document.getElementById('temp').value);
    let fromUnit = document.getElementById('unitFrom').value;
    let toUnit = document.getElementById('unitTo').value;
    let result = document.getElementById('result');

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number for temperature.";
        return;
    }

    let convertedTemp;

    // Celsius to other units
    if (fromUnit === 'C') {
        if (toUnit === 'F') {
            convertedTemp = (temp * 9/5) + 32;
        } else if (toUnit === 'K') {
            convertedTemp = temp + 273.15;
        } else {
            convertedTemp = temp; // Celsius to Celsius
        }
    }

    // Fahrenheit to other units
    if (fromUnit === 'F') {
        if (toUnit === 'C') {
            convertedTemp = (temp - 32) * 5/9;
        } else if (toUnit === 'K') {
            convertedTemp = (temp - 32) * 5/9 + 273.15;
        } else {
            convertedTemp = temp; // Fahrenheit to Fahrenheit
        }
    }

    // Kelvin to other units
    if (fromUnit === 'K') {
        if (toUnit === 'C') {
            convertedTemp = temp - 273.15;
        } else if (toUnit === 'F') {
            convertedTemp = (temp - 273.15) * 9/5 + 32;
        } else {
            convertedTemp = temp; // Kelvin to Kelvin
        }
    }

    result.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${toUnit}`;
}

  
  