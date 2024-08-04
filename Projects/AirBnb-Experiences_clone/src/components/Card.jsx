import katie from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img src={katie} className="card-img" />
        <span className="flag-tag">SOLD OUT</span>
      </div>
      <div className="reviews">
        <img src={star} className="star-img" />
        <span>
          5.0 <span className="review-count">(6) USA</span>
        </span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <div>
        <span className="price">From $136</span> / person
      </div>
    </div>
  )
}
