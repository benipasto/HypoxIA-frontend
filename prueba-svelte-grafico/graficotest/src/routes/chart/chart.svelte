<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let chartCanvas: HTMLCanvasElement;
  let chartInstance: Chart | undefined;

  let labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  let data = [65, 59, 80, 81, 56, 55, 40];

  const updateChart = () => {
    if (chartInstance) {
      chartInstance.data.labels = labels;
      chartInstance.data.datasets[0].data = data;
      chartInstance.update();
    }
  };

  onMount(() => {
    chartInstance = new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Mi primer dataset',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: data
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });

  const handleLabelChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target && target.value) {
      labels.push(target.value);
      updateChart();
    }
  };

  const handleDataChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target && target.value) {
      data.push(Number(target.value));
      updateChart();
    }
  };
</script>

<canvas bind:this={chartCanvas} width="400" height="400"></canvas>

<!-- Inputs para actualizar los datos -->
<input type="text" placeholder="Añadir etiqueta" on:change={handleLabelChange}>
<input type="number" placeholder="Añadir dato" on:change={handleDataChange}>