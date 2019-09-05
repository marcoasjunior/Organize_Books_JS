// asc ou desc

const config = {
    primeira_ord: 'asc',
    primeiro_atrib: 'EditionYear',
    segunda_ord: 'desc',
    segundo_atrib: 'Author',
    terceira_ord: '',
    terceiro_atrib: ''
}

localStorage.setItem('config', JSON.stringify(config))