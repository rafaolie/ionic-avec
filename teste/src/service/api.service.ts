import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Config from '../theme/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';

@Injectable()
	export class ImagensService {
		constructor(public http: Http){}

		getArray(array){
			return this.http.get(
				Config.linkUrlApi)
			.map(res => res.json());

		}

		getImagem(foto){
			let ObservableBatch = [];

			foto.fotos.forEach(foto => {
				ObservableBatch.push(this.getFoto(foto));
			});

		}

		getFoto(foto){
			return this.http.get(Config.linkUrl + 'foto/' + foto)
			.map(res => res.json());
		}


	}

