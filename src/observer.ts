import { Observable } from 'rxjs';

export function observerFunction() {
  console.log('function is called');

  return '1';
}

export const observableClass$ = new Observable<number>((observable) => {
  // for (let i = 0; i <= 5; i++) {
  //   setTimeout(() => {   
  //     if (i == 4) {
  //       observable.error('unknown error');
  //     }
  //     observable.next(i);
  //   }, 1000);

  //   observable.next(i);
  // }
  // observable.complete();

  let i=0;
  let interval=setInterval(()=>{
    console.log(    'I let i:number ing');
    observable.next(i++);
    if(i==6){
      observable.error('un-known error occured')
    }

  },1000);
  return()=>{
    console.log('called when observer ');
    clearInterval(interval);
    }
});
export let subscriberImpl = {
  next: (data: any) => {
    console.log(data);
  },

  error: (error: string) => {
    console.log(error);
  },

  complete: () => {
    console.log('completed done..............');
  },
};
