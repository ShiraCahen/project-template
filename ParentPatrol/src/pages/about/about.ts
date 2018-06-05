import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import firebase from 'firebase';
import { AngularFireObject, AngularFireList } from "angularfire2/database"
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items;
  hsdata : any;
  reports: any[];
  team: Text;
  data:  any;
  moadonitData:any[] = [];
  hotSpotData:any[] = [];
  coldSpotData:any[] = [];
  d: string;

  constructor(public navCtrl: NavController,private afDatabase : AngularFirestore) {
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
  }

 getData(){
 this.data = this.afDatabase.collection('Moadonit').valueChanges();
    this.data.subscribe(d=>{
      console.log("moadonit"+d)
      this.moadonitData = d// hold the array of all Moadonit reports
  });
  this.data = this.afDatabase.collection('HotSpot').valueChanges();
  this.data.subscribe(d=>{
    console.log("hot spot: "+d)
    this.hotSpotData = d// hold the array of all hot spot reports
});
this.data = this.afDatabase.collection('ColdSpot').valueChanges();
this.data.subscribe(d=>{
  console.log("cold spot: "+ d)
  this.coldSpotData = d// hold the array of all cold spot reports
});
  
}

  

   
   

}
