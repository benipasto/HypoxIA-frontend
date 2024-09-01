<script>
  const sendData = async () => {
    const data = {
        SpO2: 95.6,
        Tiempo_Relativo: 123.45
    };

    const response = await fetch("'http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log("Prediction:", result.prediction);
};

sendData();
</script>