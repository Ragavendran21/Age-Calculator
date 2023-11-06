let userInput = document.getElementById("datepicker");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result")
function calculateAge(){
    let birthdate = new Date(userInput.value)
    let date= birthdate.getDate();
    let month = birthdate.getMonth() + 1; 
    let year =birthdate.getFullYear();
    let today = new Date();
    let todaydate = today.getDate();
    let todaysmonth = today.getMonth()+1;
    let todaysyear = today.getFullYear();
    let d3,m3,y3;
    y3 = todaysyear - year;
    if(todaysmonth > month){
        m3 = todaysmonth - month
    }else{
        y3--;
        m3= 12 + (todaysmonth - month);
    }
    if(todaydate >= date){
        d3 = todaydate -date
    }else{
        m3--;
        d3 = getDaysInMonth(year,month) + (todaydate -date)
    }
    if(m3 < 0){
        m3 =  11;
        y3--;
    }
    result.innerHTML = `You are ${y3} years,${m3} months and ${d3} days old`
}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}