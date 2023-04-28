# Nodejs-Tutorial-app

1. <b> Using express generator and generate an express app. </b>
    <p>npm install express-generator</p>

2. <b>Give it a name of Nodejs Tutorial app</b>
     <p>express --view=hbs Nodejs-Tutorial-app</p>
    <p>npm install</p>
    <p>npm start</p>

3. <b> Install the following npm packages, nodemon, expressJs, body-parser</b>
    <p>npm i nodemon expressjs body-parser</p>

4. <b>Using request params, add a user object to the request, the object should have a the following keys, name, age, sex.</b>
    <p>router.post('/', function(req, res, next) {<br>
     const { name, age, sex } = req.body;</p>

5. <b>Return the user object as a json object as a response</b>
    <p> console.log(name, age, sex);<br>
    res.json({name,age,sex});<br>
    });</p>
 