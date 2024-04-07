import Effect from "./effect.js";
// import consoleText from "./console.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//single color
const singleColor = "#0aff0a";

// default color
let defaultColor = singleColor;

// creating effect object which initializes symbols array with Symbol objects
const effect = new Effect(canvas.width, canvas.height);

let lastTime = 0;
const fps = 50;
const nextframe = 1000 / fps; //for fps = 50, nextFrame = 20
let timer = 0;

function animate(timeStamp) {
  // checking paint time difference
  const deltaTime = timeStamp - lastTime;
  //updating lastTime = current elapsed time to  paint the screen
  lastTime = timeStamp;
  // if time exceeds nextframe value then paint
  // and reset timer to zero else add delta time
  if (timer > nextframe) {
    // drawing transparent rectangle over text to hide previous text
    ctx.fillStyle = "rgba(0,0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // text color
    ctx.fillStyle = defaultColor;
    //drawing text column
    effect.symbols.forEach((symbol) => {
      symbol.draw(ctx);
      symbol.update();
    });
    timer = 0;
  } else {
    timer += deltaTime;
  }

  requestAnimationFrame(animate);
}
animate(0);

// resize event to handle columns adjustment on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);
  gradientColor = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradientColor.addColorStop(0, "red");
  gradientColor.addColorStop(0.2, "yellow");
  gradientColor.addColorStop(0.4, "green");
  gradientColor.addColorStop(0.6, "cyan");
  gradientColor.addColorStop(0.8, "blue");
  gradientColor.addColorStop(0, "magenta");
});

//double mouse click event
window.addEventListener("dblclick", () => {
  defaultColor === singleColor
    ? (defaultColor = gradientColor)
    : (defaultColor = singleColor);
});

//double touch event on touch screen devices
var lastTouchEnd = 0;
window.addEventListener("touchend", () => {
  var now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    // Code to be executed when a double-tap is detected
    defaultColor === singleColor
      ? (defaultColor = gradientColor)
      : (defaultColor = singleColor);
  }
  lastTouchEnd = now;
});

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
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
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#ffffff",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
