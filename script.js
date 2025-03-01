const images = [
    "92649.jpg",
    "54683.jpg",
    "2148500434.jpg",
    "22038.jpg"
    
  ];
  
  let currentIndex = 0;
  const mainImage = document.getElementById("main-image");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  
  function updateImage() {
    mainImage.src = images[currentIndex];
  }
  
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  
  // Initialize the gallery with the first image
  updateImage();