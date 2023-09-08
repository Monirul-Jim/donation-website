import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useDonateMoney = () => {
    const [categories,setCategories]=useState([])
    const [loading, setLoading] = useState(true);
    const {user}=useAuth()
    useEffect(()=>{
        fetch(`/api/getmoneyfromdatabase/${user?.email}`)
        .then(response=>response.json())
        .then(data=>{
            setCategories(data.result)
            setLoading(false)
        })
    },[])
    return [categories,loading]
};

export default useDonateMoney;