// Write an object that stores: nameOfMovie, runTime, characters, genre

let potc = {
    nameOfMovie: 'Pirates of the Carribbean: the Curse of the Black Pearl',
    runTime: '2h 23m',
    genre: 'Action/Adventure',
    characters: [
        {
            name: 'Jack Sparrow',
            age: 39,
            items : [
                {itemOne: 'Compass'},
                {itemTwo: 'Pistol'},
            ],
        },
        {
            name: 'Hector Barbossa',
            age: 60,
            items : [
                {itemOne: 'Sword'},
                {itemTwo: 'Jack the Monkey'},
            ],
        },
    ],
  }
  
  console.log(potc.nameOfMovie);
  console.log(potc.runTime);
  console.log(potc.characters);
  console.log(potc.characters[0].name);
  console.log(potc.characters[0].items[0]);
  