<script lang="ts">
  let cargaHipoxica: number = 0; // Valor inicial obtenido del servidor

  // Calcular la posición de la flecha
  function calculateLeftPosition(cargaHipoxica: number): string {
      const maxLeft = 96; // Máximo porcentaje a la derecha
      const minLeft = -2; // Mínimo porcentaje a la izquierda
      return `${(cargaHipoxica / 100) * (maxLeft - minLeft) + minLeft}%`;
  }

  // Función para obtener el mensaje y la clase de color según el valor
  function getMessage(cargaHipoxica: number): { message: string; colorClass: string; description: string } {
      if (cargaHipoxica < 30) {
          return {
              message: "Riesgo bajo",
              colorClass: "bajo",
              description: "El riesgo de complicaciones es bajo. Mantener un estilo de vida saludable puede prevenir futuros problemas.",
          };
      } else if (cargaHipoxica >= 30 && cargaHipoxica < 60) {
          return {
              message: "Riesgo moderado",
              colorClass: "moderado",
              description: "El riesgo es moderado. Se recomienda realizar chequeos periódicos y mantener hábitos saludables.",
          };
      } else if (cargaHipoxica >= 60 && cargaHipoxica < 90) {
          return {
              message: "Riesgo alto",
              colorClass: "alto",
              description: "El riesgo es alto. Consultar con un médico para evaluar posibles tratamientos o medidas preventivas.",
          };
      } else {
          return {
              message: "Riesgo muy alto",
              colorClass: "muy-alto",
              description: "El riesgo es muy alto. Es crucial buscar atención médica inmediata para evitar complicaciones graves.",
          };
      }
  }

  // Función para obtener el valor de cargaHipoxica desde el servidor
  async function fetchCargaHipoxica() {
      try {
          const response = await fetch("http://127.0.0.1:8000/predict", {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },
          });

          if (!response.ok) {
              throw new Error(`Error en la respuesta: ${response.statusText}`);
          }

          const data = await response.json();
          cargaHipoxica = data.cargaHipoxica; // Asignar el valor recibido
          console.log("Carga Hipóxica recibida:", cargaHipoxica);
      } catch (error) {
          console.error("Error al obtener la carga hipóxica:", error);
      }
  }

  // Llamar a fetchCargaHipoxica cuando el componente se monte
  import { onMount } from "svelte";
  onMount(fetchCargaHipoxica);
</script>

<style>
  /* Estilos iguales al código original */
</style>

<div class="container">
  <h2>Indicador de Riesgo</h2>

  <div class="barra-container">
      <div class="barra">
          <span>Rango Normal</span>
          <span>Posible Trastorno Respiratorio</span>
          <div class="flecha" style="left: {calculateLeftPosition(cargaHipoxica)};">
              <img src="flecha.png" alt="Flecha indicadora" />
          </div>
      </div>
  </div>

  <div class="slider-container">
      <p>Valor actual: {cargaHipoxica}</p>
  </div>

  <!-- Texto fijo con el mensaje dinámico -->
  <p class="riesgo-actual">Riesgo actual: <span class="{getMessage(cargaHipoxica).colorClass}">{getMessage(cargaHipoxica).message}</span></p>

  <!-- Descripción dinámica según el valor -->
  <p class="descripcion">{getMessage(cargaHipoxica).description}</p>
</div>
