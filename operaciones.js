const suma = (num1, num2) => console.log(num1 + num2)
const resta = (num1, num2) => console.log(num1 - num2)
const multi = (num1, num2) => console.log(num1 * num2)
const divi = (num1, num2) => console.log(num1 / num2)

const processEnv= process.argv

if(processEnv[2]=="-sum"){
    const num1=parseInt(processEnv[3])
    const num2=parseInt(processEnv[4])
    suma(num1, num2)



}

if(processEnv[2]=="-resta"){
    const num1=parseInt(processEnv[3])
    const num2=parseInt(processEnv[4])
    resta(num1, num2)



}

if(processEnv[2]=="-multi"){
    const num1=parseInt(processEnv[3])
    const num2=parseInt(processEnv[4])
    multi(num1, num2)



}

if(processEnv[2]=="-divi"){
    const num1=parseInt(processEnv[3])
    const num2=parseInt(processEnv[4])
    divi(num1, num2)



}
