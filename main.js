//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name) {
  this.name = name;
}

Dog.prototype.status = 'normal';

// Instances of Dog
// Needed: sadie, moonshine, atticus

const sadie = new Dog('sadie');
const moonshine = new Dog('moonshine');
const atticus = new Dog('atticus');

sadie.color = 'black';
moonshine.hungry = true;
sadie.hungry = false;

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name) {
  this.name = name;
}

Human.prototype.pet = function(dog) {
  dog.status = 'happy';
}

Human.prototype.feed = function(dog) {
  dog.hungry = false;
}

// Instances of Human
// Needed: mason, julia

const mason = new Human('mason');
const julia = new Human('julia');

sadie.owner = mason;
julia.cool = true;
mason.cool = false;
