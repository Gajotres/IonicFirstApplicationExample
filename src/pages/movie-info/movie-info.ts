import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-movie-info',
  templateUrl: 'movie-info.html',
})
export class MovieInfoPage {

	movie: {};	

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.movie = navParams.get('movie');
	}
}
