setTimeout(()=>{
document.getElementById("callbackhell").innerHTML = 10;
setTimeout(()=>{
    document.getElementById("callbackhell").innerHTML = 9;
    
    setTimeout(()=>{
        document.getElementById("callbackhell").innerHTML = 8;
       
        setTimeout(()=>{
            document.getElementById("callbackhell").innerHTML = 7;
           
            setTimeout(()=>{
                document.getElementById("callbackhell").innerHTML = 6;
              
                setTimeout(()=>{
                    document.getElementById("callbackhell").innerHTML = 5;
                 
                    setTimeout(()=>{
                        document.getElementById("callbackhell").innerHTML = 4;
                  
                        setTimeout(()=>{
                            document.getElementById("callbackhell").innerHTML = 3;
                          
                            setTimeout(()=>{
                                document.getElementById("callbackhell").innerHTML = 2;
                                }, 1000)
                                setTimeout(()=>{
                                    document.getElementById("callbackhell").innerHTML = 1;
                                    
                                    setTimeout(()=>{
                                        document.getElementById("callbackhell").innerHTML = "HAPPY INDEPENDANCE DAY!!!!";
                                        }, 1000)
                                    }, 1000)
                                
                                }, 1000)  
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        },1000)
}, 1000)