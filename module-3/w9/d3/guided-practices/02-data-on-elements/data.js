// Your code here





console.log('first')

window.addEventListener('DOMContentLoaded', (e) => {


  const addButton = document.getElementById('add');


  addButton.addEventListener("click", (e) => {

    e.preventDefault();

    console.log('second')
    const nameInput = document.getElementById('name');

    const type = document.getElementById('type')

    const ul = document.getElementById('shopping-list');

    const newLi = document.createElement('li');

    newLi.innerText = nameInput.value

    newLi.dataset.type = type.value


    ul.appendChild(newLi);

    


  })




})
