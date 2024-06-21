import prismaCLient from "../../prisma";

interface OrderRequest {
    order_id: string
}

class DetailOrderService{
    async execute({ order_id }: OrderRequest){
        const order = await prismaCLient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{
                order: true,
                product: true
            }
        })

        return order
    }
}

export { DetailOrderService }