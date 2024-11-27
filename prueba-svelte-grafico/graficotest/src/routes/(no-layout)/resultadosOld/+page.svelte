<script>
    import Graficolinea from "../../../components/graficolinea.svelte";
</script>

<body>
<div class="container">
    <h2>Carga hipóxica:</h2>
    <div class="grafico">
        <Graficolinea/>
    </div>
</div>
</body>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }
    h2{
        margin-bottom: 20px;
    }
    body {
        height: 100%;
        width: 100%;
        background-color: #DDE0E0
    }
    .container{
        margin-left: 25px;
        margin-top: 30px;
    }
</style>