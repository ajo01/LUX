LUX
Ecommerce platform made from React, MaterialUI, CommerceJS, and Stripe

demo:

- https://shoplux.netlify.app/

Images from app:

![](src/assets/sample/home1.png?raw=true)

![](src/assets/sample/models.png?raw=true)

![](src/assets/sample/products.png?raw=true)

```
SETUP WITH DOCKER
git clone git@github.com:ajo01/LUX.git
cd LUX
docker build -t lux-ecommerce .
docker run -p 8080:3000 lux-ecommerce
Go to http://localhost:8080

SETUP WITHOU DOCKER

- Set env variables. Go to commerceJS and Stripe to set up api key.
- npm i
- cd src
- npm start

Todo:

- landing page - create sliding images
- filter products in Shopping component
- modal view with product details
- integrate AuthO user
```
