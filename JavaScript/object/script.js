 
// create "item " object
let item ={
 name:'phone',
 price:25000,
 quantity:1,
 categories : ['electronics','phones'],
//  object inside object 
 dimentions:{
   length:7,
   height:3.5,
   breadth:9

 }
}
// chahge price
item.price=26000
console.log(item.price);

console.log(item)
console.log(item.categories)
console.log(item.categories[0])
console.log(item.dimentions)
console.log(item.dimentions.length)


//another way to create object
let item2 = new Object();
item2.name='nuha'
item2.price=26000
item2.quality=1
console.log(item2)

//accessing object
//dot nnotation
// new properties add
item.returnable=true
console.log(item)

//square bracket notation
console.log(item['price'])
item['returnable']=false
console.log(item)

let key = 'price'
item[key]=27500
console.log(item)
item.key=28000 //dosen't work that time this time update
console.log(item.key)
console.log(item)


item = {
    name: "phone",
    quantity:1,
    price:25000,

    // it is method beacse inside object and it also called using object name
    buy:function(){
        console.log('item added to cart')
    },
    /* addToList(){
        console.log('item added to list')
    }
        */
    addToList(){
        console.log('item added to list')
    }
}
item.buy()
item.addToList()
