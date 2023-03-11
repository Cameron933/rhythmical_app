import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Button",
};

export const Ternary = Template.bind({});
Ternary.args = {
  color: "ternary",
  children: "Button",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  children: "Button",
};

export const Info = Template.bind({});
Info.args = {
  color: "info",
  children: "Button",
};

export const Light = Template.bind({});
Light.args = {
  color: "light",
  children: "Button",
};

export const Dark = Template.bind({});
Dark.args = {
  color: "dark",
  children: "Button",
};
