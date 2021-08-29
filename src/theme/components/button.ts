import { mode } from "@chakra-ui/theme-tools";

const primary = (props: any) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  const color = mode(`white`, `black`)(props);
  return {
    bgGradient: `linear(to-t, ${c}.200, ${c}.100, ${c}.50)`,
    borderRadius: "1px",
    fontSize:
      props.fontSize === "md" ? "sm" : props.fontSize === "sm" ? "sm" : "sm",
    color,
    _hover: {
      bgGradient: `linear(to-t, ${c}.300, ${c}.200, ${c}.100)`,
    },
    _active: {
      bgGradient: `linear(to-t, ${c}.300, ${c}.200, ${c}.100)`,
    },
  };
};

const primaryOutline = (props: any) => {
  const { colorScheme: c } = props;
  return {
    borderWidth: "1px",
    borderColor: `${c}.200`,
    borderRadius: "1px",
    transition: "all 0.2s ease",
    color: `${c}.200`,
    _hover: {
      bgGradient: `linear(to-t, ${c}.200, ${c}.100, ${c}.50)`,
      color: "white",
    },
    _active: {
      bgGradient: `linear(to-t, ${c}.200, ${c}.100, ${c}.50)`,
      color: "white",
    },
  };
};

const Button = {
  // style object for base or default style
  baseStyle: {
    _focus: {
      boxShadow: "none",
    },
    _active: {
      boxShadow: "none",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary,
    "primary-outline": primaryOutline,
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
    colorScheme: "primary",
  },
};

export default Button;
