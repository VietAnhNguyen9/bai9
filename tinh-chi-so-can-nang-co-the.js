let weight = +prompt('enter weight');
let height = +prompt('enter Height');
let bmi =weight / ( height ^ 2 );
bmi = (30 <= bmi) ? 'Obese' : (25 <= bmi < 30) ? 'Overweight':
    (18.5 <= bmi <25) ? 'Normal' : (bmi < 18.5) ? 'Underweighht' : ''
document.write(bmi)


