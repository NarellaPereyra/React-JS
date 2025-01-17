import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout/Layout";
import "./Products.css"
import { TarjetaInfo } from "../../components/TarjetaInfo/TarjetaInfo";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
                console.log(products)
            }
            )
    }, [])

    return (
        <Layout>
            <article className="cont-products">
                {
                    products.map((product) => {
                        return (
                            < TarjetaInfo product={product} />
                        )
                    })
                }
            </article>
        </Layout>
    )
}

export { Products }