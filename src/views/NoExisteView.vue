<script setup>
import SideBar from '../components/SideBar.vue';
import { useToggleMenu } from '../store/ToggleMenu';
const useToggleMenuStore = useToggleMenu();
</script>

<template>
	<div class="app">
		<SideBar />
		<div id="contenedor" :class="`${useToggleMenuStore.expandido ? 'expandido' : 'colapsado'}`">
			<div class="cont">
				<h1 class="text-white">Estamos trabajando en la funcionalidad ...</h1>
				<span class="material-icons text-white" style="font-size: 9rem">construction</span>
			</div>
		</div>
	</div>
</template>
