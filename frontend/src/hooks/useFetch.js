// <>
import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = function(url, once=false, token=null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (once == true) {
        useEffect(function() {
            const fetchData = async function() {
                try {
                    const response = await axios.get(url, {
                        headers: {
                            Authorization: "Bearer " + token,
                        }
                    })
                    setData(response.data);
                }
                catch (error) {
                    setError(error);
                }
                finally {
                    setLoading(false);
                }
            };
            fetchData();
        }, [])

    } else {
        useEffect(function() {
            const fetchData = async function() {
                try {
                    const response = await axios.get(url, {
                        headers: {
                            Authorization: "Bearer " + token,
                        }
                    })
                    setData(response.data);
                }
                catch (error) {
                    setError(error);
                }
                finally {
                    setLoading(false);
                }
            };
            fetchData();
        }, [url])
    }
    return {data, loading, error};
}

export default useFetch;
