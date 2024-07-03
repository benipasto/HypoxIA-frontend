<script>
    import Ingresamail from '../../components/ingresamail.svelte';
    import Contrasenas from '../../components/contrasenas.svelte';

    let showIngresamail = true;

    function toggle() {
        showIngresamail = !showIngresamail;
    }
</script>
<div class="container">
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
</div>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }

    :global(html, body) {
        height: 100%;
        width: 100%;
    }

    :global(#svelte) {
        height: 100%;
    }
    .container {
        display: flex;
        height: 100vh;
    }
    .login{
        background-color: #DDE0E0;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /* ahora el estilizado de la imagen de la derecha */
    .loginimg{
        flex: 1;
        background-image: url('registrarse.png');
        background-size: cover;
        background-position: center;
    }
</style>
