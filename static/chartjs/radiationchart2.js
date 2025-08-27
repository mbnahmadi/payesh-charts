const ctx4 = document.getElementById('radiationChart2').getContext('2d');


// const chartAreaBorder2 = {
//     id: 'chartAreaBorder2',
//     beforeDraw(chart, args, options) {
//       const {ctx, chartArea: {left, top, width, height}} = chart;
//       ctx.save();
//       ctx.strokeStyle = options.borderColor;
//       ctx.lineWidth = options.borderWidth;
//       ctx.setLineDash(options.borderDash || []);
//       ctx.lineDashOffset = options.borderDashOffset;
//       ctx.strokeRect(left, top, width, height);
//       ctx.restore();
//     }
//   };


new Chart(ctx4, {
    type: 'line',
    data: {
        labels: time, // لیبل‌های محور X با تاریخ
        datasets: [
            {
                label: 'Global Solar',
                data: SU, // داده‌های سرعت باد در ارتفاع 10 متر
                borderColor: 'blue',
                backgroundColor: 'rgba(2, 15, 255, 0.28)',
                pointStyle: 'circle',
                pointRadius: [3,1,1,3,1,1],
                pointBackgroundColor: 'blue',
                borderWidth: 2,
                fill: false,
                tension: 0.5,
                yAxisID: 'y2'
            },
            {
                label: 'Reflected Solar',
                data: SD, // داده‌های سرعت باد در ارتفاع 10 متر
                borderColor: 'orange',
                backgroundColor: 'rgba(209, 255, 2, 0.28)',
                pointStyle: 'rect',
                pointRadius: [3,1,1,3,1,1],
                pointBackgroundColor: 'orange',
                borderWidth: 2,
                fill: false,
                tension: 0.5,
                yAxisID: 'y'
            },
            {
                label: 'Upward Long wave',
                data: IU,
                backgroundColor: 'rgba(255, 10, 10, 0.28)',
                pointStyle: 'triangle',
                pointRadius: [3,1,1,3,1,1],
                pointBackgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 2,
                fill: false,
                tension: 0.5,
                yAxisID: 'y'
            },
            {
                label: 'Downward Long wave ',
                data:  ID,
                borderColor: 'rgb(54, 200, 226)',
                backgroundColor: 'rgba(54, 200, 226, 0.28)',
                pointStyle: 'rectRot',
                pointRadius: [3,1,1,3,1,1],
                pointBackgroundColor: 'rgb(45, 173, 196)',
                pointBorderColor: 'rgb(45, 173, 196)',
                borderWidth: 2,
                fill: false,
                tension: 0.5,
                yAxisID: 'y'
            },
            // {
            //     label: 'Device attachment temperature',
            //     data:  Tm, // داده‌های سرعت باد در ارتفاع 50 متر
            //     borderColor: 'rgb(97, 183, 105)',
            //     backgroundColor: 'rgba(97, 183, 105,0.28)',
            //     pointStyle: 'rect',
            //     pointRadius: [2,0,0,2,0,0],
            //     pointBackgroundColor: 'rgb(54, 200, 226)',
            //     borderWidth: 3,
            //     fill: false,
            //     tension: 0.5,
            //     yAxisID: 'y'
            // },
            
        ]
    },
    options: {
        responsive: true,
        // maintainAspectRatio: true,
        plugins: {
            chartAreaBorder2: {
                borderColor: 'gray',
                borderWidth: 1,
                // borderDash: [5, 5],
                borderDashOffset: 2,
            },
            tooltip: {
                displayColors: false,
                bodyFont: 	{weight: 'bold'},
                // callbacks: {
                //     title: function(context) {
                //         // مقدار بزرگ در بالا (time بدون برچسب)
                //         const timeValue = time[context[0].dataIndex];
                //         return `Time: ${timeValue}`; // فقط مقدار time (مثلاً 15)
                //     },
                // },
            },
            title: {
                display: true,
                // text: 'Bushehr (Lat: 28.9600 Lon: 50.7380) Start Time 0030Z16-Jan-2023 (IRDT)',
                color: 'balck',
                font: {
                    size: 14
                }
            },
            legend: {
                display: true,
                position: 'top',
                align: 'center',
                fullSize: true,
                labels: {
                    padding: 30, // کاهش padding برای چیدمان بهتر
                    usePointStyle: true, // استفاده از شکل‌های نقطه‌ای
                    boxWidth: 6, // اندازه باکس شکل‌ها (کوچک‌تر)
                    boxHeight: 6, // ارتفاع باکس (برای کنترل بهتر شکل)
                    font: {
                        size: 12, // اندازه فونت متن لجند (ثابت نگه داشته شده)
                        weight: 'bold',
                        family: 'Sans-serif'
                    },
                    color: 'rgb(0, 0, 0)' // رنگ متن
                }
            },
        },
        scales: {
            y: {
                // offset : true,
                beginAtZero: true,
                border: {
                    display: false,
                    dash: [3,6],
                    dashOffset: 6,
                },
                // max: 40, // حداکثر مقدار محور Y
                title: {
                    display: true,
                    color: 'balck',
                    text: 'Radiation (W/m²)',
                    font: {
                        weight: 'bold',
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.28)',
                    drawBorder: true
                },
                // min: -200,
                // max: 200,
                ticks: {
                    // stepSize: 40,
                    // autoSkip: true,
                    // maxTicksLimit: 7,
                    color: 'black',
                    maxRotation: 0,
                    minRotation: 0,
                    font: {
                        size:14,
                        weight: 'bold'
                    }
                }
            },
            y2: { // محور جدید برای SU
                position: 'right', // قرار گرفتن در سمت راست
                beginAtZero: true,
                border: {
                    display: false,
                    dash: [3,6],
                    dashOffset: 6,
                },
                title: {
                    display: true,
                    color: 'blue',
                    text: 'Radiation (W/m²) - Global Solar',
                    font: {
                        weight: 'bold',
                    }
                },
                grid: {
                    display: false // غیرفعال کردن خطوط گرید برای جلوگیری از تداخل
                },
                // min: -1000,
                // max: 1000,
                ticks: {
                    // stepSize: 200,
                    color: 'blue',
                    maxRotation: 0,
                    minRotation: 0,
                    font: {
                        weight : 'bold',
                        size:14
                    }
                }
            },

            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.28)',
                    drawBorder: true
                },
                // offset : true,
                border: {
                    display: false,
                    dash: [3,6],
                    dashOffset: 6,
                },
                
                title: {
                    display: false, // نیازی به عنوان محور X نیست
                },
                ticks: {
                    display: false,
                    // autoSkip: true,
                    maxTicksLimit: 70,
                    color: 'black',
                    // maxRotation: 20,
                    // minRotation: 20,
                  
                }
                
            },
            x2: {
                labels:  ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', null],
                position: 'bottom',
                ticks: {
                    display: true, // لیبل‌ها نمایش داده نمی‌شوند
                    color:'black',
                    font: {
                        weight: 'bold',
                        size: 12
                    }
                },
                grid: {
                    display: false, // خطوط گرید غیرفعال می‌شوند
                    drawBorder: false, // خط محور (axis line) غیرفعال می‌شود
                    drawTicks: false // تیک‌ها غیرفعال می‌شوند
                },
                border: {
                    display: false // خط مرزی محور X2 غیرفعال می‌شود
                }
            },
            x3 :{	
                labels: [null, date[0], null],
                // ticks: {
                //     color: '#505557',	
                //     font:{
                //         weight : 'bold',
                //     }
                // },
                grid: {
                    borderDashOffset: 2,
                    tickMarkLength: 2 ,
                    color: 'gray',
                    display: false,
                    
                },
                ticks: {
                    // padding:20,
                    autoSkip: true,
                    maxTicksLimit: 7,
                    maxRotation: 0,
                    minRotation: 0,
                    color: 'black',
                    font: {
                        weight : 'bold',
                        size: 14
                    }
                    
                },
        
            },
        },
        // layout: {
        //     padding: {
        //         bottom: 60 // فضای اضافی برای فلش‌ها
        //     }
        // }
    },
    plugins: [chartAreaBorder2]
});