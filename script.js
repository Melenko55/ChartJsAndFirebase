const CHART = document.getElementById('lineChart')

const defaultData = {
            backgroundColor: 'rgba(2, 255, 0, 0.4)',
            borderCapStyle: 'square',
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: 'bevel',
            borderWidth: 20,
            clip:  {left: 0, top: 0, right: 0, bottom: 0},
            cubicInterpolationMode: 'default',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            hoverBackgroundColor: 'rgba(244, 0, 0, 1)',
            hoverBorderCapStyle: 'square',
            hoverBorderColor: 'red',
            hoverBorderDash: [100],
            hoverBorderDashOffset: 2,
            hoverBorderJoinStyle: 'bevel',
            hoverBorderWidth: 106,
            label: 'Default Label',
            indexAxis: 'x',
            order: 0,
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            pointBorderColor: 'rgba(255, 0, 0, 0.6)',
            pointBorderWidth: 10,
            pointHitRadius: 15,
            pointHoverBackgroundColor: 'rgba(0, 255, 0, 1)',
            pointHoverBorderColor: undefined,
            pointHoverBorderWidth: 1,
            pointHoverRadius: 4,
            pointRadius: 5,
            pointRotation: 90,
            pointStyle: 'circle',
            segment: undefined,
            showLine: true,
            spanGaps: undefined,
            stack: 'line',
            tension: 0,
            xAxisId: 'first x axis',
            yAxisId: 'first y axis'
        }

let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ['May', 'June', 'July', "August", 'September', 'October', 'November'],
        datasets: [
            defaultData
        ]
        }
})