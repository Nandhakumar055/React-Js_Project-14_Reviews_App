import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewsDetailsIndex: 0,
  }

  onClickLeftArrow = () => {
    const {reviewsDetailsIndex} = this.state
    const {reviewsList} = this.props
    const listLength = reviewsList.length

    if (reviewsDetailsIndex < listLength && reviewsDetailsIndex > 0) {
      this.setState({reviewsDetailsIndex: reviewsDetailsIndex - 1})
    }
  }

  onClickRightArrow = () => {
    const {reviewsDetailsIndex} = this.state
    const {reviewsList} = this.props
    const listLength = reviewsList.length

    if (reviewsDetailsIndex < listLength - 1 && reviewsDetailsIndex >= 0) {
      this.setState({reviewsDetailsIndex: reviewsDetailsIndex + 1})
    }
  }

  render() {
    const {reviewsDetailsIndex} = this.state
    const {reviewsList} = this.props
    const reviewsItem = reviewsList[reviewsDetailsIndex]

    return (
      <div className="reviews-app-bg-container">
        <div className="review-details-container">
          <h1 className="review-heading">Reviews</h1>
          <img
            src={reviewsItem.imgUrl}
            className="profile-image"
            alt={reviewsItem.username}
          />
          <div className="next-review-container">
            <button
              className="arrow-button"
              onClick={this.onClickLeftArrow}
              type="button"
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-icon"
              />
            </button>
            <p className="person-name">{reviewsItem.username}</p>
            <button
              className="arrow-button"
              onClick={this.onClickRightArrow}
              type="button"
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-icon"
              />
            </button>
          </div>
          <p className="company-name">{reviewsItem.companyName}</p>
          <p className="description">{reviewsItem.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
