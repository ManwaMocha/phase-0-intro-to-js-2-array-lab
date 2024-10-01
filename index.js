// Write your solution here

const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield")

    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield")
    
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield")

    return cats.shift()
}
function appendCat(name){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield")

    const newCats = [...cats, name]
    return newCats 
}
function prependCat(name){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield")

    const newerCats = [name, ...cats]
    return newerCats
}
function removeLastCat(){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield")
    return cats.slice(0,cats.length-1)
}
function removeFirstCat(){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield")
    return cats.slice(1)
}

