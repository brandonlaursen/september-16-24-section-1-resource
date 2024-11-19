







export default () => {
  const bodyChildNodes = document.body.childNodes; // NodeList [text, div, text]
  console.log("bodyChildNodes:", bodyChildNodes);
  // console.log(bodyChildNodes);

  bodyChildNodes.forEach(ele => console.log(ele));

  const div = bodyChildNodes[1]; // NOT bodyChildNodes[0]
  // console.log("div:", div);


  const divChildNodes = div.childNodes; // NodeList [text, span, text]
  console.log("divChildNodes:", divChildNodes);


  const helloWorld = divChildNodes[0].textContent; // Hello World!\n
  console.log("helloWorld:", helloWorld);

  const span = divChildNodes[1]; // <span>Yes!</span>
  console.log("span:", span);
  // debugger
};
