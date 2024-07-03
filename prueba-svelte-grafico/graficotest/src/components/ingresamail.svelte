<script>
    export let toggle;
</script>
<body>
    <div class="login">
        <form action="">
            <div class="logo">
                <img src="logohypoxia.png" alt="logo hypoxia">
            </div>
            <h1 class="title">Registarse</h1>
            <label>
                <input placeholder="Introduce tu correo electrónico" type="text" id="mail">
            </label>
            <button on:click={toggle}>Siguiente</button>
        </form>
    </div>
    <div class="loginimg"></div> <!--se pone la imagendesde el css como background, así que el div queda vacío-->
</body>

<style>
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }
    .login{
        flex: 1;
        width: 50%;
        background-color: #DDE0E0;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    /* ahora el estilizado de la imagen de la derecha */
    .loginimg{
        flex: 1;
        background: url(registrarse.png) no-repeat center center;
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 50%;
    }
    .logo img{
        height: 200px;
        margin-bottom: 30px;
        margin-top: 40px;
    }
    /* .login{
        width: 50%;
        background-color: #DDE0E0;
        height: 100vh;
    } */
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
        padding: 15px 30px;
        background-color: #27A69E;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 80px;
    }
</style>