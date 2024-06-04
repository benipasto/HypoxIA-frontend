<script lang="ts">
  import { onMount } from 'svelte';
  import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    LineController,
    LineElement,
    PointElement
  } from 'chart.js';
  import type { ChartConfiguration } from 'chart.js';
  import {goto} from '$app/navigation';

  // registrar los componentes necesarios de chart.js pq sino no funcionan
  Chart.register(
    Title,
    Tooltip,
    Legend,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    BarController,
    BarElement
  );
  let spo2h1: number=0;
  let spo2h2: number=0;
  let spo2h3: number=0;
  let spo2h4: number=0;
  let spo2h5: number=0;
  let spo2h6: number=0;
  let spo2h7: number=0;
  let spo2h8: number=0;

  //datos para el gráfico
  export const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'], //esto desps debería ser modificable en base a las horas dormidas
    datasets: [
      {
        label: 'spO2',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(225, 204, 230, .3)',
        borderColor: 'rgb(205, 130, 158)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(205, 130, 158)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [spo2h1, spo2h2, spo2h3, spo2h4, spo2h5, spo2h6, spo2h7, spo2h8],
      }
    ],
  };


  //definir el gráfico y montarlo cuando el componente se monte
  let myChart: Chart | null = null;
  onMount(() => {
    const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      } as ChartConfiguration);
    }
  });

  function updateChart() { //con esto hago que cuando cambie uno de los ocho valores de las variables se updatee el gráfico
    if (myChart) {
      myChart.data.datasets[0].data = [spo2h1, spo2h2, spo2h3, spo2h4, spo2h5, spo2h6, spo2h7, spo2h8 ];
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
    SpO2h1:
    <input type="number" bind:value={spo2h1} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <label>
    SpO2h2:
    <input type="number" bind:value={spo2h2} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <label>
    SpO2h3:
    <input type="number" bind:value={spo2h3} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <label>
    SpO2h4:
    <input type="number" bind:value={spo2h4} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <label>
    SpO2h5:
    <input type="number" bind:value={spo2h5} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <label>
    SpO2h6:
    <input type="number" bind:value={spo2h6} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <label>
    SpO2h7:
    <input type="number" bind:value={spo2h7} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <label>
    SpO2h8:
    <input type="number" bind:value={spo2h8} on:keydown={(e) => e.key === 'Enter' && updateChart()} />
  </label>
  <button on:click={() => goto('/graficobarra')}>Ir a gráfico de barra</button>
</div>


<div class="chart-container">
  <canvas id="myChart"></canvas>
</div>