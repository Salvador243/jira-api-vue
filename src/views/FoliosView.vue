<script setup>
import SideBar from '../components/SideBar.vue';
import FolioCard from '../components/FolioCard.vue';
import { useToggleMenu } from '../store/ToggleMenu';
import { useGetData } from '../composables/getIssues';
import { onMounted } from 'vue';
import $ from "jquery";

const { issue, getIssue, loading } = useGetData();

getIssue('https://jira-api-spring.azurewebsites.net/errores');

const useToggleMenuStore = useToggleMenu();

onMounted(() => {
	$(function () {
		$('.dropdown-toggle').click(function () {
			$(this).next('.dropdown').slideToggle();
		});
		$(document).click(function (e) {
			var target = e.target;
			if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
				$('.dropdown').slideUp();
			}
		});
	});
});
</script>

<template>
	<div class="app">
		<SideBar />
		<div id="contenedor" :class="`${useToggleMenuStore.expandido ? 'expandido' : 'colapsado'}`">
			<div class="img-folios">
				<img src="https://blog.izabc.com.mx/hubfs/Postedin-Blog-Images/Beneficios%20de%20tener%20una%20oficina%20organizada.jpeg"
					alt="Banner de arriba">
			</div>
			<div class="cont">
				<div class="row">
					<div class="col-sm-6 col-lg-10">
						<input type="text" placeholder="Enter para buscar" class="form-control">
					</div>
					<div class="col-sm-6 col-lg-2">
						<div id="nav">
							<button class="dropdown-toggle">Crear folio</button>
							<ul class="dropdown">
								<li><router-link class="item-dropdown txt-8" to="/incidencia">Reportar
										incidencia</router-link>
								</li>
								<li><router-link class="item-dropdown txt-8" to="/funcionalidad">Nueva funcionalidad
									</router-link>
								</li>
								<li><router-link class="item-dropdown txt-8" to="/soporte">Atención al cliente</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="cont">
				<div id="folios-fila" class="row">
					<FolioCard v-for="i in issue" :title="i.key" :id="i.id" :fields="i.fields" class="mt-4" />
				</div>
			</div>
		</div>
	</div>
</template>