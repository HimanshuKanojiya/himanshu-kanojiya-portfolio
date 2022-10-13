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
  title?: string;
  layout?: "auto" | "column";
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

interface IContentExtendButton {
  showMore: boolean;
  handleShowMore: () => void;
  isDesktop?: boolean;
}

interface ISkillCard {
  skillLogo: string;
  skillTitle: string;
  skillDescription: string;
  skillsItems: {
    iconName: string;
    name: string;
  }[];
}

interface ProjectInfo {
  projectId: string;
  projectImage: string;
  projectLogo: string;
  projectTitle: string;
  projectDescription: string;
  technologyUsedTitle: string;
  isProjectFeatured: boolean;
  usedTechnologies: {
    iconName: string;
    name: string;
  }[];
  projectRepositoryLink: string;
  projectRepositoryTitle: string;
  projectRepositoryIcon: string;
  projectLiveLink: string;
  projectLiveTitle: string;
  projectLiveIcon: string;
}

interface IProjectsItems {
  projectsData: ProjectInfo[];
}

interface IFeaturedProject {
  projectData: ProjectInfo;
}
