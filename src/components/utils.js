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


export { getTroopCount, playerNameFilter, getLocalTime, formatBigNumbers, filterFunctions }