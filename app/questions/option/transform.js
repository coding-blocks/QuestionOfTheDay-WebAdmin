import DS from 'ember-data';

export default DS.Transform.extend({
  //Convert to view format
  deserialize(serialized) {
    return serialized;
  },

  //Convert to db format
  serialize(deserialized) {
    return deserialized;
  }
});
