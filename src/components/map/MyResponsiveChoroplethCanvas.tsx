import { ResponsiveChoroplethCanvas } from "@nivo/geo";
import { africanCountryData } from "../../dummyData/map/map";
import { geoData } from "../../dummyData/map/maps";
import { useState } from "react";
import { africanCountries } from "../../dummyData/IpAfrica/IpAfrica";

const MyResponsiveChoroplethCanvas = () => {
  const [hoveredFeature, setHoveredFeature] = useState<any | null>(null);
  if (!africanCountryData) {
    return <div>Loading...</div>;
  }

  const africanGeoJSON = {
    ...geoData,
    features: geoData.features.filter((feature) =>
      africanCountries.includes(feature.properties.name)
    ),
  };

  const handleMouseEnter = (feature: any) => {
    setHoveredFeature(feature);
  };

  const handleMouseLeave = () => {
    setHoveredFeature(null);
  };
  return (
    <div style={{ height: "300px" }}>
      <ResponsiveChoroplethCanvas
        data={africanCountryData}
        features={africanGeoJSON.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1]}
        unknownColor='#afb6ba'
        label='properties.name'
        valueFormat='.2s'
        projectionScale={150}
        projectionTranslation={[0.45, 0.5]}
        projectionRotation={[0, 0, 0]}
        borderWidth={0.5}
        borderColor='black'
        colors={"oranges"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tooltip={({ feature }: any) => (
          <div style={{ color: "white", background: "black", padding: "5px" }}>
            <strong>{feature.properties.name}</strong>
            <br />
            Value: {feature.value}
          </div>
        )}
      />
      {hoveredFeature && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "white",
            padding: "10px",
            border: "1px solid black",
          }}
        >
          <h3>{hoveredFeature.properties.name}</h3>
          <p>Full Description: ...</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default MyResponsiveChoroplethCanvas;
