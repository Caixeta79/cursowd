function upDate(previewPic) {
    // 1) Altera a imagem de fundo da div com id "image" para a URL da imagem
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // 2) Altera o texto da div com id "image" para o texto alternativo (alt) da imagem
    imageDiv.innerText = previewPic.alt;

    // Para depuração, você pode usar console.log
    console.log("Imagem alterada para:", previewPic.src);
    console.log("Texto alterado para:", previewPic.alt);
}

function unDo() {
    // 1) Atualiza a URL da imagem de fundo da div "image" para o valor original
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";

    // 2) Atualiza o texto da div "image" para o texto original
    imageDiv.innerText = "Hover over an image below to display here.";

    // Para depuração, você pode usar console.log
    console.log("Imagem de fundo e texto restaurados ao original.");
}
