import DS from 'ember-data';

export default DS.Model.extend({
  supervisor: DS.attr(),
  weather: DS.attr(),
  message: DS.attr(),
});
