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

## Branch Information 
Developed the system in develop branch and merged into the main branch <br/>
Latest code is available in both develop and main


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

Download mysql database update the .env  file in the server/.env folder with your  credentials.<br />
Note : The application takes care of creating database and table. Only the mysql crendtails like the username and password is needed <br />
mysql server runs at port 3306

### Start the backend server:
cd server<br />
npm start / npm run dev <br/>
express server runs at http://localhost :8080


### Start the frontend development server:
cd client <br />
npm start <br />

The client will open at http://localhost :3000


## Demo

https://github.com/ramyaram2092/CZ-BioHub-TakeHome-Challenge/assets/89441435/ead70105-b704-4fd4-b2a9-ee5902901cb2

