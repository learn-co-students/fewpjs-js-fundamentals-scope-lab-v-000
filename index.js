const animal = "dog"

function myAnimal() {
  var x = "cat"
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = "cat"
  return animal
}

function add2(n) {
  var two = 2
  return n + two

  // Feel free to move things around!
  
}