import reviewService from '../services/review.service';

function setReviews(reviews) {
  return {
    type: 'SET_REVIEWS',
    reviews,
  };
}

function _addReview(review) {
  return {
    type: 'REVIEW_ADD',
    review,
  };
}

export function loadReviews() {
  return async (dispatch) => {
    try {
      const reviews = await reviewService.query();
      dispatch(setReviews(reviews));
    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err);
    }
  };
}

export function addReview(review) {
  return async (dispatch) => {
    try {
      const addedReview = await reviewService.add(review);
      dispatch(_addReview(addedReview));
    } catch (err) {
      console.log('ReviewActions: err in addReview', err);
    }
  };
}
