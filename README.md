LUX
Ecommerce platform made from React, MaterialUI, CommerceJS, and Stripe

demo:

- https://shopluxv2.netlify.app

Images from app:

![](src/assets/sample/home1.png?raw=true)

![](src/assets/sample/models.png?raw=true)

![](src/assets/sample/products.png?raw=true)

SETUP

- Set env variables. Go to commerceJS and Stripe to set up api key.

Command:

- npm i
- cd src
- npm start

Bugs:

- bug with showing prices in app cart.subtotal.formatted_with_symbol. Use useEffect for this
- 422 error

Todo:

- landing page - create sliding images
- filter products in Shopping component
- modal view with product details
- integrate AuthO user
