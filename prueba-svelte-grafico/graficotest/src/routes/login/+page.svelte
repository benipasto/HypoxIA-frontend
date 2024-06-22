<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar sesión</title>
</head>
<body>
    <div class="form">
        <form action="">
            <div class="logo">
                <img src="logohypoxia.png" alt="logo hypoxia">
            </div>
            <h1 class="title">Iniciar Sesión</h1>
            <label>
                <input type="text" id="mail">
            </label>
            <a href="#">¿No tienes cuenta? Registrarse</a>
            <label>
                <input type="text" id="password">
            </label>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button>Iniciar Sesión</button>
        </form>
    </div>
    <div class="loginimg">
        <img src="" alt="">
    </div>

</body>
</html>

<style>
    body{
        display: flex;
        align-items: center;
        min-height: 100px;
        font-family: 'Lato', sans-serif;
        background-color: #DDE0E0;
    }
    .logo img{
        height: 200px;
        margin-bottom: 30px;
    }
    form{
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 80px 80px;
        justify-content: left;
    }
    form h1{
        font-size: 30px;
        font-weight: lighter;
        margin-bottom: 30px;
    }
</style>