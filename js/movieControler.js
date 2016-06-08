var movieControler = {
    
    init: function (params) {
        movieControler.setForm();
        moviesDao.loadMovies();
    },
    
    setForm: function () {
        var form = document.getElementById('form-movie');
        form.addEventListener('submit', movieControler.eventSubmitHandler);
    },
    
    eventSubmitHandler: function (event) {
        event.preventDefault();
         
        var inputMovie = {
            title : $('#title').val(),
            genre : $('#genre_movie').val(),
            year : $('#year').val(),
            language : $('#language').val(),
            sinopse : $('#sinopse').val()
        };
        movieControler.addMovie(inputMovie);
    },
    
    addMovie: function (movie) {
        moviesDao.addMovies(movie);
    }
};

//initialization
movieControler.init();