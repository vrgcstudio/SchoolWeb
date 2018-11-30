import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Item } from '../../classes/item';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public items: Item[];
  public newItem: Item;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.clearNewItem();
    this.getItems();
  }

  public getItems(): void {
    this.apiService.listItems().subscribe(items => {
      this.items = items;
    });
  }

  public clearNewItem(): void {
    this.newItem = new Item();
    this.newItem.id = 0;
    this.newItem.name = '';
    this.newItem.price = 0;
  }

  public addItem(): void {
    this.apiService.addItem(this.newItem).subscribe(() => {
      this.clearNewItem();
      this.getItems();
    }, (e: HttpErrorResponse) => {
      alert(`Error ${e.status}`);
    });
  }

}
