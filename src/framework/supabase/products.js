

import useSWR from 'swr'
import { supabase } from '.'


const ENDPOINT = 'products'



const fetcher = async (ENDPOINT, filter) => {

    console.log('0000')
    let _res = supabase.from('products')
    .select(`
        *,
        brand: brands(
            *
        ),
        categories(
            *
        )
    `)


    for(let k in filter){
        if(filter[k]){
          
            switch(k){
                case 'brand':
                    _res = _res.filter('brand', 'eq', parseInt(filter.brand))
                    break
                case 'category':
                    _res = _res.filter('product_category.category_id', 'eq', parseInt(filter.category))
                    break
                case 'sort':
                    if(filter.sort == 'timestamp'){
                        _res = _res.order('created_at', { ascending: false})
                    }
                    else{
                        _res = _res.order('low_price', { ascending: filter.sort == 'asc'})
                    }
                    break
            }
        }
    }
    _res = _res.order('arrange', {ascending:false})

    let res = await _res


    return res.data




   
}

export default function useProducts(filter) {
    const { data, error, mutate } = useSWR([ENDPOINT, filter], fetcher)
    return {
        mutate,
        data: data,
        isLoading: !data,
        isError: error
    }
}

export const ProductsCRUD = {
    create: async (_data) => {
        // delete and rewrite categories
        const { categories, ...data} = _data
        let res = await supabase.from(ENDPOINT).insert(data)

        if(categories?.length){
            let cate_res = await supabase.from('product_category').insert(categories.map(item => ({
                product_id: res.data[0].id,
                category_id: item.id
            })))
        }
        return res
    },
    createWithId: async (id, data) => {
 
    },
    read: async(id) => {
      
    },
    update: async (id, _data) => {
        // delete and rewrite categories
        const { categories, ...data} = _data
        if(categories?.length){
            let del_res = await supabase.from('product_category').delete().match({product_id: id})
            let cate_res = await supabase.from('product_category').insert(categories.map(item => ({
                product_id: id,
                category_id: item.id
            })))
        }
       
        let res = await supabase.from(ENDPOINT).update(data).match({id})
        return res
    },
    delete: async (id) => {
        let del_res = await supabase.from('product_category').delete().match({product_id: id})
        let res = await supabase.from(ENDPOINT).delete().match({id})
        return res
    },
}