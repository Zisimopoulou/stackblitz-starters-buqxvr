// src/app/models/category.model.ts
export interface CategoryAdmin {
    id : number;
    displayName: string;
    url: string;
    breadcrumb: string;
    lastModifiedAt: string;
    productDtos: { id: number; name: string }[];
    parentCategoryDto?: { id: number; displayName: string };  // Optional if no parent
    subCategoryDtos: { id: number; displayName: string }[];
  }
  