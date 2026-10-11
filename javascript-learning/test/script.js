// Le minimum Javascript à connaître pour React


// Variables et constante
let ages = 25;
const name = "Joano";

console.log(ages);
console.log(name);

// Fonction classique
function sayHello(name){
    return "Hello " + name
}
 
console.log(sayHello("Joanice"))

// Fonction fléchés
const sayHi = (name) => "Hi " + name

console.log(sayHi("Joanice"))

// Objets

const user = {id: 1, name: "Joano"}
console.log(user.id)
console.log(user.name)

//Tableaux
const numbers = [1,2,3]
const doubled = numbers.map(n => n*2)
// .map() permet d'indexer pour l'itération
console.log(doubled)
console.log(numbers)

// Déstruturaction

// Pour les objets
const person = {firstName : "Joano", age : 17};
const {firstName, age} = person;
console.log(firstName , age);

//Pour les tableaux
const fruits = ["pomme", "banane"]
const [first, second] = fruits
console.log(first, second);

//Opérateurs de décomposition / regroupements
const tab1 = [1,2]
const tab2 = [...tab1, 3, 4]
console.log(tab2)

const user1 = {firstName : "Joano", old : 17};
const user2 = {...user1, firstName : "Nisso", old : 18};

console.log(user2) //Fusionne les champs et affiche le plus récent


//Chaines de caractères et modèles
const nickName = "Esse"
const msg = `Bon travail ${nickName}`
console.log(msg)

//Opérateurs ternaires et logiques
const isLogged = true;
console.log(isLogged ? "Bienvenue" : "Connecte-toi") // une condition if = ? else = :

const show = false;
console.log(show && "Texte visible") // une condition, affiche le texte si c'est vraie 

const showYou = true;
console.log(showYou && "Texte visible") // une condition, affiche le texte si c'est vraie 


//Callbacks
function processUser (action){
    const lastName = 'ALOTCHO'
    action(lastName)
}

processUser((name) => {
    console.log(name)
})

// Async, Await & Fetch pour manipuler les API

async function getData() {// important de le mettre quand on fait appel à un API,on le met tout le temps puisque c'est un appel asynchrone 
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data)
}

getData()





