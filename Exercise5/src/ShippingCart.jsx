import { useState } from "react";

let ShippingCart = () =>{

    // declaring the States
    let [products, setProducts] = useState([]);
    let [productName, setProductName] = useState('');
    let [price, setPrice] = useState("");

    // making the mothod to load the product data
    const addToCart = () =>{
        
        if(productName.trim()!=="" && price.trim()!==""){
            // creating new product object
        let newProduct = {
            id:crypto.randomUUID(),
            name:productName,
            price: parseFloat(price),
            quantity: 1,
        }
        setProducts([...products, newProduct]);
        setProductName('');
        setPrice('');

        }
        
    }

    // Method for increasing quantity
  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

    // Method for decreasing quantity
    let decreaseQuantity =(id)=>{

        const updatedProducts = products.map((product)=>
         product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    )
    setProducts(updatedProducts);
    }

    // Method for removing a product
  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Calculating total price
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
          

    return(
        <>
            {/* First , displying input in DOM */}

            <div>
        
                <h1>Simple Shopping Cart</h1>
                <h2>Add a Product</h2>

                <input 
                        type="text"
                        placeholder="Product Name"
                        onChange={
                       (event)=>setProductName(event.target.value)
                        }
                        value={productName}
                />

             <input 
                type="number"
                placeholder="Price" 
                onChange={
                (event)=>setPrice(event.target.value)
                }
                value={price}
              />

              <button onClick={addToCart} >Add to Cart</button>

            </div>

            {/* Secondly, Making the output */} 

            {products.length > 0 ? (

                <div>

                    <h3>Products in the cart</h3>

                    <ul>
                        {

                            products.map((product)=>(

                            <li key={product.id} >

                                <h5>{product.name} : $ {product.price}</h5> 
                                <div>
                                    Quantity:
                                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={() => increaseQuantity(product.id)}>+</button>
                                </div>
                                <button onClick={() => removeProduct(product.id)}>Remove</button>
                            </li>
                        
                            ))
                    
                        }  

                    </ul>

                    <h3>The total is : ${totalPrice.toFixed(2)} </h3>  

            </div>

        ):(
            <h3> The Cart is Empty </h3> 
        )}
           
        </>
    )

}
export default ShippingCart;



       

   
    
