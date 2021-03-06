// Ali code

Chart.defaults.font.size =15;

var cntxt = document.getElementById('myChart5');

var KWH = [2.7, 1.25, 2.1, 1.9, 2.6, 2.9, 1.54 ];
var week = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'];

var myChart = new Chart(cntxt, {
    type: 'pie',

   data: {
       labels: week,
      datasets: [{
               label: 'Water verbruik in L',
               data: KWH,
               backgroundColor: [
                    "#3a86d6",
                  "#0b4078",
                  "#2573c4",
                 "#3a86d6",
                   "#0b4078",
                  "#051a30",
                   "#27609c",
                ],
              borderColor: "black",
             borderWidth: 1,
               fill: false,
              lineTension: 0

          }
       ]
  },
  options: {
    plugins:{
      title: {
        display:true,
        text: "Watergebruik in L",
        position: 'top',
      }
    }
  }
});