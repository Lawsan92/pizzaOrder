# pizzaOrder

<img src ='https://res.cloudinary.com/darp0mj9i/image/upload/v1666824581/samples/Screen_Shot_2022-10-26_at_17.49.37_vcy2s7.jpg' />


# Instuctions

## 1- clone repo locally

```sh
git clone https://github.com/Lawsan92/pizzaOrder.git
```

## open terminal and navigate to root directory of repo

```sh
cd pizzaOrder/
```

## Open repo in IDE of your choosing (this is a vscode terminal command) in the root firectoy

```sh
code .
```

## 2- before running server

  ### install modules
  ```sh
  npm i
  ```

  ### make a .env file in the root directory

  ```
  touch .env
  ```

  ### write the following variables in your .env file

  ```
    PORT = <your port number>
    getTokenObj = <JSON object you'll get in the next step>
  ```
<p>Set this json object as the value of the getTokeObj variable</p>

  ```
  { "password": "test", "username": "test"}
  ```

## 3- Run the app && Login

  ### start the server
  ```
  npm run server
  ```

  ### navigate to the login screen, you won't be able to submit any orders before logging in

  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1666826454/samples/Screen_Shot_2022-10-26_at_18.20.51_yu56a5.jpg'/>

 <p>the username can be anything but the password must meet these expectation</p>

  ```
needs:
      a lower-cased letter
      an upper-cased letter
      an integer
      a special character: !@#$%^&*()
  ```

## 4- Make an order and submit it

  ### Go to the checkout

  <img src= 'https://res.cloudinary.com/darp0mj9i/image/upload/v1666826702/samples/Screen_Shot_2022-10-26_at_18.24.59_b3oukt.jpg'/>

  <p> As you're making your order, be sure to click on the Order_ID button after each submission otherwise you'll have duplicate order ID's</p>

  ### To to the cart

  <img src= 'https://res.cloudinary.com/darp0mj9i/image/upload/v1666826801/samples/Screen_Shot_2022-10-26_at_18.26.39_niparl.jpg'/>

  <p> You should see your order in your cart, NOTE ! the first order will always be missing the timestamp, updating state issue</p>

 ### Go to Your Orders

 <img src= 'https://res.cloudinary.com/darp0mj9i/image/upload/v1666826908/samples/Screen_Shot_2022-10-26_at_18.28.24_g9ipbg.jpg'/>

  <p>You should now see your orders populate the history page</p>

  <p>To delete an order simply press cancel, then push get order history to refresh the histroy</p>

  ### To reset everything, simply refresh the page

## 5-Run app in Docker container (optional)

  ### run the following commands in your shell

  ```sh
  Docker build --tag pizzaorder .
  ```

  <p>This will copy all contents of the app into a Docker image</p>

  ```sh
  Docker run --publish 3000:3000 pizzaorder
  ```

  <p>This will build a container and run the app in the container on your local server using port 3000 </p>
