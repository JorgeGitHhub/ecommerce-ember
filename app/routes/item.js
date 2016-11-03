import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('item', params.item_id);
  },
  actions: {
    addToCart(product) {
      this.get('shoppingCart').add(product);
    }
  }
});
