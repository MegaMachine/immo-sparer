var ctx = document.getElementById("myChartOne").getContext('2d');
// var dataLabel = new ChartDataLabels();
Chart.plugins.unregister(ChartDataLabels);
Chart.defaults.global.defaultFontColor = '#292929';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontFamily = 'Poppins-SemiBold';
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1", "5", "10", "15", "20", "25"],
        datasets: [{
            label: '# of Votes',
            data: [377, 19, 3, 5, 2, 3],
            backgroundColor: '#44acd7',
            borderColor: '#44acd7',
            borderWidth: 1
        }]
    },
    plugins: [ChartDataLabels],
    options: {
      display:true,
      plugins: {
        datalabels: {
            color: '#292929',
            anchor:'end',
            align :'top',
            formatter: function(value, context) {
              return value + '$' ;
            }
        }
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
    }
});

