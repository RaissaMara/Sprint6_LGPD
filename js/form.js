
//class contato

class Contato {
 constructor(nome,sobrenome, email, cpf, telefone, contato){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
}
}

function Post(form) {

  let data = new Contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);

            console.log(data)

            form.reset();
  return(false)
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

function desbloquear(check){
    const btn_enviar = document.getElementById("btn_enviar")

    if(check.checked){
        btn_enviar.disabled = false;
        btn_enviar.classList.remove("off");
    }else{
        btn_enviar.disabled = true;
        btn_enviar.classList.toggle("off");
    }
}