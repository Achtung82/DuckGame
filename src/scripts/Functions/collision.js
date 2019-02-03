export const edgeCollision = (newXValue, newYValue, container, width, height) => {
  const heightRadie = (container.height / 2) + 1;
  const widthRadie = (container.width / 2) + 1;
  return newYValue < heightRadie ||
    newXValue < widthRadie ||
    newYValue > height - heightRadie ||
    newXValue > width - widthRadie;
}

export const unitCollision = (x, y, container, otherUnits) => {
  const rect1 = { x, y, height: container.height, width: container.width };
  for (let i = 0; i < otherUnits.length; i++) {
    const otherUnit = otherUnits[i];
    const rect2 = otherUnit._container.getBounds();
    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.height + rect1.y > rect2.y) {
      const currentBounds = container.getBounds();
      return {
        dx: Math.abs(currentBounds.x - rect2.x) - rect1.height
        , dy: Math.abs(currentBounds.y - rect2.y) - rect1.width
      }
    }
  }
  return false;
}

export const hitCircle = (px, py, r, c) => {
  const cb = c._container.getBounds();
  const r2 = (cb.width / 2);
  const a = r + r2;
  const x = px - c._container.x;
  const y = py - c._container.y;
  return a > Math.sqrt((x * x) + (y * y));
}

export const circleCollision = (px, py, r, circles) => {
  for (let i = 0; i < circles.length; i++) {
    if (hitCircle(px, py, r, circles[i])) {
      return true;
    }
  }
  return false;
}