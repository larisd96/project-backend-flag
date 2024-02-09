const shopListRepository = require("../repository/shop-list.repository")

exports.getAllItemsService = async  () => {


    try { 
        // TODO criar chamada com o db 

         const result = await shopListRepository.GetAllItemsRepository()
         return result; 

    } catch(error) {
throw new Error("error cenas") 
        
    }
   
    
    }
    
    