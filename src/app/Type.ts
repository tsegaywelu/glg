export interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  developmentType: {
    homepage: boolean;
    mobileApp: boolean;
    webService: boolean;
  };
  developmentStatus: {
    newDevelopment: boolean;
    maintenance: boolean;
  };
  budget: string;
  projectDeadline: string;
  planningStatus: {
    onlyIdea: boolean;
    basicRequirements: boolean;
    detailedDocuments: boolean;
  };
  requirements: string;
  projectOverview: string;
  preferredLanguages: string;
}
