interface IMenuOverlay {
  showMenuOverlay: boolean;
  toggleHamburgerMenu: () => void;
}

interface ISideBarMenu {
  toggleHamburgerMenu: () => void;
}

interface ISocialIcons {
  className: string;
}

interface IResponsibilityList {
  title: string;
  responsibilites: string[];
}

interface ISkillsList {
  title: string;
  skills: { iconName: string; name: string }[];
}
