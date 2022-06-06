import dashboardIcon from "assets/images/grid.svg";
import chatIcon from "assets/images/message-square.svg";
import bellIcon from "assets/images/bell.svg";
import settingsIcon from "assets/images/settings.svg";
import usersIcon from "assets/images/users.svg";

const iconsList = [
  {
    icon: dashboardIcon,
    alt: "dashboard",
    text: "Dashboard",
    href: "/",
  },
  {
    icon: chatIcon,
    alt: "chat",
    text: "Chat",
    href: "/chats",
  },
  {
    icon: bellIcon,
    alt: "notifications",
    text: "Notifications",
    href: "/notifications",
  },
  {
    icon: settingsIcon,
    alt: "settings",
    text: "Settings",
    href: "/settings",
  },
  {
    icon: usersIcon,
    alt: "friends",
    text: "Friends",
    href: "/friends",
  },
];

export default iconsList;
