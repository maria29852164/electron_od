const path = require( 'path')
const  url = require('url')
 const formatUrl= ()=>{
    const url_index= path.join(__dirname,'..','dist','index.html');
    
    return url.fileURLToPath(url_index)
    

}
module.exports={
    formatUrl
}

