# **backend-challenge**

This API helps to send data to certain urls to store and get data.

## **Goal of Application**

1. Set up a nodejs server and connect it to a mongodb collection. We should be able to send data to certain urls to store and get data.

2. /api/getUsers - returns a json object with all the users in the database

3. /api/insertUser - accepts the following form data and inserts into the User table.

name, email, username, password

4. Password being encrypted once inserted into the database

# **Technologies used**

[node js](https://nodejs.org/en/)

[express](https://expressjs.com/)

[mongoDb](http://mongodb.com/)

# **Requirements and Installation steps**

## **You need the following to be able to run the application**

[Node](https://nodejs.org/en/download/) a runtime environment for JavaScript.

[npm](https://www.npmjs.com/get-npm) as a package manager for the JavaScript programming language.

[Visual studio code](https://code.visualstudio.com/download) for editing and running codes.

## **Clone the project**

    - open the terminal
    - run git clone https://github.com/JeanneBeula/backend_challenge.git
    - run cd backend_challenge
    - run npm install (to install required dependencies)

## Available Scripts

For install dependencies

### `npm install `

In the project directory, you can run:

### `npm run start `

## API Endpoints

- create new user: `{baseUrl}/api/auth/insertUser`

- get list of users: `{baseUrl}/api/auth/getUsers `

# Deployment

- [heroku link](https://userstest-api.herokuapp.com/)
