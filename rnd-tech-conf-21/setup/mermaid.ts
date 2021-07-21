import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'neutral',
    gantt: {
        titleTopMargin: 25,
        barHeight: 70,
        barGap: 4,
        topPadding: 75,
        rightPadding: 5,
        leftPadding: 50,
        fontSize: 24
    },
    flowchart: {
        diagramPadding: 10,
        rankSpacing: 50,
        nodeSpacing: 100,
        curve: 'basis'
    }
  }
})
