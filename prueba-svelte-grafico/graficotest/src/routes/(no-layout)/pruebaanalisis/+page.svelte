<script lang="ts">
    let value: number = 50; // Valor inicial
    
    // Calcular la posición de la flecha
    function calculateLeftPosition(value: number): string {
      const maxLeft = 93; // Máximo porcentaje a la derecha
      const minLeft = 0;  // Mínimo porcentaje a la izquierda
      return `${(value / 100) * (maxLeft - minLeft) + minLeft}%`;
    }

    // Función para obtener el mensaje y la clase de color según el valor
    function getMessage(value: number): { message: string, colorClass: string, description: string } {
      if (value < 30) {
        return { 
          message: "Riesgo bajo", 
          colorClass: "bajo", 
          description: "El riesgo de complicaciones es bajo. Mantener un estilo de vida saludable puede prevenir futuros problemas."
        };
      } else if (value >= 30 && value < 60) {
        return { 
          message: "Riesgo moderado", 
          colorClass: "moderado", 
          description: "El riesgo es moderado. Se recomienda realizar chequeos periódicos y mantener hábitos saludables."
        };
      } else if (value >= 60 && value < 90) {
        return { 
          message: "Riesgo alto", 
          colorClass: "alto", 
          description: "El riesgo es alto. Consultar con un médico para evaluar posibles tratamientos o medidas preventivas."
        };
      } else {
        return { 
          message: "Riesgo muy alto", 
          colorClass: "muy-alto", 
          description: "El riesgo es muy alto. Es crucial buscar atención médica inmediata para evitar complicaciones graves."
        };
      }
    }
</script>

<style>
  .container {
    text-align: center;
    margin-top: 40px;
  }

  h2 {
    font-weight: 200;
  }

  .barra-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .barra {
    width: 80%;
    height: 50px;
    background: linear-gradient(to right, #25D615, #DDFD18, #D72D2D);
    position: relative;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    color: black;
    font-weight: 500;
    font-size: 16px;
  }

  .flecha {
    position: absolute;
    bottom: -70px;
    left: 0;
    transition: left 0.3s ease;
  }

  .flecha img {
    width: 70px;
  }

  .slider-container {
    margin-top: 80px;
    display: flex;
    justify-content: center;
  }

  /* Clases de color según el riesgo */
  .bajo {
    color: #25D615; /* Verde */
  }

  .moderado {
    color: #DDFD18; /* Amarillo */
  }

  .alto {
    color: #D72D2D; /* Rojo */
  }

  .muy-alto {
    color: #B10000; /* Rojo intenso */
  }

  /* Estilo para el texto "Riesgo actual" */
  .riesgo-actual {
    font-size: 2rem;
    font-weight: 700;
  }

  /* Estilo para los párrafos de descripción */
  .descripcion {
    font-size: 1.1rem;
    color: #333;
    margin-top: 10px;
    font-weight: 300;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<div class="container">
    <h2>Indicador de Riesgo</h2>

    <div class="barra-container">
        <div class="barra">
            <span>Rango Normal</span>
            <span>Posible Trastorno Respiratorio</span>
            <div class="flecha" style="left: {calculateLeftPosition(value)};">
                <img src="flecha.png" alt="Flecha indicadora" />
            </div>
        </div>
    </div>

    <div class="slider-container">
        <input type="range" min="0" max="100" bind:value />
        <p>Valor actual: {value}</p>
    </div>

    <!-- Texto fijo con el mensaje dinámico -->
    <p class="riesgo-actual">Riesgo actual: <span class="{getMessage(value).colorClass}">{getMessage(value).message}</span></p>

    <!-- Descripción dinámica según el valor -->
    <p class="descripcion">{getMessage(value).description}</p>
</div>
