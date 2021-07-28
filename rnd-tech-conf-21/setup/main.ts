import { defineAppSetup } from '@slidev/types'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default defineAppSetup(({ app, router }) => {
    // Chart.register(ChartDataLabels);
    VueChartkick.options = {
        library: {
            // devicePixelRatio: 2,
            // plugins: {
            //     datalabels: {
            //       backgroundColor: function(context) {
            //         return context.dataset.backgroundColor;
            //       },
            //       borderRadius: 4,
            //       color: 'white',
            //       font: {
            //         weight: 'bold'
            //       },
            //       formatter: function (values, context) {
            //         return context.chart.data.labels[context.dataIndex];
            //       },
            //       padding: 6
            //     }
            //   },
        }
    }
    app.use(VueChartkick)
})
