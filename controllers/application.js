import Ember from 'ember';
import { computed } from '@ember/object';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  appName: 'Ember Changesets Hate Falsey',
  
  changeset: computed('model', {
    get() {
      return new Changeset(this.model);
    }
  }),
  
  wow: "cow"
});
