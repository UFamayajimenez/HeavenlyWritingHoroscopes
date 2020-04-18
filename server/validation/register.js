const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    //Convert empty fields to an empty string so we can use validator functions
    data.natalSign = !isEmpty(data.natalSign) ? data.natalSign : "";

    data.name.first = !isEmpty(data.name.first) ? data.name.first : "";
    data.name.last = !isEmpty(data.name.last) ? data.name.last : "";

    data.DOB.month = !isEmpty(data.DOB.month) ? data.DOB.month : "";
    data.DOB.day = !isEmpty(data.DOB.day) ? data.DOB.day : "";
    data.DOB.year = !isEmpty(data.DOB.year) ? data.DOB.year : "";

    data.location.city = !isEmpty(data.location.city) ? data.location.city : "";
    data.location.state = !isEmpty(data.location.state) ? data.location.state : "";
    data.location.zip = !isEmpty(data.location.zip) ? data.location.state : "";

    data.time.hour = !isEmpty(data.time.hour) ? data.time.hour : "";
    data.time.minute = !isEmpty(data.time.minute) ? data.time.minute : "";

    data.email = !isEmpty(data.email) ? data.email : "";

    data.number = !isEmpty(data.number) ? data.number : "";

    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";


    //Name checks
    if (Validator.isEmpty(data.name.first) || Validator.isEmpty(data.name.last)) {
        errors.name = "Name field is required";
    }

    //Date of birth checks
    if (Validator.isEmpty(data.DOB.month) || Validator.isEmpty(data.DOB.day) || Validator.isEmpty(data.DOB.year)) {
        errors.DOB = "Date of birth field is required";
    }

    //Location of birth checks
    if (Validator.isEmpty(data.location.city) || Validator.isEmpty(data.location.state) || Validator.isEmpty(data.location.zip)) {
        errors.location = "Location of birth field is required";
    }

    //Time of birth checks
    if (Validator.isEmpty(data.time.hour) || Validator.isEmpty(data.time.minute)) {
        errors.time = "Time of birth field is required";
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
        errors.password2 = "Confirm password field is required";
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