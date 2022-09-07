

/* ProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProduct  */

{
//filter content
    // let sBrandName = ["sdc","we","asxs","asd","asx","req"];
    // let sBrandNumberOfItems = [12,5,4,5,8,5];
    
    let sBrandAndQuantity = [
        {
            sBrand: "Tata 1mg",
            sQuantity: 13,
        },
        
        {
            sBrand: "Carbamide Forte",
            sQuantity: 12,
        },
        
        {
            sBrand: "Zingavita",
            sQuantity: 11,
        },
        
        {
            sBrand: "HealthVit",
            sQuantity: 10,
        },
        
        {
            sBrand: "GNC",
            sQuantity: 8,
        },
        
        {
            sBrand: "HealthKart",
            sQuantity: 7,
        },
        
        {
            sBrand: "Adorreal",
            sQuantity: 6,
        },
        
        {
            sBrand: "Redivit",
            sQuantity: 56,
        },
        
        {
            sBrand: "Maxirich",
            sQuantity: 5,
        },
        
        {
            sBrand: "Pure Nutrition",
            sQuantity: 5,
        },
        
        {
            sBrand: "PureFoods",
            sQuantity: 5,
        },
        
        {
            sBrand: "Revital",
            sQuantity: 5,
        },
        
        {
            sBrand: "Fitspire",
            sQuantity: 4,
        },
        
        {
            sBrand: "Lycobact",
            sQuantity: 4,
        },
        
        {
            sBrand: "Purayati",
            sQuantity: 4,
        },
        
        {
            sBrand: "Roncuvita",
            sQuantity: 4,
        },
        
        {
            sBrand: "Azani Active Nutrition",
            sQuantity: 3,
        },
        
        {
            sBrand: "B 29 Daily",
            sQuantity: 3,
        },
        
        {
            sBrand: "Boldfit",
            sQuantity: 3,
        },
        
        {
            sBrand: "Cooper",
            sQuantity: 3,
        },
        
        {
            sBrand: "Inlife",
            sQuantity: 3,
        },
        
        {
            sBrand: "MuscleBlaze",
            sQuantity: 3,
        },
        
        {
            sBrand: "Nature's Velvet",
            sQuantity: 3,
        },
        
        {
            sBrand: "Nutracology",
            sQuantity: 3,
        },
        
        {
            sBrand: "Swisse",
            sQuantity: 3,
        },
        {
            sBrand: "The Vitamin Company",
            sQuantity: 3,
        },
        
        {
            sBrand: "TrueBasics",
            sQuantity: 3,
        },
        
        {
            sBrand: "Unifit",
            sQuantity: 3,
        },
        
        {
            sBrand: "Vogue Wellness",
            sQuantity: 3,
        },
        
        {
            sBrand: "Zinactive",
            sQuantity: 3,
        },
    ];
    
    
    
    let sdiscount = [
       {
         percent: "Less than 10%",
         squantity2: 159
       },
   
       {
         percent: "10% and above",
         squantity2: 345
       },
   
       {
         percent: "20% and above",
         squantity2: 151
       },
   
       {
         percent: "30% and above",
         squantity2: 102
       },
   
    ];
    
    
    
    sdisplay1(sBrandAndQuantity);
    sdisplay2(sBrandAndQuantity);
    sNameNumberDiscount(sdiscount);
    sdisplay3(sBrandAndQuantity);
    
    function sdisplay1(array){
        array.map(function(obj, index, array){
            let div1 = document.createElement("div");
        
            let div2 = document.createElement("div");
            let input1 = document.createElement("input");
            input1.setAttribute("type","checkbox");
            input1.setAttribute("id",obj.sBrand);
            input1.setAttribute("class","sInput1Forcss");
            input1.setAttribute("name",obj.sBrand);
            input1.setAttribute("value",obj.sBrand);
            let label1 = document.createElement("label");
            label1.innerText = obj.sBrand;
            label1.setAttribute("for",obj.sBrand);
            label1.setAttribute("class", "sLabel1Forcss");
            label1.setAttribute("id",obj.sBrand);
            
            let div3 = document.createElement("div");
            let span1 = document.createElement("span");
            span1.innerText = obj.sQuantity;
            
            //appending
            div2.append(input1, label1);
            div3.append(span1);
            
            div1.append(div2, div3);
            
            document.getElementById("sNameNumber1").append(div1);
        });
    };
    
    function sdisplay2(array){
        array.map(function(obj, index, array){
            let div1 = document.createElement("div");
            
            let div2 = document.createElement("div");
            let input1 = document.createElement("input");
            input1.setAttribute("type","checkbox");
            input1.setAttribute("id",obj.sBrand);
            input1.setAttribute("class","sInput1Forcss");
            input1.setAttribute("name",obj.sBrand);
            input1.setAttribute("value",obj.sBrand);
            let label1 = document.createElement("label");
            label1.innerText = obj.sBrand;
            label1.setAttribute("for",obj.sBrand);
            label1.setAttribute("class", "sLabel1Forcss");
            label1.setAttribute("id",obj.sBrand);
            
            let div3 = document.createElement("div");
            let span1 = document.createElement("span");
            span1.innerText = obj.sQuantity;
            
            //appending
            div2.append(input1, label1);
            div3.append(span1);
            
            div1.append(div2, div3);
            
            document.getElementById("sNameNumber2").append(div1);
            
        });
    };
    
    
    function sNameNumberDiscount(array){
        array.map(function(obj, index, array){
            let div1 = document.createElement("div");
            
            let div2 = document.createElement("div");
            let input1 = document.createElement("input");
            input1.setAttribute("type","checkbox");
            input1.setAttribute("id",obj.percent);
            input1.setAttribute("class","sInput1Forcss");
            input1.setAttribute("name",obj.percent);
            input1.setAttribute("value",obj.percent);
            let label1 = document.createElement("label");
            label1.innerText = obj.percent;
            label1.setAttribute("for",obj.percent);
            label1.setAttribute("class", "sLabel1Forcss");
            label1.setAttribute("id",obj.sBrand);
            
            let div3 = document.createElement("div");
            let span1 = document.createElement("span");
            span1.innerText = obj.squantity2;
            
            //appending
            div2.append(input1, label1);
            div3.append(span1);
            
            div1.append(div2, div3);
            
            document.getElementById("sNameNumberDiscount").append(div1);
            
        });
    };
    
    
    function sdisplay3(array){
        array.map(function(obj, index, array){
            let div1 = document.createElement("div");
            
            let div2 = document.createElement("div");
            let input1 = document.createElement("input");
            input1.setAttribute("type","checkbox");
            input1.setAttribute("id",obj.sBrand);
            input1.setAttribute("class","sInput1Forcss");
            input1.setAttribute("name",obj.sBrand);
            input1.setAttribute("value",obj.sBrand);
            let label1 = document.createElement("label");
            label1.innerText = obj.sBrand;
            label1.setAttribute("for",obj.sBrand);
            label1.setAttribute("class", "sLabel1Forcss");
            label1.setAttribute("id",obj.sBrand);
            
            let div3 = document.createElement("div");
            let span1 = document.createElement("span");
            span1.innerText = obj.sQuantity;
            
            //appending
            div2.append(input1, label1);
            div3.append(span1);
            
            div1.append(div2, div3);
            
            document.getElementById("sNameNumber3").append(div1);
            
        });
    };
    

}

/* ProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProduct  */
