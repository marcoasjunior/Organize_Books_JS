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


console.log(iguais(lista, 'EditionYear'))
