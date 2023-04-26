<template>
    <div class="row">
        <div class="col-6">
            <canvas ref="chart"></canvas>
        </div>
        <div class="col-6">
            <canvas ref="chart2"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    mounted() {
        this.renderChart();
        this.renderChart2();
    },

    methods: {
        renderChart() {
            const ctx = this.$refs.chart.getContext('2d');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                            'rgb(178, 164, 255)',
                            'rgb(255, 180, 180)',
                            'rgb(255, 222, 180)',
                            'rgb(253, 247, 195)',
                            'rgb(255, 105, 105)',
                            'rgb(255, 211, 176)'
                        ],
                        borderColor: [
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)'
                        ],
                        borderWidth: 1
                    }]
                },
            });
        },
        renderChart2() {
            const ctx = this.$refs.chart2.getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [35, 49, 71, 34, 56, 55, 43],
                        backgroundColor: [
                            'rgb(178, 164, 255)',
                            'rgb(255, 180, 180)',
                            'rgb(255, 222, 180)',
                            'rgb(253, 247, 195)',
                            'rgb(255, 105, 105)',
                            'rgb(255, 211, 176)'
                        ],
                        borderColor: [
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)',
                            'rgb(60, 72, 107)'
                        ],
                        borderWidth: 1
                    }]
                },
            });
        }
    }
};
</script>
