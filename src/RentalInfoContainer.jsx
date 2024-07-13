import Rating from "./Rating";
import RentalText from "./RentalText";
import PriceContainer from "./PriceContainer";

export default function RentalInfoContainer({ name, rating, price }) {
    return (
        <div className="rental-info" >
            <div className="rental-main-text">
                <RentalText className="rental-title" text={name} />
                <Rating rating={rating} />
            </div>
            <RentalText className="rental-duration" text="9 - 21 Oct" />
            <PriceContainer price={price} />
        </div>
    );
}