import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
export interface ranking{
  id:number
  actionId:number;
  team_id:number;
  withdrawAmount:number;
}
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
rankings:ranking[] ;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getRanking().subscribe(ranking => this.rankings=ranking);

  }

}
