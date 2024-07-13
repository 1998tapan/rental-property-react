export default function PriceContainer({price}){
    return (
        <div className="rental-price">
            <span style={{ fontWeight: 600 }}>&#8377;{price}</span> night
        </div>
    );
}