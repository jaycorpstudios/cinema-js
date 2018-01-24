//TODO: UNIVA-GIT-003: Require data from ../data/theaters Hint: Take a look at Movies.js file.

const theatersData = [
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

module.exports = class Theaters{

  showTheatersInfo(){
    theatersData.forEach( theater => {

      //TODO: UNIVA-GIT-002: Modify to also display Address.
      console.log(`🏨 ${theater.name}`)
      //console.log(`🏨 ${theater.name} 📍 Dirección: ${theater.street}, ${theater.state}`)

    });
  }

  getVIPCount(){
    let vipCount = 0;
    theatersData.forEach(theater => {
      if(theater.hasVIP){
        vipCount++;
      }
    });
    return vipCount + 0;
  }

}
