

import useSWR from 'swr'

import { firestore } from '../firebase'
import { doc, addDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, query } from '@firebase/firestore'

const ENDPOINT = 'categories'

const fetcher = async (ENDPOINT) => {
    let res = await getDocs(collection(firestore, ENDPOINT))
    return res.docs.map(doc => ({ 
        id: doc.id,
        ...doc.data() 
    }))
}

export default function useCategories() {
    const { data, error, mutate } = useSWR(ENDPOINT, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
