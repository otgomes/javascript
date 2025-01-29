const touristName = prompt("Tourist name?")
let citiesVisited = ""
let count = 0

let answer = confirm("Have you visited any city?") ? "Yes" : "No"


while (answer === "Yes") {
    let city = prompt("Which city have you visited?")
    citiesVisited += " - " + city + "\n"
    count++
    answer = confirm("Have you visited another city?") ? "Yes" : "No"
}

alert(
    "Tourist: " + touristName +
    "\nAmount of visited cities: " + count +
    "\nCidades visitadas:\n" + citiesVisited
)