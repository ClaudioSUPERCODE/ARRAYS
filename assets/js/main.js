let emailArr = ["batman@cave.gotham" , "jhhgwf@jhjf.de"];
let userAnfrage = "claudio@supercode.de";


    if (emailArr.indexOf(userAnfrage)  >= 0) {
        console.log(false)
    } else {
        console.log(true)
    }

console.log("xxx")

// ARRAYS//

// LEV-1_1

const person = ["Claudio", "Aleo", "King"]
const friends = ["Bruce", "Chuck", "Jackie"]
const favoriteFood = ["Pizza", "Pasta", "Steak"]

console.log(person, friends, favoriteFood)

// LEV-1_2

console.log(person[0])
console.log(person[1])
console.log(person[2])

console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

console.log(favoriteFood[0])
console.log(favoriteFood[1])
console.log(favoriteFood[2])

// LEV-1_3

console.log(person.length)
console.log(friends.length)
console.log(favoriteFood.length)

// LEV-1_4

person.push("Legende")
friends.push("JCVD")
favoriteFood.push("Bratwurst")
console.log(person)
console.log(friends)
console.log(favoriteFood)

// LEV-1_5

console.log(person)
console.log(person.pop())
console.log(person)

console.log(friends)
console.log(friends.pop())
console.log(friends)

console.log(favoriteFood)
console.log(favoriteFood.pop())
console.log(favoriteFood)

// LEV-1_6

console.log(person)
console.log(person.shift())
console.log(person)

console.log(friends)
console.log(friends.shift())
console.log(friends)

console.log(favoriteFood)
console.log(favoriteFood.shift())
console.log(favoriteFood)

// LEV-1_7

console.log(person)
console.log(person.unshift("Göttlich", "Weise"))
console.log(person)

console.log(friends)
console.log(friends.unshift("The Real Donald J", "Cobra Tate"))
console.log(friends)

console.log(favoriteFood)
console.log(favoriteFood.unshift("Lasagne", "Spinat"))
console.log(favoriteFood)

// LEV-1_9

const favTravel = ["Italien", "Kreta", "Jamaica", "Kuba", "Holland"]

console.log(favTravel)
console.log(favTravel.slice(0,3))
console.log(favTravel)

// Diese Methode verändert das Array nicht dauerhaft!//

// LEV-1_10

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

const res1 = text.split(" ")
console.log(res1)
