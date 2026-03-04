//const MUKFIN_COORDINATES = { x: 28.0, y: -26.08562 }; // x=lng, y=lat
const ALLOWED_COORDINATES = {
  southAfrica: { x: 28.0, y: -26.08562 },
  zimbabwe: { x: 31.0926, y: -17.808 },
  botswana: { x: 25.92492, y: -24.67765 },
  zambia: { x: 28.3295, y: -15.4081 },
};
const ALLOWED_DISTANCE = 0.3; // km == 300 meters

function distance(coord, country) {
  const latDiff = (coord.y - ALLOWED_COORDINATES[country].y) * 111.32;
  const lngDiff =
    (coord.x - ALLOWED_COORDINATES[country].x) *
    111.32 *
    Math.cos((ALLOWED_COORDINATES[country].y * Math.PI) / 180);

  return Math.sqrt(latDiff ** 2 + lngDiff ** 2);
}

export function isInRadius(coord, country) {
  return distance(coord, country) <= ALLOWED_DISTANCE;
}
