const ctx = document.getElementById('ozonChart').getContext('2d');

const chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {left, top, width, height}} = chart;
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.setLineDash(options.borderDash || []);
      ctx.lineDashOffset = options.borderDashOffset;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    }
  };

new Chart(ctx, {
    type: 'line',
    data: {
        labels: datetime, // لیبل‌های محور X با تاریخ
        datasets: [
            {
                label: 'O3',
                data: ozon,
                borderColor: '#800080',
                backgroundColor: 'rgba(128,0,128,0.28)',
                pointStyle: 'circle',
                pointRadius: 3,
                pointBackgroundColor: '#800080',
                fill: true,
                borderWidth: 2,
                tension: 0.5
            },
            
        ]
    },
    options: {
        responsive: true, // چارت ریسپانسیو باشد
        // maintainAspectRatio: false,
        plugins: {
            chartAreaBorder: {
                borderColor: 'gray',
                borderWidth: 1,
                // borderDash: [5, 5],
                borderDashOffset: 2,
            },
            tooltip: {
                displayColors: false,
                bodyFont: 	{weight: 'bold'},
                // backgroundColor: 'white', // پس‌زمینه سفید
                // titleColor: 'black', // رنگ عنوان (در صورت وجود)
                // bodyColor: 'black', // رنگ بدنه (متن)
                // borderColor: 'gray', // رنگ حاشیه
                // borderWidth: 1, // ضخامت حاشیه
                
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
                offset : false,
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
                    text: 'Ozone (µg/m³)',
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.28)',
                    drawBorder: true
                },
                ticks: {
                    // stepSize: 5
                    autoSkip: true,
                    // maxTicksLimit: 7,
                    color: 'black',
                    maxRotation: 10,
                    minRotation: 0,
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            },
            

            x: {
                offset : true,
                border: {
                    display: false,
                    dash: [3,6],
                    dashOffset: false,
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.28)',
                },
                title: {
                    display: false
                },
                ticks: {
                    autoSkip: true,
                    // maxTicksLimit: 7,
                    color: 'black',
                    maxRotation: 20,
                    minRotation: 20,
                    font: {
                        weight: 'bold',
                        size: 12
                    }
                  
                }
            },
            // x2: {
            //     labels: year,
            //     position: 'bottom',
            //     ticks: {
            //         display: false, // لیبل‌ها نمایش داده نمی‌شوند
            //     },
            //     grid: {
            //         display: false, // خطوط گرید غیرفعال می‌شوند
            //         drawBorder: false, // خط محور (axis line) غیرفعال می‌شود
            //         drawTicks: false // تیک‌ها غیرفعال می‌شوند
            //     },
            //     border: {
            //         display: false // خط مرزی محور X2 غیرفعال می‌شود
            //     }
            // },
            x3 :{	
                labels: [null, 2025, null],
                // ticks: {
                //     color: '#505557',	
                //     font:{
                //         weight : 'bold',
                //     }
                // },
                grid: {
                    display:false,
                    // borderDashOffset: 2,
                    // tickMarkLength: 2 ,
                    // color: 'gray',
                    // display: true,
                    
                },
                ticks: {
                    padding:10,
                    // autoSkip: true,
                    // maxTicksLimit: 7,
                    // maxRotation: 0,
                    // minRotation: 0,
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
    plugins: [chartAreaBorder]
});