import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  argTypes: {
    variant: {
      options: ['base', 'outline'],
      control: { type: 'select' },
    },
  },
  render: ({ args }) => <Input story={true} {...args} />,
};
