<script lang='ts'>
    export let toggle;
    export let password: string;
    export let confirmPassword: string;
    import register from '../routes/register/+page.svelte'

    const handlePasswordInput = (event: Event) => {
        const input = event.target as HTMLInputElement;
        password = input.value;
    };

    const handleConfirmPasswordInput = (event: Event) => {
        const input = event.target as HTMLInputElement;
        confirmPassword = input.value;
    };
</script>
<body>
    <div class="login">
        <form action="">
            <div class="logo">
                <img src="logohypoxia.png" alt="logo hypoxia">
            </div>
            <h1 class="title">Registarse</h1>
            <h3 class="subtitle">Debe tener entre 8-16 carácteres</h3>
            <label>
                <input placeholder="Contraseña" type="password" on:input={handlePasswordInput} bind:value={password} />
            </label>
            <label>
                <input placeholder="Confirmar Contraseña" type="password" on:input={handleConfirmPasswordInput} bind:value={confirmPassword} />
            </label>
            <div class="buttons">
                <button on:click={toggle}>Atrás</button>
            </div>
        </form>
    </div>
    <div class="loginimg"></div> <!--se pone la imagendesde el css como background, así que el div queda vacío-->
    <button on:click={register}>Registrar</button>
</body>

<style>
    .logo img{
        height: 200px;
        margin-bottom: 30px;
        margin-top: 40px;
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
</style>