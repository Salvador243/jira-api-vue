<script setup>

</script>

<template>
    <div id="pantalla-carga" class="pantalla-carga none">
        <div class="justify-content-center">
            <div class="d-flex align-items-center">
                <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <strong class="text-light ms-2">Cargando ...</strong>
            </div>
        </div>
    </div>

    <router-view></router-view>
</template>

<style>
.pantalla-carga {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>