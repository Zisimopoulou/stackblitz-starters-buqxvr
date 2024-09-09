import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryAdmin } from '../../../models/category-admin.model';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {
  categories: CategoryAdmin[] = [];
  categoryMap: Map<number, CategoryAdmin> = new Map();  // Map for quick lookup
  hoveredCategory: CategoryAdmin | null = null;
  selectedCategory: CategoryAdmin | null = null;
  selectedSubcategory: CategoryAdmin | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Fetch categories from API
    fetch('https://newnew.free.beeceptor.com/categories')
      .then(response => response.json())
      .then((data: CategoryAdmin[]) => {
        // Initialize categories and map
        this.categories = data.filter(cat => !cat.parentCategoryDto);
        this.categoryMap = new Map(data.map(cat => [cat.id, cat]));

        // Add all subcategories to the map for lookup
        data.forEach(category => {
          category.subCategoryDtos.forEach(subCat => {
            this.categoryMap.set(subCat.id, {
              id: subCat.id,
              displayName: category.subCategoryDtos.find(sc => sc.id === subCat.id)?.displayName || '',
              url: '',
              breadcrumb: '',
              lastModifiedAt: '',
              productDtos: [],
              subCategoryDtos: []
            });
          });
        });
      })
      .catch(err => {
        console.error("Failed to fetch categories:", err);
      });
  }

  showOptions(category: CategoryAdmin) {
    this.hoveredCategory = category;
  }

  hideOptions() {
    this.hoveredCategory = null;
  }

  editCategory(category: CategoryAdmin) {
    this.router.navigate(['/admin/edit-category', category.url]);
  }

  viewSubcategories(category: CategoryAdmin) {
    this.selectedCategory = category;
    this.selectedSubcategory = null; // Reset when viewing subcategories
  }

  viewSubcategoryDetails(subcategoryId: number) {
    // Lookup the subcategory by ID
    const foundSubcategory = this.categoryMap.get(subcategoryId);

    if (foundSubcategory) {
      this.selectedSubcategory = foundSubcategory;
    } else {
      console.error("Subcategory not found");
    }
  }

  createCategory() {
    this.router.navigate(['/admin/create-category']);
  }

  clearSelection() {
    this.selectedCategory = null;
    this.selectedSubcategory = null;
  }
}
