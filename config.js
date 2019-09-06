let atri1 = ''
let atri2 = ''
let atri3 = ''
let ord1 = ''
let ord2 = ''


function valores(){
    
    if (document.getElementById('idordena1').checked){
        ord1 = document.getElementById('idordena1').value;
    }
    else if(document.getElementById('idordena2').checked){
        ord1 = document.getElementById('idordena2').value;
    }

    atri1 = document.getElementById('atrib1').value

    if (document.getElementById('idordena3').checked){
        ord2 = document.getElementById('idordena3').value;
    }
    else if(document.getElementById('idordena4').checked){
        ord2 = document.getElementById('idordena4').value;
    }

    atri2 = document.getElementById('atrib2').value

    if (document.getElementById('idordena5').checked){
        ord3 = document.getElementById('idordena5').value;
    }
    else if(document.getElementById('idordena6').checked){
        ord3 = document.getElementById('idordena6').value;
    }

    atri3 = document.getElementById('atrib3').value

    // asc ou desc

    const config = {
        primeira_ord: ord1,
        primeiro_atrib: atri1,
        segunda_ord: ord2,
        segundo_atrib: atri2,
        terceira_ord: ord3,
        terceiro_atrib: atri3}

    localStorage.setItem('config', JSON.stringify(config))

}



