<script lang="ts">
    let value: number = 50; // Valor inicial
    
    // Calcular la posición de la flecha
    function calculateLeftPosition(value: number): string {
      const maxLeft = 93; // Máximo porcentaje a la derecha
      const minLeft = 0;  // Mínimo porcentaje a la izquierda
      return `${(value / 100) * (maxLeft - minLeft) + minLeft}%`;
    }
</script>
  
<style>
  .container {
    text-align: center;
    margin-top: 40px;
  }

  h2{
    font-weight: 200;
  }

  .barra-container {
    display: flex;
    justify-content: center; /* Centra la barra horizontalmente */
    margin-top: 10px;
  }

.barra {
    width: 80%; /* Ancho del 80% */
    height: 50px;
    background: linear-gradient(to right, #25D615, #DDFD18, #D72D2D);
    position: relative;
    /* border-radius: 10px; */
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
    justify-content: center; /* Centra el control deslizante también */
}
</style>
  
<div class="container">
    <h2>Indicador de Riesgo</h2> <!-- Título arriba de la barra -->

    <div class="barra-container">
        <div class="barra">
            <span>Rango Normal</span> <!-- Texto a la izquierda dentro de la barra -->
            <span>Posible Trastorno Respiratorio</span> <!-- Texto a la derecha dentro de la barra -->
        <div class="flecha" style="left: {calculateLeftPosition(value)};">
            <img src="flecha.png" alt="Flecha indicadora" />
        </div>
        </div>
    </div>

    <div class="slider-container">
        <input type="range" min="0" max="100" bind:value />
        <p>Valor actual: {value}</p>
    </div>
</div>
  