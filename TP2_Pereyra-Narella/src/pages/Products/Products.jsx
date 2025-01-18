import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout/Layout";
import "./Products.css"
import { TarjetaInfo } from "../TarjetaInfo/TarjetaInfo";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
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