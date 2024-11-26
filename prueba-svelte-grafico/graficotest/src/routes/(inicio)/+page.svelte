<body>
    <div class="hero">
        <div class="infohero">
            <h1>Cargá tu Análisis</h1>
            <h4>Haga Click en el botón de <span class="highlight">Análisis</span><br>para cargar el pdf con los datos</h4>
            <a href="/analisis">
                <button>Análisis</button>
            </a>
        </div>
        <div class="vectorHERO"><img src="vectorhero.png" alt="vector"></div>
    </div>

    <div class="cargashipoxicas">
        <div class="imgCA">
            <div class="lineasuperior"></div>
            <img src="cargahipoxicainfo.png" alt="cargahipoxicaimg">
            <div class="circle"></div>
        </div>
        <div class="infoCA">
            <h1>¿Qué son las cargas hipóxicas?</h1>
            
            <p>La carga hipóxica es una cifra que da un aproximado más cercano que las medidas de apneas actuales (el Índice de apnea-hipnopea o AHI y el Índice de Desaturación de Oxígeno o ODI).</p>
            <h3>¡Es importante estar al <br> día con tu análisis!</h3>
            <div class="lineainferior"></div>
        </div>  
    </div>

    <div class="hypoxia">
        <h1>¿Qué es HypoxIA?</h1>
        <div class="infocontainer">
            <div class="infoIA-1">
                <h2>NUESTRA MISIÓN</h2>
                <p>Queremos ayudar a calcular la <span class="highlight">carga hipóxica</span> para facilitar y mejorar el diagnostico de las personas que tienen apneas de sueño.</p>
            </div>
            <div class="infoIA-2">
                <h2>NUESTRO APORTE</h2>
                <p>La "carga hipóxica" <span class="highlight">predice con mejor precisión</span> la mortalidad por ECV (enfermedades cardiovasculares) en todas las poblaciones. Creamos HypoxIA para facilitar la vida de los médicos, la tuya y la de tus seres queridos.</p>
            </div>
        </div>
        <div class="zzz"><img src="zzz.png" alt="zzz"></div>
    </div>

    <div class="consecuencias">
        <div class="contenido">
            <div class="cartas">
                <div class="linea"></div>
                <div class="carta">
                    <p> <span class="highlight">●</span> Despertarse durante la noche, jadear o asfixiarse</p>
                </div>
                <div class="carta">
                    <p> <span class="highlight">●</span> Dolores de cabeza por la mañana</p>
                </div>
                <div class="carta">
                    <p> <span class="highlight">●</span> Problemas de concentración durante el día.</p>
                </div>
                <div class="carta">
                    <p> <span class="highlight">●</span> Somnolencia diurna excesiva</p>
                </div> 
            </div>
            <div class="imagen-titulo">
                <div class="titulos">
                    <h1>Consecuencias</h1>
                    
                    <h3>¿Qué pasa si no tratamos las apneas del sueño?</h3> 
                </div>
                <img src="consecuencias.png" alt="apneasueño">
            </div>
        </div>
    </div>       
   
    <div class="sobrenosotros">
        <div class="imgsobrenosotros"><img src="vectorhero.png" alt=""></div>
        <div class="info">
        <h1>Sobre Nosotros</h1>
        <p>Somos un grupo de cuatro estudiantes, los cuáles teníamos ganas de hacer un proyecto relacionado al sector de la salud, así nace HypoxIA. Buscamos problemas existentes que no tengan solución o si tenían, una forma de mejorarlas. Así se nos ocurre trabajar con las cargas hipóxicas, que investigamos con la ayuda de distintos profesionales</p>
        </div>
    </div>

    <div class="casifooter">
        <h1>¡Esperamos tu análisis!</h1>
    </div>
</body>


<style>
    body{
        padding: 0;
        margin: 0;
        background-color: #DDE0E0;
        overflow-x: hidden;
    }
    /* H1=TURQUESA
    H2=ROJO
    H3=TURQUESA 
    p= NEGRO
    highlight=ROJO*/
    h1{
        color: #27A69E;
        font-size: 60px;
    }
    h2{
        color:#FF5757;
    }
    h3{
        color: #27A69E;
    }
    
    /* HERO */

    .hero{
        height: 35rem;
        display: flex;
        margin-top: 75px;
        padding: 0px;
    }
    .vectorHERO{
        flex: 0 1 50%;
        margin-top: 50px;
    }
    .vectorHERO img{
        max-width: 100%; 
        height: auto;
    }
    .infohero{
        max-width: 90rem;
        margin: 0 auto;
        flex: 1;
        margin-left: 100px;
        margin-top: 80px;
        /* padding: 7rem 8rem; */
    }
    .infohero h1{
        font-size: 60px;
    }
    .infohero h4{
        font-size: 25px;
        font-weight: 100;
    }
    h4 .highlight{
        font-weight: 600;
    }
    .infohero button{
        padding: 12px 30px;
        background-color: #27A69E;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 25px;
    }

    /* CARGAS HIPÓXICAS */

    .cargashipoxicas {
        height: 50rem;
        display: flex;
        margin-top: 0px;
        padding: 0px;
    }
    .infoCA {
        width: 70%;
        margin-left: 180px;
    }
    .infoCA h1{
        margin-top: 10px;
    }
    .infoCA p{
        font-size: 30px;
        width: 55%;
        padding-top: 20px;
    }
    .infoCA h3{
        font-size: 30px;
        font-weight: 600;
        margin-top: 120px;
        color: black;
        font-style: italic;
    }
    .imgCA {
        width: 30%;
        padding-left: 100px; /* Para dar espacio entre el texto y la imagen */
        padding-top: 145px;
        position: relative; /* Necesario para posicionar el círculo en relación con el contenedor */
        display: inline-block; 
    }
    .imgCA img {
        width: 100%; /* Para asegurar que la imagen ocupe todo el ancho de su contenedor */
        height:auto; /* Para mantener la proporción */
        display: block; /* Elimina el espacio en blanco debajo de la imagen */
    }
    .circle {
        position: absolute; /* Posiciona el círculo en relación con el contenedor */
        bottom: -20px; /* Ajusta la posición vertical del círculo */
        left: 20px; /* Ajusta la posición horizontal del círculo */
        width: 250px; /* Ancho del círculo */
        height: 250px; /* Alto del círculo */
        background-color: transparent; /* Color de fondo del círculo */
        border: 4px solid #008080; /* Color y grosor del borde */
        border-radius: 50%; /* Hace que el div sea un círculo */
    }
    .lineasuperior{
        border-top: 4px solid #27A69E;
        height: 2px;
        max-width: 900px;
        padding: 0;
        margin: 20px auto 0 auto;
        margin-bottom: 20px;
        margin-right: -500px;
    }
    .lineainferior{
        border-top: 4px solid #27A69E;
        height: 2px;
        max-width: 800px;
        padding: 0;
        margin: 20px auto 0 auto;

    }

    /* HYPOXIA */

    .hypoxia{
        height: 40rem;
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        margin-left: 100px;
        padding: 0px;
        position: relative;
    }
    .infocontainer {
        display: flex;
        align-items: flex-start; /* Alinea los elementos en la parte superior */
        gap: 70px; /* Espacio entre los elementos */
    }
    .infocontainer p{
        font-size: 30px;
        line-height: 1.5; /* Ajusta la altura de la línea de texto */
    }
    .infocontainer h2{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 20px;
        font-weight: 600;
    }
    .infoIA-1 {
        flex: 1; /* Hace que los elementos ocupen el mismo ancho */
        max-width: 30%; /* Limita el ancho máximo de cada elemento */
        padding: 20px;
    }
    .hypoxia .highlight{
        font-weight: 600;
    }
    .infoIA-2 {
        flex: 1; /* Hace que los elementos ocupen el mismo ancho */
        max-width: 45%; /* Limita el ancho máximo de cada elemento */
        padding: 20px;
    }
    .zzz{
        position: absolute; /* Posiciona el círculo en relación con el contenedor */
        width: 250px; /* Ancho del círculo */
        height: 250px; /* Alto del círculo */
        background-color: transparent; /* Color de fondo del círculo */
        right: -70px;
        opacity: 0.2;
    }

    /* CONSECUENCIAS */
    .consecuencias {
    margin: auto;
    padding: 20px;

    }

    .contenido {
        display: flex;
        align-items: flex-start; /* Alinea el contenido al inicio */
    }

    .cartas {
        flex-basis: 40%;  /* Ajusta el espacio ocupado por la lista */
        padding-right: 20px;
        padding-top: 120px;
        
    }

    .carta {
        margin-bottom: 75px;
        margin-top: 20px;
        width: 75%;
        margin-left: 100px;
    }

    .carta p {
        font-size: 32px;
        display: flex;
        align-items: center;
    }

    .consecuencias .highlight {
        color: #FF5757;
        font-size: 1.5em;
        margin-right: 70px;
    }

    .imagen-titulo {
        flex-basis: 30%;  /* Ajusta el espacio ocupado por la imagen */
        text-align: left;
        margin-left: 30px;
    }

    .titulos {
        margin-bottom: 80px;
    }

    .titulos h1 {
        margin-bottom: 5px;
    }

    .cartas .linea {
        border-top: 4px solid #27A69E;
        height: 2px;
        max-width: 900px;
        padding: 0;
        margin-bottom: 200px;
        margin-left:-20px;
        margin-right: -160px;
    }

    .titulos h3 {
        font-size: 30px;
        font-weight: 200;
        margin-top: 70px;
    }

    .imagen-titulo img {
        width: 100%;
        height: auto;
    }

/* SOBRE NOSOTROS */

    .sobrenosotros {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .info {
        max-width: 55%;
        margin-left: 50px;
    }
    .info p{

        font-size: 32px;
        margin-top: 60px;
        margin-right: 50px;
    }

    .imgsobrenosotros img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        .sobrenosotros {
            flex-direction: column;
            align-items: center;
        }

        .info {
            max-width: 100%;
            text-align: center;
            margin-bottom: 20px;
        }

        .imgsobrenosotros img {
            max-width: 80%;
        }
    }

/* CASIFOOTER */

    .casifooter {
        padding: 50px 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-style: italic;
        font-weight: 600;
    }

</style>
