const Theaters = new (require('./classes/Theaters.js'))();
const Movies = new (require('./classes/Movies.js'))();


//TODO: UNIVA-GIT-003: Increase value to be at least 5;
const VIP_HIGH_AVAILABILITY = 2;


class CinemasApp{

  initShowTimes(){
    console.log(`¡Bienvenidos a ShowTime App!`);
    console.log(`Los cines disponibles en la región son: \n`);
    Theaters.showTheatersInfo();

    console.log(`De los cuales hay ${Theaters.getVIPCount()} con instalaciones VIP : \n`);

    if(Theaters.getVIPCount() >= VIP_HIGH_AVAILABILITY){
        console.log(`Parece que hay muchas opciones de cines VIP! 🤓`);
    }

    console.log(`Las películas recomendadas son: \n`);
    Movies.displayMovies();


    //TODO: UNIVA-GIT-009: Uncomment the followed two lines:
    //console.log(`Los directores mas mencionados son: \n`);
    //Movies.displayDirectors();

  }

}

const app = new CinemasApp();
app.initShowTimes();
