import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Changepw from '../components/Change_pw';

const meta: Meta<typeof Changepw> = {
  title: 'examples/Changepw',
  component: Changepw,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Changepw>;

//exporting primary varient of button
export const Change_pw: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Change Password",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}