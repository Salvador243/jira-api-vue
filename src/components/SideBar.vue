<template>
    <aside :class="`${useToggleMenuStore.expandido && 'expandido'}`">
        <div class="logo">
            <img src="../assets/vue.svg" alt="Logo vue">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <img class="img-usuario"
            src="https://cdn-images.motor.es/image/m/694w.webp/fotos-noticias/2022/10/f1-hoy-gp-japon-suzuka-202290262-1665213879_6.jpg"
            alt="Foto del usuario">

        <h4 class="nombre-usario">Administrador Folios</h4>
        <div class="menu">
            <router-link to="/inicio" class="button">
                <span class="material-icons">home</span>
                <span class="texto-menu">Inicio</span>
            </router-link>
            <router-link to="/folios" class="button">
                <span class="material-icons">inventory</span>
                <span class="texto-menu">Folios</span>
            </router-link>
            <router-link to="/usuarios" class="button">
                <span class="material-icons">people</span>
                <span class="texto-menu">Usuarios desarrolladores</span>
            </router-link>
            <router-link to="/email" class="button">
                <span class="material-icons">email</span>
                <span class="texto-menu">E-mail</span>
            </router-link>
            <router-link to="/configuracion" class="button">
                <span class="material-icons">settings</span>
                <span class="texto-menu">Configuración</span>
            </router-link>
        </div>

        <div class="fondo"></div>

        <div class="menu">
            <router-link to="/" class="button">
                <span class="material-icons">logout</span>
                <span class="texto-menu">Cerrar sesion</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { useToggleMenu } from '../store/ToggleMenu';
const useToggleMenuStore = useToggleMenu();

const toggleMenu = () => {
    useToggleMenuStore.expandido = !useToggleMenuStore.expandido;
    // localStorage.setItem('expandido', expandido.value);
}

</script>