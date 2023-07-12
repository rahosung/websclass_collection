document.addEventListener('DOMContentLoaded', function() {
  const iframe = document.getElementById('website-iframe');
  const buttons = document.querySelectorAll('.website-button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      iframe.src = url;
      adjustIframeSize();
    });
  });

  function adjustIframeSize() {
    iframe.style.width = '1700px';
    iframe.style.height = '800px';
  }
});
