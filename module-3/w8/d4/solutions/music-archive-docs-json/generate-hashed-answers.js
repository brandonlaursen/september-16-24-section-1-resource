/*************
Run the following command to generate the hashed-answers.json file in test/utils
folder from the answers-solution.json file
node generate-hashed-answers.js
*************/

const fs = require('fs');
const path = require('path');
const { hash, hashBody } = require('./test/utils');

const {
  formatURL,
  formatMethod,
  formatReqBody,
  formatHeaders,
  formatStatusCode
} = require('./test/utils/formats');

const answers = require('./answers-solution.json');

try {
  for (let answerNumber in answers) {
    const answer = answers[answerNumber];
    const { request, response } = answer;
    const hashValue = (value) => {
      if (Array.isArray(value)) {
        return value.map(ele => hash(ele));
      } else return hash(value);
    };

    answers[answerNumber] = {
      request: {
        method: hashValue(formatMethod(request.method)),
        URL: hashValue(formatURL(request.URL)),
        headers: hash(formatHeaders(request.headers)),
        body: hashBody(formatReqBody(request.body))
      },
      response: {
        headers: hash(formatHeaders(response.headers)),
        statusCode: hashValue(formatStatusCode(response.statusCode)),
        body: hashBody(response.body)
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, 'test', 'utils', 'hashed-answers.json'), JSON.stringify(answers, null, '  '));
  console.log('Successfully generated test/utils/hashed-answers.json file');
} catch (err) {
  console.error(err);
  console.log('There was an error generating the test/utils/hashed-answers.json file');
}
