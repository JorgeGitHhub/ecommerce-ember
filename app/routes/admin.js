import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  saveNewItem(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('index');
    }
  }
});