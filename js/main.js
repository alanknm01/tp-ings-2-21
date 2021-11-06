const RequestMeli = async (article) => {

    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${article}`)
    if(response.ok){
        articleMeli = await response.json()
        article_name =  articleMeli.results[0].title
        console.log(article_name)

    }
    else{
        console.log("ERROR")
    }


}