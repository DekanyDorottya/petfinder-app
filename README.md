
# Animal Support and Donation Web Application

This is a web application built using Node.js with Express for the server-side and React for the client-side. The application allows users to view and support animals by making donations.

## Features

- View a list of animals in need of support.
- Support animals by making donations.
- Pagination to display a limited number of animals per page.
- Success stories of previously supported animals.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js and npm
- MongoDB 

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:DekanyDorottya/petfinder-app.git
   ```

2. Change into the project directory:

   ```bash
   cd petfinder-app
   ```

3. Install server-side dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install client-side dependencies:

   ```bash
   cd ../client
   npm install
   ```
5. Configure MongoDB:
   
   - Replace the MongoDB connection string in `server/server.js` with your own.

6. Start the server and client:

   - In the `server` directory, run:

     ```bash
     npm start
     ```

   - In the `client` directory, run:

     ```bash
     npm start
     ```

   The client application will open in your web browser.

## Usage

- Visit the application in your web browser and explore the available features.
- View animals in need of support.
- Support animals by making donations.
- View success stories of supported animals.

