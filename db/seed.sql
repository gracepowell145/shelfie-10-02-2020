CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(25),
price INTEGER,
imgurl TEXT
);

INSERT INTO products
(name, price, imgurl)
VALUES 
('apple', 100, 'sdahflds');

SELECT * FROM product;
