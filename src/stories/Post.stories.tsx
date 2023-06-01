import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Post from '../components/Post';

const meta: Meta<typeof Post> = {
  title: 'examples/Post',
  component: Post,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Post>;

//exporting primary varient of button
export const post: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Post",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}