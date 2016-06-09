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
    },
    
    getMoviesById: function(search) {
        return moviesDao.movies.filter(function(a) { 
            return a.title.includes(search) || a.year == search || a.language == search || a.genre_movie == search
        });
    },
    
    getActionSearch: function() {
        $('#search').on('click', function() {
           $('#tbMovies tbody').html('');
           var buscado = $("[name=q]").val();
            var ls = window.localStorage.getItem('list-movies');
            moviesDao.getMoviesById(buscado).forEach(function(resultado) {
                if(moviesDao.getMoviesById(buscado).length != 0) {
                    $('#tbMovies tbody').append('<tr>');
                    $('#tbMovies tbody tr:last').append('<td>'+resultado.title+'</td>');
                    $('#tbMovies tbody tr:last').append('<td>'+resultado.genre+'</td>');
                    $('#tbMovies tbody tr:last').append('<td>'+resultado.language+'</td>');
                    $('#tbMovies tbody tr:last').append('<td>'+resultado.year+'</td>');
                    $('#tbMovies tbody tr:last').append('<td>'+resultado.sinopse+'</td>');
                    $('#tbMovies tbody').append('</tr>');
                }
            });
            $("[name=q]").val('');
        });
    },
    
    listResults: function(name){
        moviesDao.loadMovies();
        var list = moviesDao.getMoviesById(name);
        
    },
    
    createTrsElements: function(e){
        console.log(e.title);
    }
};

moviesDao.loadMovies();
moviesDao.getActionSearch();