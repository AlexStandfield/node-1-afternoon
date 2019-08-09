const products = require('../products.json')

const getProduct = (req, res) => {
    const item = products.find(alert => alert.id === +req.params.id)
    if(!item){
        return req.status(500).send('Item is not in the list')
    }
    res.status(200).send(item)
}
module.exports = getProduct