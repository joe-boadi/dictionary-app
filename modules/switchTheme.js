  // Handle background mode
  const moon = document.getElementById('moon')
  // const moonIcon = document.getElementsById('moon-icon')
  const toggleBackground = document.getElementById('checkbox') 
  
  toggleBackground.addEventListener('click', ()=>{
      let background = document.body;
      background.classList.toggle('dark-mode')
      moon.style.color = '#A445ED'
      moon.style.f = '#A445ED'
  })