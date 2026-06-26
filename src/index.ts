let learnerName: string = "Marufa";
let practiceHour: number = 2;

function displayProgress(name: string,hours: number): void{
    console.log('Hello ' + name + ', you have completed ' + hours + 'hours of practice today!');
}
displayProgress(learnerName,practiceHour);