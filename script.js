function calcular(tipo, valor){
    if(tipo === 'acao') {
      if(valor === 'c'){
        //limpar o visor
        document.getElementById('resultado').value = ''
      }
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor
      }
      if(valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo
      }
    } else if (tipo === 'valor') {

      document.getElementById('resultado').value += valor
    }
  }