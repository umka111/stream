const movieForm = document.getElementById('movie-form');
const movieListAdmin = document.getElementById('movie-list-admin');

movieForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const poster = document.getElementById('poster').value;
    const description = document.getElementById('description').value;
    const rating = document.getElementById('rating').value;

    const newMovie = {
        title: title,
        poster: poster,
        description: description,
        rating: rating
    };

    movies.push(newMovie);
    displayAdminMovies();
});

function displayAdminMovies() {
    movieListAdmin.innerHTML = '';
    movies.forEach(movie => {
        const movieItem = document.createElement('li');
        movieItem.innerText = `${movie.title} (Rating: ${movie.rating})`;
        movieListAdmin.appendChild(movieItem);
    });
}

displayAdminMovies();
