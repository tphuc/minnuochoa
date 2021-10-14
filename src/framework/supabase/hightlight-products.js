

import useSWR from 'swr'
import { supabase } from '.'


const ENDPOINT = 'products'



const fetcher = async (ENDPOINT) => {
    let res = await supabase.from(ENDPOINT)
    .select(`*, 
        brand: brands(
            *
        ),
        categories(
            *
        )
    `)
    .filter('starred','eq',true)

    return res.data
   
}

export default function useHightlightProducts() {
    const { data, error, mutate } = useSWR(ENDPOINT, fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

