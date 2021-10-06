

import React from 'react'
import useSWR from 'swr'
import { doc, addDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, query, where, orderBy, serverTimestamp  } from '@firebase/firestore'
import { firestore } from '../firebase';

const ENDPOINT = 'orders'

const addOrder = async (data) => {
    let res = await addDoc(collection(firestore, ENDPOINT), {
        ...data,
        timestamp: serverTimestamp()
    })
    return res
}

export {
    addOrder
}