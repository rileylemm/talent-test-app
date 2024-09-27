export type SubCategory = {
  name: string;
  id: string;
};

export type Category = {
  name: string;
  id: string;
  subcategories: SubCategory[];
};

export type SelectedSubjects = {
  [categoryId: string]: {
    [subcategoryId: string]: boolean;
  };
};
