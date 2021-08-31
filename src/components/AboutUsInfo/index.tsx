import { Grid, Text, chakra } from "@chakra-ui/react";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaPhone, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AboutUsInfoParagraph } from "./AboutUsInfoParagraph";

interface AboutUsInfoProps {}

export const AboutUsInfo = (props: AboutUsInfoProps) => {
  return (
    <Grid gap={8} color="gray.500">
      <AboutUsInfoParagraph
        title="Location"
        icon={RiSendPlaneFill}
        description={
          <Text>
            Integer tincidunt. Cras dapibus.
            <chakra.span fontWeight="bold" px={1}>
              Vivamus elementum semper nisi.
            </chakra.span>
            Aenean vulputate eleifend tellus. nteger tincidunt.
          </Text>
        }
      />
      <AboutUsInfoParagraph
        title="Phone"
        icon={FaPhone}
        description={<Text fontWeight="bold">+7 (495) 137-77-45</Text>}
      />
      <AboutUsInfoParagraph
        title="Schedule"
        icon={FaClock}
        description={<Text fontWeight="bold">10:00 -- 20:00</Text>}
      />
      <AboutUsInfoParagraph
        title="Email"
        icon={MdEmail}
        description={
          <>
            <Text>Loremipsum@dolor.com</Text>
            <Text>Loremipsum@dolor.com</Text>
          </>
        }
      />
    </Grid>
  );
};
