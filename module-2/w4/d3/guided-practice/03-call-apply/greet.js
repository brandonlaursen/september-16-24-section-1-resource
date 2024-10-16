// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

// say(helloMessage, "John");
// say(heyThereMessage, "Michael");



say.call(helloMessage, "John");
say.apply(heyThereMessage, ["Michael"]);
