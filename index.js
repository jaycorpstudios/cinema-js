const Theaters = new (require('./classes/Theaters.js'))();
const Movies = new (require('./classes/Movies.js'))();
const CONFIG = {
  appName: 'ShowTime NodeApp'
}


//TODO: UNIVA-GIT-003: Increase value to be at least 5;
const VIP_HIGH_AVAILABILITY = 5;


class CinemasApp{

  initShowTimes(){
    console.log(`¡Bienvenidos a ${CONFIG.appName}!`);
    console.log(`Los cines disponibles en la región son: \n`);
    Theaters.showTheatersInfo();

    console.log(`De los cuales hay ${Theaters.getVIPCount()} con instalaciones VIP : \n`);

    if(Theaters.getVIPCount() >= VIP_HIGH_AVAILABILITY){
        console.log(`Parece que hay muchas opciones de cines VIP! 🤓`);
    }

    console.log(`Las películas recomendadas son: \n`);
    Movies.displayMovies();



    console.log(`Los directores mas mencionados son: \n`);
    Movies.displayDirectors();

  }

}

const app = new CinemasApp();
app.initShowTimes();
