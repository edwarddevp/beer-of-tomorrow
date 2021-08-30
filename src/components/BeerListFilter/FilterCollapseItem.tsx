import React from "react";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FilterCollapseItemProps {
  name: string;
}

export const FilterCollapseItem: React.FC<FilterCollapseItemProps> = ({
  name,
  children,
}) => {
  return (
    <AccordionItem borderTopWidth="0">
      {({ isExpanded }) => (
        <>
          <AccordionButton px={1}>
            <Heading as="h4" size="md" mr="4">
              {name}
            </Heading>
            {isExpanded ? (
              <Icon as={FaMinus} w={3} h={3} />
            ) : (
              <Icon as={FaPlus} w={3} h={3} />
            )}
          </AccordionButton>

          <AccordionPanel pb={4}>{children}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};
