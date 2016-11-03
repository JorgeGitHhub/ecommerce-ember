import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(item) {
      var params =  {
        name: this.get('name'),
        image: this.get('image'),
        description: this.get('description'),
        color: this.get('color'),
        price: this.get('price'),
        category: this.get('category'),
        featured: this.get('featured'),
        sale: this.get('sale'),
      };
      // this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    }
  }
});
