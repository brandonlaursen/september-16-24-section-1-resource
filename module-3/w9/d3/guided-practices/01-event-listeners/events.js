// Your code here

window.addEventListener("DOMContentLoaded", () => {
  // alert('dom is loaded')

  const redInput = document.getElementById("section-1");

  const changeRed = (event) => {
    console.log(event.target.value);

    const value = event.target.value.trim().toLowerCase();

    if (value === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "transparent";
    }
  };

  redInput.addEventListener("input", changeRed);

  // part 2

  const addItem = document.getElementById("add-item");
  const itemInput = document.getElementById("list-add");
  const ul = document.querySelector("#section-2 ul");

  const addListItem = (e) => {

    const value = itemInput.value;

    if (!value) {
      return;
    }

    const liItem = document.createElement("li");

    liItem.innerText = value;

    // ul.appendChild(liItem);

    const firstNode = document.querySelectorAll('#section-2 ul li')[0];

    ul.insertBefore(liItem, firstNode);


    itemInput.value = "";
  };

  addItem.addEventListener("click", addListItem);



  const colorSelect = document.getElementById('color-select');


  const changeColor = (e) => {

    // console.log(e.target)
    const section = document.getElementById('section-3');

    section.style.backgroundColor = e.target.value

  }



  colorSelect.addEventListener('change', changeColor );


  document.getElementById('remove-listeners').addEventListener('click', () => {
    redInput.removeEventListener('input', changeRed)
    addItem.removeEventListener('click', addListItem)
    colorSelect.removeEventListener('change', changeColor)
  })







});
