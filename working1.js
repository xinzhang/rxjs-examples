//import {Observable} from 'rxjs/Rx';
const Observable = Rx.Observable;

const startButton = document.querySelector('#start');

// Observable.fromEvent(startButton, 'click')
//     .subscribe( (event) => {
//         //console.log(event);
//        Observable.interval(1000)
//          .subscribe( (x) => console.log(x));
//     }
//   );

// Observable.interval(1000)
//     .subscribe( (x) => console.log(x) );

Observable.fromEvent(startButton, 'click')
    .switchMap( () => Observable.interval(1000))
    .subscribe( (x) => console.log(x));
