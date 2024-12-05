document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.close-arrow').style.display = 'block'; 
  });
  
  document.querySelector('.close-arrow').addEventListener('click', function() {
    document.querySelector('.nav').classList.remove('active');
    document.querySelector('.close-arrow').style.display = 'none'; 
  });



