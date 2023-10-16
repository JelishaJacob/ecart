import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  ngOnInit(): void {
  }
  
  constructor(private fb: FormBuilder, private ds:DataService, private rout:Router) { }
  // model form for add
  addFormModel = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    productName: ['', [Validators.required, Validators.pattern("[a-zA-Z ']+")]],
    categoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    description: ['', [Validators.required, Validators.pattern("[0-9a-zA-Z'., ]+")]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    image: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9:/._-]+')]],
    rating: ['', [Validators.required, Validators.pattern('[0-9. ]+')]],
    review: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    warrenty: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    is_available: ['', [Validators.required, Validators.pattern("[a-zA-Z]+")]],
    vendorName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]]

  })

  addNewProduct() {

    const path = this.addFormModel.value

    let productData = {
      id: path.id,
      productName: path.productName,
      categoryId: path.categoryId,
      description: path.description,
      price: path.price,
      image: path.image,
      rating: path.rating,
      review: path.review,
      warrenty: path.warrenty,
      is_available: path.is_available,
      vendorName: path.vendorName
    }

    if(this.addFormModel.valid){
      this.ds.addProduct(productData).subscribe({
        next:(result:any)=>{
          alert("New Product Added")
          this.rout.navigateByUrl("")
        }
      })
    }
    else{
      alert("Please fill all..")
    }
    

  }



}
