








export default () => {

  const bodyChildElements = document.body.children; // HTMLCollection [div]
  // console.log(bodyChildElements);

  // [...bodyChildElements].forEach(ele => console.log(ele));

  const div = bodyChildElements[0];
  // console.log("div:", div);

  const divChildElements = div.children; // HTMLCollection [span]
  // console.log("divChildElements:", divChildElements);


  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  // console.log("helloWorld:", helloWorld);

  // console.log(div);
  // div.innerHTML += '<span>TEST </span> test 2';

  // console.log(div);

  const span = divChildElements[0]; // <span>Yes!</span>
  // console.log("span:", span);
  // debugger
};
