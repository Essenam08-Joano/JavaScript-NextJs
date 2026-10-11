// Create table of 5 pbjects
articles = [
    {name:"Sac", price: 1500},
    {name:"Pencil", price: 15},
    {name:"Dress", price: 2500},
    {name:"Shoes", price: 170},
    {name:"Glass", price: 27}
];

// Use .map() to display each article with its price
console.log(articles.map(i => i.name + " : " + i.price  + " £"));    

// Filter price which <20 £
console.log(articles.filter(n => n.price < 20 ))

//Display total price with .reduce()
let totalPrice = articles.reduce((som, n) =>  som + n.price, 0);
console.log(`Total Price = ${totalPrice} £`);

//Display the price which is more expensive with reduce
let maxPrice = articles.reduce((max, n) =>  (n.price > max.price ? n : max))
console.log(maxPrice);

//Use spread to copie this table and add a new article
const newArticles = [...articles, {name:"Book", price: 4.5}];
console.log(newArticles);
