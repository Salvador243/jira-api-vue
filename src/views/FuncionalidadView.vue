<script setup>
import SideBar from '../components/SideBar.vue';
import UsuariosSelect from '../components/UsuariosSelect.vue';
import { ref, computed } from "vue";
import $ from "jquery";
import { issuePost } from '../composables/createIssue';
import { useToggleMenu } from '../store/ToggleMenu';

const useToggleMenuStore = useToggleMenu();
const { createFeature } = issuePost();
const imageInput = ref(null)
const imageInputError = ref(null)
const btnAarchivos = ref(null)
const formData = ref({
    descripcion: '',
    modulo: '',
    seccion: '',
    area: '',
    file: '',
});

function validateImageInput() {
    const files = imageInput.value.files
    if (files.length > 0) {
        const allowedExtensions = /(\.txt)$/i
        const fileExtension = files[0].name.split('.').pop()
        if (!allowedExtensions.exec(files[0].name)) {
            imageInputError.value = 'Solo se permiten archivos de texto(TXT).'
            imageInput.value = null
            btnAarchivos.value.disabled = true
        } else {
            imageInputError.value = null
            btnAarchivos.value.disabled = false
            formData.value.file = imageInput.value.files
        }
    }
}


const submitForm = () => {
    formData.value.accountId = useToggleMenuStore.accountId
    createFeature(formData.value); // Aquí se puede hacer el envío del formulario
};

</script>

<template>
    <div class="app">
        <SideBar />
        <div id="contenedor" :class="`${useToggleMenuStore.expandido ? 'expandido' : 'colapsado'}`">
            <div class="cont">
                <div class="row">
                    <div class="col-md-4 mt-3">
                        <div class="card issue">
                            <UsuariosSelect />
                        </div>
                    </div>
                    <div class="col-md-8 mt-3   ">
                        <form id="form-adjuntos" ref="adjuntosForm" @submit.prevent="submitForm">
                            <div class="card issue">
                                <div class="card-header">
                                    <div class="row">
                                        <span><strong>Datos de la nueva funcionalidad</strong></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input class="form-control issue bordes" type="text" placeholder="Módulo"
                                                v-model="formData.modulo">
                                        </div>
                                        <div class="col-md-6">
                                            <input class="form-control issue bordes" type="text" placeholder="Sección"
                                                v-model="formData.seccion">
                                        </div>
                                        <div class="col-md-6 mt-4">
                                            <input class="form-control issue bordes" type="text"
                                                placeholder="Área/Herramienta" v-model="formData.area">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-3 issue">
                                <div class="card-header">
                                    <div class="row">
                                        <span><strong>Adjuntos</strong>Archivos adjuntos TXT</span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control issue bordes" placeholder="Descripción"
                                                id="descripcion" style="height: 100px"
                                                v-model="formData.descripcion"></textarea>
                                            <label for="floatingTextarea2">Descripción</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <strong>Adjuntar archivos</strong>
                                        <input class="form-control issue bordes" type="file" ref="imageInput"
                                            @change="validateImageInput" multiple>
                                        <span v-if="imageInputError" style="color: red;">{{ imageInputError }}</span>
                                    </div>
                                    <div class="card-footer">
                                        <button class="btn btn-dark" ref="btnAarchivos" type="submit">Guardar
                                            datos</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>