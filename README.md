URL WEB: https://ecommerce-app-394515.web.app/
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
- Add database into MySQL

Week 7: 
- Add checkout method Stripe

Week 8:
- Containerize an application


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
Download XAMPP at https://www.apachefriends.org/

After successful installation, open XAMPP and then click the start button in the Apache row, the start button in the MySQL row.

Using XAMPP to create MySQL database

- Go to http://localhost:8080/phpmyadmin/
- Select the Import item in the toolbar then add the file "posts.sql"
- Posts contains 2 tables: product and user, product contains data about products, user contains encrypted user account information
## Features

- Display products in shop page
- Add to cart
- Remove item
- Login authentication
- Sign up authentication
- User's password is encrypted in the database
- Payment method: Stripe



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

Week 6: Try to update database on MySQL

Week 7: 

![App Screenshot](https://i.pinimg.com/originals/29/f8/63/29f863497a9dd79ac8e8f3d8d0c21ca9.jpg)

Pic 1: Add products to the cart page.

![App Screenshot](https://i.pinimg.com/originals/81/09/9d/81099d0bc5262671d4ba7ed2d92c488b.jpg)

Pic 2: Stripe payment page

![App Screenshot](https://i.pinimg.com/originals/26/95/b9/2695b99b1e8addf351528a83ef2719a4.jpg)

Pic 3: Successful payment page
