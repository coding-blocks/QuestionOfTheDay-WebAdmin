export default function (question) {

  this.question = question;

  this.serialize = function () {
    return {
      question: this.question
    };
  };
}
