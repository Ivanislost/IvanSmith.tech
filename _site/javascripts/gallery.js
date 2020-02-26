function activateGallery(){
  let thumbnails = document.querySelectorAll(".thumbnails > div > img");
  thumbnails.forEach(function(thumbnail){
    addThumbListener(thumbnail);
  });
}

function addThumbListener(thumbnail){
  thumbnail.addEventListener("click", function(){
    console.log("running click");
    document.querySelector(".current").classList.remove("current");
    thumbnail.parentNode.classList.add("current");
    setCurrent(thumbnail);
  });
}

function setCurrent(thumbnail){
  document.querySelector(".photo img").src = thumbnail.src;
  document.querySelector(".phInfo .phTitle").innerHTML = thumbnail.dataset.title;
  document.querySelector(".phInfo .phDescription").innerHTML = thumbnail.dataset.description;
}
