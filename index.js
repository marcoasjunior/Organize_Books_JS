const livro1 = {
    Titulo: 'Java How To Program',
    Author: 'Deitel & Deitel',
    EditionYear: 2007  
}

const livro2 = {
    Titulo: 'Patterns of Enterprise Application Architecture',
    Author: 'Martin Fowler',
    EditionYear: 2002  
}

const livro3 = {
    Titulo: 'Head First Design Patterns',
    Author: 'Elisabeth Freeman',
    EditionYear: 2004 
}

const livro4 = {
    Titulo: 'Internet & World Wide Web: How to Program',
    Author: 'Deitel & Deitel',
    EditionYear: 2007  
}

let lista = [livro1, livro2, livro3, livro4]

localStorage.setItem('lista', JSON.stringify(lista))

// ordem asc e desc
function ordem_asc (lista, atributo) {
    
    return lista.sort((elem1, elem2) => {return elem1[atributo] < elem2[atributo] ? -1 : elem1[atributo] > elem2[atributo] ? 1 : 0})
    
}

function ordem_desc (lista, atributo) {

    return lista.sort((elem1, elem2) => {return elem1[atributo] < elem2[atributo] ? 1 : elem1[atributo] > elem2[atributo] ? -1 : 0})

}

// array de objetos iguais
function iguais(array, atributo) {

    let repete = []

    for (i = 0; i < array.length; i++){
        let aux = [array[i]]
        for (x = i; x < array.length; x++){
            if (i != x && array[i][atributo] == array[x][atributo]) aux.push(array[x])
        }
        
        repete.push(aux)
    }

    return repete

}

function processo() {
    
    let config = JSON.parse(localStorage.getItem('config'))
    let lista  = JSON.parse(localStorage.getItem('lista'))
    if (config.primeira_ord == '') return ''
    if (lista == null) throw 'OrderingException'
    
    let listaIgual = ''
    let listaIgual2 = ''
    let filtrado = ''
    let indice = 0
    let primeira = config.primeira_ord == 'asc' ? ordem_asc(lista, config.primeiro_atrib) : ordem_desc(lista, config.primeiro_atrib)

    if (config.segunda_ord == '') return primeira
   
    listaIgual = iguais(primeira, config.segundo_atrib)
    filtrado = listaIgual.filter((valor) => valor.length >= 2)

    if (filtrado == 0) {
        listaIgual = iguais(primeira, config.segundo_atrib)
        filtrado = listaIgual.filter((valor) => valor.length >= 2)

        if (filtrado == 0) return primeira

        indice = listaIgual.indexOf(filtrado[0])
        let segunda = config.segunda_ord == 'asc' ? ordem_asc(filtrado, config.segundo_atrib) : ordem_desc(filtrado, config.segundo_atrib)

        if (config.terceira_ord == '') return primeira.splice(indice, (filtrado.length + 1), filtrado)
        
        filtrado = segunda[0].filter((valor) => valor > [])
        listaIgual2 = iguais(filtrado,config.segundo_atrib)
        filtrado2 = listaIgual2.filter((valor) => valor.length >= 2)
        
        if (filtrado2 == 0) {

            filtrado = config.terceira_ord == 'asc' ? ordem_asc(filtrado, config.segundo_atrib) : ordem_desc(filtrado, config.segundo_atrib)

            for (let i = 0; i < filtrado.length; i++){
                primeira[indice] = filtrado[i]
                indice++
            }
            return primeira
        }
        
        filtrado = config.terceira_ord == 'asc' ? ordem_asc(filtrado, config.segundo_atrib) : ordem_desc(filtrado, config.segundo_atrib)

        for (let i = 0; i < filtrado.length; i++){
            primeira[indice] = filtrado[i]
            indice++
        }
        return primeira

    }

    indice = listaIgual.indexOf(filtrado[0])
    let segunda = config.segunda_ord == 'asc' ? ordem_asc(filtrado, config.segundo_atrib) : ordem_desc(filtrado, config.segundo_atrib)

    if (config.terceira_ord == '') return primeira.splice(indice, (filtrado.length + 1), filtrado)
    
    filtrado = segunda[0].filter((valor) => valor > [])
    listaIgual2 = iguais(filtrado,config.terceiro_atrib)
    filtrado2 = listaIgual2.filter((valor) => valor.length >= 2)
    
    if (filtrado2 == 0) {

        filtrado = config.terceira_ord == 'asc' ? ordem_asc(filtrado, config.terceiro_atrib) : ordem_desc(filtrado, config.terceiro_atrib)

        for (let i = 0; i < filtrado.length; i++){
            primeira[indice] = filtrado[i]
            indice++
        }
        return primeira
    }
    
    filtrado = config.terceira_ord == 'asc' ? ordem_asc(filtrado, config.terceiro_atrib) : ordem_desc(filtrado, config.terceiro_atrib)

    for (let i = 0; i < filtrado.length; i++){
        primeira[indice] = filtrado[i]
        indice++
    }
    return primeira
    
}

// usar config e ordenar
function ordenar() {
    
    console.log(processo())

}