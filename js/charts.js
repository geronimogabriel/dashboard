

const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Entradas',
            backgroundColor: ['#7367F0' ],
            borderColor: 'rgb(255, 99, 132)',
            data: [1, 10, 5, 2, 20, 30],
            base: .3,
        },
        {
            label: 'Despesas',
            backgroundColor: ['orange' ],
            borderColor: 'rgb(255, 99, 132)',
            data: [-10, -5, -2, -20, -30, -20],
            base: -.3,
        }
    ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            layout: {
                padding:15,
            },
            responsive: true,
            borderRadius: 50,
            barPercentage: .3,
            categoryPercentage: .5,
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    
                    stacked: true,
                },

                y: {
                    grid: {
                        display:false,
                    },
                },
            }
        }
    };
    
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
//----------------------------------------------------------------------------------------------------------

const labels4 = [
    'January',
    'February',
    'March',
    'April',
];

const data4 = {
    labels: labels4,
    datasets: [{
        label: 'My First dataset',
        backgroundColor:'#7367F0',
        borderColor: 'white',
        data: [0.5, 5, 7],
        
    },{
        backgroundColor: 'white',
        data: [20, 20, 20, 20],
    }
]
};

const config4 = {
    type: 'bar',
    data: data4,
    options: {
        layout: {
            padding: 5,
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
        borderRadius: 50,
        barPercentage: .3,
        categoryPercentage: .5,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false
                    
                },
                ticks: {
                    display: false,
                },
            },

            y: {
                grid: {
                    display:false,
                },
                ticks: {
                    display: false,
                },
            },
        }
    }
};

const myChart4 = new Chart(
document.getElementById('myChart4'),
config4
);

//------------------------------------------  - Line chart -----------------------------------------------

const labels2 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ['#00e2ff' ],
        borderColor: '#00e2ff',
        data: [1, 10, 5, 2, 20, 30],
    },
]
};

const config2 = {
    type: 'line',
    data: data2,
    options: {

        
        plugins: {
            title: {
                display: true,
                text: '6K',
                color: '#d0d2d6',
                align: 'start',
                font: {
                    size: 25,
                },
           },
            legend: {
                display: false,
            },
        },

        scales: {

            

            x: {
                
                grid: {
                    color: 'rgb(102 102 102 / 38%)',
                    borderDash: [6],
                    display:true,
                },
                ticks: {
                    display: false,
                },
            },

            y: {
                grid: {
                    display:false,
                },
                ticks: {
                    display: false,
                },
            },
        }
    }
};

const myChart2 = new Chart(
document.getElementById('myChart2'),
config2
);

//----------------------------------------------------------------------------------------------------------

const labels3 = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];


const data3 = {
    labels: labels3,
    datasets: [{
    label: 'My First Dataset',
    data: [65, 45, 90, 30, 75 , 45, 70],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'transparent',
    pointBorderColor: 'transparent',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)',
    tension: .3,
  }, {
    label: 'My Second Dataset',
    data: [0, 35, 15, 0, 20, -10, -20],
    backgroundColor: 'transparent',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'transparent',
    pointBorderColor: 'transparent',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)',
    tension: .3,
    
  }],
};



const config3 = {
    type: 'line',
    data: data3,
    options: {
        responsive: true,
        
        plugins: {
            
            title: {
                display: true,
                text: ['R$20.350'],
                color: '#D0D2D6',
                font: {
                    size: 20,    
                },
                
            },
            subtitle: {
                display: true,
                text: ['Meta: R$25.000'],
                color: 'grey',
                font: {
                    size: 15,
                    weight: '600',
                    
                },
            },
            
            legend: {
              display: false,
              labels: {
                color: 'white'
              },
              
            },
        },

        scales: {

           
            data: {
                display: false,
            },
            x: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false
                },
            
            },

            y: {
                grid: {
                    display:false,
                },
                ticks: {
                    display: false,
                },
            },
        }
    }
};

const myChart3 = new Chart(
document.getElementById('myChart3'),
config3
);



const labels5 = [
    'Red',
    'Blue',
    'Yellow'
];

const data5 = {
    labels: labels5,
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: ['rgb(88 230 0 / 75%)', 'rgb(20 255 0 / 42%)', 'rgb(20 255 0 / 15%)'],
        borderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }],
};

const config5 = {
    type: 'doughnut',
    data: data5,
    options: {
        layout: {
            padding: 5,
        },
        responsive: true,
        color: 'white',
        plugins: {
            title: {
            
            },
            subtitle: {
                
            },
            legend: {
                display: false,
                labels: {

                },
            },
        },

        scales: {



            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false,
                },
            },

            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
        }
    }
};

const myChart5 = new Chart(
    document.getElementById('myChart5'),
    config5
);