import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  color: DS.attr(),
  price: DS.attr(),
  category: DS.hasMany('category', { async: true }),
  reviews: DS.attr(),
  featured: DS.attr(),
  sale: DS.attr()
});
