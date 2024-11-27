<script lang="ts">
    // Recuperar el mail del usuario logueado desde localStorage
    let userMail: string = localStorage.getItem('mail') || '';
</script>

<style>
    .container {
        font-family: Arial, sans-serif;
        margin: 0 auto;
        max-width: 800px;
        padding: 20px;
    }

    .link {
        margin: 0 0px;
        text-decoration: none;
        color: #007acc;
        font-size: 16px;
    }

    .link:hover {
        text-decoration: underline;
    }
    
    .menu {
        margin-top: 20px;
    }

    .menu-title {
        font-size: 24px;
        text-align: center;
        border-bottom: 2px solid #27A69E;
        margin-bottom: 20px;
    }

    .menu-items {
        max-height: 300px; /* Altura máxima del scroll */
        overflow-y: auto;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px;
    }

    .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-bottom: 10px;
        background-color: #CACACA;
        border-radius: 12px;
        border: 2px solid #27A69E;
    }

    .menu-item:hover {
        background-color: #e8f8ff;
    }

    .scrollbar {
        overflow-y: scroll;
    }
</style>

<div class="container">

    <div class="user-info">
        <p><strong>Mail:</strong></p>
        <p>{userMail}</p>
        <a href="/login" class="link">Si desea cambiar de usuario, haga click aquí</a>
    </div>

    <div class="menu">
        <h2 class="menu-title">Historial</h2>
        <div class="menu-items scrollbar">
            <div class="menu-item">
                <span>Análisis paciente Pablo Pérez</span>
                <span>7/8/2024</span>
            </div>
            <div class="menu-item">
                <span>Análisis paciente Pablo Pérez</span>
                <span>7/8/2024</span>
            </div>
            <div class="menu-item">
                <span>Análisis paciente Pablo Pérez</span>
                <span>7/8/2024</span>
            </div>
        </div>
    </div>
</div>
