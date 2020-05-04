import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';
import { ViewEncapsulation } from '@angular/compiler/src/core';

export interface responseData {
  apiStatus: status
  inventoryType: number
  boardingPoints: point[]
  droppingPoints: point[]
  seats:seat[]
  serviceTaxApplicable: boolean
  etsServiceChargePer:number
}

export interface seatlayout{
  upper: layout
  lower: layout
}

export interface layout {
  maxRow: number
  maxColumn: number
  seats: seat[][]
}

export interface status{
  message: string
  success:boolean
}

export interface point{
  id: string,
  location: string,
  time:string
}

export interface seat{
  length: number
  id: string
  width: number
  available: boolean
  fare: number
  totalFareWithTaxes: number
  serviceTaxAmount: number
  serviceTaxPer: number
  operatorServiceChargeAbsolute: number
  operatorServiceChargePercent: number
  ac: boolean
  sleeper: boolean
  row: number
  column: number
  zIndex: number
  commission: any
  ladiesSeat: boolean
  bookedBy: any
  childFare?: number
}


@Component({
  selector: 'app-bus-seatlayout',
  templateUrl: './bus-seatlayout.component.html',
  styleUrls: ['./bus-seatlayout.component.scss']
})
export class BusSeatlayoutComponent implements OnInit {

  @Output() seat: EventEmitter<any> = new EventEmitter<any>(null);

  data: responseData = {
    apiStatus: {
      "message": "SUCCESS",
      "success": true
    },
    inventoryType: 131,
    boardingPoints: [
      {
        "id": "24092",
        "location": "Central Railway Station",
        "time": "08:40 PM"
      },
      {
        "id": "4895",
        "location": "Egmore",
        "time": "08:45 PM"
      },
      {
        "id": "9866",
        "location": "Koyembedu",
        "time": "10:00 PM"
      },
      {
        "id": "68685",
        "location": "Annanagar West Depot",
        "time": "10:10 PM"
      },
      {
        "id": "284570",
        "location": "LUCAS TVS",
        "time": "10:15 PM"
      },
      {
        "id": "284572",
        "location": "DRG HOSPITAL",
        "time": "10:20 PM"
      },
      {
        "id": "35117",
        "location": "Retteri Signal",
        "time": "10:25 PM"
      },
      {
        "id": "23698",
        "location": "Madhavaram",
        "time": "10:30 PM"
      },
      {
        "id": "23062",
        "location": "Red Hills",
        "time": "10:35 PM"
      },
      {
        "id": "205803",
        "location": "RMK College",
        "time": "10:45 PM"
      }
    ],
    droppingPoints: [
      {
        "id": "18830",
        "location": "Vanasthalipuram",
        "time": "07:30 AM"
      },
      {
        "id": "36240",
        "location": "L.B Nagar",
        "time": "07:35 AM"
      },
      {
        "id": "13457",
        "location": "Kothapeta",
        "time": "07:40 AM"
      },
      {
        "id": "5040",
        "location": "Dilsukhnagar",
        "time": "07:45 AM"
      },
      {
        "id": "4897",
        "location": "Nampally",
        "time": "07:50 AM"
      },
      {
        "id": "248291",
        "location": "Lakidikapool",
        "time": "07:55 AM"
      },
      {
        "id": "4201",
        "location": "Punjagutta",
        "time": "08:00 AM"
      },
      {
        "id": "13455",
        "location": "Ameerpet",
        "time": "08:05 AM"
      },
      {
        "id": "17188",
        "location": "S R nagar",
        "time": "08:10 AM"
      },
      {
        "id": "30133",
        "location": "ESI",
        "time": "08:15 AM"
      },
      {
        "id": "17190",
        "location": "Bharath Nagar",
        "time": "08:20 AM"
      },
      {
        "id": "7026",
        "location": "Kukatpally",
        "time": "08:25 AM"
      }
    ],
    seats: [
      {
        "id": "D",
        "row": 0,
        "column": 0,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "C",
        "row": 1,
        "column": 0,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "B",
        "row": 3,
        "column": 0,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "A",
        "row": 4,
        "column": 0,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R1",
        "row": 0,
        "column": 1,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R2",
        "row": 1,
        "column": 1,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L2",
        "row": 3,
        "column": 1,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L1",
        "row": 4,
        "column": 1,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R3",
        "row": 0,
        "column": 2,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R4",
        "row": 1,
        "column": 2,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L4",
        "row": 3,
        "column": 2,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L3",
        "row": 4,
        "column": 2,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R5",
        "row": 0,
        "column": 3,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R6",
        "row": 1,
        "column": 3,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L6",
        "row": 3,
        "column": 3,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L5",
        "row": 4,
        "column": 3,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R7",
        "row": 0,
        "column": 4,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R8",
        "row": 1,
        "column": 4,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L8",
        "row": 3,
        "column": 4,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": false,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L7",
        "row": 4,
        "column": 4,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": false,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R9",
        "row": 0,
        "column": 5,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": false,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R10",
        "row": 1,
        "column": 5,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": false,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L10",
        "row": 3,
        "column": 5,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L9",
        "row": 4,
        "column": 5,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R11",
        "row": 0,
        "column": 6,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R12",
        "row": 1,
        "column": 6,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L12",
        "row": 3,
        "column": 6,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L11",
        "row": 4,
        "column": 6,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R13",
        "row": 0,
        "column": 7,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R14",
        "row": 1,
        "column": 7,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L14",
        "row": 3,
        "column": 7,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L13",
        "row": 4,
        "column": 7,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R15",
        "row": 0,
        "column": 8,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R16",
        "row": 1,
        "column": 8,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L16",
        "row": 3,
        "column": 8,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": false,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L15",
        "row": 4,
        "column": 8,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": false,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R17",
        "row": 0,
        "column": 9,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": false,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R18",
        "row": 1,
        "column": 9,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": false,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L18",
        "row": 3,
        "column": 9,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L17",
        "row": 4,
        "column": 9,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R19",
        "row": 0,
        "column": 10,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R20",
        "row": 1,
        "column": 10,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L20",
        "row": 3,
        "column": 10,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L19",
        "row": 4,
        "column": 10,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R21",
        "row": 0,
        "column": 11,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "R22",
        "row": 1,
        "column": 11,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "M23",
        "row": 2,
        "column": 11,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L22",
        "row": 3,
        "column": 11,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      },
      {
        "id": "L21",
        "row": 4,
        "column": 11,
        "zIndex": 0,
        "length": 1,
        "width": 1,
        "fare": 3000,
        "commission": null,
        "available": true,
        "ladiesSeat": false,
        "bookedBy": null,
        "ac": false,
        "sleeper": false,
        "totalFareWithTaxes": 3150,
        "serviceTaxAmount": 150,
        "serviceTaxPer": 5,
        "childFare": 0,
        "operatorServiceChargeAbsolute": 0,
        "operatorServiceChargePercent": 0
      }
    ],
    "serviceTaxApplicable": true,
    "etsServiceChargePer": 0
  }

  upperSeats: seat[][];
  lowerSeats: seat[][];

  constructor(
  ) {
    this.lowerSeats = this.matrix(0);
    this.upperSeats = this.matrix(1);
    console.log(this.lowerSeats, this.upperSeats);
  }

  matrix(index: number) {

    let seat : any;

    let row: number[] = this.data.seats.map(el => el.zIndex == index ? el.row : undefined);
    let column: number[] = this.data.seats.map(el => el.zIndex == index ? el.column : undefined);

    let rowMax = Math.max(...row) + 1;
    let columnMax = Math.max(...column) + 1;
    if (Number.isNaN(rowMax) && Number.isNaN(columnMax)) {

      seat = null;
      return seat;
    }
    else {
      let seats = new Array(rowMax).fill(null).map(() => new Array(columnMax).fill(null));
      this.data.seats.map(el => el.zIndex == index ? seats[el.row][el.column] = el : null);
      seat = _.zip(...seats);
      return seat;
    }
  }

  ngOnInit() { }
  
  selectedSeat() {
    this.seat.emit(true);
  }
}
