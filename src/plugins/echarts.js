import echarts from 'echarts'
import Vue from 'vue'
const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    line: function (id) {
                        let demo = document.querySelector(id)
                        let myChar = echarts.init(demo)
                        let option = {
                            tooltip: {
                                formatter: '{a} <br/>{b} : {c}%'
                            },
                            series: [{
                                name: 'Pressure',
                                type: 'gauge',
                                detail: {
                                    formatter: '{value}'
                                },
                                data: [{
                                    value: 50,
                                    name: 'SCORE'
                                }]
                            }]
                        }
                        myChar.setOption(option)
                    },
                    chinaMap: function (id, data) {
                        const demo = document.querySelector(id)
                        const myChart = echarts.init(demo)
                        let option = {
                            tooltip: {
                                triggerOn: 'click',
                                enterable: true,
                                formatter(data) {
                                    console.log(data.name)
                                    return `
                                    <a href="/#/city/${data.name}"> 
                                        <div>
                                            <p>省份：${data.name}</p>
                                            <p>确诊：${data.value}</p>
                                        </div>
                                    </a>`
                                }
                            },
                            visualMap: [{
                                type: 'piecewise',
                                pieces: [
                                    { min: 0, max: 0, color: '#fff' },
                                    { min: 1, max: 100, color: '#FDFDCF' },
                                    { min: 101, max: 500, color: '#fe9e83' },
                                    { min: 500, max: 1000, color: '#e55a4e' },
                                    { min: 1001, max: 10000, color: '#9f070d' },
                                ]
                            }],
                            // tooltip: {
                            //     triggerOn: "click",  // 事件类型
                            //     enterable: true, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
                            //     formatter(data) {
                            //         return "<a href='/#/city/" + data.name + "' style='color:#fff'><div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div></a>"
                            //     }
                            // },
                            // visualMap: [{  // 映射-颜色值
                            //     orient: "vertical", // 分段方向:horizontal水平
                            //     type: "piecewise", // 分段
                            //     pieces: [  // 配置颜色区间
                            //         { min: 0, max: 0, color: "#FFFFFF" },
                            //         { min: 1, max: 10, color: "#FDFDCF" },
                            //         { min: 10, max: 100, color: "#FE9E83" },
                            //         { min: 100, max: 500, color: "#E55A4E" },
                            //         { min: 500, max: 10000, color: "#4F070D" }
                            //     ]
                            // }],
                            series: [{
                                name: "省",
                                type: "map",  // 配置图表类型
                                map: "china", // 中国地图
                                roam: false,  // 是否允许自动缩放
                                zoom: 1.2,    // 地图缩放比例
                                label: {      // 配置字体
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {  // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,0,200,0.2)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                // data:[
                                //     {name:"河北",value:10,itemStyle:{ normal:{ areaColor:"red" } }}
                                // ]
                                data: data
                            }]
                        }
                        myChart.setOption(option)
                    }
                }
            }
        }
    })
}
export default install