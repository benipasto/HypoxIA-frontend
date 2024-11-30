<script lang='ts'>
    import Ingresamail from '../../../components/ingresamail.svelte';
    import Contrasenas from '../../../components/contrasenas.svelte';
    import { register } from '../../../utils/registerFunction';
    import { setContext } from 'svelte';

    let mail: string = '';
    let password: string = '';
    let confirmPassword: string = '';
    let showIngresamail = true;
    let showModal = false; // Variable para controlar el modal

    function toggle() {
        showIngresamail = !showIngresamail;
    }
    function handleRegister() {
        register(mail, password, confirmPassword, () => {
            showModal = true; // Activa el modal si el registro es exitoso
        });
    }

    function closeModal() {
        showModal = false; // Cierra el modal
        window.location.href = '/';
    }

    setContext('register', register); // Coloca la función en el contexto
</script>

<div class="container">
    <div class="login">
        <div class="login">
            {#if showIngresamail}
              <Ingresamail {toggle} bind:mail />
            {:else}
              <Contrasenas         
              {toggle} 
              {mail} 
              bind:password 
              bind:confirmPassword 
              onRegister={handleRegister} />
              <!-- <button on:click={register}>Registrar</button> -->
            {/if}
        </div>
    </div>
    
    <div class="loginimg"></div> <!--se pone la imagendesde el css como background, así que el div queda vacío-->
</div>

{#if showModal}
    <div class="modal-overlay" on:click={closeModal}>
        <div class="modal" on:click|stopPropagation>
            <h2>Te has registrado correctamente.</h2>
            <button on:click={closeModal}>Cerrar</button>
        </div>
    </div>
{/if}

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }

    html, body {
        height: 100%;
        width: 100%;
    }

    #svelte {
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
    .loginimg{
        flex: 1;
        background-image: url('registrarse.png');
        background-size: cover;
        background-position: center;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal {
      background-color: #DDE0E0;
      padding: 30px 20px;
      border-radius: 25px;
      text-align: center;
    }

    .modal h2 {
      margin-bottom: 20px;
      font-weight: 100;
      font-size: 24px;
    }

    .modal button {
      padding: 10px 20px;
      background-color: #27A69E;
      color: white;
      border: none;
      border-radius: 15px;
      cursor: pointer;
    }

    .modal button:hover {
        background-color: #1B7B75;
    }
</style>

