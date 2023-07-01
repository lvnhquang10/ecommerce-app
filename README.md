
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
- Complete Authorization for login component.
- Complete Authentication & Authorization for sign up component.

Week 5: 
- Add an API payment for checkout component. 
- Create API getting database's product from mySQL.

Week 6:

Week 7: 

Week 8:



## Installation

Install with npm

```bash
    npm install 
```

Install JSON server
```bash
    npm install -g json-server
```

Run JSON server
```bash
    json-server --watch db.json
```
Run project
```bash
    ng serve
```    
Install express, mysql, nodemon, cors, jsonwebtoken
```bash
    npm i express mysql nodemon cors jsonwebtoken
```
Run API authentication
```bash
    nodemon server.js
```  
## Features

- Display products in shop page
- Add to cart
- Remove item
- Login authentication


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