import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva',
  standalone: false,
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent implements OnInit {


  reserva: Reserva[] = []; //array
  formGroupReserva: FormGroup; // cria o formulário
  isEditing: boolean = false;


  constructor(
    private service: ReservaService,
    private formBuilder: FormBuilder,
  ) {
    this.formGroupReserva = formBuilder.group({
      id: [''],
      hospede: [''],
      quarto: [''],
      datae: [''],
      datas: [''],
      npessoas: [''],
      cafe: [''],
      obs: [''],
    });
  }


ngOnInit(): void {
    this.loadReserva(); // carrega a lista de professores
  }

  loadReserva() {
    this.service.getAll().subscribe({
      next: json => this.reserva = json
    });
  }

  onClickSave() {
    this.service.save(this.formGroupReserva.value).subscribe({
          next: json => {
            this.reserva.push(json);
            this.formGroupReserva.reset();
          }
    });
  }

  onClickDelete(reserva: Reserva) {
   this.service.delete(reserva).subscribe({
        next: () => this.loadReserva()
    });
  }
  onClickUpdate(reserva: Reserva) {
      this.formGroupReserva.setValue(reserva);
      this.isEditing=true;
    }

    onClickConfirmUpdate() {
      this.service.update(this.formGroupReserva.value)
        .subscribe({
            next: () => {
                this.loadReserva(); 
                this.clear();
            }
        });
    }

    onClickClear() {
      this.clear();
    }
      
    clear(){
      this.formGroupReserva.reset();
      this.isEditing=false;   
    }

}
