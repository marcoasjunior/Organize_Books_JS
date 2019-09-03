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
    Author: 'Elisabeth Freeman	',
    EditionYear: 2004 
}

const livro4 = {
    Titulo: 'Internet & World Wide Web: How to Program',
    Author: 'Deitel & Deitel',
    EditionYear: 2007  
}

let lista = [livro1, livro2, livro3, livro4]

function ordem_asc(array) {
    
    return array.sort((elem1, elem2) => {return elem1.Titulo < elem2.Titulo ? -1 : elem1.Titulo > elem2.Titulo ? 1 : 0})
    
}

function ordem_desc (array) {

    return array.sort((elem1, elem2) => {return elem1.Titulo < elem2.Titulo ? 1 : elem1.Titulo > elem2.Titulo ? -1 : 0})

}


console.table(ordem_desc(lista))
