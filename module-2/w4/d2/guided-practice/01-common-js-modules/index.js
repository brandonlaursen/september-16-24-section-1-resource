
const { sayHelloTo } = require('./send-messages/say-hello-to');

const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato');

const { message1: msg1, message2: msg2, message3: msg3 } = require('./messages');

// let msg1 = message1;
// let msg2 = message2;
// let msg3 = message3;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
