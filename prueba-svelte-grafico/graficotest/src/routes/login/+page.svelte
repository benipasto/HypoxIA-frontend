<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar sesión</title>
</head>
<body>
    <div class="login">
        <form id="loginForm">
            <div class="logo">
                <img src="logohypoxia.png" alt="logo hypoxia">
            </div>
            <h1 class="title">Iniciar Sesión</h1>
            <label>
                <input placeholder="Introduce tu correo electrónico" type="text" id="email">
            </label>
            <a href="#">¿No tienes cuenta? Registrarse</a>
            <label>
                <input placeholder="Introduce tu contraseña" type="text" id="password">
            </label>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button id="button">Iniciar Sesión</button>
        </form>
    </div>
    <div class="loginimg"></div> <!--se pone la imagendesde el css como background, así que el div queda vacío-->
</body>
</html>

<style>
    body{
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        display: flex;
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
    /* ahora el estilizado de la imagen de la derecha */
    .loginimg{
        background: url(hypoxialogin2.png);
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 50%;
    }
</style>

