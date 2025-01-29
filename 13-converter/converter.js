// Creating necessary variables
let meterValue = parseFloat(prompt("Insert the value in meters"))
const options = parseInt(prompt(
    "Choose a measure: \n\n1) Milimeter (mm)\n2) Centimeter (cm)\n3) Decimeter (dm)\n4) Decameter (dam)\n5) Hectometer (hm)\n6) Kilometer (km)")
)

const milimeter = meterValue * 1000
const centimeter = meterValue * 100
const decimeter = meterValue * 10
const decameter = meterValue / 10
const hectometer = meterValue / 100
const kilometer = meterValue / 1000

switch (options) {
    case 1:
        alert("Result: " + meterValue + "m = " + milimeter + "mm")
        break
    case 2:
        alert("Result: " + meterValue + "m = " + centimeter + "cm")
        break
    case 3:
        alert("Result: " + meterValue + "m = " + decimeter + "dm")
        break
    case 4:
        alert("Result: " + meterValue + "m = " + decameter + "dam")
        break
    case 5:
        alert("Result: " + meterValue + "m = " + hectometer + "hm")
        break
    case 6:
        alert("Result: " + meterValue + "m = " + kilometer + "km")
        break
    default: 
        alert("Closing...")
}

if (options >=7 || options < 1) {
    alert("Invalid Option!")
}