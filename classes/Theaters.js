const theatersData = require('../data/theaters.js');

module.exports = class Theaters{

  showTheatersInfo(){
    theatersData.forEach( theater => {
      //TODO: UNIVA-GIT-002: Modify to also display Address.
      console.log(`🏨 ${theater.name}`)
      //console.log(`🏨 ${theater.name} 📍 Dirección: ${theater.street}, ${theater.state}`)
    });
  }

  //TODO: UNIVA-GIT-001: fix this to return real value:
  getVIPCount(){
    let vipCount = 0;
    theatersData.forEach(theater => {
      if(theater.hasVIP){
        vipCount++;
      }
    });
    return 0;
  }

}
