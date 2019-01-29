var chartsData;
var urlCharts = 'http://localhost:3000/json/charts-data.json';
var ctxOne;
var ctxTwo;
var myChartOne;
var myChartTwo;
var dataOne;
var dataTwo;
var options;

$(document).ready(function () {
    // var myChartOne;
    // var myChartTwo;
    
   
    ctxOne = document.getElementById("myChartOne").getContext('2d');
    ctxTwo = document.getElementById("myChartTwo").getContext('2d');
    Chart.plugins.unregister(ChartDataLabels);
    Chart.defaults.global.defaultFontColor = '#292929';
    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontFamily = 'Poppins-SemiBold';
    options = {
        display: true,
        layout: {
            padding: {
                left: 20
            }
        },
        plugins: {
            datalabels: {
                color: '#292929',
                anchor: 'end',
                align: 'top',
                formatter: function (value, context) {
                    return value + ' €';
                }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value, index, values) {
                        return value + ' €';
                    },
                }
            }]
        }
    };
    $(window).resize(function () {
        if (window.outerWidth <= 991) {
            Chart.defaults.global.defaultFontSize = 12;
            options.layout.padding.left = 10;
            new Chart(ctxOne, {
                type: 'bar',
                data: dataOne,
                plugins: [ChartDataLabels],
                options: options
            });

        } else {
            Chart.defaults.global.defaultFontSize = 14;
            options.layout.padding.left = 20;
            new Chart(ctxOne, {
                type: 'bar',
                data: dataTwo,
                plugins: [ChartDataLabels],
                options: options
            });

        }
    });
    $.when(getButtonData(urlCharts)).done(initsCharts(chartsData.label, chartsData.chart[0].data1, chartsData.chart[0].data2 ));
    var chartsButtonsContainer = $('.charts__buttons');
    for(var i = 0; i < chartsData.percents.length; i++){
        var button = document.createElement('button');
        button.value = chartsData.percents[i];
        button.classList.add('button');
        button.classList.add('red');
        $(button).html('<span>' + chartsData.percents[i] + '%</span>');
        $(button).appendTo(chartsButtonsContainer);
        button.addEventListener('click', function(){
            getButtonData(urlCharts);
            initsCharts(chartsData.label, chartsData.chart[1].data1, chartsData.chart[1].data2 )
        });
    }
});

function getButtonData(url){
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        async: false, // Забрати коли будеш на бек-енд стукатись
        success: function success(data) {
            chartsData = data;
            console.log(chartsData);
        },
        error: function error(_error) {
            console.log('error: ', _error);
        }
    });
};

function initsCharts(labels, data1, data2 ){
    dataOne = {
        labels: labels || chartsData.label,
        datasets: [{
            data:data1 || chartsData.chart[0].data1,
            backgroundColor: '#44acd7',
            borderColor: '#44acd7',
            borderWidth: 1
        }]
    };
    dataTwo = {
        labels: labels ||  chartsData.label,
        datasets: [{
            data: data2 || chartsData.chart[0].data2,
            backgroundColor: '#44acd7',
            borderColor: '#44acd7',
            borderWidth: 1
        }]
    };
    myChartOne = new Chart(ctxOne, {
        type: 'bar',
        data: dataOne,
        plugins: [ChartDataLabels],
        options: options
    });   
    myChartTwo = new Chart(ctxTwo, {
        type: 'bar',
        data: dataTwo,
        plugins: [ChartDataLabels],
        options: options
    });
}