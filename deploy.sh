#!/bin/bash

# Set environment variables
export COSMOS_DB_CONNECTION_STRING="mongodb+srv://<user>:<password>@assessment.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000"

# Install Node.js and dependencies
sudo apt-get update
sudo apt-get install -y nodejs npm
npm install

# Start the application
node app.js