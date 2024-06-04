<script lang="ts">
  import { onMount } from 'svelte';
  import {
    Chart,
    LineController,
    LineElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import type { ChartConfiguration } from 'chart.js';

  Chart.register(LineController, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

  let spo2: number[] = [0]; // Datos de SpO2 como array
  let tiemposueño: number[] = [0]; // Datos de Tiempo de sueño como array
  let flujooxigeno: number[] = [0]; // Datos de Flujo de oxígeno como array

  let myChart: Chart | null = null;

  const data = {
    labels: ['SpO2', 'Tiempo de sueño', 'Flujo de oxígeno'],
    datasets: [
      {
        label: 'SpO2',
        data: spo2,
        backgroundColor: 'rgba(255, 134, 159, 0.4)',
        borderColor: 'rgba(255, 134, 159, 1)',
        borderWidth: 2,
      },
      {
        label: 'Tiempo de sueño',
        data: tiemposueño,
        backgroundColor: 'rgba(98, 182, 239, 0.4)',
        borderColor: 'rgba(98, 182, 239, 1)',
        borderWidth: 2,
      },
      {
        label: 'Flujo de oxígeno',
        data: flujooxigeno,
        backgroundColor: 'rgba(255, 218, 128, 0.4)',
        borderColor: 'rgba(255, 218, 128, 1)',
        borderWidth: 2,
      },
    ],
  };

  onMount(() => {
    const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      myChart = new Chart(ctx, {
        type: 'bar', // Cambiar el tipo de gráfico a lineal
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      } as ChartConfiguration);
    }
  });

  function updateChart() {
    if (myChart) {
      myChart.data.datasets[0].data = spo2;
      myChart.data.datasets[1].data = tiemposueño;
      myChart.data.datasets[2].data = flujooxigeno;
      myChart.update();
    }
  }
</script>

<style>
  .chart-container {
    width: 80%;
    height: 400px;
  }
</style>

<div>
  <label>
    SpO2:
    <input type="number" bind:value={spo2[0]} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <label>
    Tiempo de sueño:
    <input type="number" bind:value={tiemposueño[0]} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <label>
    Flujo de oxígeno:
    <input type="number" bind:value={flujooxigeno[0]} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
</div>

<div class="chart-container">
  <canvas id="myChart"></canvas>
</div>
