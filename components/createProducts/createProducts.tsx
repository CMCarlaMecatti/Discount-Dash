'use client'
import { useState } from "react"
import { useNewPostMutation } from '@/lib/redux/service/createProductsAPI'

const CreateProducts = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        image: '',
        price: '',
        stock: '',
        brand: '',
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        })
    }

    const [mutate, { data }] = useNewPostMutation()
    
    const handleSend = () => {

        mutate({
            name: newProduct.name,
            image: newProduct.image,
            price: newProduct.price,
            stock: newProduct.stock,
            brand: newProduct.brand
        })
        setNewProduct({
            name: '',
            image: '',
            price: '',
            stock: '',
            brand: '',
        })
    }

    return (
        <div>
            <div>
                <h1>Create Products</h1>
                <label htmlFor="name">Name: </label>
                <input type="text" value={newProduct.name} name="name" onChange={handleChange} />

                <label htmlFor="image">Image: </label>
                <input type="text" value={newProduct.image} name="image" onChange={handleChange} />

                <label htmlFor="price">Price: </label>
                <input type="text" value={newProduct.price} name="price" onChange={handleChange} />

                <label htmlFor="stock">stock: </label>
                <input type="text" value={newProduct.stock} name="stock" onChange={handleChange} />

                <label htmlFor="brand">Brand: </label>
                <input type="text" value={newProduct.brand} name="brand" onChange={handleChange} />
                
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default CreateProducts