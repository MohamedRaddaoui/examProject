import { Component } from '@angular/core';
import { StageServiceService } from '../service/stage-service.service';
import { Stage } from '../model/stage.Model';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css'],
})
export class StagesComponent {
  listStage: Stage[] = [];
  descStage: any;
  constructor(private stageS: StageServiceService) {
    this.stageS.getStages().subscribe((data) => {
      this.listStage = data;
    });
  }
  addInt(idStage: number) {
    let stage = this.listStage.find((s) => s.id == idStage)!;
    stage.nbrInteresse++;
    this.stageS.incrementInt(idStage, stage).subscribe(() => {
      alert('Interest Added');
    });
  }
  deleteStage(idStage: number) {
    this.stageS.deleteStage(idStage).subscribe(() => alert('Stage Deleted'));
  }
}
