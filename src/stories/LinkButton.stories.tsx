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

export const Home = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Home.args = {
  iconName: "RiHome5Fill",
  children: "Home",
};

export const Discover = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Discover.args = {
  iconName: "RiRocketFill",
  children: "Discover",
};

export const Album = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Album.args = {
  iconName: "RiAlbumFill",
  children: "Album",
};

export const Artists = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Artists.args = {
  iconName: "RiUserStarFill",
  children: "Artists",
};

export const Video = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Video.args = {
  iconName: "RiMvFill",
  children: "MV",
};

export const RecentPlayed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RecentPlayed.args = {
  iconName: "RiTimeFill",
  children: "Recent Played",
};

export const FavoriteSongs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FavoriteSongs.args = {
  iconName: "RiHeart2Fill",
  children: "Favorite Songs",
};

export const PlayList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PlayList.args = {
  iconName: "RiPlayListFill",
  children: "PlayList",
};
