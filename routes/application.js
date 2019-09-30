import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  	return {
      name: "Hob Gadling",
      age: "324 years",
      bucket_list: {
        friends_with_gods: true,
        renaissance_faire: true,
        ate_corndog: false
      }
    }
  },
  
  
});
