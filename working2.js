const Observable = Rx.Observable;

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

const start$ = Observable.fromEvent(startButton, 'click');
const stop$ = Observable.fromEvent(stopButton, 'click');
const interval$ = Observable.interval(1000);

// const startInterval$ = start$
//     .switchMapTo(interval$)
//     .subscribe( (x) => console.log(x));

//start and stop//
// const subscription = interval$
//     .subscribe( (x) => console.log(x));
//
// Observable.fromEvent(stopButton, 'click')
//     .subscribe( () => {
//       subscription.unsubscribe();
//     })

// const subscription = interval$
//     .takeUntil(Observable.fromEvent(stopButton, 'click'))
//     .subscribe( (x) => console.log(x));

start$.switchMapTo(interval$)
    .takeUntil(stop$)
    .subscribe( (x) => console.log(x));
