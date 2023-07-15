
# Build an e-commerce Angular web app project

Features:

- Display, order products, handle payment process using 3rd party API like stripe or square
- Manage user information (Authorization, Authentication)
- Optional: Add basic unit test to the app
- Containerize the application
- Deploy on cloud hosting(trying free service like aws or azure)


## Roadmap

Week 1:

- Add components home, shop, login, cart, checkout.

Week 2:

- Add components sign up, header, footer.
- Create API to get data products.

Week 3:

- Complete Authentication for login component.

Week 4:

- Complete Authentication for sign up component.
- Encrypt password after store in database.

Week 5:
- Add an API payment for checkout component.
Store the order from user on the database.

Week 6:


## Installation

Install with npm

```bash
    npm install ecommerce-app
```
Run project
```bash
    ng serve
``` 
Install in the backend folder: express, body-parser, bcryptjs, mysql2, nodemon, cors, jsonwebtoken, express-validator
```bash
     npm i express body-parser bcryptjs mysql2 nodemon cors jsonwebtoken express-validator
``` 
Run backend
```bash
    npm start
``` 
Using XAMPP to create MySQL database

- Go to http://localhost:8080/phpmyadmin/
- Click new button on the left and put the name: posts and choose utf8_general_ci to create database.
- Click new button in the database "posts" and fill the name table "user" then create name, email, password with type varchar.
- Check the user and password in the User Account to connect database in the backend.
- Create a new product table with id, name, price, image.
## Features

- Display products in shop page
- Add to cart
- Remove item
- Login authentication
- Sign up authentication
- User's password is encrypted in the database



## Screenshots
Note: The app component includes header & footer components.

Week 2:

![App Screenshot](https://i.pinimg.com/originals/40/52/cd/4052cd19ffc30b5720064d066f9e58e7.png)

Picture 1: This is the home component that displays an image.


![App Screenshot](https://i.pinimg.com/originals/01/f9/f8/01f9f8930833d3784f72ef2814c73e59.png)

Picture 2: This is the shop component that displays products pulled from the local API.

![App Screenshot](https://i.pinimg.com/736x/a4/37/45/a43745d4c7c0e89bd61a78fda1dd4f82.jpg)

Picture 3: This is the cart component that displays products added from the shop page.

Week 5: 

![App Screenshot](https://i.pinimg.com/originals/02/7c/24/027c2451bf098241c47a3123771ed86f.jpg)

Pic 1: Create a new table of product and add 8 products.

![App Screenshot](https://i.pinimg.com/originals/cb/b0/ec/cbb0ec4f95e015c216b0802903a0b6be.jpg)

Pic 2: Fetch data from database.

![App Screenshot](https://i.pinimg.com/originals/82/14/07/821407a82e849d72fd5863fde64a1a57.jpg)

Pic 3: Show products on shop page.
