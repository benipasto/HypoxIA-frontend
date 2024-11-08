<script lang="ts">
    let value: number = 50; // Valor inicial
    
    // Calcular la posición de la flecha
    function calculateLeftPosition(value: number): string {
      const maxLeft = 95; // Máximo porcentaje a la derecha
      const minLeft = 5;  // Mínimo porcentaje a la izquierda
      return `${(value / 100) * (maxLeft - minLeft) + minLeft}%`;
    }
  </script>
  
  <style>
    .barra {
      width: 100%;
      height: 30px;
      background: linear-gradient(to right, green, yellow, red);
      position: relative;
      border-radius: 10px;
      margin-top: 50px;
    }
    .flecha {
      position: absolute;
      bottom: -30px;
      transition: left 0.3s ease;
    }
    .flecha img {
      width: 30px;
    }
    .slider-container {
    margin-top: 20px; /* Ajusta la distancia entre la barra y el control deslizante */
  }
  </style>
  
  <div class="barra">
    <div class="flecha" style="left: {calculateLeftPosition(value)};">
      <img src="flecha.png" alt="Flecha indicadora" />
    </div>
  </div>
  
  <div class="slider-container">
    <input type="range" min="0" max="100" bind:value />
    <p>Valor actual: {value}</p>
  </div>
  