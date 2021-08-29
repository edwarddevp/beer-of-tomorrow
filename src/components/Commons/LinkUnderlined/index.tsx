import { Link, chakra, HStack } from "@chakra-ui/react";

interface LinkUnderlinedProps {
  children: JSX.Element[] | JSX.Element | string;
  href?: string;
  color?: string;
  fontWeight?: string;
  icon?: JSX.Element[] | JSX.Element;
}

export const LinkUnderlined = ({
  children,
  href = "#",
  color,
  fontWeight,
  icon,
}: LinkUnderlinedProps) => {
  return (
    <Link
      className="parent-link"
      href={href}
      color={color}
      fontWeight={fontWeight}
      _hover={{ textDecoration: "none", color: color || "primary.500" }}
    >
      <HStack>
        {icon}
        <chakra.span
          borderBottomWidth="1px"
          pb={1}
          borderColor={color}
          sx={{
            ".parent-link:hover &": {
              borderColor: "primary.500",
            },
          }}
        >
          {children}
        </chakra.span>
      </HStack>
    </Link>
  );
};
