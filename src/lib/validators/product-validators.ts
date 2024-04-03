import { z} from 'zod'

export const AVAILABLE_SIZES = ['L', 'M', 'S'] as const
export const AVAILABLE_COLORS = ['white', 'beige', 'blue', 'green', 'purple'] as const
export const AVAILABLE_SORT = ['none','price-asc', 'price-dec',] as const


export const ProductFilterValidator = z.object({
    size:z.array(z.enum(AVAILABLE_SIZES)), //enum is for when we have to define the fixed number of values here we have the fixed number of sizes thats why we are using the enum property
    color:z.array(z.enum(AVAILABLE_COLORS)) ,
    sort:z.enum(AVAILABLE_SORT),
    price:z.tuple([z.number(),z.number()]), // we use two number thats why we use tuple or we can use many more but in that case we need only two number for price under ([0,20])
})

export type ProductState = Omit<z.infer<typeof ProductFilterValidator> ,"price"> & {
    price:{ isCustom:boolean , range:[number,number]}
}// it gives us the same type in typescript for more flexiblity0
//and omit for override the price type here i can be custom value and range