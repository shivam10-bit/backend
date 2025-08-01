// Importing the Mongoose library
const mongoose = require("mongoose");

// Importing the environment variables using the dotenv library
require("dotenv");

// Defining a function to connect to the database
const dbConnect = () => {
	// Connecting to the database using the provided URL from the environment variables
	mongoose
		.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,


			//PUSH
		})
		// If the connection is successful, log a success message
		.then(() => console.log("DB CONNECTED"))
		// If there are issues connecting to the database, log an error message and exit the process
		.catch((err) => {
			console.log("DB CONNECTION ISSUES");
			console.error(err);
			process.exit(1);
		});
};

// Exporting the dbConnect function for use in other files
module.exports = dbConnect;
