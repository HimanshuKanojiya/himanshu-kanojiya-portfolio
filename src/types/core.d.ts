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
  showLess: boolean;
}

interface ISkillsList {
  title: string;
  skills: { iconName: string; name: string }[];
}

interface IExperienceCard {
  Experience: {
    jobId: string;
    jobTitle: string;
    companyLogo: string;
    companyName: string;
    workingFrom: string;
    workingTo: string;
    description: string;
    responsibilites: string[];
    skills: {
      title: string;
      skillsItems: {
        iconName: string;
        name: string;
      }[];
    };
  };
}

interface IExperienceMenu {
  Experience: {
    jobId: string;
    jobTitle: string;
    companyLogo: string;
    companyName: string;
    workingFrom: string;
    workingTo: string;
    description: string;
    responsibilites: string[];
    skills: {
      title: string;
      skillsItems: {
        iconName: string;
        name: string;
      }[];
    };
  }[];
  showAboutThisCompany: (jobId: string) => void;
  currentSelectedCompany: string;
}
