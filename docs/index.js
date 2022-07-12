// Declaracion de variables
const progressBar = document.querySelector('#progress_bar');
const progressValue = document.querySelector('#progress_value');


// Progreso dinamico de "progress_bar"
window.onscroll = () => {
  const scroll = document.documentElement.scrollTop;
  const height =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const divide = scroll / height;

  progressBar.style.width = (divide * 100)+ '%';
  progressValue.textContent = parseInt(divide * 100)+ '%';
};

// Configuracion de la libreria de particulas
particlesJS("particles", {
    "particles": {
      "number": {
        "value": 140
      },
      "shape": {
        "type": "circle"
      },
      "size": {
        "value": 4,
        "random": true
      },
      "line_linked": {
        "enable": true
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "bottom",
        "straight": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "push": {
          "particles_nb": 4
        },
        "repulse":{
          "distance":100,
          "duration":1
        }
      }
    }
  });