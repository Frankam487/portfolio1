const Card = ({card}) => {
    return (
        <div className="card">
            <img src={card.image} alt="Image de la carte" />
            <i>{card.date}</i>
            <h2>{card.text}</h2>
        </div>
    );
}

export default Card;