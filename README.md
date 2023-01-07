


# Introduction

Welcome to "Golden Image", get the latest amazing photos taken by talented individuals and spark dialogue around the photo taking process.

"Golden Image" is a social media photo sharing app.

It uses MVC architecture, allowing users to 
- sign-up for an account, 
- log in, 
- add photo post,
- apply specific meta data associated with photo,
- ability to like the photo,
- see all previous comments from all users, 
- leave their own comment, 
- authenticated user can remove their own comment and/or post, 
- Linked with Cloudinary and supports their image file types 


---

# Objectives

"Golden Image" is a full-stack app created to create an efficient and simple social media application catering to the photography community. 

---


# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator, cloudinary, ejs, method-override, multer

---

# Screenshots

<img src="https://imgur.com/t4hZpw5.jpeg" width=400 />
<img src="https://imgur.com/EjAaQsW.jpeg" width=400 />
<img src="https://imgur.com/M7tO9W1.jpeg" width=400 />
<img src="https://imgur.com/g11hZgE.jpeg" width=400 />
<img src="https://imgur.com/D1X31ux.jpeg" width=400 />
<img src="https://imgur.com/VWBJbCF.jpeg" width=400 />
<img src="https://imgur.com/xbO9G7Z.jpeg" width=400 />

---

# Optimizations 

As an MVP, functionality of the app are working. However, if I had more time, there are several things I would have liked to have done, including: 
- Include cleaner styling.
- Readjustement of timestamp for comments.
- Add ability to follow or add friends.
- Fill blank space when viewing photos on bottom right hand side with friends currently online.
- Find a way to include HEIF and HEVC formats for photos.

---

# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`
