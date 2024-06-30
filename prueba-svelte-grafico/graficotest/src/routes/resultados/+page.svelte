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
    } from 'chart.js';
    import type { ChartConfiguration } from 'chart.js';
    import { goto } from '$app/navigation';
  
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
  
    let spo2: number = 0;
    let tiemposueño: number = 0;
    let flujooxigeno: number = 0;
  
    let myChart: Chart | null = null; // si no ponés que null= null tira error pq no sabe que valor tener cuando es null
  
    export const data = {
      labels: ['SpO2', 'Tiempo de sueño', 'Flujo de oxígeno'],
      datasets: [
        {
          label: 'Valores analizados',
          data: [spo2, tiemposueño, flujooxigeno],
          backgroundColor: [
            'rgba(255, 134, 159, 0.4)', //cambiar color en base a lo que decida bauti
            'rgba(98, 182, 239, 0.4)',
            'rgba(255, 218, 128, 0.4)',
          ],
          borderWidth: 2,
          borderColor: [
            'rgba(255, 134, 159, 1)', //lo mismo acá
            'rgba(98, 182, 239, 1)',
            'rgba(255, 218, 128, 1)',
          ],
        },
      ],
    };
  
    onMount(() => { //"onMount" como dice la función, hace que todo lo que esté entre llaves pase cuando se crea el gráfico
      const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d'); //el getcontext2d no se que es pero funciona xd
      if (ctx) {
        myChart = new Chart(ctx, {
          type: 'bar', //esto es el tipo de chart, hay otros tipos como de pie y gráficos, pero por ahora elegí este
          data: data, 
          options: {
            responsive: true,
            maintainAspectRatio: false, //si no haces esto se cursea todo cuando achicás la ventana
          },
        } as ChartConfiguration);
      }
    });
  
    function updateChart() { //con esto hago que cuando cambie uno de los tres valores de las variables se updatee el gráfico
      if (myChart) {
        myChart.data.datasets[0].data = [spo2, tiemposueño, flujooxigeno];
        myChart.update();
      }
    }
  </script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados</title>
</head>
<body>
    <h2>Carga hipóxica:</h2>
    <div class="chart-container">
        <canvas id="myChart"></canvas>
    </div>
</body>
</html>

<style>
    body{
        margin: 0;
    }
</style>