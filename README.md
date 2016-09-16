# Node Auth0 v1
This is the seed project you need to use if you're going to create a NodeJS API. You'll mostly use this API either for a SPA or a Mobile app. If you just want to create a Regular NodeJS WebApp, please check [this other seed project](https://github.com/smartSenseSolutions/node-auth0-v1)

This example is deployed at http://erp-foizloqa.cloudapp.net:3001/

#Running the example
In order to run the example you need to have npm and nodejs installed.

Run `npm install` to ensure local dependencies are available.

You also need to set the ClientSecret and ClientId for your Auth0 app as enviroment variables with the following names respectively: `AUTH0_CLIENT_SECRET` and `AUTH0_CLIENT_ID`.

For that, the following should have been already created for you; if not, just create a file named `.env` in the directory and set the values like the following, the app will just work:

````bash
# .env file
AUTH0_CLIENT_SECRET=`<client_secret>`
AUTH0_CLIENT_ID=`<client_id>`
````

Once you've set those 2 enviroment variables, just run `npm start` and try calling [http://localhost:3001/ping](http://localhost:3001/ping)
