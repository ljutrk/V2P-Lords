const players = [{
    playerID: 1,
    name: "MrLlamaSC",
    might: 53000000,
    castle25: true,
    guild: "V2P",
    rank: 5,
    troops: {
        heroicFighter: 10000,
        heroicCannoneer: 50000,
        AncientDrakeRider: 0,
        destroyer: 0,
        royalGuard: 13000,
        stealthSniper: 97300,
        royalCavalry: 100000,
        fireTrebuchet: 0
    },
    alts: ["missKylie"],
    timeZone: "+8",
    lastUpdate: "17/05/2018"
},
{
    playerID: 2,
    name: "SneakySquid",
    might: 36000000,
    castle25: true,
    guild: "V2P",
    rank: 4,
    troops: {
        heroicFighter: 0,
        heroicCannoneer: 0,
        AncientDrakeRider: 0,
        destroyer: 0,
        royalGuard: 55412,
        stealthSniper: 64201,
        royalCavalry: 71543,
        fireTrebuchet: 21986
    },
    alts: ["squid17"],
    timeZone: "+2",
    lastUpdate: "14/05/2018"
},
{
    playerID: 3,
    name: "RandomPlayer",
    might: 934118,
    castle25: false,
    guild: "V2P",
    rank: 2,
    troops: {
        heroicFighter: 0,
        heroicCannoneer: 0,
        AncientDrakeRider: 0,
        destroyer: 0,
        royalGuard: 0,
        stealthSniper: 100,
        royalCavalry: 0,
        fireTrebuchet: 0
    },
    alts: ["someRandomAlt, someNotSoRandomAlt2"],
    timeZone: "-4",
    lastUpdate: "18/05/2018"
},
{
    playerID: 4,
    name: "Yecart1",
    might: 86189660,
    castle25: true,
    guild: "V2P",
    rank: 4,
    troops: {
        heroicFighter: 0,
        heroicCannoneer: 0,
        AncientDrakeRider: 0,
        destroyer: 0,
        royalGuard: 500000,
        stealthSniper: 600000,
        royalCavalry: 900000,
        fireTrebuchet: 60000
    },
    alts: ["someRandomAlt, someNotSoRandomAlt2"],
    timeZone: "+12",
    lastUpdate: "18/05/2018"
}
];

// const array = ["a","c","b","r","q","e"];
// console.log(array.sort());

// const bands = [ 
//     { genre: 'Rap', band: 'Migos', albums: 2},
//     { genre: 'Pop', band: 'Coldplay', albums: 4},
//     { genre: 'Rock', band: 'Breaking Benjamins', 
//       albums: 1}
//   ];
const getTroopCount = (playerTroops) => {
    const troopCount = Object.entries(playerTroops)
    let sum = 0;
    for (let i = 0; i < troopCount.length; i++) {
        sum += troopCount[i][1]
    }
    return sum
}

  function compare(a, b) {
    
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
  
  console.log(players.sort(compare));
