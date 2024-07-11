import { ResponsiveChoroplethCanvas } from "@nivo/geo";

import { africanCountryData } from "../../dummyData/map/map";
import { geoData } from "../../dummyData/map/maps";

const MyResponsiveChoroplethCanvas = () => {
  if (!africanCountryData) {
    return <div>Loading...</div>;
  }

  console.log(africanCountryData);

  return (
    <div style={{ height: 500 }}>
      <ResponsiveChoroplethCanvas
        data={africanCountryData} // Your data for coloring the map
        features={geoData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors='RdBu'
        domain={[0, 1000000]}
        unknownColor='#101b42'
        label='properties.name'
        valueFormat='.2s'
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor='rgba(0, 0, 0, .2)'
        borderWidth={0.5}
        borderColor='#101b42'
        pixelRatio={window.devicePixelRatio || 1} // Add this line
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -60,
            itemsSpacing: 0,
            itemWidth: 92,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 18,
          },
        ]}
      />
    </div>
  );
};

export default MyResponsiveChoroplethCanvas;
