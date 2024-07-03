
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HypoxIA</title>
</head>
<body>
    <div class="container">
        <input type="file" id="fileInput" style="display:none">
        <button id="selectFile">Insertar PDF</button>
        <p id="fileName"></p>
        <a href="resultados">
            <button class="analizar">Analizar</button>
        </a>
            
        <h2> <span class="highlight">- Primero</span> aprete el botón de “Insertar PDF” para adjuntar el archivo pdf con los resultados clínicos.</h2>
        <h2> <span class="highlight">- Segundo</span> aprete el botón de “Analizar” para llevarte a otra pantalla con los resultados del análisis.</h2>
    </div>
</body>

<script lang='ts'>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const customButton = document.getElementById('selectFile');
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      const fileNameElement = document.getElementById('fileName');
      
      if (customButton&&fileInput&&fileNameElement){
      customButton.addEventListener('click', function() {
        fileInput.click();
      });
  
      fileInput.addEventListener('change', function() {
        const files = fileInput.files;
        const fileName = files ? files[0].name : '';
        fileNameElement.textContent = fileName;
        });
    }
    });
</script>
  

<style>
    .container{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 40px 30px;
        justify-content: center;
    }
    .container button{
        padding: 20px 40px;
        background-color: #27A69E;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 20px;
        font-size: 30px;
    }
    button:hover{
        background-color: #1B7B75;
    }
    h2{
        margin-top: 50px;
        flex-direction: row;
        padding: 0px 0px;
    }
    .highlight{
        color: #FF5757;
    }
    p{
        font-size: large;
    }
</style>