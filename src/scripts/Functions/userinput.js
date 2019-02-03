export const handleKeyDown = (evt, player) => {
  switch (evt.keyCode) {
    case 37:
      player.left(true);
      return;
    case 39:
      player.right(true);
      return;
    case 32:
      player.jump();
      return;
  }
}

export const handleKeyUp = (evt, player) => {
  switch (evt.keyCode) {
    case 37:
      player.left(false);
      return;
    case 39:
      player.right(false);
      return;
  }
}