<script lang="ts">
  import { onMount } from 'svelte';

  // Define la interfaz para representar la estructura de datos del backend
  interface Example {
    id: number;
    paciente: string;
    SaturacionOxigeno: number;
    FlujoOxigeno: number;
    TiempoSueno: number;
  }

  let examples: Example[] = [];

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3000/api/examples');
      examples = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
</script>

<h1>Datos recibidos desde el back-end:</h1>
<ul>
  {#each examples as example}
    <li>
      <p>Id: {example.id}</p>
      <p>Paciente: {example.paciente}</p>
      <p>Saturación de oxígeno: {example.SaturacionOxigeno}</p>
      <p>Flujo de oxígeno: {example.FlujoOxigeno}</p>
      <p>Tiempo de sueño: {example.TiempoSueno}</p>
    </li>
  {/each}
</ul>