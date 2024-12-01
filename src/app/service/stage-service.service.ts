import { Injectable } from '@angular/core';
import { Stage } from '../model/stage.Model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StageServiceService {
  constructor(private http: HttpClient) {}

  getStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>('http://localhost:3000/stages');
  }

  getStageById(id: number) {
    return this.http.get<Stage>(`http://localhost:3000/stages/${id}`);
  }

  addStage(stage: Stage) {
    return this.http.post('http://localhost:3000/stages', stage);
  }

  deleteStage(id: number) {
    return this.http.delete(`http://localhost:3000/stages/${id}`);
  }

  updateStage(id: number, stage: Stage) {
    return this.http.patch(`http://localhost:3000/stages/${id}`, stage);
  }
  incrementInt(id: number, stage: Stage) {
    return this.http.patch(`http://localhost:3000/stages/${id}`, stage);
  }
}
