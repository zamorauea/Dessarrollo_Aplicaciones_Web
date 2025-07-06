const imageURLInput = document.getElementById("imageURL");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

addImageBtn.addEventListener("click", () => {
  const url = imageURLInput.value.trim();
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Aire acondicionado Servicool";
    
    img.addEventListener("click", () => {
      if (selectedImage) {
        selectedImage.classList.remove("selected");
      }
      img.classList.add("selected");
      selectedImage = img;
    });

    gallery.appendChild(img);
    imageURLInput.value = "";
  } else {
    alert("Por favor, ingresa una URL válida.");
  }
});

deleteImageBtn.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  } else {
    alert("No hay imagen seleccionada para eliminar.");
  }
});

// También puedes manejar la tecla "Enter" para agregar
imageURLInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addImageBtn.click();
  }
});
