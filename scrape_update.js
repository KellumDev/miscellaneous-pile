======================
NOTE: scripts scrapes the webpage for titles and the descrition of titles, produce an array of object laterals. 

expected output: 
rx_drugbank{
	description_one: "",
	description_two: "",
	description_three: ""
}
======================

(function(){
    
        var arr_1 = [], 
            arr_2=[], 
            result = {}, 
            rx_drugbank = {},
            name = $("div.content-header.d-sm-flex.align-items-center").find("h1").html(),
            col_2 = $("div.card-content.px-md-4.px-sm-2.pb-md-4.pb-sm-2").find("dl").eq(1).find("dd.col-md-10.col-sm-8"),
            col_1 = $("div.card-content.px-md-4.px-sm-2.pb-md-4.pb-sm-2").find("dl").eq(1).find("dt"); 

    col_1.each( function(i, val){
	var ele = $(val).html();
 	
 	let a = ele.replace(/\s/gi,"_"); 
 	let b = a.replace(/(\/).*$/g,""); 
 		
	arr_1.push( b);
	   
    });

    col_2.each( function(i, val){
		var ele = $(val).html(); 
// 		let a = ele.replace(/(?<=href=").*$/g, 'https://www.drugbank.ca'); 
			
	   arr_2.push(ele);
    }); 

      arr_1.forEach((key, i) => result[key] = arr_2[i]);
      result.Name = name; 
	 
	
    var d = {[name]: result };
    console.log(d);
  		

})()
