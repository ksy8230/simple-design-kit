import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} value="1" />
);
export const Default = Template.bind({});
