<script lang='ts'>
  export let mail: string;
  export let password: string;
  export let confirmPassword: string;
  export let toggle: () => void;
  export let onRegister: () => void; // Cambiado de `register` a `onRegister`

  function handleRegister(event: MouseEvent) {
    event.preventDefault(); // Evita el comportamiento por defecto del botón
    onRegister(); // Llama a la función onRegister
  }
</script>
<body>
    <div class="login">
        <form action="">
            <div class="logo">
                <img src="logohypoxia.png" alt="logo hypoxia">
            </div>
            <h1 class="title">Registarse</h1>
            <label>
                <input placeholder="Contraseña" type="password" bind:value={password} />
            </label>
            <label>
                <input placeholder="Confirmar Contraseña" type="password" bind:value={confirmPassword} />
            </label>
            <div class="buttons">
                <button on:click={toggle}>Atrás</button>
                <button on:click={handleRegister}>Registrar</button>
            </div>
        </form>
    </div>
    <div class="loginimg"></div> <!--se pone la imagendesde el css como background, así que el div queda vacío-->
    <!-- <button on:click={register}>Registrar</button> -->
</body>

<style>
    .logo img{
        height: 200px;
        margin-bottom: 30px;
        /* margin-top: 10px; */
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
        margin-top: 40px;
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
        padding: 15px 50px;
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
</style>