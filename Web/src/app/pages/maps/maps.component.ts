import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../service/maps/maps.service';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral , SebmGoogleMapMarker} from 'angular2-google-maps/core';
import { UserService } from '../../service/user/user.service';
import { ReportService } from '../../service/report/report.service';
import { Report } from '../../models/Report';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  /*private lat:number;
  private lng:number;*/

  lat: number = 0;
  lng: number = 0;
  lat2: number = 0;
  lng2: number = 0;
  zoom: number = 13;

  reports:Report[];

  constructor(maps:MapsService, 
              public userService:UserService,
              public reportService:ReportService,) { 
    
    this.reports = this.reportService.getLastReportArr();
    
    var that = this;
    
    navigator.geolocation.getCurrentPosition(function(position){
      that.lat = position.coords.latitude;
      that.lng = position.coords.longitude;
      
      that.lat2 = position.coords.latitude + 1;
      that.lng2 = position.coords.longitude + 1;
    });

    
  
    
  }

  ngOnInit() {
  }

}
