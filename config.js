// asc ou desc

const config = {
    primeira_ord: 'asc',
    primeiro_atrib: 'Author',
    segunda_ord: 'desc',
    segundo_atrib: 'Titulo',
    terceira_ord: '',
    terceiro_atrib: ''
}

localStorage.setItem('config', JSON.stringify(config))