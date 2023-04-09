import Product from "../components/product"
import { useState, useEffect } from "react"
import { getAll } from "../api/products"
import { IProduct } from "../models"

const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    async function fetchProduct() {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])


    return <div className="container mx-auto mb-20">
        <div className='my-10'>
            <img src="./silder1.png" alt="" className='' />
        </div>

        <h1 className="">Điện thoại nổi bật</h1>
        <div className="grid grid-cols-7 gap-10 container mx-auto">
            {products.map((item, index) => (
                <Product data={item} key={item._id} />
            ))}



        </div>
    </div>
}

export default Home