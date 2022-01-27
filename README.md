# MR. MARY STORE 🏪🛒👩‍🦳

This API RESTful includes the four basic CRUD operations and it is about store, its products and employees.

## 💾 Resources

- Node.JS;
- Node Third Party Modules:
  - Express.Js,
  - Mongoose,
  - Joi,
  - Moment,
  - Mongoose Paginate v2;
- MongoDB Atlas Database;
- Postman.

## 💻 Run locally

If you want to run the project on your local machine, just follow the steps below:

### 1️⃣ Starting...

To get started, you simply need to clone the project repository on your machine and install the dependencies.

```
  git clone https://github.com/ludico1959/msmary-store
```

### 2️⃣ Requirements

Before installing the dependencies from the project, you need to have already installed on your machine:

* **Node.Js**: If you don't have it, just download [here](https://nodejs.org/en/download/).
* **MongoDB Atlas Dabase**: If you don't have it, just acess it [here](https://www.mongodb.com/pt-br/atlas/database-pt-1).*


### 3️⃣ Setting the environment variables

For using and accessing the MongoDB Atlas Database, you must set the environment variables, then rename the file to **.env**.
You will see that there's a variable called DATABASE_URL where you will paste the link to your remote database.
It's important to change the placeholder <password> to <PASSWORD> in the link. Also, don't forget to add your database name.
As, as you can imagine, there's a DATABASE_PASSWORD environment variable where you will place the user's database password.
Finally, the PORT environment variable is just usable if you want to change from 3000 to another port where this app will be running.


### 4️⃣ Instaling dependencies

Open your command-line interpreter and enter the path of your project. Then just type the following instruction: 

```
npm install
```

By typing the statement above, it will automatically download all the dependencies listed in the package.json file inside the folder **node_modules**:


### 5️⃣ Running the application

Well, now on the same another command-line interpreter, just start the server for the project to run locally typing:

```
node src/app/server.js
```
And that's it, folks! Congratulations, your app is running locally.

##  📬 Using the application 

I will put here two options for using this API: 

#### 🧮 Swagger UI

The first one, using Swagger UI, is more user friendly. To use it, just type the following route in the seach bar of your favorite brownser!
But wait! It is import to notice that maybe you will have to change some information on this url, like the port number 3333, for example.

```
http://localhost:3333/api/v1/api-docs/
```

#### 📮 Postman

The second one is not so user friendly, so I strong recommeded using the Swagger UI option above. But, as long as I was using Postman while I was creating the endpoints, I think it is valid to keep it and even a similar program called Insomnia as options. 
For using it, just import the **postman_collection.json** from inside the test folder. 

* **Postman**: [download here](https://www.postman.com/downloads/).
* **Insomnia**: [download here](https://insomnia.rest/download).


## 📡 Run remotely

To be updated...
