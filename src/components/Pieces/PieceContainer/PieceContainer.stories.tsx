import type { Meta, StoryObj } from '@storybook/react';
import PieceContainer from './PieceContainer';

const meta: Meta<typeof PieceContainer> = {
  title: 'organism/PieceContainer',
  component: PieceContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof PieceContainer>;

export const Primary: Story = {
  args: {
    piece: [
      {
        attributes: {
          url: 'https://picsum.photos/200/300',
          alt: 'random image'
        }
      },
      {
        attributes: {
          url: 'https://picsum.photos/100/300',
          alt: 'random image'
        }
      }
    ]
  }
};
