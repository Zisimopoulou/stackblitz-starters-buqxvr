import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CategoryAdmin } from '../../../models/category-admin.model';

@Component({
  selector: 'app-admin-create-update-category',
  templateUrl: './admin-create-update-category.component.html',
  styleUrls: ['./admin-create-update-category.component.scss'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule] // Add CommonModule to imports
})
export class AdminCreateUpdateCategoryComponent implements OnInit {
  categories: any[] = [];
  category: CategoryAdmin = {
    id: 0,
    displayName: '',
    url: '',
    breadcrumb: '',
    lastModifiedAt: '',
    productDtos: [],
    subCategoryDtos: []
  };
  selectedSubCategories: number[] = [];
  selectedParentCategoryId: number | null = null;
  isEditing = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditing = true;
        this.loadCategory(id);
      }
    });
  }

  loadCategories() {
    this.http.get<any[]>('https://newnew.free.beeceptor.com/categories').subscribe(data => {
      this.categories = data;
    });
  }

  loadCategory(id: number) {
    this.http.get<CategoryAdmin>(`https://newnew.free.beeceptor.com/admin-category?id=${id}`).subscribe(data => {
      this.category = data;
      this.selectedParentCategoryId = data.parentCategoryDto?.id ?? null;
      this.selectedSubCategories = data.subCategoryDtos.map(subCat => subCat.id);
    });
  }

  onSubmit() {
    const requestBody = {
      displayName: this.category.displayName,
      breadcrumb: this.category.breadcrumb,
      parentCategoryId: this.selectedParentCategoryId,
      subCategoriesId: new Set(this.selectedSubCategories.map(String))
    };

    if (this.isEditing) {
      this.http.put('https://newnew.free.beeceptor.com/admin-category', requestBody).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    } else {
      this.http.post('https://newnew.free.beeceptor.com/admin-category', requestBody).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    }
  }

  onDelete() {
    if (this.category.id) {
      this.http.delete(`https://newnew.free.beeceptor.com/admin-category?id=${this.category.id}`).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    }
  }
}
