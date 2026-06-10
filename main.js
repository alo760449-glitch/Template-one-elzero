// make scrool top
let btn = document.getElementById('btn');

window.onscroll = function () {
  if (scrollY >= 150) {
    btn.style.opacity = '1'
    btn.style.display = 'block'
  } else {
    btn.style.opacity = '0'
    btn.style.display = 'none'

  }
  
}
btn.onclick = function (){
  scroll({
    top: 0, 
    behavior : 'smooth'
  })
}

/* make nave */
let icons = document.querySelector('.links');
let hul = document.getElementById('hUl');
let spanTwo = document.getElementById ('spanTwo')
icons.onclick = function () {
  hul.style.display = 'block';
  spanTwo.style.width = '100%';
  
}
document.addEventListener('click' , function (e) {
  if (!hul.contains(e.target)&& !icons.contains(e.target)) {
    hul.style.display = 'none';
    spanTwo.style.width = ''
  }
})


