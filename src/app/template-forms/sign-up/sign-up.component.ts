import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  genders = ['male', 'female']
  form2: FormGroup | undefined;
  form: FormGroup = new FormGroup({
    '0name#input': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    '1email#radio': new FormControl('', [Validators.required, Validators.email]),
    '2pancard': new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]),
    '4phone': new FormControl('', [Validators.required]),
    '5gender': new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.form.controls['0name#input'].valueChanges.subscribe((val) => {
      if (val.split(' ').length > 1) {
        this.genders = ['others']
      }
      else {
        this.genders = ['male', 'female']
      }
    })
    this.form2 = this.fb.group({
      'name': this.fb.control('')
    })
  }

}
