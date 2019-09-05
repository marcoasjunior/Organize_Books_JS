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

// ordem asc e desc
function ordem_asc (array, atributo) {
    
    return array.sort((elem1, elem2) => {return elem1[atributo] < elem2[atributo] ? -1 : elem1[atributo] > elem2[atributo] ? 1 : 0})
    
}

function ordem_desc (array, atributo) {

    return array.sort((elem1, elem2) => {return elem1[atributo] < elem2[atributo] ? 1 : elem1[atributo] > elem2[atributo] ? -1 : 0})

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

let configs = JSON.parse(localStorage.getItem('config'))

console.log(configs)

// usar config e ordenar
function ordenar(ordenados) {
    
    let primeira = config.primeira_ord == 'asc' ? ordem_asc(ordenados, config.primeiro_atrib) : ordem_desc(ordenados, config.primeiro_atrib)
    let listaIgual = ''
    let listaIgual2 = ''
    let filtrado = ''
    let indice = 0

    if (config.segunda_ord == '') return primeira
    else {
        listaIgual = iguais(primeira, config.segundo_atrib)
        let segunda = config.segunda_ord == 'asc' ? ordem_asc(listaIgual, config.segundo_atrib) : ordem_desc(listaIgual, config.segundo_atrib)
        if (config.terceira_ord == '') {
            filtrado = segunda.filter((valor) => valor > lista[0])
            indice = segunda.indexOf(filtrado[0])
          //  primeira.splice()
            return primeira.splice(indice, (filtrado.length + 1), ...filtrado)}
        else {
            listaIgual2 = iguais(segunda,config.terceiro_atrib)
            let terceira = config.segunda_ord == 'asc' ? ordem_asc(listaIgual2, config.terceiro_atrib) : ordem_desc(listaIgual2, config.terceiro_atrib)
            return terceira //revisar
        }

    }
}

console.log(ordenar(lista))
