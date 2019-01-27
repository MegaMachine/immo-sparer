var ctxOne = document.getElementById("myChartOne").getContext('2d');
var ctxTwo = document.getElementById("myChartTwo").getContext('2d');

Chart.plugins.unregister(ChartDataLabels);
Chart.defaults.global.defaultFontColor = '#292929';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontFamily = 'Poppins-SemiBold';

$(window).resize(function(){
    if(window.outerWidth <= 991){
        Chart.defaults.global.defaultFontSize = 12;
        options.layout.padding.left = 10;
        new Chart(ctxOne, {
            type: 'bar',
            data: dataOne,
            plugins: [ChartDataLabels],
            options: options
        });

    }else{
        Chart.defaults.global.defaultFontSize = 14;
        options.layout.padding.left = 20;
        new Chart(ctxOne, {
            type: 'bar',
            data: dataOne,
            plugins: [ChartDataLabels],
            options: options
        });

    }
});

var options = {
    display:true,
    layout: {
        padding: {
            left: 20
        }
    },
    plugins: {
      datalabels: {
          color: '#292929',
          anchor:'end',
          align :'top',
          formatter: function(value, context) {
            return value + ' €' ;
          }
      }
    },
    scales: {
        yAxes: [{  
          ticks: {
              beginAtZero:true,
              callback: function(value, index, values) {
                  return value  + ' €';
              },
          }
        }]
    }
};

var dataOne = {
    labels: ["1", "5", "10", "15", "20", "25"],
    datasets: [{
        label: '# of Votes',
        data: [100000, 19, 3, 5, 2, 3],
        backgroundColor: '#44acd7',
        borderColor: '#44acd7',
        borderWidth: 1
    }]
};

var dataTwo = {
    labels: ["1", "5", "10", "15", "20", "25"],
    datasets: [{
        label: '# of Votes',
        data: [124124, 1231234, 575675,8968678,1235, 4123556],
        backgroundColor: '#44acd7',
        borderColor: '#44acd7',
        borderWidth: 1
    }]
};

var myChartOne = new Chart(ctxOne, {
    type: 'bar',
    data: dataOne,
    plugins: [ChartDataLabels],
    options: options
});

var myChartTwo = new Chart(ctxTwo, {
    type: 'bar',
    data: dataTwo,
    plugins: [ChartDataLabels],
    options: options
});
