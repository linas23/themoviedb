const api_key = process.env.TMDB_API_KEY;
const base_url = process.env.BASE_URI;
export const state = () => ({
    Genres: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"],
    //lists 
    movie: [],
    tv: [],
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
        state.mainImage = url;
    },
    clearList(state, type) {
        state[type] = [];
    }
}
export const actions = {

    async getList({ commit }, type) {
        commit('clearList', type);
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
        return await this.$axios.$get(`${base_url}movie/${id}/credits?api_key=${api_key}`);
    },

    async getSimilarItems(context, id) {
        return await this.$axios.$get(`${base_url}movie/${id}/similar?api_key=${api_key}`);
    },

    async getTrending(context, type) {
        const { results } = await this.$axios.$get(`${base_url}trending/${type}/week?api_key=${api_key}`);
        return results;
    },

    async getTvDetail(context, id) {
        // https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
        console.log(id)
        return await this.$axios.$get(`${base_url}tv/${id}?api_key=${api_key}`)
    }




}