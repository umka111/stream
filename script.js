const movies = [
    {
        title: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/dK2d72GvCzF2yUJ6b9FYw02D14d.jpg",
        description: "Batman faces off against the Joker, a criminal mastermind who seeks to create chaos in Gotham.",
        rating: "9.0"
    },
    {
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        rating: "8.8"
    }
];

function displayMovies() {
    const movieList = document.querySelector('.movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        
        movieItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieItem.addEventListener('click', () => openModal(movie));
        movieList.appendChild(movieItem);
    });
}

function openModal(movie) {
    const modal = document.getElementById('movie-modal');
    document.getElementById('movie-title').innerText = movie.title;
    document.getElementById('movie-poster').src = movie.poster;
    document.getElementById('movie-description').innerText = movie.description;
    document.getElementById('movie-rating').innerText = movie.rating;

    modal.style.display = 'flex';
}

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('movie-modal').style.display = 'none';
});

displayMovies();
