const Theaters = new (require('./classes/Theaters.js'))();

//TODO: UNIVA-GIT-003: Increase value to be at least 5;
const VIP_HIGH_AVAILABILITY = 2;

class CinemasApp{

  initShowTimes(){
    console.log(`¡Bienvenidos a ShowTime App!`);


  }

}

const app = new CinemasApp();
app.initShowTimes();
