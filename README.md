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
- Create a UserSchema & user Model
- Create POST /signup API to add data to database
- Push some documents using API calls from postman 
- Error Handling using try, catch


Day-5
- Difference b/w JS Object and JSON.
- Add the express.json middleware to your app.
- Make your signuup API synamic to recive data from the end user.
- User.findOne With duplicate email ids, Which object returned.
- API- Get user by email
- API - Feed API - GET/feed - get all the users from the database
- API - Get user by Id
- Create a delete user API
- Difference b/w PATCH and PUT.
- API -Ipdate a user.
- Explore the Mongoode Documentation for Model Methods
- What are options in a Model-findaoaneAndUpdate meyhods, explore more about it/
- API - Update the user with email ID

Day-6
- Explore schematype options from the documentation
- Add a required, unique, lowercase, min, minlength, trim,
- Add default
- Create a custom validate function for gender
- Improve the DB Schema -PUT all required validations on each field in Schema.
- Add timestamp to the userSchema
- Add API level validation on Patch request & Signup post api
- DATA Sanitizing -Add API validation for each 
- API level validation on Patch request & Signup Post api
- DATA Sanitizing - Add API Validation for each field 
- Install validator
- Explore the validator library functions and us validator functions for password, email, photourl
- NEVER TRUST req.body


Day-7
- Validate data in signup API
- Install bcrypt package
- Create a PasswordHash using bcrypt.hash & save the user is excrupted password
- Create login API
- Compare passwords and throw errors if any emails or password is invalid.
-

Day-8
- Install cookie-parse
- Just send a dummy cookie to user
- create GET/profile API and check if you get the cookie back
- install jsonwebtoken
- In login API, after email and password validation , create a JWT token and send it to user in cookies
- read the cookies inside your profile API and find the logged in user.
- userAuth Middleware
- Add the userAuth middleware in profile API and a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- Create userSchema method to getJWT()
- Create UserSchema method to comparepassword(passwordInputByUser)
- Create userSchema method to getJWT()
- Create UserSchema method to comparepassword(password)
