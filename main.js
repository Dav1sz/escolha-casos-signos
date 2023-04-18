function escolhaSigno() {
    var texto
    var signo = document.querySelector("#signos").value
    var imagem = document.getElementById("img1")

    switch (signo) {
        case "Áries":
            texto = "o signo de Áries pode se identificar com características como a impulsividade e a coragem. Sabe aquela galera que não tem medo de nada? Provavelmente tem Áries forte no Mapa. Eles também amam motivar quem está ao seu redor e são guerreiros por natureza."

            if (escolhaSigno <= "Áries") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/aries.png"
        
            
            break

        case "Touro":
            texto = "o signo Touro pode se identificar com virtudes como a paciência, o bom gosto e a sensualidade. Afeto e valorização do prazer e conforto também podem ser características de Touro, mas sabe aquela galera meio teimosa? Pode ser que tenham o signo de Touro forte."

            if (escolhaSigno >= "Touro") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/touro.png"
            
            break

        case "Gêmeos":
            texto = "o signo de Gêmeos geralmente se identifica com características como a curiosidade, a inteligência e o desejo de liberdade. Sabe aquela galera que ama ler, aprender coisas novas, puxar conversa e fazer novas amizades? Provavelmente tem gêmeos signo forte no mapa. "

            if (escolhaSigno >= "Gêmeos") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/gemeos.png"
            
            
            break

        case "Câncer":
            texto = "o signo de Câncer pode se identificar com características como a sensibilidade e o carinho. Um canceriano ou canceriana típicos costumam ter uma ótima intuição, além de um forte vínculo com seus familiares."

            if (escolhaSigno >= "Câncer") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/cancer.png"
            
            break

        case "Leão":
            texto = "Quem tem sol em Leão costuma amar plateias e aplausos. O signo tem a coragem e o humor como marcas registradas, mas também o orgulho e o autoritarismo. Leão geralmente valoriza as oportunidades e aproveita cada momento, sabe amar e ter generosidade."

            if (escolhaSigno >= "Leão") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/leao.png"
            break

        case "Virgem":
            texto = "o signo Virgem pode se identificar com características como a objetividade e a organização. Virginianas e virginianos típicos costumam buscar constantemente a perfeição e identificar facilmente detalhes que passam despercebidos por todos os outros."

            if (escolhaSigno >= "Virgem") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/virgem.png"
            break

        case "Libra":
            texto = "o signo Libra, em geral, se identifica com características como a cortesia, a delicadeza e a busca constante pelo equilíbrio."

            if (escolhaSigno >= "Libra") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/libra.png"
            break

        case "Escopião":
            texto = "o signo Escorpião pode se identificar com características como a intensidade e o poder de transformação. Escorpianas e escorpianos típicos costumam ser bastante passionais e muito generosos."

            if (escolhaSigno >= "Escopião") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/escopiao.png"
            break

        case "Sargitário":
            texto = "o signo de Sagitário pode se identificar com características como o otimismo e o desejo de liberdade. Sagitarianas e sagitarianos típicos costumam ser viajantes e, geralmente, enxergam o mundo inteiro como sua casa."

            if (escolhaSigno >= "Sargitário") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/sargitario.png"
            break

        case "Capricórnio":
            texto = "o signo de Capricórnio pode se identificar com virtudes como persistência e responsabilidade. Capricórnio signo costuma ter metas bem definidas e noção dos seus limites."

            if (escolhaSigno >= "Capricórnio") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/capricornio.png"
            break

        case "Aquário":
            texto = "O signo de Aquário pode se identificar com características como o desejo de inovar e a independência."

            if (escolhaSigno >= "Aquário") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/aquario.png"
            break

        case "Peixes":
            texto = "o signo de Peixes pode se identificar com virtudes como a sensibilidade e a intuição. Piscianos e piscianas típicos costumam ser bastante solidários e muitas vezes têm uma forte conexão com a espiritualidade."

            if (escolhaSigno >= "Peixes") {
                document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3295969.jpg)'
            }
            imagem.src = "img/peixes.png"
            break

        default:
            texto = "Insira um signo existente"
    }

    document.getElementById("frase").innerHTML = texto

    document.querySelector(".Horóscopo").setAttribute("class", "Horóscopo2");

}



function esconde(el) {
    document.getElementById(el).style.display = 'none';

}

function mostra(el) {
    document.getElementById(el).style.display = '';
}
