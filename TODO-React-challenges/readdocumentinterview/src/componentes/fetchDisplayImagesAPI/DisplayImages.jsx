import { useEffect, useState } from "react";

const DisplayImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://images-api.nasa.gov/search?q=moon"
        );
        const data = await response.json();

        const imageUrls = data.collection.items.flatMap((item) =>
          item.links
            ?.filter((link) => link.render === "image")
            .map((link) => link.href)
        );

        setImages(imageUrls);
      } catch (error) {
        console.log("Error ", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img src={image} alt="image" />
      ))}
    </div>
  );
};

export default DisplayImages;
