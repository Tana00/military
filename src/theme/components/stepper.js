export const stepperStyles = {
  components: {
    Stepper: {
      baseStyle: {
        indicator: {
          "&[data-status=complete]": {
            background: "#111c44",
            separator: {
              bgColor: "#111c44",
              borderColor: "#111c44",
            },
          },
          "&[data-status=active]": {
            color: "#111c44",
            borderColor: "#111c44",
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
