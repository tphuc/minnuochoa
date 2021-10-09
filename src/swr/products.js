

import React from 'react'
import useSWR from 'swr'


import { firestore } from '../firebase'
import { doc, addDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, query, where, orderBy, } from '@firebase/firestore'
import { findIdByLabel, useQuery } from '../lib'

const ENDPOINT = 'products'

const fetcher = async (ENDPOINT) => {
    try {
        let res = await getDocs(collection(firestore, ENDPOINT))
        console.log(15,res.docs)
        return res.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    }
    catch (e) {
        console.log(31, e)
    }

}

export default function useProducts(waitings) {
 
   

    const { data, error, mutate } = useSWR(() => waitings ? ENDPOINT : null, fetcher, {
        revalidateOnFocus: false,
    })

    const _sort = useQuery().get('sort')
    const sort = _sort === 'null' ? null : _sort
    const _category = useQuery().get('category')
    const category = _category === 'null' ? null : _category
    const _brand = useQuery().get('brand')
    const brand = _brand === 'null' ? null : _brand






    const fetchFilter = React.useCallback(async (queryOptions) => {

        let queries = []
        // console.log(queryOptions)
        if (queryOptions.categories) {
            queries.push(where(...queryOptions.categories))
        }
        if (queryOptions.brands) {
            queries.push(where(...queryOptions.brands))
        }

        const q = query(collection(firestore, ENDPOINT), ...queries);
        let res = await getDocs(q)

        let data = res.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        return data

    }, [])





    React.useEffect(() => {
        const isReady = waitings.findIndex(item => item == undefined) == -1
        if(isReady){
            let categoryId = findIdByLabel(waitings[0] || [], category)
            let brandId = findIdByLabel(waitings[1] || [], brand)
            fetchFilter({
                categories: category ? [`categories.${categoryId}.id`, '==', categoryId] : null,
                brands: brand ? [`brands.${brandId}.id`, '==', brandId] : null,
                sort: sort && ['price', sort !== 'timestamp' ? sort : 'desc']
    
            }).then(res => {
                mutate(res, false)
            })
    
        }
        
       



    }, [brand, category, sort,  waitings])


    return {
        mutate,
        fetchFilter,
        data: data,
        isLoading: !error && !data,
        isError: error
    }

}