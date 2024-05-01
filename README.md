# Azure-based API with Node.js and Express.js

This project demonstrates the creation of an Azure-based API using Node.js, Express.js, and MongoDB (Azure Cosmos DB).

## Prerequisites
- Azure account with permissions to create a Virtual Machine and Cosmos DB instance
- Node.js and npm installed on your local machine

## Setup
1. Create an Azure Virtual Machine instance to host the Node.js application.
2. Create an Azure Cosmos DB account and configure it to use the MongoDB API.
3. Clone the repository or copy the source code to the Azure VM.
4. Install the required dependencies:
5. Set the `COSMOS_DB_CONNECTION_STRING` environment variable with the connection string for your Cosmos DB instance.
6. Start the application:
7. The API will be available at `http://[VM_PUBLIC_IP]:3000`.

## Endpoints
- `POST /register`: Accepts a JSON payload with `name` and `email` fields and stores the user registration information in the MongoDB database.

## Deployment
1. Copy the application source code to the Azure VM.
2. Make the deployment script executable: `chmod +x deploy.sh`
3. Run the deployment script: `./deploy.sh`

