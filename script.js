
function convertTemperature(unit, degrees){
    if((typeof(degrees) !== "number") && (degrees !== undefined)){ // check for valid degrees input
        console.log(`\"${degrees}\" is not a valid argument for degrees!`);
    }else{
        // check for celsius of fahrenheit units
        if(unit === "C"){
            return celsiusToFahrenheit(degrees);
        }else if (unit === "F"){
            return fahrenheitToCelsius(degrees);
        }else{ // if the unit is neither "F" or "C", we have an invalid unit
            console.log(`\"${unit}\" is not a valid unit!`);
        }

        // function definitions to convert between
        // celsius and fahrenheit
        function celsiusToFahrenheit(degrees){
            return Math.floor((degrees * 1.8) + 32); // use Math.floor() to ensure we get whole numbers
        }
        function fahrenheitToCelsius(degrees){
            return Math.floor((degrees - 32)/1.8); 
        }
    }
}

console.log(convertTemperature("C", 100));
console.log(convertTemperature("F", convertTemperature("C", 100)));
console.log(convertTemperature("wrong", 10));
console.log(convertTemperature("C", "also wrong"));
console.log(convertTemperature("C", 6));