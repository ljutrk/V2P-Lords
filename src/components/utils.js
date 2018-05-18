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

export { getTroopCount, playerNameFilter }