const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    //Convert empty fields to an empty string so we can use validator functions
    functions
        data.name = !isEmpty(data.name) ? data.name : "";
        data.email = !isEmpty(data.email) ? data.email : "";
        data.password = !isEmpty(data.password) ? data.password : "";
        data.password2 = !isEmpty(data.password2) ? data.password2 : "";
        
        //Might be optional and left blank
        data.number = !isEmpty(data.number) ? data.number : "";

        data.DOB.month = !isEmpty(data.DOB.month) ? data.DOB.month : "";
        data.DOB.day = !isEmpty(data.DOB.day) ? data.DOB.day : "";
        data.DOB.year = !isEmpty(data.DOB.year) ? data.DOB.year : "";
        
        //Might have default value of 12:00:00 PM
        data.time.hour = !isEmpty(data.time.hour) ? data.time.hour : "";
        data.time.minute = !isEmpty(data.time.minute) ? data.time.hour: "";

        data.location = !isEmpty(data.location) ? data.location : "";

        //data.natalSign = !isEmpty(data.natalSign) ? data.natalSign : "";    //Need calculation

    //Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    
    //Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Password checks
    if (Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password filed is required";
    }

    if (!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords must match";
    }

    //Checks for other data if needed

    return {
        errors,
        isValid: isEmpty(errors)
    };
};