import { Grid, Image, Icon, Text, Button, chakra } from "@chakra-ui/react";
import * as styles from "./styles";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const FooterFirstRow = () => {
  return (
    <Grid {...styles.firstRowStyles}>
      <Image alt="Beer of Tomorrow logo" {...styles.logoImage} />
      <Grid {...styles.firstRowThreeItems}>
        <Grid {...styles.rowStyle}>
          <Icon as={RiSendPlaneFill} {...styles.firstRowIcons} />
          <Text>
            Lorem ipsum dolor sit amet
            <chakra.span fontWeight="bold" px={1}>
              consectetur adipisicing elit.
            </chakra.span>
            Maxime mollitia,
          </Text>
        </Grid>
        <Grid {...styles.rowStyle}>
          <Icon as={FaPhone} {...styles.firstRowIcons} />
          <Text>
            Lorem ipsum dolor sit amet
            <chakra.span fontWeight="bold" px={1}>
              consectetur adipisicing
            </chakra.span>
            elit. Maxime mollitia,
          </Text>
        </Grid>
        <Grid {...styles.rowStyle}>
          <Icon as={MdEmail} {...styles.firstRowIcons} />
          <Grid {...styles.rowListStyle} gap={1}>
            <Text textDecoration="underline">Loremipsum@dolor.com</Text>
            <Text textDecoration="underline">Loremipsum@dolor.com</Text>
          </Grid>
        </Grid>
      </Grid>
      <Grid {...styles.rowListStyle}>
        <Button>About Beer of Tomorrow</Button>
        <Text fontSize="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Grid>
    </Grid>
  );
};
