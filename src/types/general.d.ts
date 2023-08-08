interface ISectionHeader {
  title: string;
}

interface ISectionWrapper {
  children: ReactNode;
  title: string;
  sectionId?: string;
}

interface IWork {
  id: string;
  role: string;
  organization: string;
  from: string;
  to: string;
  linkText: string;
  jobDescription: Array<
    | {
        type: "paragraph";
        value: string;
      }
    | {
        type: "list";
        items: string[];
      }
  >;
}
