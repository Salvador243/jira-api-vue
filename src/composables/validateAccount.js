import axios from 'axios';
import { ref } from 'vue';
import $ from "jquery";
import router from '../router.js';

export const validateAccount = () => {
    const login = async (body) => {
        let solicitud = {
            nombre: "Nombre de ejemplo",
            correoElectronico: body.correo_electronico,
            contrasena: body.contrasena
        }

        const res = await axios.post('https://jira-api-spring.azurewebsites.net/login',
            JSON.stringify(solicitud),
            {
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(res => {
            localStorage.setItem('token', Math.random().toString(36)) // Guarda el token en el almacenamiento local
            router.push('/inicio');
        }).catch((error) => {
            $("#email").val(null);
            $("#password").val(null);
        });
    }

    return {
        login,
    }
}