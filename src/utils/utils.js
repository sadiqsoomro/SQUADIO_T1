const uuid = require("uuid");

const GenerateRandomString = () => {
    return  (uuid.v4().replace(/-/g, "")).toUpperCase();
}

const isNumeric = (value) => {
    const bool = /^\d+$/.test(value);
    if(bool == true) return parseInt(value)
    else return false;
}

module.exports = {
    GenerateRandomString,
    isNumeric
}

