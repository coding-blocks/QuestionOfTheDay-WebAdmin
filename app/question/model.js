import Ember from 'ember';

const Promise = Ember.RSVP.Promise;

const QuestionClass = Parse.Object.extend("Question",
  {

  },
  {
    getAll: function () {
      "use strict";
      let query = new Parse.Query(this);

      return new Promise((resolve, reject) => {
        query.find({
          success: (results) => {
            resolve(results);
          },
          error: (error) => {
            reject(error);
          }
        });
      });
    },
    addNew: function(q, optArr, author, tags) {
      "use strict";
      let ques = new this();
      return new Promise ((resolve, reject) => {
        ques.save({
          question: q,
          options: optArr,
          author: author,
          tags: tags
        }, {
          success: (obj) => {
            resolve(obj);
          },
          error: (obj, error) => {
            reject(obj, error);
          }
        });
      });
    }
  });

export default QuestionClass;
