
<div class="container">
    <!-- <input type="file" id="fileInput" style="display:none"> -->
    <!-- <button id="selectFile">Insertar PDF</button>
    <p id="fileName"></p> -->
    <input
        bind:value={saturacionOxigeno}
        placeholder="Ingresa tu saturación de oxígeno"
        type="number"
    />
    <input
        bind:value={tiempoSueno}
        placeholder="Ingresa tu tiempo de sueño"
        type="number"
    />
    <input
        bind:value={cargaHipoxica}
        placeholder="Ingresa tu carga hipoxica (re troll)"
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
        
    <h2> <span class="highlight">- Primero</span> aprete el botón de “Insertar PDF” para adjuntar el archivo pdf con los resultados clínicos.</h2>
    <h2> <span class="highlight">- Segundo</span> aprete el botón de “Analizar” para llevarte a otra pantalla con los resultados del análisis.</h2>
</div>

<script lang="ts">
    let saturacionOxigeno: number; // Saturación de oxígeno
    let tiempoSueno: number; // Tiempo de sueño
    let cargaHipoxica: number; // Carga hipoxica (calculada por la IA)
    let paciente: string;

    const sendData = async () => {
        const doctorId = JSON.parse(localStorage.getItem('user') ?? "{}").id;
        await fetch("/api/results", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                saturacionOxigeno,
                tiempoSueno,
                cargaHipoxica,
                paciente,
                doctorId,
            }),
        });
    };

    const sendToIA = async (): Promise<number> => {
        try {
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
                throw new Error(`Error en la respuesta: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Respuesta del servidor (IA):", data.prediction);
            return data.prediction.prediction; // Asume que este es el valor de cargaHipoxica
        } catch (error) {
            console.error("Error al enviar los datos a la IA:", error);
            throw error; // Lanza el error para manejarlo en el flujo principal
        }
    };

    // Nueva función para manejar ambas acciones
    const handleAnalyze = async () => {
        try {
            // Obtén el valor de cargaHipoxica desde la IA
            cargaHipoxica = await sendToIA();

            // Ahora envía todos los datos al backend
            await sendData();
            console.log("Ambas operaciones completadas.");
        } catch (error) {
            console.error("Error en el proceso de análisis:", error);
            alert("Hubo un error durante el análisis. Por favor, intenta nuevamente.");
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
        padding: 20px 40px;
        background-color: #27A69E;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 20px;
        font-size: 30px;
    }
    button:hover{
        background-color: #1B7B75;
    }
    h2{
        margin-top: 50px;
        flex-direction: row;
        padding: 0px 0px;
    }
    .highlight{
        color: #FF5757;
    }
    p{
        font-size: large;
    }

</style>