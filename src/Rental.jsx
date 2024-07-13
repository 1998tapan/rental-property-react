import "./Rental.css";

export default function Rental(properties) {
    const url = `https://picsum.photos/400?random=${Math.random()}`;

    return (
        <div className="rental-container">
            <div className="img-container">
                <img src={url} alt="" />
            </div>
            <div className="rental-info">
                <p>Name: Demo</p>
            </div>
        </div>
    )
}