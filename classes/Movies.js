const moviesData = require('../data/movies.js');

module.exports = class Movies{


  displayMovies(){

    let moviesOrderedByStars = moviesData.slice(0);
    moviesOrderedByStars = this.orderByStars(moviesOrderedByStars);
 
    moviesOrderedByStars.forEach( movie => {
      console.log(`${movie.title}, Rank de la crítica: ${movie.stars}`);
    });
  }

  displayDirectors(){
    moviesData.forEach( movie => {
      console.log(`${movie.director}`);
    });
  }

  orderByStars(movies){
 let orderR = movies.sort(function(a,b){
   return a.stars < b.stars;
 });
    return orderR;
  }


}
