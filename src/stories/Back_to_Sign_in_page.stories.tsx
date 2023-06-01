import type { Meta, StoryObj } from '@storybook/react';
import BacktoSigninpage from '../components/Back_to_Sign_in_page';
import {AiOutlineLogin} from "react-icons/ai"

const meta: Meta<typeof BacktoSigninpage> = {
  title: 'examples/BacktoSigninpage',
  component: BacktoSigninpage,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof BacktoSigninpage>;

//exporting primary varient of button
export const backtoSigninpage: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Back to Sign in page",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}