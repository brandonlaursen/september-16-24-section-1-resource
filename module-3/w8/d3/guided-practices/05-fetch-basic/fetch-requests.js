/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

(async function(){
  // GET /products
  const res = await fetch('/products');
  console.log(res);

  const data = await res.text();
  // console.log(data)
 })();

 fetch('/products').then((res) => res.text()).then((data) => console.log(data))

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
(async function(){
  // GET /products
  const res = await fetch('/products');

  console.log(res.status)
 })();


/* =================== 3. Print the Content-Type Header =================== */
(async function(){
  // GET /products
  const res = await fetch('/products');

  console.log(res.headers.get('Content-Type'))
 })();




/* ============== 4. Print the body of the response as text =============== */

(async function(){
  // GET /products
  const res = await fetch('/products');
  console.log(res);

  const data = await res.text();
  console.log(data)
 })();
