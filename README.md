# SQUADIO_T1

Clone/download repo from URL: https://github.com/sadiqsoomro/SQUADIO_T1
Go to package root directory
Run command: "npm install"
Create .env file in root directory and paste the following config

///////////////////////////////
NODE_SERVICE_PORT = 4000
AUTH_TOKEN = JUMP-AUTH-TOKEN
API_VERSION = v1
MONGO_DB_USER = squadio
MONGO_DB_PASS = ZbshyhzvTsNluWSl
MONGO_DB_DATABASE = SquadioDatabase
MONGO_DB_CLUSTER = squadiocluster.qg8vmal.mongodb.net
MONGO_CACHE_TTL = 5
MONGO_COLLECTION_LIMIT = 15
//////////////////////////////

MongoDB is hosted free of cost on Atlas, you can have a view if you have compass.
You can either use same credentials for testing (test data already cleared) or connect it with local database.

Use command "npm start" to start the server.

# SAMPLE CURL REQUEST

curl --location --request GET 'http://localhost:4000/v1/cache/testKey' \
--header 'Authorization: Bearer JUMP-AUTH-TOKEN'

# SAMPLE RESPONSE

{
    "code": 200,
    "errors": null,
    "message": "Request successful",
    "result": "C6C27A17AA034A029DBFC4DBE0477206",
    "isSuccess": true
}