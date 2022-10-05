# SQUADIO_T1

Clone/download repo from URL: https://github.com/sadiqsoomro/SQUADIO_T1 <br />
Go to package root directory <br />
Run command: "npm install" <br />
Create .env file in root directory and paste the following config <br />
<br />

# Heroku 
The service is deployed on Heroku.<br />
Use following base URL to access : https://squadi-t1.herokuapp.com/<br />
Use following URL for cache API: https://squadi-t1.herokuapp.com/v1/cache/:cacheKey<br />
<br />
/////////////////////////////// <br />
NODE_SERVICE_PORT = 4000 <br />
AUTH_TOKEN = JUMP-AUTH-TOKEN <br />
API_VERSION = v1 <br />
MONGO_DB_USER = squadio <br />
MONGO_DB_PASS = ZbshyhzvTsNluWSl <br />
MONGO_DB_DATABASE = SquadioDatabase <br />
MONGO_DB_CLUSTER = squadiocluster.qg8vmal.mongodb.net <br />
MONGO_CACHE_TTL = 5 <br />
MONGO_COLLECTION_LIMIT = 15 <br />
////////////////////////////// <br />

MongoDB is hosted free of cost on Atlas, you can have a view if you have compass. <br />
You can either use same credentials for testing (test data already cleared) or connect it with local database. <br />
<br /> 
Use command "npm start" to start the server. <br />
<br />
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
