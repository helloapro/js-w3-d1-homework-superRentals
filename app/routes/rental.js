import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },

  actions: {
    saveReview3(params) {
      var newReview = this.store.createRecord('review', params);
      var rental = params.rental;
      rental.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return rental.save();
      });
      this.transitionTo('rental', rental);
    },

    destroyReview(review){
      review.destroyRecord();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      var review_deletions = rental.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return rental.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
