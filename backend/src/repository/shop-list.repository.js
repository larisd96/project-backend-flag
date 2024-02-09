const db = require("../config/mysql-config")

exports.GetAllItemsRepository = () => {

    const query = `SELECT * FROM  shop_list`;

    return new Promise((resolve, reject) =>{
db.query(query, (error, results) =>{
    if(error) {
        reject(error)
    } else {
        resolve(results)
    }
})
    }) 
}
