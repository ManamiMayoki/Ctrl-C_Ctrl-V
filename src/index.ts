// Primitives
let learnerName: string = "Marufa";
let practiceHour: number = 1;

// A basic strong-typed function
function displayProgress(name: string, hours: number): string {
    return `${name} has been practicing TypeScript for ${hours} hour!`;
}

console.log(displayProgress(learnerName, practiceHour));