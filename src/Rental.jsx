import "./Rental.css";
import ImageContainer from "./ImageContainer";
import RentalInfoContainer from "./RentalInfoContainer";

export default function Rental({ rental }) {

    return (
        <div className="rental-container">
            <ImageContainer />
            <RentalInfoContainer  {...rental} />
        </div>
    )
}