<script>
    import { goto } from '$app/navigation';
  
    const goToChart = () => {
      goto('/chart');
    };
  </script>
  
  <main>
    <h1>Gráficos en SvelteKit con Chart.js</h1>
    <button on:click={goToChart}>Ir a Chart</button>
  </main>