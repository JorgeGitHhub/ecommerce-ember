import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: true,
  actions: {
    showForm(){
      this.set('updateItemForm', true);
    },
    update(item, params) {
      this.sendAction('update', item, params);
    }
  }
});
