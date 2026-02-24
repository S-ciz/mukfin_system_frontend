const MUKFIN_COORDINATES = { x: 28.0, y: -26.08562 }; // x=lng, y=lat
const ALLOWED_DISTANCE = 0.3; // km

function distance(coord) {
  const latDiff = (coord.y - MUKFIN_COORDINATES.y) * 111.32;

  const lngDiff =
    (coord.x - MUKFIN_COORDINATES.x) *
    111.32 *
    Math.cos((MUKFIN_COORDINATES.y * Math.PI) / 180);

  return Math.sqrt(latDiff ** 2 + lngDiff ** 2);
}

export function isInRadius(coord) {
  return distance(coord) <= ALLOWED_DISTANCE;
}