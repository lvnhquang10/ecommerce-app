
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
- Use authorization for login component.
- 

Week 6:
- Add an API payment for checkout component. 
- Store the product on the database.

Week 7: 

Week 8:



## Installation

Install with node modules

```bash
    npm install 
```
Run project
```bash
    ng serve
```    
Install express, body-parser, bcryptjs, mysql2, nodemon, cors, jsonwebtoken, express-validator
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
- Click new button in the database "posts" and create name, email, password with type varchar.
- Check the user and password in the User Account to connect database in the backend.
## Features

- Display products in shop page
- Add to cart
- Remove item
- Login authentication
- Sign up authentication
- User's password is encrypted in the database


## Screenshots

Week 2:

![App Screenshot](https://i.pinimg.com/564x/40/52/cd/4052cd19ffc30b5720064d066f9e58e7.jpg)
- Picture 1: This is the home component that displays an image.
![App Screenshot](https://i.pinimg.com/564x/01/f9/f8/01f9f8930833d3784f72ef2814c73e59.jpg)
- Picture 2: This is the shop component that displays products pulled from the local API.
![App Screenshot](https://i.pinimg.com/564x/a4/37/45/a43745d4c7c0e89bd61a78fda1dd4f82.jpg)
- Picture 3: This is the cart component that displays products added from the shop page.

Week 3:
![App Screenshot](https://i.pinimg.com/originals/67/8e/f4/678ef44c4713c5705efe5a77098c6031.png)
- Picture 1: After the login request, the server response and verify the token. It was then routed to the profile page.

Week 4:
![App Screenshot](https://i.pinimg.com/originals/e0/37/be/e037bec2a804f90d9e8997e00fdbc9ff.png)
- Pic 1: As you can see on the screen, after sending the request to the api, the api responds "User registered!"
![App Screenshot](https://i.pinimg.com/originals/6a/34/99/6a349939ba154331a047b600ee80dd7c.png)
- Pic 2: The user's information is stored in the database. Where the password has been hashed.
![App Screenshot](https://i.pinimg.com/originals/bb/d9/55/bbd955358e8a8a25024e17823887c154.png)
- Pic 3: I will use the information I registered earlier to log in. And I got the authentication token. This token is only valid for 1 hour.

Week 5: 