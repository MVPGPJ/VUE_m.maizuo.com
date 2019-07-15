import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index'
import Films from '../pages/movies/Films'
import NowPlaying from '../pages/movies/NowPlaying'
import ComingSoon from '../pages/movies/ComingSoon'
import Cinemas from '../pages/cinemas/Cinemas'
import Tehui from '../pages/tiaozhuan/Tehui'
import User from '../pages/user/User'
import Search from '../pages/cinemas/search/Search'
import City from '../pages/city/City'
import Detail from '../pages/movieDetail/Detail'
import MovieTheatre from '../pages/cinemas/movieTheatre/MovieTheatre'
import Theatre from '../pages/cinemas/movieTheatre/Theatre'
import Login from '../pages/login/Login'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        redirect: '/films',
        component: Index,
        children: [
            {
                path: 'films',
                component: Films,
                redirect: '/films/nowPlaying',
                children: [
                    {
                        path: 'nowPlaying',
                        name: 'nowPlaying',
                        component: NowPlaying
                    },
                    {
                        path: 'comingSoon',
                        name: 'comingSoon',
                        component: ComingSoon
                    }
                ]
            },

            {
                path: 'cinemas',
                name: 'cimemas',
                component: Cinemas,
            },
            {
                path: 'tiaozhuan',
                name: 'tiaozhuan',
                component: Tehui,
            },
            {
                path: 'user',
                name: 'user',
                component: User,
            }
        ]
    },
    {
        path: '/cinemas/search',
        name: 'search',
        component: Search,
    },
    {
        path: '/cinemas/:id/film',
        name: 'movieTheatre',
        component: MovieTheatre,
    },
    {
        path: '/cinemas/:id/film/:ids',
        name: 'movieTheatre_film',
        component: Theatre,
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
    },
    {
        path: '/city',
        name: 'city',
        component: City,
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

export default new VueRouter({
    routes
})