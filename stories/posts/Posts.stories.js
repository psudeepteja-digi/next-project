import Posts from "../../components/Posts/index"

export default {
  title: 'Example/Posts',
  component: Posts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
};
export const defaultPosts = {
  args: {
    content: 'Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.',
    date: '18/08/2023'
  },
};


