const ctx = document.getElementById('visibilityChart').getContext('2d');


const chartAreaBorder1 = {
    id: 'chartAreaBorder1',
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
        labels: time, // لیبل‌های محور X با تاریخ
        datasets: [
            {
                label: 'Visibility',
                data: vis_vis, // داده‌های سرعت باد در ارتفاع 10 متر
                borderColor: 'blue',
                backgroundColor: 'rgba(2, 15, 255, 0.28)',
                pointStyle: 'circle',
                pointRadius: [3,1,1,3,1,1],
                pointBackgroundColor: 'blue',
                borderWidth: 2,
                fill: false,
                tension: 0.5
            },
        ]
    },
    options: {
        responsive: true,
        // maintainAspectRatio: true,
        plugins: {
            chartAreaBorder1: {
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
                offset : true,
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
                    text: 'Visibility (km)',
                    font: {
                        weight : 'bold',
                        size: 14
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.28)',
                    drawBorder: true
                },
                min: 0,
                max: 20,
                ticks: {
                    stepSize: 5,
                    autoSkip: true,
                    maxTicksLimit: 7,
                    color: 'black',
                    maxRotation: 0,
                    minRotation: 0,
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            },
            

            x: {
                display: false,
                // offset : true,
                border: {
                    display: true,
                    dash: [3,6],
                    dashOffset: 6,
                },
                grid: {
                    
                    color: 'rgba(0, 0, 0, 0.28)',
                    drawBorder: true
                    // color: (context) => {
                    //     // خطوط عمودی پررنگ‌تر برای شروع هر روز
                    //     const label = context.tick.label;
                    //     return label.includes('00') ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.28)';
                    //     // return label.includes('Mon') || label.includes('Tue') || label.includes('Wed') || label.includes('Thu') || label.includes('Fri') ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)';
                    // },
                    // lineWidth: (context) => {
                    //     const label = context.tick.label;
                    //     return label.includes('Mon') || label.includes('Tue') || label.includes('Wed') || label.includes('Thu') || label.includes('Fri') ? 2 : 1;
                    // }
                },
                title: {
                    display: false // نیازی به عنوان محور X نیست
                },

                ticks: {
                    // stepSize: 1,
                    // autoSkip: true,
                    // maxTicksLimit: 24,
                    color: 'black',
                    maxRotation: 0,
                    minRotation: 0,
                    display: true,
                }
                // ticks: {
                //     callback: function(value, index, values) {
                //         const label = this.getLabelForValue(value);
                //         // فقط لیبل‌هایی که شامل تاریخ هستند (مانند "00 Mon 16-Jan") یا ساعت‌های خاص نمایش داده شوند
                //         if (label.includes('00') || label.includes('Fri') || label === '03' || label === '06' || label === '09' || label === '12' || label === '15' || label === '18' || label === '21') {
                //             // label.includes('Mon') || label.includes('Tue') || label.includes('Wed') || label.includes('Thu') 
                //             return label;
                //         }
                //         return '';
                //     }
                // }
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
                    color: 'rgba(0, 0, 0, 0.28)',
                    display: true, // خطوط گرید غیرفعال می‌شوند
                    drawBorder: false, // خط محور (axis line) غیرفعال می‌شود
                    drawTicks: false // تیک‌ها غیرفعال می‌شوند
                },
                border: {
                    display: false,
                    dash: [3,6],
                    dashOffset: 6,
                },
            },
            x3 :{	
                labels: [null, date_vis[0], null],
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
    plugins: [chartAreaBorder1]
});