import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview1() {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content'),
        rental: this.get('rental')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview2', params);
    }
  }
});
