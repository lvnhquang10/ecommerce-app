
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

- Add an API payment for checkout component.
- Complete Authentication & Authorization for login and sign up component.

Week 4:

Week 5:

Week 6:

Week 7:

Week 8:
## Installation

Install with npm

```bash
    npm install ecommerce-app
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
## Features

- Display products in shop page
- Add to cart
- Remove item



## Screenshots
Note: The app component includes header & footer components.

![App Screenshot](https://i.pinimg.com/originals/40/52/cd/4052cd19ffc30b5720064d066f9e58e7.png)
Picture 1: This is the home component that displays an image.


![App Screenshot](https://i.pinimg.com/originals/01/f9/f8/01f9f8930833d3784f72ef2814c73e59.png)
Picture 2: This is the shop component that displays products pulled from the local API.

![App Screenshot](https://i.pinimg.com/736x/a4/37/45/a43745d4c7c0e89bd61a78fda1dd4f82.jpg)

Picture 3: This is the cart component that displays products added from the shop page.