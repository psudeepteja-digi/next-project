import React from 'react';
import Bio from "../../components/Bio/index";

export default {
  title: 'Example/Bio',
  component: Bio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
};

const Template = (args) => <Bio {...args} />;

export const DefaultBio = Template.bind({});
DefaultBio.args = {
  headshot: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150 150w",
  name: "Colby Fayock",
  tagline: "Helping others to learn by doing!",
  role: "Developer Advocate @ Applitools",
};
