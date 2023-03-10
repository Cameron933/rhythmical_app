import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LinkButton } from "./LinkButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/LinkButton",
  component: LinkButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LinkButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  iconPath: "http://www.w3.org/2000/svg",
  children: "Home",
};
