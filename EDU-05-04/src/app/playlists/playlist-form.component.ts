import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
      <form (submit)="submit($event)">
        <div>
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" name = "name" [(ngModel)]="playlist.name" class="form-control">
          </div>
          <div class="form-group">
            <label>Utwory:</label>
            <input type="text" name = "tracks" [value]="playlist.tracks + ' utwory'" disabled class="form-control">
          </div>
          <div class="form-group">
            <label>Kolor:</label>
            <input type="color" name = "color" [(ngModel)]="playlist.color">
          </div>
          <div class="form-group">
            <label><input type="checkbox" name = "favorite" [(ngModel)]="playlist.favourite"> 
            Ulubiona</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-right" 
                    (click)="save(playlist)">Zapisz</button>
          </div>
        </div>
      </form>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  @Output('saved')
  onSave = new EventEmitter();

  save(playlist){
    this.onSave.emit(playlist)
  }

  submit(e){
      e.preventDefault();
      console.log(this.playlist);
  }
  constructor() { }

  ngOnInit() {
  }

}
