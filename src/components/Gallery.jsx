import React from "react";

const Gallery = () => {
  const gallery = [
    "public/img1.webp",
    "public/img2.jpg",
    "public/img3.jpg",
    "public/img4.jpg",
    "public/img7.jpg",
    "public/img8.jpg",
    "public/img5.jpg",
    "public/img6.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
