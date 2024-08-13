<script lang='ts'>
    import Ingresamail from '../../components/ingresamail.svelte';
    import Contrasenas from '../../components/contrasenas.svelte';

    let mail: string = '';
    let password: string = '';
    let confirmPassword: string = '';
    let showIngresamail = true;

    function toggle() {
        showIngresamail = !showIngresamail;
    }

     function register() {
     if (mail && password && confirmPassword) {
       if (password === confirmPassword) {
        localStorage.setItem('mail', mail);
        localStorage.setItem('password', password);
        alert('Registro exitoso');
         } 
       else {
        alert('Las contraseñas no coinciden');
         }
       } 
       else {
        alert('Por favor, complete todos los campos');
       }
     }
</script>

<div class="container">
    <div class="login">
        <div class="login">
            {#if showIngresamail}
              <Ingresamail {toggle} bind:mail />
            {:else}
              <Contrasenas {toggle} bind:password bind:confirmPassword />
            {/if}
          </div>
    </div>
    <button on:click={register}>Registrar</button>
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
    button{
        padding: 15px 30px;
        background-color: #27A69E;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        border-radius: 20px;
        cursor: pointer;
    }
    button:hover{
        background-color: #1B7B75;
    }
    /* ahora el estilizado de la imagen de la derecha */
    .loginimg{
        flex: 1;
        background-image: url('registrarse.png');
        background-size: cover;
        background-position: center;
    }
</style>
