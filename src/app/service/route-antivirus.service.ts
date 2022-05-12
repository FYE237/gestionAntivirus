import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { caracter } from '../model/caracter';
import { caracteristique } from '../model/caracteristique';

@Injectable({
  providedIn: 'root'
})
export class RouteAntivirusService {

  public carac!: caracteristique[];
  caractSubject = new Subject<caracteristique[]>()
  // public caracter!: caracter;
  public apiUrl = 'http://192.168.43.229:3000/api/antivirus';
  caracModel!: caracteristique;
  constructor() { }

 public async getCaracteristique(caracter: caracter){
   this.carac=[]
   await fetch(this.apiUrl,{
     method: "GET",
     headers: {
       'Content-Type' : 'application/json',
       'Accept': 'application/json',
     },
   })
   .then((res)=>{return res.json()})
   .then((resJson)=>{
     resJson.forEach((element:any) => {
      // console.log(element)
      if((element.nom == caracter.nom)){
        console.log(element)
        this.caracModel={
          nomAntivirus: element.nom,
          version: element.version,
          pointsforts: element.pointsforts,
          vulnerabilites:element.vulnerabilites,
          attaques: element.attaques,
        }
        this.carac.push(this.caracModel)
        this.caractSubject.next(this.carac.slice())
      }

     });
   })

  return this.carac;
 }
}
