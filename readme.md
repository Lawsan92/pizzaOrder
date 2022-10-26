# pizzaOrder

<img src ='https://res.cloudinary.com/darp0mj9i/image/upload/v1666824581/samples/Screen_Shot_2022-10-26_at_17.49.37_vcy2s7.jpg' />


# Instuctions

## clone repo locally

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

## before running server


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
  ### click on this link, on the page you should see a json object with a 'password' and 'username' prop key, copy that object and set it as the value of the getTokenObj property in your .env file
  https://order-pizza-api.herokuapp.com/api/ui/#!/Auth/auth_login

## To get server running
```
npm run server
```

