import { Component } from '@angular/core';
export class Seats {
    id: String;
    status: String;
}
const SEATS: Seats[] = [
    {
        id : "A1", status : "free"
        },
    {
        id : "A2", status : "free"
        },
    {
        id : "A3", status : "free"
        },
    {
        id : "A4", status : "free"
        },
    {
        id : "A5", status : "free"
        },
    {
        id : "A6", status : "free"
        },
    {
        id : "A7", status : "free"
        },
    {
        id : "A8", status : "free"
        },
    {
        id : "A9", status : "free"
        },
    {
        id : "A10", status : "free"
        },
    {
        id : "A11", status : "free"
        },
    {
        id : "A12", status : "free"
        },
    {
        id : "B1", status : "free"
        },
    {
        id : "B2", status : "free"
        },
    {
        id : "B3", status : "free"
        },
    {
        id : "B4", status : "free"
        },
    {
        id : "B5", status : "free"
        },
    {
        id : "B6", status : "free"
        },
    {
        id : "B7", status : "free"
        },
    {
        id : "B8", status : "free"
        },
    {
        id : "B9", status : "free"
        },
    {
        id : "B10", status : "free"
        },
    {
        id : "B11", status : "free"
        },
    {
        id : "B12", status : "free"
        },
    {
        id : "C1", status : "free"
        },
    {
        id : "C2", status : "free"
        },
    {
        id : "C3", status : "free"
        },
    {
        id : "C4", status : "free"
        },
    {
        id : "C5", status : "free"
        },
    {
        id : "C6", status : "free"
        },
    {
        id : "C7", status : "free"
        },
    {
        id : "C8", status : "free"
        },
    {
        id : "C9", status : "free"
        },
    {
        id : "C10", status : "free"
        },
    {
        id : "C11", status : "free"
        },
    {
        id : "C12", status : "free"
        },
    {
        id : "D1", status : "free"
        },
    {
        id : "D2", status : "free"
        },
    {
        id : "D3", status : "free"
        },
    {
        id : "D4", status : "free"
        },
    {
        id : "D5", status : "free"
        },
    {
        id : "D6", status : "free"
        },
    {
        id : "D7", status : "free"
        },
    {
        id : "D8", status : "free"
        },
    {
        id : "D9", status : "free"
        },
    {
        id : "D10", status : "free"
        },
    {
        id : "D11", status : "free"
        },
    {
        id : "D12", status : "free"
        },{
        id : "E1", status : "free"
        },
    {
        id : "E2", status : "free"
        },
    {
        id : "E3", status : "free"
        },
    {
        id : "E4", status : "free"
        },
    {
        id : "E5", status : "free"
        },
    {
        id : "E6", status : "free"
        },
    {
        id : "E7", status : "free"
        },
    {
        id : "E8", status : "free"
        },
    {
        id : "E9", status : "free"
        },
    {
        id : "E10", status : "free"
        },
    {
        id : "E11", status : "free"
        },
    {
        id : "E12", status : "free"
        },{
        id : "F1", status : "free"
        },
    {
        id : "F2", status : "free"
        },
    {
        id : "F3", status : "free"
        },
    {
        id : "F4", status : "free"
        },
    {
        id : "F5", status : "free"
        },
    {
        id : "F6", status : "free"
        },
    {
        id : "F7", status : "free"
        },
    {
        id : "F8", status : "free"
        },
    {
        id : "F9", status : "free"
        },
    {
        id : "F10", status : "free"
        },
    {
        id : "F11", status : "free"
        },
    {
        id : "F12", status : "free"
        },
    ];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Movie Seat Reservation';
    seats = SEATS;
    noSeats = 1;
name=""
    selectedSeats = [];
    confirmdBooking = JSON.parse(localStorage.getItem('reservedSeats'))||[];
 constructor() {
     for(let seat of SEATS){
           for(let cb of this.confirmdBooking){
                for(let confirmSeat of cb.seates){
                    if(seat.id === confirmSeat ){
                        seat.status="reserved";
                    }
               }
        }
     }
            
  };
errorMessage="";
SucessMessage="";
confirm(){
    if(this.noSeats===this.selectedSeats.length && this.name!==""){
        var apiBookedList= JSON.parse(localStorage.getItem('reservedSeats'))||[];
        apiBookedList.push({"name":this.name,"seates":this.selectedSeats});
        localStorage.setItem('reservedSeats',JSON.stringify(apiBookedList));
        this.errorMessage="";
        this.SucessMessage = "Tickets Confirmed...!"
    }else{
         this.errorMessage ="Opps.. U Haven't choosen required no of Seats/ Forget to Enter the name" ;
        this.SucessMessage="";
    }
}
selectSeat(seat){
    if(this.noSeats>this.selectedSeats.length){
        if(seat.status==="free"){
            this.selectedSeats.push(seat.id);
            seat.status="selected";
            this.errorMessage="";
        }
       
            
    }else{
        this.SucessMessage="";
        this.errorMessage ="Opps.. U Have enterd only "+ this.noSeats+ " Seats" ;
    }
}

}
