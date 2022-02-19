// buscar os links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;



}


// salvar um link o localstorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);


    // se já tiver um link salvo com algum id eu não vou deixar duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('esse link já existe na sua lista')
        return
    }

    // adicionar esse novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("salvo liks sucesso")
}


// deletar link
export function deleteLink(links, id) {
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    // tira do localstorage
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

    return myLinks;
}