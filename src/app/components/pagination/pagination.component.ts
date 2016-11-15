import {Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  /*
   *  Length of items pagination should be build for
   * */
  @Input() itemsLength: number;

  /*
   *  Number of rows per page
   * */
  @Input() rows: number;

  /*
   * On pagination change event
   * */
  @Output('page-changed') pageChanged: EventEmitter<any> = new EventEmitter();

  /*
   * Array of number to display in UI as pagination pages
   * */
  pages: number[] = [];

  /*
   * Pagination component visibility
   * */
  visible: boolean;
  prevDisabled: boolean;
  nextDisabled: boolean;
  activeTabIndex: number = 1;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.itemsLength > 0) {
      var paginationSize = Math.ceil(this.itemsLength / this.rows);
      this.pages = [];
      for (var i = 1; i <= paginationSize; i++) {
        this.pages[i - 1] = i;
      }

      this.visible = this.itemsLength > this.rows;
      this.activeTabIndex = 1;
      this.reloadNavLinks();
    }
  }

  changePage(clickedIndex: number): void {
    this.activeTabIndex = clickedIndex;
    this.reloadNavLinks();
    this.pageChanged.emit(clickedIndex);
  }

  nextClicked($event): void {
    if (this.activeTabIndex !== this.pages.length) {
      this.activeTabIndex++;
      this.reloadNavLinks();
      this.pageChanged.emit(this.activeTabIndex);
    }
  }

  prevClicked($event): void {
    if (this.activeTabIndex !== 1) {
      this.activeTabIndex--;
      this.reloadNavLinks();
      this.pageChanged.emit(this.activeTabIndex);
    }
  }

  private reloadNavLinks(): void {
    this.prevDisabled = this.activeTabIndex == 1;
    this.nextDisabled = this.activeTabIndex == this.pages.length;
  }

}
