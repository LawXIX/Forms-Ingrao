import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  /**
     * Entidades que manipulan los formularios de Angular
     * 
     * FormGroup - Agrupar otros controles
     * FormControl - Manipula el valor de los campos (inputs, selects, checkboxes)
     * FormArray - Manejar arrays de otros controles
     */
  
  myForm = this.FormBuilder.group({
    name: this.FormBuilder.control(''),
    lastName: this.FormBuilder.control(''),
    email: this.FormBuilder.control('', [Validators.email, Validators.required,]),
    password:['', Validators.required],
  });


  get emailControl() {
      return this.myForm.get('email');
    }

  get passwordControl() {
      return this.myForm.get('password');
    }

  constructor (private FormBuilder : FormBuilder) {}


  onsubmit(): void{
    //alert('Usuario creado' + JSON.stringify(this.myForm.value));
    Swal.fire ({
    icon: 'success',
    title: 'Realizado',
    text: 'usuario registrado',
    })
  }

}
