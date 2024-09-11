import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CategoryAdmin } from '../../../models/category-admin.model';

@Component({
  selector: 'app-admin-create-update-category',
  templateUrl: './admin-create-update-category.component.html',
  styleUrls: ['./admin-create-update-category.component.scss'],
  standalone: true,
  imports: [FormsModule] // Add FormsModule to imports
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
      this.selectedSubCategories = data.subCategoryDtos.map(subCat => subCat.id);
    });
  }

  onSubmit() {
    const requestBody = {
      displayName: this.category.displayName,
      name: this.category.breadcrumb,
      parentCategoryId: this.category.parentCategoryDto?.id, // Use parentCategoryDto's id
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
