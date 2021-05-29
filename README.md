# Node API with image upload
Used to study and practice an API that allows an image upload

### Source
https://lo-victoria.com/build-rest-api-with-nodejs-design-and-plan-restful-api

### Setup
* In your local environment, create a ".env" file in the root directory and add `MONGODB_URI=mongodb://localhost:27017/tea`
* Start MongoDB in terminal/command prompt
* `npm i`
* `npm start`

### Note
Make sure the POST request in Postman uses "form-data" in the body of the request and set the "image" key type to "file"