import { Component, OnInit } from '@angular/core';
import { Item } from '../../classes/item';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item: Item;

  constructor(
    public apiService: ApiService,
    public activatedRouted: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    const id = +this.activatedRouted.snapshot.paramMap.get('id');

    this.apiService.getItemInfo(id).subscribe(item => {
      this.item = item;
    }, () => {
      this.router.navigate(['/']);
    });
  }

  public updateItem(): void {
    this.apiService.updateItem(this.item).subscribe(() => {
      this.router.navigate(['/']);
    }, (e: HttpErrorResponse) => { alert(`ERROR - ${e.status}`); });
  }

  public deleteItem(): void {
    if (confirm('ลบหรอห้ะ??')) {
      this.apiService.deleteItem(this.item.id).subscribe(() => {
        this.router.navigate(['/']);
      }, (e: HttpErrorResponse) => { alert(`ERROR - ${e.status}`); });
    }
  }

}
