export default {
  particles: {
    number: {
      value: 4,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000"
    },
    shape: {
      type: "image",
      image: {
        src: "./cheese.png",
        width: 230,
        height: 198
      }
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 2,
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      resize: true
    }
  },
  retina_detect: true
};
