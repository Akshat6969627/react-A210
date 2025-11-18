import React, { useEffect, useState } from 'react'
import axios from "axios"

function B() {

    const [products,setproducts]=useState(null)

    useEffect(()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((res)=>setproducts(res.data))
    },[])
  return (
    <div>
    {products && products.map((p,i)=>{
        return <>

        <p>
            {p.id}{p.title} hello
        </p>
        <img src ={p.image} alt="" />
        </>
    })}
    </div>
  )
}

export default B