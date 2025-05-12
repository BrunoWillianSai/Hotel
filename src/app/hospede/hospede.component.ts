import { Component, OnInit } from '@angular/core';
import { Hospede } from '../hospede';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HospedeService } from '../hospede.service';

@Component({
  selector: 'app-hospede',
  standalone: false,
  templateUrl: './hospede.component.html',
  styleUrl: './hospede.component.css'
})
export class HospedeComponent implements OnInit {


  hospede: Hospede[] = []; //array
  formGroupHospede: FormGroup; // cria o formulário
  isEditing: boolean = false;


  constructor(
    private service: HospedeService,
    private formBuildeR: FormBuilder,
  ) {
    this.formGroupHospede = formBuildeR.group({
      id: [''],
      nome: [''],
      cpf: [''],
      telefone: [''],
      email: [''],
      fidelidade: [''],
    });
  }


ngOnInit(): void {
    this.loadHospede(); // carrega a lista de professores
  }

  loadHospede() {
    this.service.getAll().subscribe({
      next: json => this.hospede = json
    });
  }

  onClickSave() {
    this.service.save(this.formGroupHospede.value).subscribe({
          next: json => {
            this.hospede.push(json);
            this.formGroupHospede.reset();
          }
    });
  }

  onClickDelete(hospede: Hospede) {
   this.service.delete(hospede).subscribe({
        next: () => this.loadHospede()
    });
  }
  onClickUpdate(hospede: Hospede) {
      this.formGroupHospede.setValue(hospede);
      this.isEditing=true;
    }

    onClickConfirmUpdate() {
      this.service.update(this.formGroupHospede.value)
        .subscribe({
            next: () => {
                this.loadHospede(); 
                this.clear();
            }
        });
    }

    onClickClear() {
      this.clear();
    }
      
    clear(){
      this.formGroupHospede.reset();
      this.isEditing=false;   
    }

}
