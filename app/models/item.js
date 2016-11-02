import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  color: DS.attr(),
  price: DS.attr(),
  // reviews: DS.hasMany('review', { async: true }),
  // rating: DS.attr(),
  featured: DS.attr(),
  sale: DS.attr(),
  category: DS.attr(),
});
