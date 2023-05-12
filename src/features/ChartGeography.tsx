import { memo } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "@/mock/mockData";
import { geoFeatures } from "@/mock/mockGeoFeatures";

function ChartGeography() {
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "grey",
            },
          },
          legend: {
            text: {
              fill: "grey",
            },
          },
          ticks: {
            line: {
              stroke: "grey",
              strokeWidth: 1,
            },
            text: {
              fill: "grey",
            },
          },
        },
        legends: {
          text: {
            fill: "grey",
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={150}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#152538"
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "grey",
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default memo(ChartGeography);
