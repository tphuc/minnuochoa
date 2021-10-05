

import React from 'react'
import useSWR from 'swr'


import { firestore } from '../firebase'
import { doc, addDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, query, where, orderBy,  } from '@firebase/firestore'

const ENDPOINT = 'products'

const fetcher = async (ENDPOINT) => {
    let queries = []
    // if(queryOptions.categories){
    //     queries.push(where(...queryOptions.categories))
    // }
    // if(queryOptions.brands){
    //     queries.push(where(...queryOptions.brands))
    // }
    // if(queryOptions.order){
    //     queries.push(orderBy(...queryOptions.brands))
    // }
    const q = query(collection(firestore, ENDPOINT), ...queries);
    let res = await getDocs(q)
    return res.docs.map(doc => ({ 
        id: doc.id,
        ...doc.data() 
    }))
}

export default function useProducts(waitings) {
    const { data, error, mutate } = useSWR(() => waitings ? ENDPOINT : null, fetcher, {
        revalidateOnFocus:false
    })
    

 

    const fetchFilter = React.useCallback(async (queryOptions) => {

        let queries = []
        console.log(queryOptions)
        if(queryOptions.categories){
            queries.push(where(...queryOptions.categories))
        }
        if(queryOptions.brands){
            queries.push(where(...queryOptions.brands))
        }
        if(queryOptions.sort){
            queries.push(orderBy(...queryOptions.sort))
        }

        console.log(query, queries)


        const q = query(collection(firestore, ENDPOINT), ...queries);
        let res = await getDocs(q)
        let data = res.docs.map(doc => ({ 
            id: doc.id,
            ...doc.data() 
        }))

        return data

    }, [])

    return {
        mutate,
        fetchFilter,
        data: data,
        isLoading: !error && !data,
        isError: error
    }

}