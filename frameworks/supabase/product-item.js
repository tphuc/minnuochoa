

import useSWR from 'swr'
import { supabase } from '.'


const ENDPOINT = 'products'



const fetcher = async (ENDPOINT, id) => {
    let res = await supabase.from(ENDPOINT).select('*').match({id})
    return res.data
}

export default function useProductItem(id) {
    const { data, error, mutate } = useSWR(id ? [ENDPOINT, id] : null, fetcher)
    return {
        mutate,
        data: data?.length && data[0],
        isLoading: !data,
        isError: error
    }
}

