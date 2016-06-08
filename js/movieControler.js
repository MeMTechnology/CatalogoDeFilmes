var movieControler = {
    
    init: function (params) {
        movieControler.setForm();
    },
    
    setForm: function () {
        var form = document.getElementById('form-movie');
        form.addEventListener('submit', movieControler.eventSubmitHandler);
    },
    
    eventSubmitHandler: function (event) {
        event.preventDefault();
        var inputMovie = JSON.stringify({
            title : $('#title').val(),
            genre : $('#genre').val(),
            year : $('#year').val(),
            language : $('#language').val(),
            sinopse : $('sinopse').val(),
        });
        console.log(inputMovie.value);
        movieControler.addMovie(inputMovie);
    },
    
    addMovie: function (movie) {
        moviesDao.addMovies(movie);
    }
};

//initialization
movieControler.init();