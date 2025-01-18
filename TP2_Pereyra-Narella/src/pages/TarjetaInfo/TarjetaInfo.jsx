import "./TarjetaInfo.css"

const TarjetaInfo = ({ product }) => {
    const { id, title, price, description, image } = product
    return (
        <div className="tarjeta-info" key={id} >
            <h2 className="titulo"> {title} </h2>
            <img src={image} alt="" />
            <p className="precio">${price}</p>
            <p className="descripcion">{description}</p> 
            <br/>
            <button><a className="ver-todo" >Comprar</a></button>
        </div>
    )
}

export { TarjetaInfo }