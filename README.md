- Create a repository
- Initialize the repository
- node_module, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handler for/test , /hello
- Install nodemon update scripts inside package.
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilde ( ^ vs ~ )

Day-2

- intialize git
- .gitignore
- create a remote repo on github
- Push all code to remote origin
- Play with routes and routes extensions ex. / , /hello , hello/2 /xyz
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH , DELETE API Calls and test the on Postman
- Explore routing and use of ?, + , (), * in the routes
- Use of regex in routes /a/, /.*fly$/
- Reading the query params in the routes
- Reading the dynamic Routes

Day-3

- Multiple Route Handlers -Play with the code
- next()
- next function and errors along with res.send()
- app.use("/routes", rH, [rH2, rH3], rH4, rH5);
- What is middleware? why do we need it?
- How express JS basicall handles requests behind the scense
- Difference app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth for all user routes, expect /user/login
- Error handling using app.use('/',(err,req,res,next)=>{})

Day-4

- Create a free cluster on MongoDB official Website(Mongo Atlas)
- Install mongoose library
- Connect your application to the Database<"Connection-url">/devTinder
- Call the connectDB function and connect to database before starting application on 7777
