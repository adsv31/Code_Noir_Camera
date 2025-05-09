document.querySelector('#start').addEventListener('click', function () {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: { exact: "environment" }
    }
  }).then(stream => {
    const video = document.querySelector('video');
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
    document.documentElement.classList.add('streaming');
  }).catch(err => {
    console.error("Erreur d'accès caméra :", err);
    alert("La caméra arrière est inaccessible.");
  });
});

document.querySelector('aside').addEventListener('touchstart', e => {
  e.preventDefault();
});

document.querySelectorAll('input[type=radio]').forEach(option => {
  option.addEventListener('click', e => {
    document.documentElement.style.setProperty('--hue', e.target.dataset.hue);
  });
});
