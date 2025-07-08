import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Blog() {

    let [data,setData] = useState([])

    useEffect(() => {
        async function GetData() {
            let res = await axios.get("http://localhost:5500/api/post/allPosts")

            console.log(res.data.data)
            setData(res.data.data)
            
        }
        GetData()
    },[])



    async function handlesubmit(e) {
        e.preventDefault();
        let Data = {
            Name: e.target[0].value,
            Age: e.target[1].value
        }
        let Res = await axios.post("http://localhost:5500/api/post/create",Data)
        console.log(Res.data)
    }



    


  return (
    <div>

        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        <center>
            <h1>Blog</h1>
            <hr />
            {
                data.map((item) => {
                    return (
                        <div>
                            <h2>{item.Name}</h2>
                            <p>{item.Age}</p>
                        </div>
                    )
                })
            }
        </center>
    </div>
  )
}
