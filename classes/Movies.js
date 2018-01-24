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

  //TODO: UNIVA-GIT-008: Implement a sort function base on movie.stars, Google: Array.sort documentation if you're not familiar with JS Syntax.
  orderByStars(movies){
    return movies;
  }


}
