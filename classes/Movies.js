const moviesData = require('../data/movies.js');

module.exports = class Movies{


  displayMovies(){
    //TODO: UNIVA-GIT-007: Order by stars first.
    let moviesOrderedByStars = moviesData.slice(0);
    moviesOrderedByStars = this.orderByStars(moviesOrderedByStars);
    moviesOrderedByStars.forEach( movie => {
      console.log(`${movie.title}, Rank de la crítica: ${movie.stars}`);
    });
  }

  //TODO: UNIVA-GIT-009: Implement a function similar to displayMovies.
  displayDirectors(){
    console.log();
  }

  orderByStars(movies){
 let orderR = movies.sort(function(a,b){
   return a.stars < b.stars;
 });
    return orderR;
  }


}
