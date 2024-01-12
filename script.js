let colorChaneBtn = document.getElementById('colorChaneBtn')


colorChaneBtn.addEventListener('click',function () {
    let randomeColor = getRandomColor()
    document.body.style.backgroundColor=randomeColor;
  })

  function getRandomColor(){
    let letters = '01233456789ABCDEF'
    let color='#'
    for (let i = 0; i < 6 ; i++) {
      color += letters[Math.floor(Math.random()*16)]  
    }
    console.log("color we have generated",color);
    return color ;
  }