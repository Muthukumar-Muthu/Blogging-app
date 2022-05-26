
This project was bootstrapped with  [Create React App](https://github.com/facebook/create-react-app).

## Follow these simple steps to have your own clone

#### 1: Clone this repo using this command

`git clone https://github.com/Muthukumar-Muthu/Blogging-app.git`

#### 2: Enter

`cd Blogging-App`

#### 3: Next

`npm install`
#### 4: Create new Firebase project at console.firebase.google.com and copy the firebase Config object and paste it in the src/firebase/configuration/firebase-config.js . Use this link to know more about that https://firebase.google.com/docs/web/setup



#### 5: Hit  `npm start`  in terminal & now the app starts running at port 3000.

## Set Up Hosting in Firebase



#### 0: Install firebase cli  `npm i firebase-tools`

#### 1: Hit command  `firebase init`

#### 2: Enter Yes

#### 3: Answer some questions. [Use this link](https://www.youtube.com/watch?v=IDHfvpsYShs)

#### 4: Enter  `build`  for directory && select  `Yes`  for all other options.

#### 5: After initialization Completed. Enter

`npm run build`

#### 6: Now the last command

Enter  `firebase deploy`

#### Boom! You have successfully hosted your firebase app. Click on the link and Enjoy!. Don't forget to rate the repository.

# Project Feature

 1. User authorization 
 2. Protected routes
 3. Logged in user can create new blog
 4. Rich text editor  
 5. User can share share their blog with others (For visiting blog pages, authorization is not needed)
 6. User can setup their profile (but for now only bio can be edited)


### Some features that may be add in the future
	

 1. User can save a particular blog in their saved folder
 2. Improved UI/UX overall
 3. More customization of their profile
 4. Fixing text editor error.
 5. Add more customization of user profile
 6. Changes in home feed, instead of own blog-list feed, can change it into global recent blog-list and user's following people's blogs.
 7. And much more
