let list=[
    "pizza",
    "burger",
    "spaghetti",
    "sandwich",
    "biryani",
    "pasta",
    "fries",
    "shawarma",
    "steak", 
    "samosa",
]

let choice=prompt("Do you want to order something answer in yes / no")

let foods=[]
if (choice.toLowerCase()==="yes"){
    console.log(list)
    alert("Check menu in the console")
    let quantity=parseInt(prompt("How many things you want to order"))
    for(let i=0;i<quantity;i++){
    let order=prompt("What do you want to choose")
    foods.push(order)
    alert(order+" has been added to your order")
    console.log(foods[i])



    }
    console.log(foods)
}
else if (choice.toLowerCase()==="no"){
    alert("Thankyou")
}
else{
    alert("Plz answer in yes or no")
}





// let list = [
//     "pizza",
//     "burger",
//     "spaghetti",
//     "sandwich",
//     "biryani",
//     "pasta",
//     "fries",
//     "shawarma",
//     "steak", 
//     "samosa"
// ];

// let choice = prompt("Do you want to order something? yes / no");
// let foods = [];

// if (choice.toLowerCase() === "yes") {
//     console.log("Menu:", list);
//     alert("Check the menu in console");

//     let quantity = parseInt(prompt("How many items do you want to order?"));

//     for (let i = 0; i < quantity; i++) {
//         let order = prompt("Enter your item name");
//         foods.push(order);
//         alert(order + " has been added to your order.");
//     }

//     console.log("Your Order:", foods);
//     alert("You have ordered: " + foods.join(", "));
// } 
// else {
//     alert("Thank you!");
// }

