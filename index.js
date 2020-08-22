const animal = "dog"

function myAnimal() {
  var x = "cat"
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return myAnimal
}

function add2(n) {
  return n + two

  // Feel free to move things around!
  two = 2
}