import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';
import {AiOutlineLogin} from "react-icons/ai"

const meta: Meta<typeof Button> = {
  title: 'examples/Button',
  component: Button,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Button>;

//exporting primary varient of button
export const SignIn: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Sign in",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}