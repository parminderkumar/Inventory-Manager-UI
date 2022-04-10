import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ItemViewModel } from './items/models/ItemViewModel';
@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  private REST_API_SERVER = "http://localhost:8080/inventory-manager-items/inventorymanager/items";
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
  public addItem(itemViewModel: ItemViewModel): Observable<any> {
    return this.httpClient.post(this.REST_API_SERVER, itemViewModel);
  }
  public updateItem(itemViewModel: ItemViewModel): Observable<any> {
    return this.httpClient.put(this.REST_API_SERVER, itemViewModel);
  }
  deleteItem(id: number): Observable<any> {
    console.log(this.REST_API_SERVER + "/" + id);
    return this.httpClient.delete(this.REST_API_SERVER + "/" + id);
  }

}