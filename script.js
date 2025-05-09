document.getElementById('start').addEventListener('click', function () {
  navigator.mediaDevices.getUserMedia({
    video: { facingMode: { exact: "environment" } },
    audio: false
  }).then(stream => {
    const video = document.querySelector('video');
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
    document.documentElement.classList.add('streaming');
    document.getElementById('start').style.display = 'none';
    document.querySelector('.filter-buttons').classList.remove('hidden');
  }).catch(err => {
    alert("Erreur d'accès à la caméra : " + err);
  });

  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', e => {
      document.documentElement.style.setProperty('--hue', e.target.dataset.hue);
    });
  });

  document.querySelector('aside').addEventListener('touchstart', e => e.preventDefault());
});
