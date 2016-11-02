import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateCategoryValue(value){
      this.set('category', value);
    },
    updateFeaturedValue(value){
      this.set('featured', value);
    },
    updateSaleValue(value){
      this.set('sale', value);
    },
    saveNewItem(){
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        description: this.get('description'),
        color: this.get('color'),
        price: this.get('price'),
        category: this.get('category'),
        featured: this.get('featured'),
        sale: this.get('sale'),
      };
      this.sendAction('saveNewItem', params);
    }
  }
});
