<script lang="ts">
  let mail: string = '';
  let password: string = '';
  let showModal: boolean = false; // Variable para controlar la visibilidad del modal

  const login = () => {
    const users = (JSON.parse(localStorage.getItem('users') ?? '[]')) as any[];
    const userinfo = users.find(x => x.mail === mail && x.password === password);

    if (userinfo) {
      showModal = true; // Mostrar el modal en caso de inicio de sesión exitoso

      // Guarda el usuario en localStorage bajo la clave 'user'
      localStorage.setItem('user', JSON.stringify(userinfo));
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  const closeModal = () => {
    showModal = false; // Cerrar el modal
    window.location.href = '/'; // Redirigir a la página principal
  };
</script>

<div class="container">
  <div class="login">
    <form id="loginForm">
      <div class="logo">
        <img src="logohypoxia.png" alt="logo hypoxia" />
      </div>
      <h1 class="title">Iniciar Sesión</h1>
      <label>
        <input
          placeholder="Introduce tu correo electrónico"
          type="email"
          bind:value={mail}
          id="email"
        />
      </label>
      <a href="./register">¿No tienes cuenta? Registrarse</a>
      <label>
        <input
          placeholder="Introduce tu contraseña"
          type="password"
          bind:value={password}
          id="password"
        />
      </label>
      <a href="#">¿Olvidaste tu contraseña?</a>
      <button type="button" on:click={login}>Iniciar sesión</button>
    </form>
  </div>
  <div class="loginimg">
    <img src="hypoxialogin2.png" alt="Imagen de inicio de sesión" />
  </div>

  <!-- Modal de éxito -->
  {#if showModal}
    <div class="modal">
      <div class="modal-content">
        <h2>Inicio de sesión exitoso</h2>
        <button on:click={closeModal}>Cerrar</button>
      </div>
    </div>
  {/if}
</div>

<style>
  /* Estilos generales */
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

  .container {
    display: flex;
    height: 100vh;
  }

  #svelte {
    height: 100%;
  }

  .logo img {
    height: 200px;
    margin-bottom: 30px;
    margin-top: 100px;
  }

  .login {
    width: 50%;
    background-color: #dde0e0;
    height: 100vh;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 0px 0px;
  }

  form h1 {
    font-size: 30px;
    font-weight: lighter;
    margin-bottom: 30px;
  }

  form label {
    margin-bottom: 10px;
  }

  form a {
    margin-bottom: 40px;
    text-decoration: none;
    color: #34afee;
  }

  form a:hover {
    text-decoration: underline;
  }

  form label input {
    outline: none;
    border: none;
    border-bottom: solid 1px #737575;
    background-color: transparent;
    font-size: 18px;
    width: 250px;
  }

  form label input::placeholder {
    text-align: left;
  }

  form button {
    padding: 15px 30px;
    background-color: #27a69e;
    border: none;
    color: #ffffff;
    font-size: 18px;
    border-radius: 20px;
    cursor: pointer;
  }

  form button:hover {
    background-color: #1b7b75;
  }

  /* Estilos de la imagen */
  .loginimg {
    height: 100vh;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginimg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Estilos del modal */
  .modal {
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

  .modal-content {
    background-color: #DDE0E0;
    padding: 30px 20px;
    border-radius: 25px;
    text-align: center;
  }

  .modal-content h2 {
    margin-bottom: 20px;
    font-weight: 100;
    font-size: 24px;
  }

  .modal-content button {
    padding: 10px 20px;
    background-color: #27A69E;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }

  .modal-content button:hover {
    background-color: #1b7b75;
  }
</style>
