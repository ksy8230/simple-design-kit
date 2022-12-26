import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});
