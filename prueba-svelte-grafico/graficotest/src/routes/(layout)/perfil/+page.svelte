<script lang="ts">
    import { onMount } from "svelte";

    // Recuperar el mail del usuario logueado desde localStorage
    let userMail: string = JSON.parse(localStorage.getItem('user') ?? '{}').mail || '';

    // Lista para almacenar los análisis recuperados
    let analysisHistory: { paciente: string; cargaHipoxica: string }[] = [];

    // Función para obtener los análisis del backend
    async function fetchAnalysis() {
        try {
            const doctorId = JSON.parse(localStorage.getItem('user') ?? "{}").id as number;
            const response = await fetch('/api/results?doctorId=' +doctorId.toString(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                const data = await response.json();
                analysisHistory = data.results.map((item: any) => ({
                    paciente: item.paciente,
                    cargaHipoxica: item.cargaHipoxica,
                }));
            } else {
                console.error('Error al obtener los análisis:', await response.text());
            }
        } catch (error) {
            console.error('Error en la conexión:', error);
        }
    }

    function logout(event: MouseEvent) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        localStorage.removeItem('user');
        // Redirigir al usuario si es necesario
        window.location.href = "/login"; // Redirigir al login después del logout
    }

    // Ejecutar la función cuando el componente se monte
    onMount(() => {
        fetchAnalysis();
    });
</script>

<style>
    .container {
        font-family: Arial, sans-serif;
        margin: 0 auto;
        max-width: 800px;
        padding: 20px;
    }

    strong{
        font-weight: 100;
        font-size: 20px;
    }

    .mail{
        border-bottom: 1px solid #000000;
        padding: 5px 0px;
    }

    .link {
        margin: 0 0px;
        text-decoration: none;
        color: #007acc;
        font-size: 16px;
    }

    .link:hover {
        text-decoration: underline;
    }

    .menu {
        margin-top: 50px;
    }

    .menu-title {
        font-size: 32px;
        text-align: center;
        border-bottom: 2px solid #27A69E;
        margin-bottom: 20px;
        font-weight: 100;
        padding: 10px 0px;
    }

    .menu-items {
        max-height: 300px; /* Altura máxima del scroll */
        overflow-y: auto;
        border: 0px solid #ccc;
        border-radius: 8px;
        padding: 10px;
    }

    .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        margin-bottom: 10px;
        background-color: #CACACA;
        border-radius: 12px;
        border: 2px solid #27A69E;
    }

    span{
        font-size: 18px;
        margin-right: 10px;
    }

    .menu-item:hover {
        background-color: #e8f8ff;
    }

    .scrollbar {
        overflow-y: scroll;
    }

    /* Cambiar el color del fondo de la barra */
    .scrollbar::-webkit-scrollbar {
        width: 12px; /* Ancho de la barra */
    }

    /* Cambiar el color del fondo de la barra de desplazamiento */
    .scrollbar::-webkit-scrollbar-track {
        background-color: #A0A1A1; /* Color de fondo de la barra */
        border-radius: 10px; /* Bordes redondeados */
    }

    /* Cambiar el color del pulgar (la parte que se mueve) */
    .scrollbar::-webkit-scrollbar-thumb {
        background-color: #1B1B1B; /* Color del pulgar */
        border-radius: 10px; /* Bordes redondeados */
    }

    /* Cambiar el color del pulgar cuando está en hover */
    .scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: #007acc; /* Color cuando está siendo arrastrado */
    }

    h3{
        font-size: 20px;
        font-weight: 300;
    }
</style>

<div class="container">
    <div class="user-info">
        <p><strong>Mail</strong></p>
        <p class="mail">{userMail}</p>
        <a href="#" on:click={logout} class="link">Si desea cambiar de usuario, haga click aquí</a>
    </div>

    <div class="menu">
        <h2 class="menu-title">Historial</h2>
        <div class="menu-items scrollbar">
            {#if analysisHistory.length === 0}
                <h3>No se han encontrado análisis en el sistema.</h3>
            {:else}
                {#each analysisHistory.reverse() as analysis} <!-- no se si el .reverse funcionará, si algo tira error borrarlo -->
                    <div class="menu-item">
                        <span>Análisis paciente {analysis.paciente}</span>
                        <span>Carga hipóxica: {analysis.cargaHipoxica}</span>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>
