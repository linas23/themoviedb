const api_key = process.env.TMDB_API_KEY;
const base_url = process.env.BASE_URI;
export const state = () => ({
    Genres: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"],
    //lists 
    movie: [],
    tv: [],
    series: [],
    mainImage: ''
});
export const getters = {
    genreList: state => state.Genres,
    movieList: state => state.movie,
    tvList: state => state.tv,
    seriesList: state => state.series,
    mainImage: state => state.mainImage
}

export const mutations = {
    setList(state, { type, results }) {
        state[type].push(...results);
    },
    setImage(state, url) {
        console.log(url)
        console.log('setting image')
        state.mainImage = url;
    }
}
export const actions = {

    async getList({ commit }, type) {
        // movie tv series
        let { results } = await this.$axios.$get(`${base_url}discover/${type}?api_key=${api_key}`);
        commit('setList', { type, results });
    },

    async getMovieDetails(context, id) {
        return await this.$axios.$get(`${base_url}movie/${id}?api_key=${api_key}`);
    },


    async getMovieImages(context, id) {
        return await this.$axios.$get(`${base_url}movie/${id}/images?api_key=${api_key}`);
    },

    async getCharacterList(context, id) {
        // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
        return await this.$axios.$get(`${base_url}movie/${id}/credits?api_key=${api_key}`);
    }




}