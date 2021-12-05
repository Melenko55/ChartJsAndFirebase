const CHART = document.getElementById('lineChart')


console.log(Chart.defaults);

const defaultData = {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderCapStyle: 'butt',
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: 'mitter',
            borderWidth: 3,
            clip:  undefined,
            cubicInterpolationMode: 'default',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            hoverBackgroundColor: undefined,
            hoverBorderCapStyle: undefined,
            hoverBorderColor: undefined,
            hoverBorderDash: undefined,
            hoverBorderDashOffset: undefined,
            hoverBorderJoinStyle: undefined,
            hoverBorderWidth: undefined,
            label: 'Default',
            // lineTension: 0.4,
            indexAxis: 'x',
            order: 0,
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            pointBorderColor: 'rgba(0, 0, 0, 1)',
            pointBorderWidth: 1,
            pointHitRadius: 1,
            pointHoverBackgroundColor: undefined,
            pointHoverBorderColor: undefined,
            pointHoverBorderWidth: 1,
            pointHoverRadius: 4,
            pointRadius: 3,
            pointRotation: 0,
            pointStyle: 'circle',
            segment: undefined,
            //showLine: true,
            // spanGaps: undefined,
            // stack: 'line',
            // stepped: false,
            // tension: 0,
            // xAxisId: 'first x axis',
            // yAxisId: 'first y axis'
        }

const modifiedData = {
    data: [15, 25, 5, 50, 45, 20, 80],
    backgroundColor: 'rgba(0, 155, 100, 0.1)',
    borderCapStyle: 'butt',
    borderColor: 'rgba(0, 155, 0, 0.5)',
    borderDash: [5],
    borderWidth: 1,
    label: 'Modified',
    pointBackgroundColor: 'rgba(0, 0, 155, 1)',
    pointBorderWidth: 5,
    pointStyle: 'cross',
    fill: true
}        

/*let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ['May', 'June', 'July', "August", 'September', 'October', 'November'],
        datasets: [
            defaultData,
            modifiedData
        ]
    },
    options: {
        // showLine: false
        responsive: false,
        onClick: (e) => {
            console.log(e);
        }
    }
    
})*/

// let barChart = new Chart(CHART, {
//     type: 'bar',
//     data: {
//         labels: ['Jan', "Feb", 'Mar', 'Apr'],
//         datasets: [
//             {
//                 label: 'Numbers Per Month',
//                 data: [10, 20, 55, 30],
//                 borderColor: 'rgba(0,155,0, 0.7)',
//                 borderWidth: 2
//             }
//         ]   
//     }
// })


// let radarChart = new Chart(CHART, {
//     type: 'radar',
//     data: {
//         labels: ['Strength', "Skill", 'Health', 'Speed', 'Luck'],
//         datasets: [
//             {
//                 label: 'Numbers Per Month',
//                 data: [10, 20, 55, 30, 23],
//                 backgroundColor: 'rgba(0, 255, 0, 0.1)',
//                 borderWidth: 2
//             },
//             {
//                 label: 'Points',
//                 data: [50, 50, 55, 23, 100],
//                 backgroundColor: 'rgba(0, 0, 255, 0.1)',
//                 borderWidth: 2
//             }
//         ]   
//     },
// })

// let polarArea = new Chart(CHART, {
//     type: 'polarArea',
//     data: {
//         labels: ['Strength', "Skill", 'Health', 'Speed', 'Luck'],
//         datasets: [
//             {
//                 label: 'Numbers Per Month',
//                 data: [10, 20, 55, 30, 23],
//                 backgroundColor: [
//                     'rgba(0, 255, 0, 1)',
//                     'rgba(0, 255, 100, 1)',
//                     'rgba(0, 255, 255, 1)',
//                     'rgba(150, 255, 0, 1)',
//                     'rgba(255, 255, 0, 1)',
//                 ],
//             },
    
//         ]   
//     },
//     options: {
//         animation: {
//             animateRotate: false
//         }
//     }
// })


let pie = new Chart(CHART, {
    type: 'pie', //doughnut
    data: {
        labels: ['Strength', "Skill", 'Health', 'Speed', 'Luck'],
        datasets: [
            {
                label: 'Numbers Per Month',
                data: [10, 20, 55, 30, 23],
                backgroundColor: [
                    'rgba(0, 255, 0, 1)',
                    'rgba(0, 255, 100, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(150, 255, 0, 1)',
                    'rgba(255, 255, 0, 1)',
                ],
            },
    
        ]   
    },
    options: {
        animation: {
            // animateRotate: false
            animateScale:true
        }
    }
})