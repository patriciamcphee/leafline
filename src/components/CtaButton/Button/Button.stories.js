import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,

  argTypes: {
    property1: {
      options: ["ver-3", "ver-2", "ver-1"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "ver-3",
    className: {},
    text: "Get Started",
  },
};
