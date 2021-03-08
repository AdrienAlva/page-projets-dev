
// Open the Modal
function openModal(gallery_id) {
  if(gallery_id == 1) {
    document.getElementById("myModal_1").style.display = "block";    
  } else if (gallery_id == 2){
    document.getElementById("myModal_2").style.display = "block";
  } else {
    return;
  }
}//Eo openModal()

// Close the Modal
function closeModal(gallery_id) {
  if(gallery_id == 1) {
    document.getElementById("myModal_1").style.display = "none";    
  } else if (gallery_id == 2){
    document.getElementById("myModal_2").style.display = "none";
  } else {
    return;
  }
}//Eo closeModal()

let slideIndex = 1;
showSlides(slideIndex, 0);

// Next/previous controls
function plusSlides(n, gallery_id) {
  showSlides(slideIndex += n, gallery_id);
}

// Thumbnail image controls
function currentSlide(n, gallery_id) {
  showSlides(slideIndex = n, gallery_id);
}

function showSlides(n, gallery_id) {
  let i;
  let slides = document.getElementsByClassName("mySlides_" + gallery_id.toString());

  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (gallery_id > 0) {
      slides[slideIndex-1].style.display = "block";
  }
  
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}//Eo showSlides()