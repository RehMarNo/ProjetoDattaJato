'use strict';
module.exports = {
     secrets: {
           session: "vendor-erp",        
           expiresIn: 2629746000     
     },
     db:{
         URI: 'mongodb://localhost:27017/vendor_erp'
     }
}

/**armazenar a chave secreta para tokens de hash e URL para conexão do MongogDB. */