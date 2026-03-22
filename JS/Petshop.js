// ==============================
// FUNÇÃO PRINCIPAL DO SISTEMA
// ==============================
// Essa função é chamada quando o usuário clica no botão "Cadastrar"
function cadastrarPet() {

  // ==============================
  // 1) PEGAR DADOS DIGITADOS
  // ==============================

  let nomePet = document.getElementById("nome").value;
  let especiePet = document.getElementById("especie").value;


  // ==============================
  // 2) DESCOBRIR O SEXO DO PET
  // ==============================

  let opcaoSexo = document.querySelector('input[name="sexo"]:checked');
  let sexoPet = "Não informado";

  if (opcaoSexo) {
    sexoPet = opcaoSexo.value;
  }


  // ==============================
  // 3) PEGAR OS SERVIÇOS MARCADOS
  // ==============================

  let servicosSelecionados = document.querySelectorAll(".serv:checked");
  let listaServicos = "";

  for (let cont = 0; cont < servicosSelecionados.length; cont++) {
    let nomeServico = servicosSelecionados[cont].value;
    listaServicos += nomeServico + " ";
  }


  // ==============================
  // 4) SALVAR OS DADOS
  // ==============================

  localStorage.setItem("nomePet", nomePet);
  localStorage.setItem("especiePet", especiePet);
  localStorage.setItem("sexoPet", sexoPet);
  localStorage.setItem("listaServicos", listaServicos);


  // ==============================
  // 5) IR PARA O COMPROVANTE
  // ==============================

  window.location.href = "comprovante.html";
}