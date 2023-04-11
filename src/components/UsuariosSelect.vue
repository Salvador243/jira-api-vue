<script setup>
import { useGetData } from '../composables/getUsuarios';
import { reactive, onMounted } from 'vue';
import $ from "jquery";
import { useToggleMenu } from '../store/ToggleMenu';

const useToggleMenuStore = useToggleMenu();

const { getUser, loading, getUserIndividually } = useGetData();


getUser('https://jira-api-spring.azurewebsites.net/usuarios');

const state = reactive({
    idUsuario: ''
})

const onSelectChange = (event) => {
    state.idUsuario = event.target.value
    useToggleMenuStore.accountId = state.idUsuario

    if (state.idUsuario) {
        getUserIndividually('https://jira-api-spring.azurewebsites.net/usuario/' + state.idUsuario)
    } else {
        $('#img-user').attr('src', "../assets/vue.svg");
        $("#displayName").text("Seleccione un usuario");
        $("#emailAddress").text("");
    }
}

</script>
<template>
    <div class="card-body">
        <div class="row">
            <p class="color-negro" id="emailAddress"></p>
            <p class="color-negro" id="displayName"></p>

            <img id="img-user" class="img-fluid" src="../assets/vue.svg"
                style="max-width: 70px; position:absolute; right: 0;">
        </div>
        <div class="row mt-2">
            <select id="slc-user" class="form-select select-dark mt-3 bordes" v-model="state.idUsuario"
                @change="onSelectChange">
                <option class="color-negrp" value="">Seleccionar usuario</option>
            </select>
        </div>
    </div>
</template>