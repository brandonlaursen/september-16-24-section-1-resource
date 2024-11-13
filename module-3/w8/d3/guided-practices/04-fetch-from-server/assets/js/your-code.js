export function getAllDogs() {
  // fetch(url, options)
  //
  return fetch("/dogs");
}

export function getDogNumberTwo() {

  // /dogs

//   const body = new URLSearchParams({
//     name: "value",
//     age: ''
// });

//   const options = {
//     method: "POST",
//     headers: { "Content-Type": 'url-form-encoded'},
//     body: body,
//   };

//  fetch('/dogs', options)
}

export function postNewDog() {
  // Your code here
}

export function postNewDogV2(name, age) {
  // Your code here
}

export function deleteDog(id) {
  // Your code here
}
