//se os nomes de email e email tiverem preenchidos pode esviar os dados
document.getElementById("botao").addEventListener("click", clicar)

function clicar(){
  if(document.getElementById("nome").value != "" && 
  document.getElementById("email").value != "" ||
  document.getElementById("telefone").value != ""){
  alert("Sua Mensagem enviada!")
  //senão pedimos o usuario para preencher os campos de nome e email
  }else{
    alert("Ops, preencha seu nome + email ou telefone!")
  }
}


