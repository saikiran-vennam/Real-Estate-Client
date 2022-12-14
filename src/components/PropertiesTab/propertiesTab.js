import { useState } from "react";
import "./propertiesTab.css";
import Basic from "../forms/Basicinfo";
import PropertyInput from "../forms/PropertyDetails";
import General from "../forms/GeneralInfo";
import Location from "../forms/Location";
function PropertiesTab(props) {
  const [basicData, setBasicData] = useState({});
  const [detailsData, setDetailsData] = useState({});
  const [generalData, setGeneralData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [properties, setProperties] = useState({
    basic: true,
    details: false,
    general: false,
    location: false
  });
  function setBasic() {
    setProperties({
      basic: true,
      details: false,
      general: false,
      location: false
    });
  }
  function setDetails() {
    setProperties({
      basic: false,
      details: true,
      general: false,
      location: false
    });
  }
  function setGeneral() {
    setProperties({
      basic: false,
      details: false,
      general: true,
      location: false
    });
  }
  function setLocation() {
    setProperties({
      basic: false,
      details: false,
      general: false,
      location: true
    });
  }

  function setBasicDataFun(value) {
    setBasicData(value);
  }
  function setDetailsDataFun(value) {
    setDetailsData(value);
  }
  function setGeneralDataFun(value) {
    setGeneralData(value);
  }
  function setLocationDataFun(value) {
    setLocationData(value);
  }
  return (
    <>
      <div className="main-tab">
        <div className="tab">
          <div
            className={properties.basic ? "choose" : "choose1"}
            onClick={(e) => setBasic(e)}
          >
            <div>
              <span className={properties.basic ? "digit" : "digit1"}>1</span>{" "}
              Basic info
            </div>
          </div>
          <div
            className={properties.details ? "choose" : "choose1"}
            onClick={setDetails}
          >
            <div>
              <span className={properties.details ? "digit" : "digit1"}>2</span>
              Property Detail
            </div>
          </div>
          <div
            className={properties.general ? "choose" : "choose1"}
            onClick={setGeneral}
          >
            <div>
              <span className={properties.general ? "digit" : "digit1"}>3</span>
              General Info
            </div>
          </div>
          <div
            className={
              properties.location
                ? "location-end choose"
                : "location-end choose1"
            }
            onClick={setLocation}
          >
            <div>
              <span className={properties.location ? "digit" : "digit1"}>
                4
              </span>
              Location info
            </div>
          </div>
        </div>
        <div>
          {properties.basic && (
            <Basic
              setDetails={setDetails}
              setBasicDataFun={setBasicDataFun}
              basicData={basicData}
            />
          )}
          {properties.details && (
            <PropertyInput
              setBasic={setBasic}
              setGeneral={setGeneral}
              setDetailsDataFun={setDetailsDataFun}
              detailsData={detailsData}
            />
          )}
          {properties.general && (
            <General
              setDetails={setDetails}
              setLocation={setLocation}
              setGeneralDataFun={setGeneralDataFun}
              generalData={generalData}
            />
          )}
          {properties.location && (
            <Location
              setGeneral={setGeneral}
              setLocationDataFun={setLocationDataFun}
              locationData={locationData}
              generalData={generalData}
              detailsData={detailsData}
              basicData={basicData}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default PropertiesTab;
