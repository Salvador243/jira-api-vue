<script setup>
import SideBar from '../components/SideBar.vue';
import $ from 'jquery';
import axios from 'axios';
import { useToggleMenu } from '../store/ToggleMenu';

const useToggleMenuStore = useToggleMenu();
const getReport = async () => {
    $("#pantalla-carga").removeClass("none");
    try {
        const res = await axios.get('https://jira-api-spring.azurewebsites.net/reportePDF', {
            responseType: 'blob', // indicar que se espera un archivo binario
        });
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'reporte_issues.pdf');
        document.body.appendChild(link);
        link.click();
    } catch (e) {
        console.log(e)
    } finally {
        $("#pantalla-carga").addClass("none");
    }
}
</script>
  
<template>
    <div class="app">
        <SideBar />
        <div id="contenedor" :class="`${useToggleMenuStore.expandido ? 'expandido' : 'colapsado'}`">
            <div class="cont">
                <h4 class="text-white">Aqui podra descargar un reporte con las incidencias credadas en el tablero de JIRA ATLASSIAN con un poco de información detallada relacionada a la incidencia. </h4>
                <button class="btn btn-secondary" @click="getReport()">Descargar reporte de incidencias</button>
            </div>
        </div>
    </div>
</template>
  