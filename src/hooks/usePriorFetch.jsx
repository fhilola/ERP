import axios from "../services"
import { useLayoutEffect, useState } from "react"

const usePriorFetch = (URL) => {
    const [data, setData] = useState(null)
    const [isloading, setIsloading] = useState(true)
    const [error, setError] = useState(null)
  useLayoutEffect(()=>{
    axios(URL)
    .then(response => {
        setData(response.data)
    })
    .catch(err => {
        setError(err);
    })
    .finally(()=>{
        setIsloading(false)
    })
  },[URL])
  return [data, isloading, error]
}

export default usePriorFetch