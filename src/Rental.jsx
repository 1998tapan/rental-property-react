import "./Rental.css";

export default function Rental({ name, price, rating }) {
    const url = `https://picsum.photos/400?random=${Math.random()}`;

    return (
        <div className="rental-container">
            <div className="img-container">
                <img src={url} alt="" />
            </div>
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