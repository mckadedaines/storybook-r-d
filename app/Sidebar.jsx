import PropTypes from "prop-types";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

// Import icons you'll need from MUI
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import DashboardIcon from "@mui/icons-material/Dashboard";

const defaultApps = [
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
];

export default function Sidebar({ apps = defaultApps, onAppClick }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        bgcolor: theme.palette.grey[500],
        padding: 2,
      }}
    >
      <Typography
        sx={{
          ...theme.bodyxs_semibold,
          color: theme.palette.grey[200],
          marginBottom: 2,
          paddingLeft: 2,
        }}
      >
        YOUR APPS
      </Typography>

      <List sx={{ padding: 0 }}>
        {apps.map((app) => {
          const IconComponent = app.icon;
          return (
            <ListItem
              key={app.id}
              button
              onClick={() => onAppClick(app.id)}
              sx={{
                borderRadius: "3px",
                marginBottom: 1,
                transition: "background-color 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: theme.palette.primary.main,
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                }}
              >
                <IconComponent
                  sx={{
                    color: theme.palette.grey[0],
                    fontSize: 24,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={app.title}
                primaryTypographyProps={{
                  sx: {
                    ...theme.bodylg_medium,
                    color: theme.palette.grey[0],
                  },
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

Sidebar.propTypes = {
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    })
  ),
  onAppClick: PropTypes.func.isRequired,
};
