document.addEventListener('DOMContentLoaded', function () {
    // Check if mobile view is enabled from localStorage
    if (localStorage.getItem('mobileView') === 'true') {
      document.body.classList.add('mobileView');
      document.getElementById('toggleView').textContent = 'Switch to Desktop View';
    }
  
    document.getElementById('toggleView').addEventListener('click', function () {
      document.body.classList.toggle('mobileView');
      localStorage.setItem('mobileView', document.body.classList.contains('mobileView'));
      this.textContent = this.textContent === 'Switch to Mobile View' ? 'Switch to Desktop View' : 'Switch to Mobile View';
    });
  });
