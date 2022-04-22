import { Injectable } from '@angular/core';
import { sampleFoods } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sampleFoods;
  }
}
