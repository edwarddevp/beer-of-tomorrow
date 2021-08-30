import { mode } from "@chakra-ui/theme-tools";

const primary = ({ isDisabled, ...props }: any) => {
  const { colorScheme: c } = props;
  const color = mode(`white`, `black`)(props);
  const gradient = `linear(to-t, ${c}.200, ${c}.100, ${c}.50)`;
  const hoverGradient = `linear(to-t, ${c}.300, ${c}.200, ${c}.100)`;
  return {
    opacity: isDisabled ? 0.7 : 1,
    bgGradient: gradient,
    borderRadius: "1px",
    fontSize: props?.size ?? "sm",
    color,
    _hover: {
      bgGradient: hoverGradient,
      _disabled: {
        bg: hoverGradient,
      },
    },
    _active: {
      bgGradient: hoverGradient,
    },
  };
};

const primaryOutline = ({ isDisabled, ...props }: any) => {
  const { colorScheme: c } = props;
  const gradient = `linear(to-t, ${c}.200, ${c}.100, ${c}.50)`;
  return {
    opacity: isDisabled ? 0.7 : 1,
    borderWidth: "1px",
    borderColor: `${c}.200`,
    borderRadius: "1px",
    transition: "all 0.2s ease",
    color: `${c}.200`,
    _hover: {
      bgGradient: gradient,
      color: "white",
      _disabled: {
        bg: gradient,
      },
    },
    _active: {
      bgGradient: gradient,
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
