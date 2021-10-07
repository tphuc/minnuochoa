

import React from 'react'
import useSWR from 'swr'


import { firestore } from '../firebase'
import { doc, addDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, query, where, orderBy,  } from '@firebase/firestore'

const ENDPOINT = 'hightlight-products'

const fetcher = async (ENDPOINT) => {
    
    const q = query(collection(firestore, 'products'), where('hightlight', '==', true));
    let res = await getDocs(q)

    return res.docs.map(doc => ({ 
        id: doc.id,
        ...doc.data() 
    }))
}

export default function useHightlightProducts() {
    const { data, error, mutate } = useSWR(ENDPOINT, fetcher, {
        revalidateOnFocus:false
    })
    

    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }

}