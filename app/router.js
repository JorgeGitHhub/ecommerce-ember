import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('clothes');
  this.route('item', {path: 'item/:item_id'});
  this.route('cart');
  this.route('luggage');
  this.route('travelgear');
  this.route('accessories');
  this.route('sale');
});

export default Router;
