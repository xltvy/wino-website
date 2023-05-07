import React, { Suspense } from "react";
import GhostBox from "./GhostBox.js";
import './component_styles.css';
import './responsive_styles.css';

const MobileFolderImage = ({ image }) => {
  return (
    <div className="mobile-folder-image">
      <Suspense fallback={<GhostBox />}>
        <div className="mobile-folder-image-wrapper">
          <img src={image.src} alt={image.alt} decoding="async" loading="lazy" />
        </div>
      </Suspense>
      <p className="mobile-image-title">{image.title}</p>
    </div>
  );
};

export default MobileFolderImage;
