

import React from 'react'
import useSWR from 'swr'
import { doc, addDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, query, where, orderBy,  } from '@firebase/firestore'
import { firestore } from '../firebase';

const ENDPOINT = 'products'
const fetcher = async (id) => {
    let res = await getDoc(doc(firestore, ENDPOINT, id))
    return res.data()
}


export default function useProductItemDetail(id) {
    const { data, error } = useSWR(id, fetcher)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
