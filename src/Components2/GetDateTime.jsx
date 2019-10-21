export function getCurrentDate(){

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    return  date + "/" + month + "/" + year
    }

export function getCurrentTime() {
    var hours = new Date().getHours(); //Current Hours
    var minutes = new Date().getMinutes(); //Current Minutes

    // Check whether AM or PM 
    var newformat = hours >= 12 ? ' PM' : ' AM';  
                
    // Find current hour in AM-PM Format 
    hours = hours % 12;  
    
    // To display "0" as "12" 
    hours = hours ? hours : 12;  
    minutes = minutes < 10 ? '0' + minutes : minutes; 

    var twelvehourConvert = hours + ":" + minutes + newformat
    return twelvehourConvert
}