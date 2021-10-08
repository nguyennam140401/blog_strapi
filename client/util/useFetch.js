import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [dataState, setdataState] = useState(null)
    const [errorState, setErrorState] = useState(null)
    const [loadingState, setLoadingState] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axios.get(url)
                setdataState(res.data)
            } catch (err) {
                setErrorState(err)
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return { loading, error, data }
}

export default useFetch
