export default function ImageContainer() {
    const url = `https://picsum.photos/400?random=${Math.random()}`;

    return (
        <div className="img-container">
            <img src={url} alt="" />
        </div>
    );
}