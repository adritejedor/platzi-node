const { moviesMocks } = require('../utils/mocks/movies');

class MoviesServices {
    async getMovies() {
        const movies = await Promise.resolve(moviesMocks);
        return movies || [];
    }

    async getMovie() {
        const movie = await Promise.resolve(moviesMocks[0]);
        return movie || {};
    }

    async createMovie() {
        const createMovieId = await Promise.resolve(moviesMocks[0].id);
        return createMovieId || {};
    }

    async updateMovie() {
        const updateMovieId = await Promise.resolve(moviesMocks[0].id);
        return updateMovieId || {};
    }

    async updateMovieElement() {
        const updateMovieElementId = await Promise.resolve(moviesMocks[0].id);
        return updateMovieElementId || {};
    }

    async deleteMovie() {
        const deleteMovieId = await Promise.resolve(moviesMocks[0].id);
        return deleteMovieId || {};
    }
}

module.exports = MoviesServices;