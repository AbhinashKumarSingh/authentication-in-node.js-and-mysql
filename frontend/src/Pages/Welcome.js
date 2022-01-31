import Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { read_cookie } from 'sfcookies';

function Welcome(){
        const [data,setData]=useState();


    useEffect(()=>{
        const data=async()=>{
            // console.log(read_cookie('jwtttt'))
            const result=await Axios.post('http://localhost:5000/users/users/hello',{
                headers:{
                    Authorization:`Bearer ${read_cookie('jwtttt')}`
                }
            })
            
            //setData(result.data)
            if(result.data==='user unauthorized')
            setData('Error 403')
            else setData(result.data)
        }
        data()
    })

    return (
        <div>
            <h1>{data?data:null}</h1>
        </div>
    )
}

export default Welcome
