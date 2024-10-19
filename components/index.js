const { getAnswers } = require("./components/answers");
const { extractAnswers } = require("./components/extractAnswers");
const { getHashCode } = require("./components/getHashCode");

async function quizSoft(id) {
  const hash = await getHashCode(`${id}`);
  const answers = await getAnswers(hash);
  const answer = await extractAnswers(answers);
  console.log(answer);
}

quizSoft("add join code here!");
