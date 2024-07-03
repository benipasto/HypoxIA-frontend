<script lang="ts">
    // Variables para el formulario de registro
    let registerUsername = '';
    let registerPassword = '';

    // Variables para el formulario de login
    let loginUsername = '';
    let loginPassword = '';

    // Arrays para almacenar los usuarios y contraseñas registrados
    let users: string[] = [];
    let passwords: string[] = [];

    let isRegistered = false;
    let loginMessage = '';

    // Función para manejar el registro
    function handleRegister(event: Event) {
        event.preventDefault();
        if (registerUsername && registerPassword) {
            users.push(registerUsername);
            passwords.push(registerPassword);
            isRegistered = true;
            loginMessage = 'Registration successful. You can now login.';
            registerUsername = '';
            registerPassword = '';
        }
    }

    // Función para manejar el login
    function handleLogin(event: Event) {
        event.preventDefault();
        const userIndex = users.indexOf(loginUsername);
        if (userIndex !== -1 && passwords[userIndex] === loginPassword) {
            loginMessage = 'Login successful!';
            // Aquí puedes agregar la lógica para redirigir o mostrar contenido protegido
        } else {
            loginMessage = 'Invalid username or password';
        }
        loginUsername = '';
        loginPassword = '';
    }
</script>

<style>

    /**:global(*) {
        margin: 0;
        pading: 0;
        box-sizing: border-box;
    }

    :global(html, body) {
        height: 100%;
        width: 100%;
    }

    :global(#svelte) {
        height: 100%;
    }*/

    .container {
        display: flex;
        height: 100vh;
    }

    .login, .register {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f4f4f4;
    }

    .image {
        flex: 1;
        background-image: url('/path/to/your/image.jpg');
        background-size: cover;
        background-position: center;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 300px;
    }

    input {
        margin-bottom: 10px;
        padding: 8px;
        font-size: 16px;
    }

    button {
        padding: 10px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    .message {
        margin-top: 10px;
        font-size: 14px;
        color: green;
    }
</style>

<div class="container">
    <div class="register">
        <form on:submit={handleRegister}>
            <h2>Register</h2>
            <input type="text" placeholder="Username" bind:value={registerUsername} required>
            <input type="password" placeholder="Password" bind:value={registerPassword} required>
            <button type="submit">Register</button>
            {#if isRegistered}
                <p class="message">{loginMessage}</p>
            {/if}
        </form>
    </div>
    <div class="login">
        <form on:submit={handleLogin}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" bind:value={loginUsername} required>
            <input type="password" placeholder="Password" bind:value={loginPassword} required>
            <button type="submit">Login</button>
            {#if loginMessage}
                <p class="message">{loginMessage}</p>
            {/if}
        </form>
    </div>
    <div class="image"></div>
</div>
