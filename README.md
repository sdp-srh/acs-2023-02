# Repository for Advanced Computer Science
Here all coding for the course Advanced Computer Science is available.  

# Create a node.js project
## Init the project
Navigate to the folder where you want to create the project and create a new project with  
```
npm init  
```
Add the information like name, author, ...  

## Add the required packages
Install required packages (here express) with  
```
npm install express
```

## Implement in index.js
Create a file index.js in your editor (eg. VS Code)  
Add the line:  
```javascript
console.log('Hi! node.js is running')
```

## Test index.js
Run a node js file with node "filename"  
```
node index.js
```

## Implement a webserver with express
See https://expressjs.com/en/starter/hello-world.html  

## Add to git
We have already a repository connected.   
Create a .gitignore file.  
Add node_modules folder to .gitignore  

Git commands  
```
git add .
git commit -m "initial setup"
git push
```

# GCP Google Cloud
Create a project  

Install the Command Line Tools from:  
https://cloud.google.com/sdk/docs/install

### Initialize gcloud with your credentials and project
```
gcloud init
```

### Deploy your project
```
gcloud app deploy
```

### Test your project
```
gcloud app browse
```

