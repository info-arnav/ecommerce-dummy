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

## Program

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
