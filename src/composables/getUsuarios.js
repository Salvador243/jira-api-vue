import { ref } from 'vue';
import axios from 'axios';
import $ from "jquery";

const loading = ref(true);
const error = ref(null);
export const useGetData = () => {
	const usuario = ref([]);
	const loaded = ref(false);
	const individual = ref({});

	const getUser = async (url) => {
		loading.value = true;
		$("#pantalla-carga").removeClass("none");
		try {
			const res = await axios.get(url);
			usuario.value = JSON.parse(res.data.usuarios);
		} catch (e) {
			error.value = 'Error en la petición';
		} finally {
			loading.value = false;
			loaded.value = true;
			insertarOpciones();
			$("#pantalla-carga").addClass("none");
		}
	}

	const getUserIndividually = async (url) => {
		try {
			$("#pantalla-carga").removeClass("none");
			const res = await axios.get(url);
			individual.value.avatar = JSON.parse(res.data.usuarios).avatarUrls["16x16"];
			individual.value.emailAddress = JSON.parse(res.data.usuarios).emailAddress ? JSON.parse(res.data.usuarios).emailAddress : 'Correo por confirmar';
			individual.value.displayName = JSON.parse(res.data.usuarios).displayName;
		} catch (e) {
			error.value = 'Error en la petición individual del usuario';
		} finally {
			$('#img-user').attr('src', individual.value.avatar)
			$("#displayName").text(individual.value.displayName)
			$("#emailAddress").text(individual.value.emailAddress)
			$("#pantalla-carga").addClass("none");
		}
	}

	function insertarOpciones() {
		$('#slc-user').empty();
		$('#slc-user').append($('<option>', {
			value: null,
			text: "Seleccione un usuario"
		}));
		$.each(usuario.value, (i, item) => {
			if (item.accountType == 'atlassian') {
				if (item.active) {
					$('#slc-user').append($('<option>', {
						value: item.accountId,
						text: item.displayName
					}));
				}
			}
		});
	}
	return {
		getUser,
		usuario,
		loading,
		error,
		loaded,
		getUserIndividually,
		individual
	}
}
