<script>
    import { onMount } from 'svelte';
    import Ingresamail from '../../components/ingresamail.svelte';
    import Contrasenas from '../../components/contrasenas.svelte';

    let showIngresamail = true;

    function toggle() {
        showIngresamail = !showIngresamail;
    }
</script>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrarse</title>
</head>
<body>
    <div class="login">
        {#if showIngresamail}
        <Ingresamail {toggle} />
        {:else}
        <Contrasenas {toggle} />
        {/if}
        <!-- <form action="">
            <div class="logo">
                <img src="logohypoxia.png" alt="logo hypoxia">
            </div>
            <h1 class="title">Registarse</h1>
            <label>
                <input placeholder="Introduce tu correo electrónico" type="text" id="mail">
            </label>
            <button>Siguiente</button> 
        </form>-->
    </div>
    <div class="loginimg"></div> <!--se pone la imagendesde el css como background, así que el div queda vacío-->
</body>

<style>
    body{
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        display: flex;
    }
    .login{
        width: 50%;
        background-color: #DDE0E0;
        height: 100vh;
    }
    /* ahora el estilizado de la imagen de la derecha */
    .loginimg{
        background: url(registrarse.png);
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 50%;
    }
</style>
