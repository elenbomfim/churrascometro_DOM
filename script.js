window.addEventListener("beforeunload", function () {
  localStorage.clear();
});

document
  .getElementById("usuario")
  .addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const promoCheckbox = document.getElementById("promoCheckbox").checked;

    if (!validacaoEmail(email)) {
      document.getElementById("errorMessage").innerText = "E-mail inválido.";
      return;
    }

    if (!validacaoCEP(cep)) {
      document.getElementById("errorMessage").innerText = "CEP inválido.";
      return;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("cep", cep);
    localStorage.setItem("promoCheckbox", promoCheckbox);
    document.getElementById("passo1").style.display = "none";
    document.getElementById("passo2").style.display = "block";
  });

function validacaoEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validacaoCEP(cep) {
  const regex = /^[0-9]{8}$/;
  return regex.test(cep);
}

const storedNome = localStorage.getItem("nome");
const storedEmail = localStorage.getItem("email");
const storedCep = localStorage.getItem("cep");
const storedPromoCheckbox = localStorage.getItem("promoCheckbox");

if (storedPromoCheckbox === "true")
  document.getElementById("promoCheckbox").checked = true;

function calculadora() {
  const homens = parseInt(document.getElementById("homens").value);
  const mulheres = parseInt(document.getElementById("mulheres").value);
  const criancas = parseInt(document.getElementById("criancas").value);
  const bebidasAlccol = parseInt(
    document.getElementById("bebidasAlccol").value
  );

  const totalPessoas = homens + mulheres + criancas;

  const carne = parseFloat(
    (0.4 * homens + 0.32 * mulheres + 0.2 * criancas).toFixed(3)
  );
  const linguica = parseFloat(
    (0.4 * homens + 0.32 * mulheres + 0.2 * criancas).toFixed(3)
  );
  const paoDeAlho = parseFloat((2 * (homens + mulheres) + criancas).toFixed(3));
  const carvao = parseFloat((homens + mulheres + criancas).toFixed(3));
  const sal = parseFloat((0.04 * (homens + mulheres + criancas)).toFixed(3));
  const gelo = parseFloat(
    (5 * ((homens + mulheres + criancas) / 10)).toFixed(3)
  );
  const refrigerante = parseFloat(
    ((homens + mulheres + criancas) / 5).toFixed(3)
  );
  const adultos = parseFloat((homens + mulheres).toFixed(3));
  const cerveja = parseFloat((bebidasAlccol * 5).toFixed(3));

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
  
  <p> Churrasco para ${totalPessoas} pessoas: </p>
  <p> Carne: ${carne} KG</p>
  <p> Linguiça: ${linguica} garrafas de 1L</p>
  <p> Pão de alho: ${paoDeAlho} unidades</p>
  <p> Carvão: ${carvao} KG</p>
  <p> Sal Grosso: ${sal} KG</p>
  <p> Gelo: ${gelo} KG</p>
  <p> Refrigerante: ${refrigerante} garrafas de 2L</p>
  <p> Cerveja: ${cerveja} garrafas de 600ml</p>
  `;

  document.getElementById("passo2").style.display = "none";
  document.getElementById("passo3").style.display = "block";
}

function reset() {
  const limparLocalStorage = new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.clear();
      resolve();
    }, 500);
  });

  limparLocalStorage.then(() => {
    document.getElementById("passo3").style.display = "none";
    document.getElementById("passo1").style.display = "block";
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("promoCheckbox").checked = true;
  });
}

window.addEventListener("beforeunload", function () {
  localStorage.clear();
});
