import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StageServiceService } from '../service/stage-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from '../model/stage.Model';

@Component({
  selector: 'app-addstage',
  templateUrl: './addstage.component.html',
  styleUrls: ['./addstage.component.css'],
})
export class AddstageComponent {
  formStage = new FormGroup({
    id: new FormControl('', Validators.required),
    titre: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    entreprise: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]*$'),
    ]),
    disponible: new FormControl(true, Validators.required),
    nbrInteresse: new FormControl(0, Validators.required),
  });
  constructor(private ss: StageServiceService, private route: Router) {}
  add() {
    const FormValue = this.formStage.value;
    const stage: Stage = {
      id: Number(FormValue.id),
      titre: FormValue.titre ?? '',
      description: FormValue.description ?? '',
      entreprise: FormValue.entreprise ?? '',
      disponible: FormValue.disponible ?? true,
      nbrInteresse: 0,
    };
    console.log(stage);
    this.ss.addStage(stage).subscribe((data) => console.log(data));
    this.route.navigateByUrl('/stages');
  }
}
