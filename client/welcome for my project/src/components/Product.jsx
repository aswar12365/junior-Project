import Reac,{useState,useEffect} from 'react'
import axios from "axios"

function Product() {

const [data,setData]=useState([])
const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [category,setCategory]=useState("")
const [image,setImage]=useState("")
const [searchTerm,setSearchTerm]=useState("")
  const [filteredData, setFilteredData] = useState([]);

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


// const handleSearch=()=>{
//     console.log("searchTerm",searchTerm);
//     const results=data.filter((el)=>
//         ((el.name).toLowerCase())===(searchTerm.toLowerCase())
//     )
//     console.log("result",results);
//     setFilteredData(results)
// }


  return (
    
    <div className="cover-image">
      <main className="product-container">
        <h2>Our Products</h2>
        
<p>Welcome to our products page. Here you will find the finest products with the best scents.</p>
<button>Shop Now</button>
      </main>

        
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

{/* <input
type='text'
placeholder='Search by name...'
// onChange={(e)=>setSearchTerm(e.target.value)}
value={searchTerm}
/> */}
{/* <button onClick={handleSearch}>setSearch</button> */}

<ul>
 
 {data.map(el=>(
    
    <li key={el.id}>
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
</ul> 
 
    </div>
  )
}

export default Product
