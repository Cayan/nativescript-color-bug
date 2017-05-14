import { Component } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ['./items.component.css']
})
export class ItemsComponent {
    selected: number = 1;

    constructor(private itemService: ItemService) { }

    check(id: number): void {
        this.selected = id;
    }
}
