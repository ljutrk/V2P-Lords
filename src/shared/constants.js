const URL = {
    base: "http://bitbookapi.azurewebsites.net/api/",
    login: "login"
}

const headers = {
    "Content-Type": "application/json",
    "Key": "64C2396"
}

const speedupObject = [
    {
        speedup: "1"
    },
    {
        speedup: "3"
    },
    {
        speedup: "5"
    },
    {
        speedup: "10"
    },
    {
        speedup: "15"
    },
    {
        speedup: "30"
    },
    {
        speedup: "60"
    },
    {
        speedup: "180"
    },
    {
        speedup: "480"
    },
    {
        speedup: "900"
    },
    {
        speedup: "1440"
    },
    {
        speedup: "4320"
    },
    {
        speedup: "10080"
    },
    {
        speedup: "43200"
    }
]

const initialState = {
    m1: "",
    m3: "",
    m5: "",
    m10: "",
    m15: "",
    m30: "",
    m60: "",
    m180: "",
    m480: "",
    m900: "",
    m1440: "",
    m4320: "",
    m10080: "",
    m43200: "",
    totalTime: 0,
}

export { URL, headers, speedupObject, initialState }