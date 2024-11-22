import React from "react";
import Sidebar from "../app/Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import palette from "@/styles/palette";
import typography from "@/styles/typography";

const theme = createTheme({
  palette,
  typography,
});

export default {
  title: "Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  onAppClick: (id) => console.log(`Clicked app: ${id}`),
  apps: [
    {
      id: "home",
      title: "Atlassian Home",
      icon: HomeIcon,
    },
    {
      id: "bitbucket",
      title: "Bitbucket",
      icon: CodeIcon,
    },
    {
      id: "trello",
      title: "Trello",
      icon: DashboardIcon,
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  onAppClick: (id) => console.log(`Clicked app: ${id}`),
  apps: [],
};

export const SingleApp = Template.bind({});
SingleApp.args = {
  onAppClick: (id) => console.log(`Clicked app: ${id}`),
  apps: [
    {
      id: "home",
      title: "Atlassian Home",
      icon: HomeIcon,
    },
  ],
};
