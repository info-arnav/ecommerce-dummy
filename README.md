# Aditi Ecommerce App

Yo, so first how to set up

## Setup

```
npm i
npm run dev
```

this starts a frontend application at localhost:3000

U have to start ur application on another terminal now

## Message

So now we will be going forward parallely, ill write tasks here and both me and you will proceed to do the tasks in the order respectively.

It's like, if you do the backend correctly and open the site and perform that function; the website should work perfectly.

Also for sure, u will face issues in some parts and ik which ones ig, but we have done it so j refer to old docs fs; and if u face probs, dont get demotivated. It is quite natural even after making tons of apps.

## Basic Requirments

- file name index.js
- folder aditisServer
- add a script named lessgo which started the application

```
npm run lessgo
```

- now the port to listen to is 5000
- Ill be sending reqquests from port 3000 -> provided this for a reason 😁

## MongoDB

in this u will need to insert, find and update data. Maybe work with arrays.

It is really easy but what u need is a documentation to refer to.

Here it is

main one - https://www.mongodb.com/docs/manual/reference/command/nav-crud/

u can use this too - https://www.mongodb.com/docs/drivers/node/current/usage-examples/replaceOne/

THIS IS IMP, THIS IS FOR ARRAYS U WILL NEED THIS - https://www.mongodb.com/docs/manual/reference/operator/update-array/

## Cors

Cross-origin resource sharing (CORS) is an extension of the same-origin policy. You need it for authorized resource sharing with external third parties. For example, you need CORS when you want to pull data from external APIs that are public or authorized. You also need CORS if you want to allow authorized third-party access to your own server resources.

IN SHORT, when u are excahnging data between to diff domains, so be sure if u need to use this or not 😁😁

## General

StackOverFlow - https://stackoverflow.com/

the qora for programing.

## Program

Handle errors properly, mongoDB collections and structures upto u.

- api/login

  - Post Req
  - the data i send is {email, password, confirmPassword, phone}
  - check if password and confirmPassword match
  - check if email is not already registered on the website
  - if both these are true, then as a response send {loggedIn: true}
  - else send {loggedIn: false, message:message}
  - the message if already registered should be "already registered"; and if pasword dont match then "not matching"

- api/register

  - Post Req
  - the data i send is {email, password}
  - check if user in database
  - match password
  - if both these are true, then as a response send {loggedIn: true}
  - else send {loggedIn: false, message:message}
  - the message if not registered should be "not registered"; and if pasword dont match then "wrong pass"

- api/products

  - Post req
  - the data i send is {}
  - send me a list of all items
  - [{title, description, id}, {title, description, id} ...]
  - id is a unique product id, u may use dummy data to return this

- api/product

  - Post req
  - the data i send is {id}
  - send me a dictionary with the item details
  - {title, description, id}
  - if error send me a dict with {error : true}

- api/add

  - Post req
  - the data i send is {id, name}
  - name here is the email of the user
  - return me either {error:true} or {error:false}
  - also write a message

- api/cart
  - Post req
  - the data i send is {name}
  - name is the email
  - return an array of items in cart
  - [{title, description, id}, {title, description, id} ...]
