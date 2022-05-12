'use strict';
const assert = require('assert');

// This is an object that has types of jobs and the values each provide.
const jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code will go here

class CrewMember {
  constructor(name, job, specialSkill, ship){
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill
  this.ship = ship
  }

  enterShip(ship) {
    this.ship = ship;
    ship.crew.push(this)
    // console.log(ship.crew.push(this))
  }


}

class Ship {
  constructor(name, type, ability) {
    this.name =name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  
  } 
  missionStatement(){

  //if it is only a ship name 
  // ship.name = mav or ship.name === "hermes"  ==> 
  // "Can't perform a mission yet."
    if(this.crew.length === 0){ // if the crew is blank
      return "Can't perform a mission yet."
    }

    //if there is a crew attach to the function entership and it's name is mav or hermes
  // crewMember1.enterShip(ship.name = mav) or  crewMember2.enterShip(hermes) ===> Ascend into low orbit
    else {
      return this.ability
    }
  
  }

}

let Ying = new CrewMember("Ying", "Pilot", "Coding")
let Sparkler = new CrewMember("Sparkler", "Pilot", "Drawing")
console.log(Ying)
let Ninja = new Ship('Ninja', 'Ninja Ship', 'ET Travel'); //ship(name, type, ability)
Ying.enterShip(Ninja)
Sparkler.enterShip(Ninja)
console.log(Ying)
console.log(Ninja)
console.log(Ninja.crew)
console.log(Ninja.missionStatement())



// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      // this creates a CrewMember and passes the following arguments into its constructor:
      // 'Rick Martinez', 'pilot', 'chemistry'
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit'); //ship(name, type, ability)
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry'); //crewmember(name, job, special skills)
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel'); //ship(name, type, ability)
      
      const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');//crewmember(name, job, special skills)
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
