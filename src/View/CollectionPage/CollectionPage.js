import React from "react";
import MyCard from "../MyCard/MyCard";
import UnderlineHeading from "../UnderlineHeading/UnderlineHeading";
import "./CollectionPage.scss";
import HealthMagazine from "../../Assets/Data/CollectionData/HealthMagazineData";
import FashionMagazine from "../../Assets/Data/CollectionData/FashionMagazineData";

function CollectionPage() {
  return (
    <div className="Collections col-11 mx-auto">
      <UnderlineHeading Title="Health Magazine" />
      <div className="Health-collection">
        {HealthMagazine.map((val, idx) => {
          return (
            <MyCard
              key={idx}
              image={val.image}
              title={val.title}
              price={val.price}
              button={val.button}
            />
          );
        })}
      </div>

      <UnderlineHeading Title="Fashion Magazine" />
      <div className="Health-collection">
        {FashionMagazine.map((val, idx) => {
          return (
            <MyCard
              key={idx}
              image={val.image}
              title={val.title}
              price={val.price}
              button={val.button}
            />
          );
        })}
      </div>

      <div class="sharethis-inline-share-buttons"></div>
    </div>
  );
}

export default CollectionPage;
