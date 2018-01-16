//TODO: UNIVA-GIT-004: Add at least 2 more VIP locations.

const theaters = [
  {
    name: 'Cinépolis Ciudadela',
    id: 1,
    brand: 'Cinepolis',
    location: { lat: 20.649839, long: -103.419584 },
    street: 'Calle Labna 1437',
    state: 'Jalisco',
    hasVIP: false
  },
  {
    name: 'Cinépolis Galerías',
    id: 2,
    brand: 'Cinepolis',
    location: { lat: 20.678173, long: -103.433473 },
    street: 'Av. Rafael Sanzio 150',
    state: 'Jalisco',
    hasVIP: true
  },
  {
    name: 'Cinépolis Centro Magno',
    id: 3,
    brand: 'Cinepolis',
    location: { lat: 20.674011, long: -103.381058 },
    street: 'Av. Vallarta 2425',
    state: 'Jalisco',
    hasVIP: false
  },
  {
    name: 'Cinemex Punto Sao Paulo',
    id: 4,
    brand: 'Cinemex',
    location: { lat: 20.702281, long: -103.376779 },
    street: 'Valparaiso 2367',
    state: 'Jalisco',
    hasVIP: true
  }
];

module.exports = theaters;
