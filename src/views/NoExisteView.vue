<script setup>
import SideBar from '../components/SideBar.vue';
import { useToggleMenu } from '../store/ToggleMenu';
const useToggleMenuStore = useToggleMenu();
</script>

<template>
	<div class="app">
		<SideBar />
		<div :class="`${useToggleMenuStore.expandido ? 'expandido' : 'colapsado'}`">
			<div class="cont">
				<h1>No existe la ruta</h1>
			</div>
		</div>
	</div>
</template>
