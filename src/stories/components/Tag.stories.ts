import { Meta, StoryObj } from "@storybook/react";
import Tag from "../../Components/Tag/Tag";
import { TAG_SIZE } from "../../Components/Tag/interfaces";

const meta: Meta<typeof Tag> = {
  title: 'components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: Array.from(Object.keys(TAG_SIZE)),
    },
    className: { control: 'text' },
    accentColor: { control: 'color' },
    type: {
      control: 'select',
      options: ['solid', 'outlined', 'text'],
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    type: 'solid',
    accentColor: '#b8b8b8',
    size: 'medium'
  }
}

export const Outlined: Story = {
  args: {
    type: 'outlined',
    accentColor: '#b8b8b8',
    size: 'medium'
  }
}

export const Text: Story = {
  args: {
    type: 'text',
    accentColor: '#b8b8b8',
    size: 'medium'
  }
}
