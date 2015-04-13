# dd-push-js
A simple library for accessing Data Drop pushes via the web and nodejs.  

## What's DataDrop?
[DataDrop](https://www.datadropapp.com) is an application that connects with Dropbox to allow you to 
read and write a file using a simple permanent URL. It uses the HTTP verbs (GET, PUT, POST, DELETE) to 
enable reading, writing, appending, and deleting the file.  Usage of the verbs is abstracted away when you use 
this library though.  You just get simple methods for doing those things.  

## How do you install it?
Install it with npm: 
```bash
npm install dd-push-js
```
or bower:
```bash
bower install dd-push-js
```

## How do you use it?  

1.  Load the library.   
  If you're using node:
  ```javascript
  var ddPush = require("dd-push-js");
  ```
  If you're using a browser:
  ```html
  <script src="bower_components/dd-push-js/dist/dd-push.min.js"></script>
  ```  
  
2. Config the push.
  ```javascript
  var push1 = ddPush.push({url : "#### your url here ###", key: "#### your key here ###"});
  ```
  
3. Do your thing!
  ```javascript
  // use read, write, append, or delete.
  push1.write("This is saved from node.js")
    .then(function(body){
      console.log("The server responded with:", body);
    })
    .catch(function(err){
      console.error("There was an error:", err);
    });
  ```
