  function abrir() {
    let procurar = document.getElementById("procurar").value;
    if (procurar === "Escola" || procurar === "escola" || procurar === "1" || procurar === "primeiro" || procurar === "Escola Dr.Severino Alves de Sá") {
      window.location.href = "https://drseverino.github.io";
    } else if (procurar === "Pesquisa" || procurar === "pesquisa" || procurar === "2" || procurar === "segundo" || procurar === "pesquisa sobre combustiveis fosseis" || procurar === "Combustíveis fósseis" || procurar === "Combustíveis Fósseis") {
      window.location.href = "https://kabriel-rgb.github.io/Combust-veis-f-sseis/";
    } else if (procurar === "benicio" || procurar === "Benicio 3D" || procurar === "Benicio animação" || procurar === "Benicio" || procurar === "3" || procurar === "terceiro") {
      window.location.href = "https://kabriel-rgb.github.io/Benicio-3D/";
    } else if (procurar === "recaptcha" || procurar === "reCAPATCHA" || procurar === "não sou um robo" || procurar === "Não sou um robo" || procurar === "Não sou um robo " || procurar === "recaptcha " || procurar === "reCAPTCHA " || procurar === "não sou um robo " || procurar === "Recaptcha" || procurar === "4") { 
      window.location.href = ("https://kabriel-rgb.github.io/reCAPTCHA";
    } else if (procurar === "Monte um relógio Condor" || procurar === "Relógio" || procurar === "relogio" || procurar === "Relogio" || procurar === "Condor" || procurar === "quarto" || procurar === "4") {
      window.location.href = ("https://kabriel-rgb.github.io/monterelogiocondor.github.io";
    } else {
      alert("opção não encontrada!")
    }
  }
