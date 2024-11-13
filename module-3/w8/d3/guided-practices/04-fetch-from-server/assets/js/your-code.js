


export function getAllDogs() {
  // fetch(url, options)
  //
  return fetch("/dogs");
}

export function getDogNumberTwo() {

  return fetch('/dogs/2')

}

export function postNewDog() {

  // fetch(url, options)
  const url = '/dogs';
  const body = new URLSearchParams({name: 'little bear', age: 18});

  const options = {
    method: 'POST',
    headers: {
      'Content-type': "application/x-www-form-urlencoded"
    },
    body: body
  }

  return fetch(url, options);
}

export function postNewDogV2(name, age) {
  // Your code here
}

export function deleteDog(id) {
  // Your code here
}
