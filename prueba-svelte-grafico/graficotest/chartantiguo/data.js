const spo2 = 0;
const tiemposueño = 0;
const flujooxigeno = 0;

export const data = {
  labels: ['SpO2', 'Tiempo de sueño', 'Flujo de oxígeno'],
  datasets: [
    {
      label: 'Valores analizados',
      data: [spo2, tiemposueño, flujooxigeno],
      backgroundColor: [
        'rgba(255, 134,159,0.4)', //tengo q cambiar los colores de esto en base a lo que quiera bauti
        'rgba(98,  182, 239,0.4)',
        'rgba(255, 218, 128,0.4)',
      ],
      borderWidth: 2,
      borderColor: [
        'rgba(255, 134, 159, 1)',
        'rgba(98,  182, 239, 1)',
        'rgba(255, 218, 128, 1)',
      ],
    },
  ],
};
