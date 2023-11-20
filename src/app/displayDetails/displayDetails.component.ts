import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-displayDetails',
    templateUrl: './displayDetails.component.html',
    styleUrl: './displayDetails.component.css'
})
export class DetailComponent{
    
    display = false;
    detailLog = []

    constructor(){
        
    }

    ngOnInit(){

    }

    onClick(){
        this.display = !this.display
        this.detailLog.push(this.detailLog.length+1)
    }

    
}