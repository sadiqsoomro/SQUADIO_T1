const uuid = require("uuid");

const GenerateRandomString = () => {
    return  (uuid.v4().replace(/-/g, "")).toUpperCase();
}

module.exports = {
    GenerateRandomString
}

