let persona = {
    nome: "Ivan",
    cognome: "Di Domenico",
    eta: "22",

    saluta: function(){
        console.log("Ti saluta " + this.nome)
    }
}

persona.saluta();