import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <th> # </th>
          <th> Nazwa </th>
          <th> Utworów </th>
          <th> Ulubiona </th>
          <th> Usuń </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let playlist of playlists; let i = index" class="playlist-row" 
          [ngClass]="{'table-active': selected == playlist}"
          [ngStyle]="{ borderBottomColor:playlist.color }" 
          (click)="select(playlist)">
          <td> {{ i + 1 }}. </td>
          <td> {{ playlist.name }} </td>
          <td> {{ playlist.tracks }} </td>
          <td>
            <label><input type="checkbox" [(ngModel)]="playlist.favourite" (click)="$event.stopPropagation();"> 
              Ulubiona</label>
          </td>
          <td>
            <button type="button" class="btn btn-danger"  
            (click)= "delete(playlist); $event.preventDefault();">
            &times;</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    .playlist-row {
        border-bottom: 2px solid transparent;
    }
  `]
})
export class PlaylistsListComponent implements OnInit {

  @Output('selected')
  onSelected = new EventEmitter()

  @Output('deleted')
  onDelete = new EventEmitter()

  @Input()
  playlists;

  @Input()
  selected;

  select(playlist){
    this.onSelected.emit(playlist);
  }

  delete(e){
    this.onDelete.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
