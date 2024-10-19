async function extractAnswers(questions) {
  const objectsArray = [];

  questions.forEach((question) => {
    const structure = question.structure;

    const questionText =
      structure.query && structure.query.text
        ? structure.query.text.replace(/<\/?p>/g, "").trim()
        : "No question text available";

    const answerIndices = Array.isArray(structure.answer)
      ? structure.answer
      : [structure.answer];

    if (answerIndices.length === 0) {
      answerIndices.push(0);
    }

    const answerTexts = answerIndices.map((index) => {
      return structure.options && structure.options[index]
        ? structure.options[index].text.replace(/<\/?p>/g, "").trim()
        : "No answer available";
    });

    const object = {
      question: questionText,
      answers: answerTexts,
    };

    objectsArray.push(object);
  });

  return objectsArray;
}

module.exports = { extractAnswers };
