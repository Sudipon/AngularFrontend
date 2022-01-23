import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaticpagesService } from '../../services/staticpages.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error : any = null;
  constructor(private authService : StaticpagesService) { }

  ngOnInit(): void {
    // this.error = null;
    // this.authService.err.subscribe((error) => {
    //   this.error = error;
    //   this.isLoading = false;
    // })
  }

  onSubmit(form : NgForm){
    this.isLoading = true;
    if (form.invalid) {
      return;
    }
    const formData: any = {
      title:form.value.title,
      mobile: form.value.mobile,
      body:form.value.body,
      email: form.value.email,
      name: form.value.name,
    };
    this.authService.createContact(formData);
    console.table(formData);
        form.reset();
  }

}
