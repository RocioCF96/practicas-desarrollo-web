function calcularIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0) {
        document.getElementById("resultado").textContent =
            "Introduce un peso y una altura válidos.";
        return;
    }

    altura = altura / 100;

    let imc = peso / (altura ** 2);
  document.getElementById("resultado").textContent =
    "Tu IMC es: " + imc.toFixed(2);
}
