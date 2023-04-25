import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta: Meta<typeof Container> = {
  title: 'organisms/container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Primary: Story = {
  args: {
    children: (
      <div className="w-full">
        <p>name</p>
      </div>
    )
  }
};
