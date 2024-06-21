import prismaCLient from "../../prisma";

class ListOrderService {
    async execute(){
        const order = await prismaCLient.order.findMany({
            where: {
                status: false,
                draft: false
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return order
    }
}

export { ListOrderService }