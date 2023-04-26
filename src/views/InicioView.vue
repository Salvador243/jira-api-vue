<script setup>
import SideBar from '../components/SideBar.vue';
import { useToggleMenu } from '../store/ToggleMenu';
import Graficas from '../components/Graficas.vue';
const useToggleMenuStore = useToggleMenu();


</script>

<template>
	<div class="app">
		<SideBar />
		<div id="contenedor" :class="`${useToggleMenuStore.expandido ? 'expandido' : 'colapsado'}`">
			<div class="cont">
				<h1 class="text-white">Dashboard</h1>
				<p class="text-white">¡Bienvenido/a al dashboard! Este espacio ha sido diseñado para que puedas visualizar
					de manera clara y
					concisa los datos y métricas más importantes de tu proyecto o negocio. Aquí podrás encontrar información
					relevante de manera fácil y rápida, lo que te permitirá tomar decisiones informadas y llevar tu negocio
					al siguiente nivel. Esperamos que disfrutes de esta herramienta y que te sea de gran utilidad.</p>

				<div class="row">
					<div class="col-md-3">
						<div class="card text-bg-light mb-3">
							<div class="card-header">Usuarios
								<span class="material-icons">
									account_box
								</span>
							</div>
							<div class="card-body">
								<h5 class="card-title">17</h5>
								<p class="card-text">Con roles de JIRA y usuarios invitados</p>
							</div>
						</div>
					</div>
					<div class="col-md-1">
					</div>
					<div class="col-md-3">
						<div class="card text-bg-light mb-3">
							<div class="card-header">Incidencias
								<span class="material-icons">
									notification_important
								</span>
							</div>
							<div class="card-body">
								<h5 class="card-title">12</h5>
								<p class="card-text">Tareas de funcionalidad</p>
							</div>
						</div>
					</div>
					<div class="col-md-1">
					</div>
					<div class="col-md-3">
						<div class="card text-bg-light mb-3">
							<div class="card-header">Funcionalidad
								<span class="material-icons">
									add_task
								</span>
							</div>
							<div class="card-body">
								<h5 class="card-title">5</h5>
								<p class="card-text">Tareas de incidencia</p>
							</div>
						</div>
					</div>
				</div>
				<Graficas />
			</div>
		</div>
	</div>
</template>