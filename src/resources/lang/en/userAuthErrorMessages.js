module.exports = {
    AUTHENTICATED_USER_NOT_FOUND: {
        code: "-4",
        userError: "Something happened. If the problem still exists Please contact us to fix the problem.",
        detail: "The authenticating token was found successfully, but the corresponding user does not exist.",
        // TODO: httpCustomStatusCode: idk
    },
    USER_AUTHENTICATION_FAILED: {
        code: "-3",
        userError: "Authentication failed. Please login again.",
        detail: "This user token does not exist. The user needs to login and make a token.",
        // TODO: httpCustomStatusCode: idk
    },
    API_ERROR: {
        code: "-2",
        userError: "",
        detail: "Source of API is not valid.",
        // TODO: httpCustomStatusCode: idk
    },
    INTERNAL_ERROR: {
        code: "-1",
        userError: "Something went wrong.",
        detail: "Something malfunctioned. This is an internal error.",
        // TODO: httpCustomStatusCode: idk
    },
    INVALID_EMAIL: {
        code: "100",
        userError: "",
        detail: "Email was invalid. It was either not passes with the parameters, or it contained forbidden characters",
        // TODO: httpCustomStatusCode: idk
    },
    INVALID_USERNAME: {
        code: "101",
        userError: "Please enter a valid username. Username should be more than 2 characters.",
        detail: "Username was either not passed with the parameters, or it contained forbidden characters",
        // TODO: httpCustomStatusCode: idk
    },
    INVALID_PASSWORD: {
        code: "102",
        userError: "Invalid combination of username and password",
        detail: "Password was invalid. It was either not passed with the parameters, or it contained forbidden characters.",
        // TODO: httpCustomStatusCode: idk
    },
    USER_NOT_EXIST: {
        code: "103",
        userError: "Invalid combination of username and password",
        detail: "This user does not exist. The username is not correct.",
        // TODO: httpCustomStatusCode: idk
    },
    USERNAME_ALREADY_TAKEN: {
        code: "104",
        userError: "",
        detail: "This username is already taken by someone else. No new account could be registered with this username.",
        // TODO: httpCustomStatusCode: idk
    },
    EMAIL_ALREADY_TAKEN: {
        code: "105",
        userError: "",
        detail: "This email is already taken by someone else. No new account could be registered with this email.",
        // TODO: httpCustomStatusCode: idk
    }
}