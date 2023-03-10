import { Injectable } from "@angular/core";

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('error while saving to localStorage', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log('error while fetching data from localStorage', error);
      return null;
    }
  }
}