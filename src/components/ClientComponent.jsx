const ClientComponent = ({ image, title, subtitle, paragraph }) => {

    return (
        <div className="container">
            <div className="top-section">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="titles">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                <div className="spans">
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                </div>
            </div>


            <div className="paragraph">
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default ClientComponent;