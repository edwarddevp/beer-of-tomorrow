import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Box } from "@chakra-ui/react";
import { RootState } from "@/configs/store";
import { PageHeading } from "@/components/PageHeading";
import * as styles from "./styles";
import NextImage from "next/image";

interface ImageGalleryProps {}

export const ImageGallery = (props: ImageGalleryProps) => {
  const [currentImage, setCurrentImage] = useState("");
  const [currentHoverImage, setCurrentHoverImage] = useState("");
  const beer = useSelector((state: RootState) => state.getBeerById.data);
  const images = Array(6).fill(beer.image_url);

  useEffect(() => {
    setCurrentImage(beer.image_url);
    // const img = new Image();
    // img.src = beer.image_url;
  }, [beer.image_url]);

  const onMouseOver = (img: string) => {
    setCurrentHoverImage(img);
  };
  const onMouseLeave = (img: string) => {
    setCurrentHoverImage(img);
  };
  const onMouseClick = (img: string) => {
    setCurrentImage(img);
  };
  return (
    <Grid
      py={[4, null, null, 16]}
      gridRow={1}
      gridColumn={[1, null, null, 2]}
      alignItems="center"
    >
      <PageHeading title={beer?.name} {...styles.pageHeading} />
      <Grid templateColumns="2fr 1fr" justifyItems="center">
        {(currentHoverImage || currentImage) && (
          <NextImage
            src={currentHoverImage || currentImage}
            alt="Beer Showing Image"
            priority
            {...styles.mainImage}
          />
        )}
        <Grid {...styles.subImagesContainer}>
          {images.map((img, i) => (
            <Box
              key={i}
              onMouseOver={() => onMouseOver(img)}
              onMouseLeave={() => onMouseLeave(img)}
              onClick={() => onMouseClick(img)}
              cursor="pointer"
              pos="relative"
            >
              {/* <Box {...styles.diamond} /> */}
              {img && (
                <NextImage
                  src={img}
                  alt={`Beer-Image-${i}`}
                  priority={i < 3}
                  {...styles.subImage}
                />
              )}
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
