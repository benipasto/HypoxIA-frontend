<!-- acá va todo lo que va en todas las págs (header, footer si termino poniendo) -->
<!-- debería encontrar alguna forma de que en todas las páginas salga el miniicono arriba en el head, pq ahora sale el de svelte xd -->
<!-- ver después: https://stackoverflow.com/questions/53495018/exclude-a-page-from-layout -->

<!-- /routes/+layout.svelte -->
<!-- /routes/+layout.svelte -->

<header>
    <a href="/" class="logo">
        <img src="logohypoxia.png" alt=""><!--la imagen debería ir en static, pero me tira error medio raro la consola así que por ahora lo dejo en routes... aunq está mal pq si pongo /logohypoxia.png puedo ver el logo XD-->
        <h2 class="nombre_logo">HypoxIA</h2>
    </a>
    <nav>
        <button>
            <a href="/login">Iniciar sesión / Registrarse</a>
        </button>
    </nav>
</header>

<style> /*eso se abre para pasar a código css*/
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
        height: 40px;
    }
    nav button:hover{/*hace que cuando pases el mouse x arriba pase algo*/
        background-color: #8FAEB8;
    }
    header{
        display: flex; /*esto pone todo en horizontal*/
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
        height: 70px;
        margin-right: 5px;
        margin-left: 10px;
    }
</style>
<slot />