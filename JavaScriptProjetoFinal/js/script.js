function upDate(previewPic) {
  console.log("Evento disparado!");
  console.log("Source:", previewPic.src);
  console.log("Texto alternativo:", previewPic.alt);

  const imageDiv = document.getElementById("image-display");
  imageDiv.innerHTML = `<img src="${previewPic.src}" alt="${previewPic.alt}" style="max-width: 100%; max-height: 100%;">`;
}

function undo() {
  const imageDiv = document.getElementById("image-display");
  imageDiv.textContent = "Passe o mouse sobre uma imagem abaixo para exibi-la aqui.";
}

function handleFocus(previewPic) {
  console.log("Foco disparado!");
  upDate(previewPic);
}

function handleBlur() {
  console.log("Perda de foco disparada!");
  undo();
}

function setTabFocus() {
  console.log("Página carregada, configurando tabindex para imagens.");
  const images = document.querySelectorAll(".preview");
  images.forEach((img, index) => {
    img.setAttribute("tabindex", "0");
    console.log(`Tabindex adicionado à imagem ${index + 1}`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM totalmente carregado e analisado.");
  setTabFocus();

  // Adiciona os eventos às imagens
  document.querySelectorAll(".preview").forEach((img) => {
    img.addEventListener("mouseover", () => upDate(img));
    img.addEventListener("mouseout", undo);
    img.addEventListener("focus", () => handleFocus(img));
    img.addEventListener("blur", handleBlur);
  });
});
