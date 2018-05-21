import { URL, headers } from "../../shared/constants";
import { loginSuccess, loginFail } from "../../shared/utils";

const login = (loginData) => {
const authToken = "1234567890"
    return authToken ? loginSuccess(authToken) : loginFail();

}

export { login }