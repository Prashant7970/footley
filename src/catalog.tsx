import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
type element = {
    img:string,
    title:string,
    des:String
  };
type CatalogProps = {
  images: element[];
};

const Catalog: React.FC<CatalogProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = useState(true)
  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused===false) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [ isPaused]);
  function handleclick(){
    setIsPaused(!isPaused)
  }

  function changeindex(i:any){
    setActiveIndex(i)

  }

  return (
    <Box width={"80%"} marginTop={"20px"} marginX={"auto"}>
<Box display={"flex"} flexDirection={{xs:"column",md:"row"}} width={"100%"}   gap={"30px"} >
    <Box flex={"5"} >
     
      <img src={images[activeIndex].img} alt="Catalog Slide" width={"100%"}  style={{
    maxWidth: '100%',
    height: '100%',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  }}  />
   
    </Box>
<Box  flex={"5"}>
<h3>{images[activeIndex].title}</h3>
<p>{images[activeIndex].des}</p>
</Box>

    </Box>

    <Box display={"flex"} flexDirection={"row"} justifyContent={"space-around"} marginTop={"20px"}>
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
    <Button onClick={goToPrevSlide} variant='outlined'><ArrowLeftIcon/></Button>
    {images.map((image, index) => {
       if(index===activeIndex){
       return <img key={index} src={image.img}  alt={`Img ${index}`} width={"50px"} style={{border:"2px solid green",width:"70px"}} onClick={()=>changeindex(index)} />
       }else
        return <img key={index} src={image.img}  alt={`Img ${index}`} width={"50px"} onClick={()=>changeindex(index)} />
    })}

    <Button onClick={goToNextSlide} variant='outlined'><ArrowRightIcon/></Button>
    </Box>
    <Box>
        <Button onClick={handleclick} >{isPaused===false?<PauseCircleIcon fontSize='large'/>:<PlayCircleIcon fontSize='large'/>}</Button>
    </Box>
    </Box>
    </Box>
    
  );
};

export default Catalog;
