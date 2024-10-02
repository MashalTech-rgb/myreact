"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  const [images, setImages] = useState([]);

  const getImg = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  // Fetch images when the component mounts
  useEffect(() => {
    getImg();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <h1 className='heading'>It's my photos Collection</h1>
      <div className='p-10'>
        {
          images.map((elem, i) => {
            return <img key={i} src={elem.download_url} width={300} height={300} className='m-10 inline-block rounded' alt={`Image ${i + 1}`} />;
          })
        }
      </div>
    </>
  );
}

export default Page;
