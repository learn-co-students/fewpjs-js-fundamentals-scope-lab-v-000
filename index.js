// A variable or function that is not declared inside a function or block is the
// global execution context.
let animal = "cat"

function myAnimal() {
  // let variables are block-scoped, and allows you to declare variables that
  // are limited in scope to the block, statement, or expression on which it is used
  let animal = "dog"
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  let two = 2
  return n + two

  // Feel free to move things around!
  // two = 2
}
