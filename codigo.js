 function muda_palavra(){
        var palavra = document.getElementsByTagName('strong')
        var novaPalavra = document.getElementById('palavra').value
        for(i=0;i< palavra.length;i++){
            palavra[i].innerHTML = novaPalavra
        }
    }
