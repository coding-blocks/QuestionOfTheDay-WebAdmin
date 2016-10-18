export default function (question) {
  this.className = 'Question';
  this.question = question;
  this.options = [];

  this.addOption = function (option, correct) {
    this.options.push({
      option: option,
      correct: correct || false
    })
  };

  this.serialize = function () {
    return {
      question: this.question
    };
  };
}
