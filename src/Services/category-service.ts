import { Injectable } from '@angular/core';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  categories:ICategory[] = []
  
    constructor(){
      
      this.categories = [
        { Name: 'الكل',ID : 1 , Icon: '✨'},
        { Name: 'خليجي',ID:2 ,Icon: '👑' },
        { Name: 'سوري',ID:3 ,Icon: '🌹' },
        { Name: 'اطفال', ID:4,Icon: '👗' }
      ];
    }

    // ✅ Get all categories
  getAllCategories(): ICategory[] {
    return this.categories;
  }

  // ✅ Get category by ID
  getCategoryById(id: number): ICategory | undefined {
    return this.categories.find(cat => cat.ID === id);
  }

}
