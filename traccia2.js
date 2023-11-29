  let agenda = {
    
    contatto: [{ "nome": "Ivan", "numeroTelefono": 373783482434 }, { "nome": "Marco", "numeroTelefono": 658758597 }, { "nome": "Rico", "numeroTelefono": 47474848 },{ "nome": "Nick", "numeroTelefono": 13286264 }],
    
    mostraContatti: function(){
      console.log(this.contatto)
    },
    
    aggiungiContatto: function(nuovoContatto){
      this.contatto.push(nuovoContatto)
    },
    
    eliminaContatto: function(NomeContattoDaEliminare){
      
    let agendaFiltrata = this.contatto.filter(function (contatto) {return contatto.nome != NomeContattoDaEliminare})
    this.contatto = agendaFiltrata  
    },

    mostraSingoloContatto: function(NomeContattoDaMostrare){

      let contattoDaMostrare = this.contatto.filter(function(contatto){return contatto.nome == NomeContattoDaMostrare})
      console.log(contattoDaMostrare)
    },

    modificaContatto: function(NomeContattoDaModificare , DatiModifica){

      for (let i = 0; i < this.contatto.length; i++) {
        if((this.contatto[i].nome)==NomeContattoDaModificare)
        this.contatto[i] = DatiModifica

      }

      
    },
    
  }
  
  agenda.mostraContatti()
  
  agenda.aggiungiContatto({"nome":"Luca","numero":589437849})
  
  agenda.mostraContatti()
  
  agenda.eliminaContatto("Ivan")

  agenda.mostraContatti()
  
  agenda.mostraSingoloContatto("Marco")

  agenda.modificaContatto("Luca",{"nome":"Lewis","numero":4479823})

  agenda.mostraContatti()

  
  
  