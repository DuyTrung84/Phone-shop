import Product from "../components/product"

const Home = () => {
    return <div className="container mx-auto mb-20">
        <div className='my-10'>
            <img src="./silder1.png" alt="" className='' />
        </div>
        <h1 className="">Điện thoại nổi bật</h1>
        <div className="grid grid-cols-7 gap-10 container mx-auto">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
}

export default Home