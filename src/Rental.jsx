import ImageContainer from "./ImageContainer";
import "./Rental.css";

export default function Rental({ name, price, rating }) {

    return (
        <div className="rental-container">
            <ImageContainer />
            <div className="rental-info">
                <div className="rental-main-text">
                    <div className="rental-title">{name}</div>
                    <div className="rating">{rating}&#9733;</div>
                </div>
                <div className="rental-duration">
                    9-21 Oct
                </div>
                <div className="rental-price">
                    <span style={{ fontWeight: 600 }}>&#8377;{price}</span> night
                </div>
            </div>
        </div>
    )
}