<script setup>
import { ref } from 'vue';
import { validateAccount } from '../composables/validateAccount';

const { login } = validateAccount();

const formData = ref({
    correo_electronico: '',
    contrasena: ''
});
const iniciarSesion = () => {
    login(formData.value);
}
</script>

<template>
    <div class="centrado-absoluto">
        <div class="">
            <div class="card-form issue">
                <div class="row">
                    <div class="col-6">
                        <img class="img-fluid img-bordo" src="../../public/barco.jpg" alt="">
                    </div>
                    <div class="col-6 d-flex align-items-center">
                        <div class="row mt-4">
                            <div class="margen-15">
                                <p class="margen-0 fs-3 bold color-negro">Hola,</p>
                                <p class="margen-0 fs-3 bold texto-azul">Bienvenido</p>
                                <p class="margen-0 fs-7 color-negro">Ingresar al sistema de folios</p>
                            </div>
                            <form class="row" @submit.prevent="iniciarSesion">
                                <section class="input-centrado mt-2">
                                    <input id="email" class="max-50 form-control bage-negro txt-blanco issue bordes"
                                        type="email" placeholder="Usuario o correo electronico"
                                        v-model="formData.correo_electronico">
                                </section>
                                <section class="input-centrado mt-1">
                                    <input id="password" class="max-50 form-control bage-negro txt-blanco issue bordes"
                                        type="password" placeholder="Contraseña" v-model="formData.contrasena">
                                </section>
                                <section class="input-centrado">
                                    <div style="display: flex">
                                        <div style="margin-right: 0.4rem;">
                                            <span class="texto-azul" style="font-size: 0.55rem;">Recuerdame </span>
                                            <input class="form-check-input issue bordes" type="checkbox">
                                        </div>
                                        <div style="margin-left: 0.4rem;">
                                            <router-link class="texto-azul" to="/inicio"
                                                style="font-size: 0.55rem; text-decoration: none;">¿Olvidaste
                                                tu
                                                contraseña?</router-link>
                                        </div>
                                    </div>
                                </section>
                                <section class="input-centrado mt-2">
                                    <button class="btn max-50 azul bold" style="width: 100% !important;"
                                        type="submit">Iniciar sesion</button>
                                </section>
                                <section class="input-centrado">
                                    <p class="color-negro txt-der" style="font-size: 0.7rem;">¿No tiene una
                                        cuenta? <router-link to="/registro" class="texto-azul">Registrese</router-link></p>
                                </section>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


                               <!--                                                        <h3 class="color-negro">Iniciar sesion</h3>
                                                                    </div>
                                                                    <div class="margen-15">
                                                                        <p class="color-negro">Ingresar al sistema de folios</p>
                                                                    </div> -->
 