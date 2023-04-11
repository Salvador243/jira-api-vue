import { ref } from 'vue';
import axios from 'axios';
import $ from "jquery";

const loading = ref(true);
const error = ref(null);
export const useGetData = () => {

	const issue = ref(null);

	const getIssue = async (url) => {
		loading.value = true;
		$("#pantalla-carga").removeClass("none");
		try {
			const res = await axios.get(url);
			issue.value = JSON.parse(res.data.errores).issues;
		} catch (e) {
			error.value = 'Error en la petición';
		} finally {
			loading.value = false;
			$("#pantalla-carga").addClass("none");
		}
	}

	return {
		getIssue,
		issue,
		loading,
		error,
	}
};