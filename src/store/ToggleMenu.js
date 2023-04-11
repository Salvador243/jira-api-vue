import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useToggleMenu = defineStore('toggleMenu', () => {
    const expandido = ref(true);
    const accountId = ref('');
    const tamanio = ref(screen.width < 768 ? 'md' : 'xl');
    // const tamanio = computed( () => screen.width  ) 
    return {
        expandido,
        accountId,
        tamanio
    }
})