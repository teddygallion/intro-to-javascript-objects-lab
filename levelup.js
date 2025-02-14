const pokemon = require('./data.js')
const game = require('./app.js')


		// 				LEVEL UP exercises


/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/


game.party.sort((a, b) =>{
	if(a.hp > b.hp){
		return -1;
	}
});
console.log(game.party)
/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/



game.collection = [];
console.log(game)

game.catchPokemon = function(pokemonObj){
	console.log(`A wild ${pokemonObj.name} Appeared! \n`)
	console.log(`You have ${this.items[1].quantity} pokeballs`)
	console.log(`You used 1 pokeball`)
	if(game.party.length >= 6){
		console.log(`${pokemonObj.name} added to collection`)
 		game.collection.push(pokemonObj);
 	}else{
 		console.log(`${pokemonObj.name} added to party`)
 		game.party.push(pokemonObj);
 	}
 	console.log(this.party[this.party.length -1]);
 	this.items[1].quantity -= 1;
 	console.log(`You now have ${this.items[1].quantity} pokeballs\n`);
}

game.catchPokemon(pokemon[85]);
game.catchPokemon(pokemon[76]);
game.catchPokemon(pokemon[78]);



/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/





game.collection = [];
console.log(game)

/* game.catchPokemon = function(pokemonObj){
	console.log(`A wild ${pokemonObj.name} Appeared! \n`)
	console.log(`You have ${this.items[1].quantity} pokeballs`)
	if(this.items[1].quantity > 0){
		console.log(`You used 1 pokeball`)
		if(game.party.length >= 6){
			console.log(`${pokemonObj.name} added to collection`)
	 		game.collection.push(pokemonObj);
	 	}else{
	 		console.log(`${pokemonObj.name} added to party`)
	 		game.party.push(pokemonObj);
	 	}
 	console.log(this.party[this.party.length -1]);
 	this.items[1].quantity -= 1;
 	console.log(`You now have ${this.items[1].quantity} pokeballs\n`);
	}else{
		console.log("You are out of pokeballs! You can't catch this pokemon.")
	}
}

game.catchPokemon(pokemon[85]);
game.catchPokemon(pokemon[76]);
game.catchPokemon(pokemon[78]);
game.catchPokemon(pokemon[59]);
game.catchPokemon(pokemon[57]);
game.catchPokemon(pokemon[68]);
game.catchPokemon(pokemon[36]);
game.catchPokemon(pokemon[34]);
game.catchPokemon(pokemon[12]);

*/

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/


game.catchPokemon = function(name){
	const sanitizedInput = name.toLowerCase()
	pokemonObj = pokemon.find((i) => i.name.toLowerCase() === sanitizedInput)
	console.log(pokemonObj)
	if(pokemonObj === undefined){
		console.log(`${name} is not a pokemon`);
	}else{
		console.log(`A wild ${pokemonObj.name} appeared!\n`)
		if(this.items[1].quantity > 0){ //if you have enough pokeballs
			console.log('you used 1 pokeball');
			console.log(`You caught a wild ${pokemonObj.name}!`)
			this.items[1].quantity -= 1;
			console.log(`You have ${this.items[1].quantity} Pokeballs left.\n`)
			if(this.party.length < 6){ // if you have less than six pokemon in your party
				this.party.push(pokemonObj);
				console.log(`${pokemonObj.name} was added to your party.`)
			}else if(this.party.length > 6){ // if you have more than six pokemon in your party
				this.collection.push(pokemonObj);
				console.log(`You have no more space in your party.${pokemonObj.name} was added to your collection.`)
			}
		}else{
				console.log("You do not have any more Pokeballs. \n")
				console.log(`The wild ${pokemonObj.name} escaped!`);
			}
	}
}
console.log(game.partyCount())
game.catchPokemon("seel");
game.catchPokemon('Abra');
game.catchPokemon('dj khaled')
game.catchPokemon("gastly")
game.catchPokemon('vulpix')
game.catchPokemon('gengar')
console.log(game.partyCount())
game.catchPokemon("ponyta")
game.catchPokemon("krabby")
game.catchPokemon('eevee')
game.catchPokemon("cubone")
game.catchPokemon("mew")

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

function generateArrayOfTypes(pokemon){
	let types ={}
	let setOfTypes = new Set();
	for(let x in pokemon){
		let type = pokemon[x].type;
		setOfTypes.add(type)
	}
	for (let type of setOfTypes){
		types[type] = []
	}
	for(let item in pokemon){
		for(let type in types){
			if(pokemon[item].type === type){
				types[type].push(pokemon[item]);
			}
		}
	}
	console.log(types)
}
generateArrayOfTypes(pokemon)