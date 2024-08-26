<script lang='ts'>
  let mail: string = '';
  let password: string = '';

  const login = () => {
    const storedMail = localStorage.getItem('mail');
    const storedPassword = localStorage.getItem('password');

    if (mail === storedMail && password === storedPassword) {
      alert('Inicio de sesión exitoso');

      // Guarda el usuario en localStorage bajo la clave 'user'
      localStorage.setItem('user', JSON.stringify({ mail }));

      window.location.href = '/'; // Redirigir a la página principal
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };
</script>

<div class="container">
    <div class="login">
        <form id="loginForm">
            <div class="logo">
                <img src="logohypoxia.png" alt="logo hypoxia">
            </div>
            <h1 class="title">Iniciar Sesión</h1>
            <label>
                <input placeholder="Introduce tu correo electrónico" type="email" bind:value={mail} id="email">
            </label>
            <a href="./register">¿No tienes cuenta? Registrarse</a>
            <label>
                <input placeholder="Introduce tu contraseña" type="password" bind:value={password} id="password">
            </label>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button on:click={login}>Iniciar sesión</button>
        </form>
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
    .container {
        display: flex;
        height: 100vh;
    }
    :global(#svelte) {
        height: 100%;
    }
    .logo img{
        height: 200px;
        margin-bottom: 30px;
        margin-top: 40px;
    }
    .login{
        width: 50%;
        background-color: #DDE0E0;
        height: 100vh;
    }
    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 0px 0px;
        justify-content: center;
    }
    form h1{
        font-size: 30px;
        font-weight: lighter;
        margin-bottom: 30px;
    }
    form label{
        margin-bottom: 10px;
    }
    form a{
        margin-bottom: 40px;
        text-decoration: none;
        color: #34A9FE;
    }
    form a:hover{
        text-decoration: underline;
    }
    form label input{
        outline: none;
        border: none;
        border-bottom: solid 1px #737575;
        background-color: transparent;
        font-size: 18px;
        width: 250px;
    }
    form label input::placeholder{
        display: flex;
        text-align: left;
    }
    form button{
        padding: 15px 30px;
        background-color: #27A69E;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        border-radius: 20px;
        cursor: pointer;
    }
    form button:hover{
        background-color: #1B7B75;
    }
    /* ahora el estilizado de la imagen de la derecha */
    .loginimg{
        background: url(hypoxialogin2.png);
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 50%;
    }
</style>

