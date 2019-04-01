import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "https://practicademo.azurewebsites.net/api/pizza_branch";

@Component({
  selector: 'app-sucursal-create',
  templateUrl: './sucursal-create.component.html',
  styleUrls: ['./sucursal-create.component.css']
})
export class SucursalCreateComponent implements OnInit {

  @Input() sucursalDetails = { name: '', description: '', phone: '', mobile: '', manager:'' }
  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() {
  }

  addSucursal(dataSucursal) {
    this.restApi.createSucursal(this.sucursalDetails).subscribe((data: {}) => {
      this.router.navigate(['/sucursal-list'])
    })
  }
}
