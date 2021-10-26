

import useSWR from 'swr'
import { supabase } from '.'


const ENDPOINT = 'order'






export const OrderCrud = {
    create: async (data) => {
        let res = await supabase.from(ENDPOINT).insert(data)
        return res
    },
    createWithId: async (id, data) => {
 
    },
    read: async(id) => {
      
    },
    update: async (id, data) => {
        let res = await supabase.from(ENDPOINT).update(data).match({id})
        return res
    },
    delete: async (id) => {

    },
}