import axios from 'axios';
import { ref } from 'vue';
import $ from "jquery";
import router from '../router.js';

const loading = ref(true);
const error = ref(true);


export const issuePost = () => {
    const createIsuue = async (body) => {
        loading.value = true;
        try {
            console.log("YA PASO POR ACA")
            $("#pantalla-carga").removeClass("none");
            const bodyData = {
                "fields": {
                    "assignee": {
                        "id": `${body.accountId}`
                    },
                    "description": {
                        "content": [
                            {
                                "content": [
                                    {
                                        "text": `${body.descripcion}`,
                                        "type": "text"
                                    }
                                ],
                                "type": "paragraph"
                            }
                        ],
                        "type": "doc",
                        "version": 1
                    },
                    "project": {
                        "key": "TEST",
                        "name": "Test",
                    },
                    "issuetype": {
                        "id": "10001"
                    },
                    "summary": `BUG: ${body.modulo + ' - ' + body.seccion + ' - ' + body.area}`,
                },
            };
            const res = await axios.post(
                'https://jira-api-node-js.onrender.com/crear',
                bodyData
            ).then(async (response) => {
                if (body.file) {
                    console.log(response);

                    console.log(typeof (response))


                    const formData = new FormData();

                    formData.append('id', response.id);
                    formData.append('file', body.file[0]);

                    const file = await axios.post('https://jira-api-spring.azurewebsites.net/cargar', formData)
                        .then(res => {
                        })
                        .catch(err => {
                        });
                }
            }).catch((error) => {

            });


        } catch (e) {
            error.value = 'Error en la petición';
        } finally {
            $("#pantalla-carga").addClass("none");
            loading.value = false;
            router.push('/folios');
        }
    }

    const createFeature = async (body) => {
        loading.value = true;
        try {
            $("#pantalla-carga").removeClass("none");
            const bodyData = {
                "fields": {
                    "assignee": {
                        "id": `${body.accountId}`
                    },
                    "description": {
                        "content": [
                            {
                                "content": [
                                    {
                                        "text": `${body.descripcion}`,
                                        "type": "text"
                                    }
                                ],
                                "type": "paragraph"
                            }
                        ],
                        "type": "doc",
                        "version": 1
                    },
                    "project": {
                        "key": "TEST",
                        "name": "Test",
                    },
                    "issuetype": {
                        "id": "10001"
                    },
                    "summary": `FUNCIONALIDAD: ${body.modulo + ' - ' + body.seccion + ' - ' + body.area}`,
                },
            };
            const res = await axios.post(
                'https://jira-api-node-js.onrender.com/crear',
                bodyData
            ).then(async (response) => {

                if (body.file) {
                    const formData = new FormData();
                    formData.append('id', response.data.key);
                    formData.append('file', body.file[0]);

                    const file = await axios.post('https://jira-api-spring.azurewebsites.net/cargar', formData)
                        .then(res => {
                        })
                        .catch(err => {
                        });
                }
            }).catch((error) => {

            }).finally(res => {
            });
        } catch (e) {
            error.value = 'Error en la petición';
        } finally {
            loading.value = false;
            $("#pantalla-carga").addClass("none");
            router.push('/folios');
        }
    }
    return {
        createIsuue,
        createFeature,
        loading,
        error,
    }
}
