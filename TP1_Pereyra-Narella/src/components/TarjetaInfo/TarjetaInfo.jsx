import "./TarjetaInfo.css"

const TarjetaInfo = ({ product }) => {
    const { id, title, price, description, images } = product
    return (
        <div className="tarjeta-info" key={id} >
            <h2> {title} </h2>
            <img src={images} alt="" />
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
}

export { TarjetaInfo }