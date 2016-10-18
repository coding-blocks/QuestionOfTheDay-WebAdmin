
export default  {
  createRecord (className, object, callback) {
    const ParseObject = Parse.Object.extend(className);
    let parseObject = new ParseObject();

    parseObject.save(object.serialize(), {
      success: function(obj) {
        callback(obj)
      },
      error: function(obj, err) {
        callback(err)
      }
    })

  },
  deleteRecord(className, id, callback) {

  },
  findRecord(className, id, callback) {

  },
  updateRecord(className, id, object, callback) {

  }

}
