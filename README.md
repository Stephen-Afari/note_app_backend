Project Title
Full Stack Note Application Backend

Deployed Application
https://note-app-client-a1pt.onrender.com/login

Technologies
MongoDB, Express, NodeJS, Postman

Architecture
<img width="453" alt="MVCArch" src="https://github.com/Stephen-Afari/note_app_backend/assets/62534292/efc29358-9bc9-4b6c-aec1-58bd932c6ebd">


The MVC architecture is implemented here.
Model: Everything concerned with the application's data and business logic. We have the Note Model and the User Model implemented by means of the Schema. We have implemented pre-save hooks
which occurs between the moment we receive data and the moment it is persisted through the database.
Controller: This handles the application's requests, interacts with the models and send back responses to the client. This is the application logion. The controllers in this application are:
1. noteController (handles note creation, update, deletion and getting all notes)
2. AuthController (Authorization: handles the login,protects the routes with a Jason web token, signup, logout etc) and
3. ErrorController (handles operational erros)
View: This is the graphical user interface, which is the React application already discussed in the note client app stored in this github repository.
   
Overview
This is the backend of the fullStack Note Application. This is built based on the REST (Representational state transfer) architecture, which enables us to build web APIs in a logical way
and makes them easy to consume.
Index.js: Here we try to catch Uncaught exceptions (bugs not handled anywhere in the code), access the database and start the server. This calls the app.js file
app.js: Here we mount two different routers: 1. notes and 2. users. We have also implemented CORS (cros origin resource sharing) to enable our client/front end, running in a different 
domain/origin to have access to the resources in the domain of the backend. We have also implemented a Global Error handling Middleware which is a global express error handling middleware
which is able to catch operational errors coming from all over the application.
note Route: This route is protected by a Jason web token (jwt) such that each time a user wants to access it sends his request along with a Jwt, once it is verified, then access is granted
to access this route. Subsequently, the user can access all the notes and create new ones
user Route: Once a request hits this route, it enables a user to sign-up, login and logout etc)
bcrypt Algorithm: This has been implemented to salt(added random strings) and hash our passwords in order to make it strong to protect it from brute force attached

Project Structure
<img width="153" alt="ProjectStructure" src="https://github.com/Stephen-Afari/note_app_backend/assets/62534292/91098e4a-5b19-4ae4-a999-951b4e5fbcbf">
