import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  item: DS.hasMany('item', { async: true }),
  featured: DS.attr(),
  image: DS.attr()
});
