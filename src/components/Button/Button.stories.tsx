import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'atoms/button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary',
    href: '#'
  }
};
export const Secondary: Story = {
  args: {
    text: 'Secondary',
    href: '#',
    variant: 'secondary'
  }
};

export const Children: Story = {
  render: () => (
    <div className=" w-11 flex flex-wrap">
      <Button href="#">
        <div>
          <p>name</p>
        </div>
      </Button>
    </div>
  )
};
//export const LoggedOut: Story = {};
