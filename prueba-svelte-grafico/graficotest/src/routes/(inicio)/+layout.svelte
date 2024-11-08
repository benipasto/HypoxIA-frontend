<!-- acá va todo lo que va en todas las págs (header, footer si termino poniendo) -->
<!-- debería encontrar alguna forma de que en todas las páginas salga el miniicono arriba en el head, pq ahora sale el de svelte xd -->
<!-- ver después: https://stackoverflow.com/questions/53495018/exclude-a-page-from-layout -->

<!-- /routes/+layout.svelte -->
<!-- /routes/+layout.svelte -->
<script lang="ts">
    let user: string | null = null;
    import { onMount } from "svelte";

    // Recuperar el usuario desde localStorage cuando se carga el componente
    onMount(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            user = JSON.parse(userData).mail; // Muestra el mail del usuario
        }
    });

    function logout() {
        localStorage.removeItem('user');
        user = null;
        // Redirigir al usuario si es necesario. COMENTARIO: por ahora no lo uso pero sirve en un futuro. AL FINAL SI LO USO JAJA SALU2
    }
</script>
<header>
    <a href="/" class="logo">
        <img src="logohorizontal.png" alt=""><!--la imagen debería ir en static, pero me tira error medio raro la consola así que por ahora lo dejo en routes... aunq está mal pq si pongo /logohypoxia.png puedo ver el logo XD-->
    </a>
    <nav>
        {#if user}
            <div class='user'>
                Bienvenido, {user}
                <button on:click={logout}>Cerrar sesión</button>
            </div>
            <!-- acá abajo iría el botón de logout si algún dia lo ponemos -->
        {:else}
            <button><a href="/login">Iniciar sesión</a></button>
        {/if}    
    </nav>
</header>

<style>
    .user{
        padding: none;
        display: flex;
        margin-right: 10px;
        font-size: large;
        font-weight: 600;
    }
    .user button{
        margin-left: 20px;
        font-size: large;
    }
    a{/*modifica todos los textos con links*/
        text-decoration: none;
        color: #3A6D6A; /*esto debería cambiarlo al color del logo pero no lo encontré xd*/
    }
    nav button a{/*modifica todos los textos con link DENTRO DE BUTTON*/
        font-size: large;
        color: black;
        align-items: center;
    }
    nav button{/*modifica el botón*/
        background-color: transparent;
        border: none;
        padding-right: 10px;
        border-radius: 20px;
        height: 20px;
    }
    nav button:hover{/*hace que cuando pases el mouse x arriba pase algo*/
        text-decoration: underline;
    }
    header{
        display: flex; /*esto pone todo en horizontal*/
        height: 60px; /*esto le da una altura al header*/
        background-color: #B4D4DE;
        justify-content: space-between; /*esto pone un espacio en el medio de los contenidos, así quedan separados*/
        font-family: 'Lato', sans-serif;
        align-items: center;
        padding: 10px;
        margin: 0;
    }
    .logo{
        display: flex;
        align-items: center;
    }
    .logo img{
        height: 30px;
        margin-right: 5px;
        margin-left: 10px;
    }
    footer{
        background-color: #3A736F;
        display: flex;
        justify-content: space-between;
        height: 200px;
        margin: 0;
        position: relative;
        align-items: center;
        overflow: hidden; 
    }
    .circle{
        position: absolute; /* Posiciona el círculo en relación con el contenedor */
        bottom: -150px; /* Ajusta la posición vertical del círculo */
        left: -125px; /* Ajusta la posición horizontal del círculo */
        width: 250px; /* Ancho del círculo */
        height: 250px; /* Alto del círculo */
        background-color: transparent; /* Color de fondo del círculo */
        border: 4px solid #27A69E; /* Color y grosor del borde */
        border-radius: 50%; /* Hace que el div sea un círculo */
    }
    .contacto{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #FFFFFF;
    }
    .contacto h3{
        margin: 15px;
        margin-left: 150px;
    }
    span.highlight{
        font-weight: 100;
        text-decoration: underline;
        margin-left: 40px;
    }
</style>
<slot />
<footer>
    <div class="contacto">
        <h3>Contacto:     <span class="highlight">hypoxia@gmail.com</span></h3>
        <h3>Teléfono:     <span class="highlight">+54 9 11 1234-5678 </span></h3>
        <div class="circle"></div>
    </div>
</footer>
