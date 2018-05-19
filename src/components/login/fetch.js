import { URL, headers } from "../../shared/constants";
import { loginSuccess, loginFail } from "../../shared/utils";
import React from 'react';

const login = (loginData) => {

    const fetchURL = URL.base + URL.login

    const fetchOptions = {
        method: "POST",
        headers: { ...headers },
        body: JSON.stringify(loginData)
    }

    return fetch(fetchURL, fetchOptions)
        .then(response => response.json())
        .then(response => {
            response.sessionId ? loginSuccess(response.sessionId) : loginFail();
        })
}

export { login }