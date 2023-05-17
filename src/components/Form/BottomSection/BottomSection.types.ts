export type GetCurrentYearType = () => string;

export type CopyrightType = {
  year: string;
  name: string;
};

export type UseControllerType = () => {
  copyright: CopyrightType;
};
