export const stepperStyles = {
  components: {
    Stepper: {
      baseStyle: {
        indicator: {
          "&[data-status=complete]": {
            background: "#0c2b2f",
            separator: {
              bgColor: "#0c2b2f",
              borderColor: "#0c2b2f",
            },
          },
          "&[data-status=active]": {
            color: "#0c2b2f",
            borderColor: "#0c2b2f",
          },
        },
        separator: {
          "&[data-status=complete]": {
            bgColor: "brand.blue",
            border: "1px solid brand.blue",
          },
        },
      },
    },
  },
};
