import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Ternary = Template.bind({});
Ternary.args = {
  label: "Button",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Button",
};

export const Info = Template.bind({});
Info.args = {
  label: "Button",
};

export const Light = Template.bind({});
Light.args = {
  label: "Button",
};

export const Dark = Template.bind({});
Dark.args = {
  label: "Button",
};
