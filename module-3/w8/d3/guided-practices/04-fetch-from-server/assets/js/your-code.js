export function getAllDogs() {
  // fetch(url, options)
  //
  return fetch("/dogs");
}

export function getDogNumberTwo() {
  return fetch("/dogs/2");
}

// export function postNewDog() {

//   // fetch(url, options)
//   const url = '/dogs';
//   const body = new URLSearchParams({name: 'little bear', age: 18});

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': "application/x-www-form-urlencoded"
//     },
//     body: body
//   }

//   return fetch(url, options);
// }

export function postNewDog() {
  const url = "/dogs";
  const headers = { "Content-type": "application/x-www-form-urlencoded" };
  const body = new URLSearchParams({ name: "Pipo", age: 8 });
  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };
  return fetch(url, options);
}

export function postNewDogV2(name, age) {
  return fetch("/dogs", {
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ name, age }),
  });
}


export function deleteDog(id) {

  return fetch(`/dogs/${id}/delete`, {
    method: 'POST',
    headers: {
      AUTH: 'ckyut5wau0000jyv5bsrud90y'
    }
  })
}
