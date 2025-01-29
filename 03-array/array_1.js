const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adding elements
// push: Enter an element in last position
let size = arr.push("Boromir")
console.log(arr)
console.log(size)

// unshift: Enter an element in first position
size = arr.unshift("Boromir")
console.log(arr)
console.log(size)

// Removing elements
// Pop: Remove the last array element
let lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

// shift: Remove the first array element
lastElement = arr.shift()
console.log(arr)
console.log(lastElement)

// Searching an element
// includes
const include = arr.includes("Gandalf, The Mage")
console.log(include)

// indexOf
const index = arr.indexOf("Gandalf")
console.log(index)

// Cut and concatenate
// slice
const hobbits = arr.slice(0, 4)
const others = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(others)

// concat
const society = hobbits.concat(others, "Gollum")
console.log(society)

// Replacing an element
// splice
const removedElements = society.splice(index, 1, "Gandalf, the mage")
console.log(society)
console.log(removedElements)

// Iterate through elements
for (let index = 0; index < society.length; index++) {
    const element = society[index]
    console.log(element + " is in position " + index)
}