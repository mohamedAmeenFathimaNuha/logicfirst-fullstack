function displayTime(){

    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();

    let ampm = "AM";
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }

    document.getElementById('hours').innerHTML=padZero(hr)
    document.getElementById('minutes').innerHTML=min
    document.getElementById('seconds').innerHTML=sec
    document.getElementById('ampm').innerHTML = ampm;

}  
 function padZero(num){
   return num<10 ? "0" +num  :num
}

setInterval(displayTime,500)