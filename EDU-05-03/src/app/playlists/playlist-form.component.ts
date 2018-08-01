import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
        <form (submit)="submit($event)">
        <div>
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" [(ngModel)]="playlist.name" class="form-control" name="name">
          </div>
          <div class="form-group">
            <label>Utwory:</label>
            <input type="text" [value]="playlist.tracks + ' utwory'" disabled class="form-control" name="tracks">
          </div>
          <div class="form-group">
            <label>Kolor:</label>
            <input type="color" [(ngModel)]="playlist.color" name="color">
          </div>
          <div class="form-group">
            <label><input type="checkbox" [(ngModel)]="playlist.favourite" name="favourite"> 
            Ulubiona</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-xs-right" name="submit"
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

  submit(event){
      event.preventDefault();
  }

  constructor() { }

  ngOnInit() {
  }

}
