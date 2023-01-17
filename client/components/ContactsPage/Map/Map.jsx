import React from "react";
import styles from "./Map.module.scss";

const Map = () => {
  return (
    <>
      <iframe className={styles.map}
        src="https://www.openstreetmap.org/export/embed.html?bbox=24.15045440196991%2C56.95458628457612%2C24.15226221084595%2C56.95528687213766&amp;layer=mapnik&amp;marker=56.95493658000294%2C24.15135830640793"
      ></iframe>
      <br />
      <small>
        <a href="https://www.openstreetmap.org/?mlat=56.95494&amp;mlon=24.15136#map=19/56.95494/24.15136&amp;layers=N">
          View Larger Map
        </a>
      </small>
    </>
  );
};

export default Map;
