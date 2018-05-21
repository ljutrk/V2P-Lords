const getTroopCount = (playerTroops) => {
    const troopCount = Object.entries(playerTroops)
    let sum = 0;
    for (let i = 0; i < troopCount.length; i++) {
        sum += troopCount[i][1]
    }
    return sum
}

const playerNameFilter = (players, searchInput) => {
    return players.filter(player => {

        return player.name.toLowerCase().includes(searchInput.toLowerCase())
    })
}

const getLocalTime = (timeZone) => {
    const currentDate = new Date();
    const minutes = currentDate.getMinutes()
    const hours = eval(currentDate.getUTCHours() + timeZone)

    const formatTime = (time) => {
        return (time < 10 ? `0${time}` : time)
    }

    const formatHours = () => {
        return (hours >= 24 ? hours - 24 : hours)
    }

    return formatTime(formatHours()) + ":" + formatTime(minutes);
}

const formatBigNumbers = (number) => {
    const string = number + ""
    const moduloVariable = (string.length % 3) - 1
    let reversedModifiedString = "";
    let wantedModifiedString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        if (i % 3 === moduloVariable && i <= string.length - 2) {
            reversedModifiedString += ".";
        }

        if (string.length % 3 === 0 && (i % 3 === 2 && i <= string.length - 2)) {
            reversedModifiedString += ".";
        }
        reversedModifiedString += string[i];
    }

    for (let i = reversedModifiedString.length - 1; i >= 0; i--) {
        wantedModifiedString += reversedModifiedString[i];
    }

    return wantedModifiedString;
}

const filterFunctions = {
    name: function compare(a, b) {
        const propA = a.name.toUpperCase();
        const propB = b.name.toUpperCase();

        let comparison = 0;
        if (propA > propB) {
            comparison = 1;
        } else if (propA < propB) {
            comparison = -1;
        }
        return comparison;
    },
    rank: function compare(a, b) {
        const propA = a.rank;
        const propB = b.rank;

        let comparison = 0;
        if (propA > propB) {
            comparison = -1;
        } else if (propA < propB) {
            comparison = +1;
        }
        return comparison;
    },
    might: function compare(a, b) {
        const propA = a.might;
        const propB = b.might;

        let comparison = 0;
        if (propA > propB) {
            comparison = -1;
        } else if (propA < propB) {
            comparison = +1;
        }
        return comparison;
    },
    totalTroops: function compare(a, b) {

        const propA = getTroopCount(a.troops);
        const propB = getTroopCount(b.troops);

        let comparison = 0;
        if (propA > propB) {
            comparison = -1;
        } else if (propA < propB) {
            comparison = +1;
        }
        return comparison;
    }
}

const authenticate = () => {
    return sessionStorage.getItem("token");
}

const loginSuccess = (sessionId) => {
    sessionStorage.setItem("token", sessionId);
}

const loginFail = () => {
    alert("Login failed!")
}

const loggedIn = () => {
    return sessionStorage.getItem("token");
}

const logout = () => {
    return sessionStorage.removeItem("token");
}

const getFormattedCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();

}

const speedupText = (value) => {
    if (value % 1440 === 0 && value !== 1440) {
        return value / 1440 + " Days:";
    } else if (value % 60 === 0 && value !== 60) {
        return value / 60 + " Hours:";
    } else {
        return value + " Minute" + (value === 1 ? ":" : "s:");
    }
}

const getTotalSpeedupTime = (speedupTime) => {
    const speedupCount = Object.entries(speedupTime)
    let sum = 0;
    for (let i = 0; i < speedupCount.length - 1; i++) {

        sum += parseInt(speedupCount[i][0].slice(1)) * speedupCount[i][1]
    }
    return sum
}

const formattedSpeedupTime = (value) => {
    let days = Math.floor(value / 1440);
    value = value % 1440
    let hours = Math.floor(value / 60);
    value = value % 60
    return `Days: ${days} Hours: ${hours} Minutes: ${value}`
}

export {
    getTroopCount,
    playerNameFilter,
    getLocalTime,
    formatBigNumbers,
    filterFunctions,
    authenticate,
    loginFail,
    loginSuccess,
    loggedIn,
    logout,
    getFormattedCurrentDate,
    speedupText,
    getTotalSpeedupTime,
    formattedSpeedupTime
}