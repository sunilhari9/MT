import { Component } from '@angular/core';
export class Seats {
    id: String;
    status: String;
}
const SEATS: Seats[] = [
    {
        id : "A1", status : "reserved"
        },
    {
        id : "A2", status : "reserved"
        },
    {
        id : "A3", status : "free"
        },
    {
        id : "A4", status : "free"
        },
    {
        id : "A5", status : "selected"
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
        id : "A10", status : "reserved"
        },
    {
        id : "A11", status : "reserved"
        },
    {
        id : "A12", status : "free"
        },
    {
        id : "B1", status : "reserved"
        },
    {
        id : "B2", status : "reserved"
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
        id : "B6", status : "reserved"
        },
    {
        id : "B7", status : "reserved"
        },
    {
        id : "B8", status : "reserved"
        },
    {
        id : "B9", status : "reserved"
        },
    {
        id : "B10", status : "reserved"
        },
    {
        id : "B11", status : "reserved"
        },
    {
        id : "B12", status : "reserved"
        },
    {
        id : "C1", status : "reserved"
        },
    {
        id : "C2", status : "reserved"
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
        id : "C6", status : "reserved"
        },
    {
        id : "C7", status : "reserved"
        },
    {
        id : "C8", status : "reserved"
        },
    {
        id : "C9", status : "reserved"
        },
    {
        id : "C10", status : "reserved"
        },
    {
        id : "C11", status : "reserved"
        },
    {
        id : "C12", status : "reserved"
        },
    {
        id : "D1", status : "reserved"
        },
    {
        id : "D2", status : "reserved"
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
        id : "D6", status : "reserved"
        },
    {
        id : "D7", status : "reserved"
        },
    {
        id : "D8", status : "reserved"
        },
    {
        id : "D9", status : "reserved"
        },
    {
        id : "D10", status : "reserved"
        },
    {
        id : "D11", status : "reserved"
        },
    {
        id : "D12", status : "reserved"
        },{
        id : "E1", status : "reserved"
        },
    {
        id : "E2", status : "reserved"
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
        id : "E6", status : "reserved"
        },
    {
        id : "E7", status : "reserved"
        },
    {
        id : "E8", status : "reserved"
        },
    {
        id : "E9", status : "reserved"
        },
    {
        id : "E10", status : "reserved"
        },
    {
        id : "E11", status : "reserved"
        },
    {
        id : "E12", status : "reserved"
        },{
        id : "F1", status : "reserved"
        },
    {
        id : "F2", status : "reserved"
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
        id : "F6", status : "reserved"
        },
    {
        id : "F7", status : "reserved"
        },
    {
        id : "F8", status : "reserved"
        },
    {
        id : "F9", status : "reserved"
        },
    {
        id : "F10", status : "reserved"
        },
    {
        id : "F11", status : "reserved"
        },
    {
        id : "F12", status : "reserved"
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
selectSeat(seat){
    if(seat.status==="free")
        seat.status="selected";
 
}

}
