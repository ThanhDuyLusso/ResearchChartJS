import { Chart } from "react-chartjs-2";
import * as ChartGeo from "chartjs-chart-geo";
import React, { useEffect } from "react";

const Geo = () => {
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    if (!canvas) return;

    fetch("https://unpkg.com/us-atlas/states-10m.json")
      .then((r) => r.json())
      .then((us) => {
        // whole US for the outline
        const nation = ChartGeo.topojson.feature(us, us.objects.nation)
          .features[0];
        // individual states
        const states = ChartGeo.topojson.feature(
          us,
          us.objects.states
        ).features;
        const chart = new Chart(canvas.getContext("2d"), {
          type: "choropleth",
          data: {
            labels: states.map((d) => d.properties.name),
            datasets: [
              {
                label: "States",
                outline: nation,
                data: states.map((d) => ({
                  feature: d,
                  value: Math.random() * 10,
                })),
              },
              {
                label: "Population",
                outline: nation,
                data: states.map((d) => ({
                    feature: d,
                    label: "Population",
                    value: Math.random() * 100,
                  })),
                  backgroundColor: 'rgba(255, 99, 132, 1)',
              },
            ],
          },
          options: {
            legend: {
              display: false,
            },
            scale: {
              projection: "albersUsa",
            },
            geo: {
              colorScale: {
                display: true,
                position: "bottom",
                quantize: 5,
                legend: {
                  position: "bottom-right",
                },
              },
            },
          },
        });
        console.log(chart)
      });
  });

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default Geo;
