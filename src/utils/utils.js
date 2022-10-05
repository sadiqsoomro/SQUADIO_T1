const uuid = require("uuid");
const moment = require("moment");
const { cacheTTL } = require("../commons/config")

const GenerateRandomString = () => {
    return  (uuid.v4().replace(/-/g, "")).toUpperCase();
}

const isNumeric = (value) => {
    const bool = /^\d+$/.test(value);
    if(bool == true) return parseInt(value)
    else return false;
}

const GenerateTTL = () => {
    return new Date(Date.now() + (parseInt(cacheTTL)*1000));
}

const IsCacheValid = (itemTTL) => {
    return moment(itemTTL).isAfter(Date.now());
}

module.exports = {
    GenerateRandomString,
    isNumeric,
    IsCacheValid,
    GenerateTTL
}

