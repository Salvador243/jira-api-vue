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
			<h1 class="text-white">Home</h1>

			<div>
				<canvas ref="myChart"></canvas>
			</div>



			<Graficas />


		</div>
	</div>
</template>