
<div class="container">
    <!-- <input type="file" id="fileInput" style="display:none"> -->
    <!-- <button id="selectFile">Insertar PDF</button>
    <p id="fileName"></p> -->
    <input
        bind:value={saturacionOxigeno}
        placeholder="Ingrese saturación de oxígeno"
        type="number"
    />
    <input
        bind:value={tiempoSueno}
        placeholder="Ingrese tiempo de sueño"
        type="number"
    />
    <input
    bind:value={paciente}
    placeholder="Ingrese nombre de paciente"
    type="text"
    />

    <a href="resultados">
        <button on:click={handleAnalyze}>Analizar</button>
    </a>
        
    <h2> <span class="highlight">- Primero</span> rellene las casillas con los valores necesarios.</h2>
    <h2> <span class="highlight">- Segundo</span> aprete el botón de “Analizar” para llevarte a otra pantalla con los resultados del análisis.</h2>
</div>

<script lang="ts">
    let saturacionOxigeno: number; // Saturación de oxígeno
    let tiempoSueno: number; // Tiempo de sueño
    let cargaHipoxica: number; // Carga hipoxica (se actualizará tras recibir datos de la IA)
    let paciente: string;

    const sendToIA = async () => {
        try {
            // simula una pantalla de "cargando" eliminando el valor actual
            localStorage.removeItem("cargaHipoxica");
            
            const response = await fetch("http://127.0.0.1:8000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    saturacionOxigeno,
                    tiempoSueno,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error en la respuesta de la IA: ${response.statusText}`);
            }

            const data = await response.json();
            cargaHipoxica = data.prediction; // Actualiza cargaHipoxica con el valor recibido
            console.log("Carga Hipoxica calculada por IA:", cargaHipoxica);
            localStorage.setItem("cargaHipoxica", JSON.stringify(cargaHipoxica));
        } catch (error) {
            console.error("Error al enviar los datos a la IA:", error);
        }
    };

    const sendData = async () => {
        const doctorId = JSON.parse(localStorage.getItem("user") ?? "{}").id;

        try {
            const response = await fetch("/api/results", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    saturacionOxigeno,
                    tiempoSueno,
                    cargaHipoxica, // Ya tiene el valor calculado por la IA
                    paciente,
                    doctorId,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error en la respuesta del backend: ${response.statusText}`);
            }

            console.log("Datos enviados al backend correctamente.");

        } catch (error) {
            console.error("Error al enviar los datos al backend:", error);
        }
    };

    const handleAnalyze = async () => {
        await sendToIA(); // Obtiene cargaHipoxica desde la IA
        if (cargaHipoxica !== undefined) {
            await sendData(); // Envía los datos al backend
            console.log("Datos procesados y enviados.");
        } else {
            console.error("No se pudo calcular cargaHipoxica. Operación abortada.");
        }
    };
</script>

<style>

    *{
        margin: 5px;
    }

    .container{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 20px 30px;
        justify-content: center;
        margin-top: 15px;
    }
    .container button{
        padding: 10px 40px;
        background-color: #27A69E;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 10px;
        font-size: 30px;
    }
    button:hover{
        background-color: #1B7B75;
    }
    h2{
        margin-top: 30px;
        flex-direction: column;
        font-size: 24px;
        font-weight: 500;
    }
    .highlight{
        color: #000000;
        font-weight: bold;
    }
    p{
        font-size: large;
    }
    input{
        border-color: #27A69E;
        padding: 15px 20px;
        background-color: #DDE0E0;
        border-radius: 25px;
        margin-bottom: 20px;
        font-size: 18px;
        box-sizing: border-box;
        width: 600px;
        box-shadow: none;
        border-style:solid;
    }
    input::placeholder{
        font-size: 18px;
        grid: center;
    }
    input:focus {
    border-color: #1F807A; /* Color más oscuro para el enfoque */
    outline: none;
    }

</style>