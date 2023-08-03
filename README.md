# CZ-BioHub-TakeHome-Challenge

## Fibonacci Sequence Generator
A simple full stack application which computes  and displays the fibonacci sequence 

## Description 
The front communicates with the backend API, which is powered by Express and stores data in a Relational database. 
- The front has two pages. The first page has an input box and a button where the user is prompted to type the fibonacci sequence's length
- The second page displays the  requested fibonacci sequence seperated by commas with a provison to return back to the previous page 


## Technologies
- Frontend: React, HTML, CSS, JavaScript
- Backend: Express.js, Node.js
- Database: MySQL


## Installation
### Clone the repository:
git clone [https://github.com/ramyaram2092/cz-biohub-takehome-challenge.git](https://github.com/ramyaram2092/CZ-BioHub-TakeHome-Challenge.git)<br />
cd cz-biohub-takehome-challenge

### Install dependencies for both frontend and backend:

cd client<br />
npm install

cd ../server<br />
npm install

### Set up the database:

Download mysql database update the .emv  file in the server/.env folder with your  credentials.<br />
Note : The application takes care of creating database and table. Only the mysql crendtails like the username and password is needed 

### Start the backend server:
cd server<br />
npm start / npm run dev

### Start the frontend development server:
cd client <br />
npm start

The application will open at localhost :3000
