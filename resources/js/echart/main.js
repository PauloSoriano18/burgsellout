

const initChart = async function (dato=0.9) {
  
    const myChart = echarts.init(document.getElementById("chart"));
    let option = {
      series: [
        {
          type: 'gauge',
    
          startAngle: 190,
          endAngle: -10,
          center: ['50%', '80%'],
          radius: '100%',
          min: 0,
          max: 1.6,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 50,
              color: [
                [0.25, '#f55858'],
                [0.5, '#f4952f'],
                [0.75, '#58D9F9'],
                [1.0, '#12c83f']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '30%',
            width: 15,
            offsetCenter: [0, '-26%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 5
            }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 18,
            distance: -50,
            rotate: 'tangential',
            formatter: function (value) {
              return value * 100 + ' %';
            }
          },
          title: {
            offsetCenter: [0, '10%'],
            fontSize: 26
          },
          detail: {
            fontSize: 40,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value * 100) + ' %';
            },
            color: 'inherit'
          },
          data: [
            {
              value: dato,
              name: 'Avance'
            }
          ]
        }
      ]
    };
      
    
    myChart.setOption(option);
    //myChart.resize(); 
};

window.addEventListener("load", async function () {
        await initChart();
    });