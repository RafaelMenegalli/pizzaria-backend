import prismaCLient from "../../prisma";

interface ItemRequest {
    item_id: string
}

class RemoveItemService {
    async execute({ item_id }: ItemRequest){
        const item = await prismaCLient.item.delete({
            where:{
                id: item_id
            }
        })

        return item
    }
}

export { RemoveItemService }