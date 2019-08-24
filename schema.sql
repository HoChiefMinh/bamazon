DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Fan', 'Electronics', 43.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Lamp', 'Furniture', 25.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('TV', 'Electronics', 1098.00, 56);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Laptop', 'Electronics', 1194.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Camera', 'Electronics', 1198.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Guitar', 'Instruments', 299.00, 53);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Funko Pop', 'Toys', 11.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Fish Tank', 'Pets Care', 129.99, 35); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Toothbrush', 'Personal Care', 29.95); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Whey Protein', 'Diet', 63.99); 

SELECT * FROM products;