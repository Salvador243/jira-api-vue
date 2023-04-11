import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./views/LogInView.vue";
import Inicio from "./views/InicioView.vue";
import Folios from "./views/FoliosView.vue";
import Usuarios from "./views/UsuariosView.vue";
import Incidencia from "./views/IncidenciaView.vue";
import Funcionalidad from "./views/FuncionalidadView.vue";
import Configuracion from "./views/ConfiguracionView.vue";
import NoExiste from "./views/NoExisteView.vue";

const routes = [
    { path: "/", component: LogIn },
    { path: "/inicio", component: Inicio },
    { path: "/folios", component: Folios, meta: { requiresAuth: true } }, // Agrega la meta 'requiresAuth'
    { path: "/usuarios", component: Usuarios, meta: { requiresAuth: true } },
    { path: "/incidencia", component: Incidencia, meta: { requiresAuth: true } },
    { path: "/funcionalidad", component: Funcionalidad, meta: { requiresAuth: true } },
    { path: "/configuracion", component: Configuracion, meta: { requiresAuth: true } },
    { path: "/:pathMatch(.*)*", component: NoExiste },
];
const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.path === '/') { // Verifica si la ruta solicitada es '/'
        localStorage.removeItem('token') // Elimina el token del almacenamiento local
    }

    if (to.matched.some(record => record.meta.requiresAuth)) { // Verifica si la ruta requiere autenticación
        if (!localStorage.getItem('token')) { // Verifica si el usuario ha iniciado sesión
            next({ path: '/', query: { redirect: to.fullPath } }) // Redirige al usuario al login
        } else {
            next() // Continúa a la ruta solicitada
        }
    } else {
        next() // Continúa a la ruta solicitada
    }
})

export default router;