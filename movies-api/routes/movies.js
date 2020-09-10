const express = require('express');
const MoviesServices = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesServices();

    router.get('/', async function (req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })

        } catch (err) {
            next(err);
        }
    })

    router.get('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const movie = await moviesService.getMovie({ movieId });

            res.status(200).json({
                data: movie,
                message: 'movie retrieved'
            })
        } catch (err) {
            next(err);
        }
    })

    router.post('/', async function (req, res, next) {
        const { body: movie } = req;
        try {
            const createdMovieId = await moviesService.createMovie({ movie });

            res.status(201).json({
                data: createdMovieId,
                message: 'movie created'
            })
        } catch (err) {
            next(err);
        }
    })

    router.put('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const updatedMovieId = await moviesService.updateMovie({ movieId, movie });

            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            })
        } catch (err) {
            next(err);
        }
    })

    router.patch('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const updatedMovieElementId = await moviesService.updateMovieElement({ movieId, movie });

            res.status(200).json({
                data: updatedMovieElementId,
                message: 'movie element updated'
            })
        } catch (err) {
            next(err);
        }
    })

    router.delete('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId });

            res.status(200).json({
                data: deletedMovieId,
                message: 'deleted movie'
            })
        } catch (err) {
            next(err);
        }
    })
}

module.exports = moviesApi;