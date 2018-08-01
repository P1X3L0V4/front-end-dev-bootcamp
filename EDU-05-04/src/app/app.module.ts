import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ContentCardComponent } from './playlists/content-card.component';
import { PlaylistFormComponent } from './playlists/playlist-form.component';
import { PlaylistsListComponent } from './playlists/playlists-list.component';
import { PlaylistDetailComponent } from './playlists/playlist-detail.component';
import { PlaylistDeleteComponent } from './playlists/playlist-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent,
    PlaylistDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
