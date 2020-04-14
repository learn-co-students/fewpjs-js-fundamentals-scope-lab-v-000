const animal = "" // global scope

// const animal isn't changed.
// the functions aren't changing the global animal just making a different one in a different scope.


function myAnimal() { //local scope
  let animal = 'dog'
  return animal
}

function yourAnimal() { //local scope
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let animal = 'cat'
  return animal
}

function add2(n) { //local scope
  const two = 2
  return n + two

  // Feel free to move things around!
  //two = 2
}