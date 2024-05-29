export const fadeIn = (direction, delay) => {
  let hiddenY = 0;
  let hiddenX = 0;

  switch (direction) {
    case "up":
      hiddenY = 40;
      break;
    case "down":
      hiddenY = -40;
      break;
    case "left":
      hiddenX = 40;
      break;
    case "right":
      hiddenX = -40;
      break;
    default:
      break;
  }

  return {
    hidden: {
      y: hiddenY,
      x: hiddenX,
      opacity: 0, // Assuming hidden state should have 0 opacity
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.7,
        delay: delay,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
};
