import Reac,{useState,useEffect} from 'react'
import axios from "axios"

function Product() {

const [data,setData]=useState([])
const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [category,setCategory]=useState("")
const [image,setImage]=useState("")



let pro={
    name:name,
    price:price,
    image:image,
    category:category
}




const fetch=()=>{
axios.get("http://localhost:3000/api/product/getAll")
.then((response)=>{
    console.log("product is here",response.data);
    setData(response.data)
})
.catch((err)=>{
    console.log(err);
    
})
}
useEffect(()=>{
    fetch()
},[])


const addPro=(newPro)=>{
axios
.post("http://localhost:3000/api/product/add",newPro)
.then((response)=>{
console.log("product added",response.data)
fetch()
})
.catch((err)=>console.log(err))
}

const delPro=(id)=>{
axios
.delete(`http://localhost:3000/api/product/${id}`)
.then((response)=>{
console.log("response delted",response.data)
fetch()
})
.catch((err)=>console.log("delete error :",err))
}

const updatePro=(id,newName)=>{
axios
.put(`http://localhost:3000/api/product/${id}`,newName)
.then((response)=>{
console.log("response from update",response.data)
fetch()
})
.catch((err)=>console.log(err))
}

  return (
    <div>
<h2>ADD PRODUCT</h2>
<input
type='text'
placeholder='Name'
value={name}
onChange={(e)=>setName(e.target.value)}

/>
<input
type='number'
placeholder='price'
value={price}
onChange={(e)=>setPrice(e.target.value)}

/>
<input
type='text'
placeholder='category'
value={category}
onChange={(e)=>setCategory(e.target.value)}

/>
<input
type='text'
placeholder='Image URL'
value={image}
onChange={(e)=>setImage(e.target.value)}

/>
<button onClick={()=>addPro(pro)}>ADD Product</button>




  {data.map(el=>(
    <li>
        <p>{el.name}</p>
         <p>{el.price}</p>
         <p>{el.category}</p>

         <img src={el.image} alt={el.name}/>

<button onClick={()=>delPro(el.id)}>Delete</button>
<input
type='text'
placeholder='Name'
value={name}
onChange={(e)=>setName(e.target.value)}

/>
<input
type='number'
placeholder='price'
value={price}
onChange={(e)=>setPrice(e.target.value)}

/>
<input
type='text'
placeholder='category'
value={category}
onChange={(e)=>setCategory(e.target.value)}

/>

<input
type='text'
placeholder='Name'
value={name}
onChange={(e)=>setName(e.target.value)}

/>
<input
type='text'
placeholder='Image URL'
value={image}
onChange={(e)=>setImage(e.target.value)}

/>
<button onClick={()=>updatePro(el.id,pro)}>update</button>

    </li>
  ))}    
    </div>
  )
}

export default Product
