const player = {
    name:'hatem',
    attributes:{
        attack:{
            speed:60,
            shooting:95,
        },
        defense:{
            tackle:80,
            interception:66
        }
    },
    overall:64,
    age:23,
}

// use Destructuring to get name,attack attributes only when

const {name,attributes:{attack}} = player;

console.log(name,attack) // hatem { speed: 60, shooting: 95 }

////////////////////////////////////////////////////////

const mid = {shortPass:80,longPass:67}

const newPlayer = {...player, mid}

console.log(newPlayer) 

// update this function to return the type is other if no parameters passed
const fn = (type = 'other') => `the type is ${type}` 

// you can't touch this line
console.log(fn()) 

// note you can solve this question using both arrow and normal function

/**
 * 
 * you cann't use 
 * const attack = player.attributes.attack; ❌ 
 */