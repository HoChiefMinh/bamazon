var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.PASSWORD="Hondacbr60?!",
  database: "bamazon"
  
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
});

function queryAllProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      }
      console.log("-----------------------------------");
      purchasePrompt();
    });
  }

  function purchasePrompt(){
    inquirer
        .prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter in the ID of the item you would like to purchase.",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many would you like to buy?",
		filter:Number
	}
 ])
 
 .then(function(answers){
 	var amountRequested = answers.Quantity;
 	var IDrequested = answers.ID;
 	purchaseOrder(IDrequested, amountRequested);
 });
};

    function purchaseOrder(ID, quantityNeeded) {
        connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
            if(err){console.log(err)};
            if(quantityNeeded <= res[0].stock_quantity){
                var totalCost = res[0].price * quantityNeeded;
                console.log("Good news, we have your order in stock!");
                console.log("Your total cost for " + quantityNeeded + " " +res[0].product_name + "s" + " is " + totalCost + " Thank you!");
                // UPDATE [table] SET [column] = '[updated-value]' WHERE [column] = [value];
                connection.query("UPDATE products SET stock_quantity = stock_quantity -  ? WHERE item_id = ?",
                [quantityNeeded, ID],
                function(err, res){
                    console.log("Successfully Purchased")
                });
            } else{
                console.log("Insufficient stock quantity, sorry we do not have enough " + res[0].product_name + "s" + " in stock to complete your order.");
            };
            queryAllProducts();
        });
    };
 
    