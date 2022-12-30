import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button onClick={() => alert("aa")} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "버튼 내용",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...Default.args,
  size: "sm",
};

export const SizeBase = Template.bind({});
SizeBase.args = {
  ...Default.args,
  size: "base",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  ...Default.args,
  size: "lg",
};

export const StateDisabled = Template.bind({});
StateDisabled.args = {
  ...Default.args,
  disabled: true,
};

export const StateLoading = Template.bind({});
StateLoading.args = {
  ...Default.args,
  size: "base",
  spinner: true,
};

export const WeightGhost = Template.bind({});
WeightGhost.args = {
  ...Default.args,
  size: "base",
  weight: "ghost",
};

export const WeightOutline = Template.bind({});
WeightOutline.args = {
  ...Default.args,
  size: "base",
  weight: "outline",
};
