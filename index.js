// manage products 
// manage clients 
//manage orders
// manage suppliers

const server = require('./api/server.js')

const port = 8000

server.listen(port, () => {`\n API on port ${port} \n`})


