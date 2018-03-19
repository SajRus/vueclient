<template>
  <d3-bar-chart :data='$options.filters.normalize(colors)' :options='options'/>
</template>

<script>
import D3BarChart from "../tools/d3-barchart";
import * as _ from "underscore";
const props = {
  colors: {
    type: Array,
    default: () => []
  }
};

export default {
  name: "StreamGraph",
  props,
  data() {
    return {
      options: {
        rules: true,
        axis: true,
        labels: true,
        padding: 0.3,
        line: false,
        points: false,
        value: true,
        gradient: {
          stroke: false
        },
        curve: false,
        getX: d => {
          return d.x;
        },
        getY: d => {
          return d.y;
        }
      }
    };
  },
  components: {
    D3BarChart
  },
  filters: {
    normalize: function(colors) {
      //   Visualizziamo solo 10 risultati
      const colorsToShow = _.first(colors, 10);
      const min = colorsToShow[colorsToShow.length - 1];
      const max = colorsToShow[0];
      //normalizzo i dati z = (x - min) / (max -min)
      const normalizedData = _.map(colorsToShow, function(value, index) {
        return { x: value.x, y: (value.y - min.y) / (max.y - min.y) };
      });

      return normalizedData;
    }
  }
};
</script>

<style lang="stylus">
.d3-bar-chart {
    max-height: 100%;
    max-width: 100%;

    svg {
        overflow: visible;
    }
}

.bar {
    fill: cyan;
    stroke: none;
}

.dummy-bar {
    fill: none;
    stroke: none;
    pointer-events: all;
}

.dummy-bar.has-bars {
    &:hover {
        fill: alpha(black, 0.1);
    }
}

.bar-text {
    fill: gray;
}

.rulers {
    stroke-width: 1px;
    stroke: black;
}

.lines {
    stroke: gray;
    stroke-width: 1px;
    stroke-opacity: 0.3;
}

.axis {
    stroke-width: 1px;
    stroke: gray;
}

.axis-label {
    fill: gray;
    stroke: none;
    font-size: 8px;
}

.line {
    stroke: alpha(black, 0.5);
    stroke-width: 2px;
}

.curve, .curve-back {
    stroke: black;
    stroke-width: 3px;
    fill: none;
}

.curve-point {
    fill: gray;
    stroke: black;
}

.chart-tip-back {
    fill: black;
    stroke-width: 1px;
    stroke: gray;
    opacity: 0.5;
}
</style>
