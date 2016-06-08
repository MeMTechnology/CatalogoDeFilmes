var moviesDao = {
    
    movies: [],
    
    getList: function () {
      moviesDao.loadMovies();  
      return moviesDao.movies;
    },
    
    addMovies: function (movie) {
       moviesDao.movies.push(movie);
       moviesDao.saveMovies();
    },
    
    loadMovies: function () {
        var moviesJsonText = window.localStorage.getItem('list-movies');
        if(moviesJsonText){
            moviesDao.movies = JSON.parse(moviesJsonText);
        }
    },
    
    saveMovies: function (){
        var moviesJsonText = JSON.stringify(moviesDao.movies);
        window.localStorage.setItem('list-movies', moviesJsonText);
    }   
};