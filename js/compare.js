// compare.js

// Array para armazenar os carros selecionados para comparação (máximo 2)
let carArr = [];

class Car {
    // 1. O construtor agora recebe todos os atributos do carro e os armazena no objeto
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

// Função auxiliar que procura um carro no array e retorna sua posição (índice)
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome === carClass.nome)
            return i;
    }
    return -1; // Retorna -1 se não encontrar
}

// 2. Lógica para adicionar/remover carros da comparação
function SetCarToCompare(element, carClass) {
    if(!(carClass instanceof Car)) {
        throw "You need set a Car Class";
    }
    
    // Se o checkbox foi MARCADO
    if(element.checked){
        // Verifica se já não existem 2 carros selecionados
        if(carArr.length >= 2){
            alert("Você só pode selecionar 2 carros para comparar.");
            element.checked = false; // Desmarca o checkbox que o usuário acabou de clicar
            return;
        }
        // Adiciona o carro ao array de comparação
        carArr.push(carClass);
    } 
    // Se o checkbox foi DESMARCADO
    else {
        // Encontra a posição do carro no array
        const carPosition = GetCarArrPosition(carArr, carClass);
        if(carPosition > -1) {
            // Remove o carro do array usando a posição encontrada
            carArr.splice(carPosition, 1);
        }
    } 
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    // Chama a função para preencher a tabela ANTES de exibi-la
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

// 3. Lógica para preencher a tabela com os dados dos carros
function UpdateCompareTable() {
    // Pega o primeiro e o segundo carro do array
    const car1 = carArr[0];
    const car2 = carArr[1];

    // Formata o preço para o padrão brasileiro (R$)
    const formatPrice = (price) => `R$ ${price.toLocaleString('pt-BR')}`;

    // Preenche a coluna do primeiro carro (índice 0)
    document.getElementById("compare_image_0").innerHTML = `<img src="${car1.image}" class="photocar">`;
    document.getElementById("compare_modelo_0").innerText = car1.nome;
    document.getElementById("compare_alturacacamba_0").innerText = car1.alturaCacamba;
    document.getElementById("compare_alturaveiculo_0").innerText = car1.alturaVeiculo;
    document.getElementById("compare_alturasolo_0").innerText = car1.alturaSolo;
    document.getElementById("compare_capacidadecarga_0").innerText = car1.capacidadeCarga;
    document.getElementById("compare_motor_0").innerText = car1.motor;
    document.getElementById("compare_potencia_0").innerText = car1.potencia;
    document.getElementById("compare_volumecacamba_0").innerText = car1.volumeCacamba;
    document.getElementById("compare_roda_0").innerText = car1.roda;
    document.getElementById("compare_preco_0").innerText = formatPrice(car1.preco);

    // Preenche a coluna do segundo carro (índice 1)
    document.getElementById("compare_image_1").innerHTML = `<img src="${car2.image}" class="photocar">`;
    document.getElementById("compare_modelo_1").innerText = car2.nome;
    document.getElementById("compare_alturacacamba_1").innerText = car2.alturaCacamba;
    document.getElementById("compare_alturaveiculo_1").innerText = car2.alturaVeiculo;
    document.getElementById("compare_alturasolo_1").innerText = car2.alturaSolo;
    document.getElementById("compare_capacidadecarga_1").innerText = car2.capacidadeCarga;
    document.getElementById("compare_motor_1").innerText = car2.motor;
    document.getElementById("compare_potencia_1").innerText = car2.potencia;
    document.getElementById("compare_volumecacamba_1").innerText = car2.volumeCacamba;
    document.getElementById("compare_roda_1").innerText = car2.roda;
    document.getElementById("compare_preco_1").innerText = formatPrice(car2.preco);
}