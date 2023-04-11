<script setup>
import { useGetData } from '../composables/getUsuarios';
import SideBar from '../components/SideBar.vue';
import $ from "jquery";
import { useToggleMenu } from '../store/ToggleMenu';

const { getUser, usuario, loading, getUserIndividually } = useGetData();

getUser('https://jira-api-spring.azurewebsites.net/usuarios');
const useToggleMenuStore = useToggleMenu();
</script>

<template>
	<div class="app">
		<SideBar />
		<div id="contenedor" :class="`${useToggleMenuStore.expandido ? 'expandido' : 'colapsado'}`">
			<div class="cont">
				<div class=" row">
					<div class="col-md-4 my-2" v-for="user in usuario">
						<div class="card issue motion">
							<div class="card-body m-2 p-1">
								<div class="row">
									<section>
										<span class="badge text-bg-azul">E-Mail</span>
										<span class="badge bage-blanco color-negro">
											{{ user.emailAddress ? user.emailAddress : 'Correo pendiente por confirmar'
											}}
										</span>
									</section>
									<section class="mt-2">
										<span class="badge text-bg-azul">Usuario</span>
										<span class="badge bage-blanco color-negro">
											{{ user.displayName }}
										</span>
									</section>
									<section class="mt-2">
										<span class="badge text-bg-azul">Tipo cuenta</span>
										<span class="badge bage-blanco color-negro">
											{{ user.accountType }}
										</span>
									</section>
									<img :src="
										user.avatarUrls['16x16']" class="image-fluid" style="max-width: 50px; position:absolute; right: 0;">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
