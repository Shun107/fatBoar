import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _07e27764 = () => interopDefault(import('..\\pages\\Contact\\index.vue' /* webpackChunkName: "pages_Contact_index" */))
const _3acc9c1a = () => interopDefault(import('..\\pages\\Gains\\index.vue' /* webpackChunkName: "pages_Gains_index" */))
const _178ad8b6 = () => interopDefault(import('..\\pages\\Gift\\index.vue' /* webpackChunkName: "pages_Gift_index" */))
const _89cbd1ee = () => interopDefault(import('..\\pages\\Historique\\index.vue' /* webpackChunkName: "pages_Historique_index" */))
const _1af99138 = () => interopDefault(import('..\\pages\\Homepage\\index.vue' /* webpackChunkName: "pages_Homepage_index" */))
const _0c3a5b36 = () => interopDefault(import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages_Login_index" */))
const _27020927 = () => interopDefault(import('..\\pages\\Menu\\index.vue' /* webpackChunkName: "pages_Menu_index" */))
const _505ebfd0 = () => interopDefault(import('..\\pages\\Recompenses\\index.vue' /* webpackChunkName: "pages_Recompenses_index" */))
const _99936ef4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Contact",
    component: _07e27764,
    name: "Contact"
  }, {
    path: "/Gains",
    component: _3acc9c1a,
    name: "Gains"
  }, {
    path: "/Gift",
    component: _178ad8b6,
    name: "Gift"
  }, {
    path: "/Historique",
    component: _89cbd1ee,
    name: "Historique"
  }, {
    path: "/Homepage",
    component: _1af99138,
    name: "Homepage"
  }, {
    path: "/Login",
    component: _0c3a5b36,
    name: "Login"
  }, {
    path: "/Menu",
    component: _27020927,
    name: "Menu"
  }, {
    path: "/Recompenses",
    component: _505ebfd0,
    name: "Recompenses"
  }, {
    path: "/",
    component: _99936ef4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
