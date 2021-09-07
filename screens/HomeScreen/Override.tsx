import * as ChartExamples from '@components/ChartExamples'
import {
  colorModeManager, NATIVE_BASE_CONFIG,
} from '@root/config/native-base'
import {
  Box, NativeBaseProvider,
} from 'native-base'
import React from 'react'
import ReactDOM from 'react-dom'
import { View } from 'react-native'
import './Override.css'
import {
  DATA,
} from '@constants'

const CHART_KEYS = Object.keys(ChartExamples).sort((a, b) => b > a)

export const OverrideHTML = (props) => {
  const {
    containerID,
    data,
  } = props

  React.useEffect(() => {
    const call = async () => {
      const result = await (await fetch('/report.html')).text()
      const containerNode = document.getElementById(containerID)
      containerNode.innerHTML = result
      Pages.forEach((chartList, pageIndex) => {
        const pageNode = document.getElementsByClassName(`pc pc${pageIndex + 1} w0 h0`)[0]!
        const image = pageNode.getElementsByTagName('img')[0]!
        chartList.forEach((chart, chartIndex) => {
          const {
            id,
            data: chartData,
            type: chartType,
          } = chart
          const chartContainer = document.createElement('div')
          chartContainer.id = `${id}Container`
          const chartWrapper = document.createElement('div')
          chartWrapper.id = id
          chartContainer.appendChild(chartWrapper)
          const extraElement = extraElements[pageIndex][chartIndex]
          if (extraElement) {
            const chartExtraContainer = document.createElement('div')
            chartExtraContainer.id = `${id}ExtraContainer`
            pageNode.insertBefore(chartExtraContainer, image.nextElementSibling)
            ReactDOM.render(
              <NativeBaseProvider
                config={NATIVE_BASE_CONFIG}
                colorModeManager={colorModeManager}
              >
                {extraElement.component()}
              </NativeBaseProvider>,
              chartExtraContainer,
            )
          }
          // image.style.zIndex = -1
          pageNode.insertBefore(chartContainer, image.nextElementSibling)
          console.log('A', id, chartData, chartContainer)
          // const chartContainer = document.getElementById(chartName)
          if (chartData && chartContainer) {
            // const newChartContainer = document.getElementById(chartName)
            // const newChartContainer = document.createElement('div')
            // newChartContainer.style.width = chartContainer.getBoundingClientRect().width
            // newChartContainer.style.height = chartContainer.getBoundingClientRect().height
            // console.log(chartName, chartContainer.getBoundingClientRect().height)
            // chartContainer.replaceWith(newChartContainer)
            const Chart = ChartExamples[chartType]
            ReactDOM.render(
              <>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <NativeBaseProvider
                    config={NATIVE_BASE_CONFIG}
                    colorModeManager={colorModeManager}
                  >
                    <Box
                      p={2}
                      w="100%"
                      h="100%"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Chart
                        data={chartData}
                      />
                    </Box>
                  </NativeBaseProvider>
                </View>
              </>,
              chartWrapper,
            )
          }
        })
      })
      // return
    }
    call()
  }, [])
  return (
    null
  )
}


const Pages = [
  [
    {
      id: 'PieChart0',
      type: 'PieChart',
      data: DATA.PieChart,
    },
    {
      id: 'PieChart1',
      type: 'PieChart',
      data: DATA.PieChart,
    },
    {
      id: 'PieChart2',
      type: 'PieChart',
      data: DATA.PieChart,
    },
    {
      id: 'Speedometer0',
      type: 'Speedometer',
      data: DATA.Speedometer,
    },
  ],
  [
    {
      id: 'Speedometer1',
      type: 'Speedometer',
      data: DATA.Speedometer,
    },
    {
      id: 'Speedometer2',
      type: 'Speedometer',
      data: DATA.Speedometer,
    },
    {
      id: 'Speedometer3',
      type: 'Speedometer',
      data: DATA.Speedometer,
    },
    {
      id: 'Speedometer4',
      type: 'Speedometer',
      data: DATA.Speedometer,
    },
    {
      id: 'Speedometer5',
      type: 'Speedometer',
      data: DATA.Speedometer,
    },
    {
      id: 'BarChart0',
      type: 'BarChart',
      data: DATA.BarChart,
    },
  ],
  [
    {
      id: 'BarChart1',
      type: 'BarChart',
      data: DATA.BarChart,
    },
    {
      id: 'BarChart2',
      type: 'BarChart',
      data: DATA.BarChart,
    },
    {
      id: 'RadarChart0',
      type: 'RadarChart',
      data: DATA.RadarChart,
    },
    {
      id: 'Speedometer6',
      type: 'Speedometer',
      data: DATA.Speedometer,
    },
    {
      id: 'Speedometer7',
      type: 'Speedometer',
      data: DATA.Speedometer,
    },
    {
      id: 'BarChart3',
      type: 'BarChart',
      data: DATA.BarChart,
    },
  ],
  [
    {
      id: 'BarChart4',
      type: 'BarChart',
      data: DATA.BarChart,
    },
    {
      id: 'BarChart5',
      type: 'BarChart',
      data: DATA.BarChart,
    },
    {
      id: 'BarChart6',
      type: 'BarChart',
      data: DATA.BarChart,
    },
    {
      id: 'RadarChart1',
      type: 'RadarChart',
      data: DATA.RadarChart,
    },
  ],
]

const extraElements = [
  [

  ],
  [

  ],
  [
    // {
    //   component: () => (
    //     <Box
    //       style={{
    //         position: 'absolute',
    //         left: 100,
    //         top: 300,
    //       }}
    //     >
    //       Heyy
    //     </Box>
    //   ),
    // },
  ],
  [],
]