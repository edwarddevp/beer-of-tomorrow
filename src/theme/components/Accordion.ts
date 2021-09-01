const Accordion = {
  parts: ["container", "button", "panel", "icon"],
  baseStyle: {
    button: {
      _hover: {
        background: "transparent",
      },
      _focus: {
        boxShadow: "none",
      },
      _active: {
        boxShadow: "none",
      },
    },
  },
};

export default Accordion;
