import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sucursal-edit',
  templateUrl: './sucursal-edit.component.html',
  styleUrls: ['./sucursal-edit.component.css']
})
export class SucursalEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  sucursalData: any = {};

  constructor( public restApi: RestApiService, public actRoute: ActivatedRoute, public router: Router )
  { }

  ngOnInit() {
    this.restApi.getSucursal(this.id).subscribe((data: {}) => {
      this.sucursalData = data;
    })
  }

   // Update employee data
   updateSucursal() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateSucursal(this.id, this.sucursalData).subscribe(data => {
        this.router.navigate(['/sucursal-list'])
      })
    }
  }

}
