Chart.plugins.unregister(ChartDataLabels);
Chart.defaults.global.defaultFontColor = '#292929';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontFamily = 'Poppins-SemiBold';

var chartsData;
var urlCharts = 'http://localhost:3000/json/';



$(document).ready(function () {

    $.when(getButtonData(urlCharts,'1')).done(function(){
        initsCharts(chartsData.label, chartsData.chart[0].data1, chartsData.chart[0].data2);
    });
   
   
    
    $(window).resize(function () {
        if (window.outerWidth <= 991) {

        } else {

        }
    });

   
    var chartsButtonsContainer = $('.charts__buttons');
    for(var i = 0; i < chartsData.percents.length; i++){
        var button = null;
        button = document.createElement('button');
        button.value = chartsData.percents[i];
        button.classList.add('button');
        button.classList.add('red');
        $(button).html('<span>' + chartsData.percents[i] + '%</span>');
        $(button).appendTo(chartsButtonsContainer);
    }

   $('.charts__buttons button').click(function(){
       $.when(getButtonData(urlCharts, $(this).val())).done(function(){
        initsCharts(chartsData.label, chartsData.chart[0].data1, chartsData.chart[0].data2);
       });
   });

   $('.charts__block__item.one .charts__block__item__input input').change(function(){
        $.when(getButtonData(urlCharts  + 'chart-input-one', $(this).val())).done(function(){
            initsCharts(chartsData.label, chartsData.chart[0].data1, chartsData.chart[0].data2);
        });
    });

   $('.charts__block__item.two .charts__block__item__input input').change(function(){
        $.when(getButtonData(urlCharts + 'chart-input-two', $(this).val())).done(function(){
            initsCharts(chartsData.label, chartsData.chart[0].data1, chartsData.chart[0].data2);
        });
    });
   
});

function getButtonData(url, value) {

    return $.ajax({
        type: "GET",
        url: url + value + '.json',
        dataType: "json",
        // data:'/' + value + '.json',
        async: false, // Забрати коли будеш на бек-енд стукатись
        success: function success(data) {
            chartsData = data;
            console.log(chartsData);
        },
        error: function error(_error) {
            console.log('error: ', _error);
        }
    });
}

function initsCharts( labels, data1, data2 ){
    var ctxOne;
    var ctxTwo;
    var myChartOne;
    var myChartTwo;
    var dataOne;
    var dataTwo;
    var setOptions;
    var chartContainerOne;
    var chartContainerTwo;

    setOptions = {
        display: true,
        layout: {
            padding: {
                left: 20,
                top:30,
            }
        },
        legend: {
            display: false
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
    
    if(data1){
        document.querySelector(".charts__block__item.one .charts__block__item__chart").innerHTML = "";
        chartContainerOne = document.createElement('canvas');
        chartContainerOne.id = 'myChartOne';
        chartContainerOne.height = "250";
        document.querySelector(".charts__block__item.one .charts__block__item__chart").appendChild(chartContainerOne);
        ctxOne = document.getElementById("myChartOne").getContext('2d');
        dataOne = {
            labels: labels || chartsData.label,
            datasets: [{
                data: data1 || chartsData.chart[0].data1,
                backgroundColor: '#44acd7',
                borderColor: '#44acd7',
                borderWidth: 1
            }]
        };
        myChartOne = new Chart(ctxOne, {
            type: 'bar',
            data: dataOne,
            plugins: [ChartDataLabels],
            options: setOptions
        });  
    }

    if(data2){
        document.querySelector(".charts__block__item.two .charts__block__item__chart").innerHTML = "";  
        chartContainerTwo = document.createElement('canvas');
        chartContainerTwo.id = 'myChartTwo';
        chartContainerTwo.height = "250";
        document.querySelector(".charts__block__item.two .charts__block__item__chart").appendChild(chartContainerTwo);
        ctxTwo = document.getElementById("myChartTwo").getContext('2d');
        dataTwo = {
            labels: labels ||  chartsData.label,
            datasets: [{
                data: data2 || chartsData.chart[0].data2,
                backgroundColor: '#44acd7',
                borderColor: '#44acd7',
                borderWidth: 1
            }]
        };
        myChartTwo = new Chart(ctxTwo, {
            type: 'bar',
            data: dataTwo,
            plugins: [ChartDataLabels],
            options: setOptions
        });
    }
}