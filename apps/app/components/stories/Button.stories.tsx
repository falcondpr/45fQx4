import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: {
      options: ['base', 'primary']
    }
  },
  argTypes: {
    variant: {
      options: ['base', 'outline'],
      control: { type: 'select' },
    },
  },
  render: (args) => <Button story={true} {...args}>Hello</Button>,
};
