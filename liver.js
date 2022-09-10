

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
            sQuantity: 6,
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
         squantity2: 55
       },
   
       {
         percent: "10% and above",
         squantity2: 35
       },
   
       {
         percent: "20% and above",
         squantity2: 15
       },
   
       {
         percent: "30% and above",
         squantity2: 24
       },
   
    ];
    

    // change the icon from - to plus and vice-versa
        // change caret on click
        document.getElementById("siconmin").addEventListener("click", minplus1);
    
        function minplus1(){
            let sclassname = document.getElementById("siconmin").className;
            if(sclassname == "fa-solid fa-minus"){
                document.getElementById("siconmin").className = "fa-light fa-plus";
                document.getElementById("mincontent1").style.display = "none";
            }
            else{
                document.getElementById("siconmin").className = "fa-solid fa-minus";
                document.getElementById("mincontent1").style.display = "block";
            }
        
        };

    

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
            div1.setAttribute("id","indiose1");
            
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




    // change caret on click
    document.getElementById("srevelence").addEventListener("click", caretchange);
    document.getElementById("scaretdown").addEventListener("click", caretchange);

    function caretchange(){
        let sclassname = document.getElementById("scaretdown").className;
        if(sclassname == "fa-solid fa-caret-down"){
            document.getElementById("scaretdown").className = "fa-solid fa-caret-up";
            document.getElementById("sLater1").style.display = "block";
        }
        else{
            document.getElementById("scaretdown").className = "fa-solid fa-caret-down";
            document.getElementById("sLater1").style.display = "none";
        }
    
    };



    let tata1mg = [ 
        {
          image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/mv4twhhsnbrlhpsgjc0c/tata-1mg-cod-liver-oil-capsule.jpg",
            name: "Tata 1mg Women's Vitamin D, and Iron Immunity Booster Tablet",
          quantity : 60,
          rating : 4.3,
          number_rating : 667,
          strikedoffprice: 1170,
          disscount_percent : 60,
          price: 995,
        },
        {
          image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/xjqqvjpkg70zbcpibkyj/tata-1mg-milk-thistle-capsules-for-liver-detox-70-silymarin-with-dandelion-ginger.jpg",
          name: "Tata 1mg Senior 50+ Multivitamin & Multimineral Immunity Booster Zinc, Vitamin C, Calcium, and Vitamin D Veg Tablet",
          quantity : 60,
          rating : "4.3",
          number_rating : "457",
          strikedoffprice: "895",
          disscount_percent: "55",
          price: "398",
        },
        {
          image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/ktf4a4jed8pplljfncrj/nutrabay-pro-cla-capsule.jpg",
          name: "Tata 1mg Myo-Inositol Tablet",
          quantity : "30",
          rating : "4.2",
          number_rating : "102",
          strikedoffprice: "595",
          disscount_percent : "50",
          price: "298",
        },
        {
          image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/tvuovptgm7qcl0lgb1dg/carbamide-forte-milk-thistle-extract-600mg-vegetarian-tablet.jpg",
          name: "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Immunity Booster Capsule",
          quantity : "60",
          rating : "4.1",
          number_rating : "972",
          strikedoffprice: "995",
          disscount_percent : "50",
          price: "498",
        },
        {
          image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/cropped/m7ywndnc6att5k6bc8cs/himalaya-liv.-52-ds-tablet.jpg",
          name: "Tata 1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron Immunity Booster Tablet",
          quantity : "30",
          rating : "4.3",
          number_rating : "647",
          strikedoffprice: "510",
          disscount_percent : "56",
          price: "225",
        },
        {
          image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/m4pgzop080oaibzxwxtc/himalaya-liv.-52-tablet.jpg",
          name: "Tata 1mg Multivitamin & Multimineral Supplement Tablet",
          quantity : "15",
          rating : "4.3",
          number_rating : "174",
          strikedoffprice: "99",
          disscount_percent : "9",
          price: "90",
        },
        {
          image_url:
            "hhttps://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/m4pgzop080oaibzxwxtc/himalaya-liv.-52-tablet.jpg",
          name: "Tata 1mg Vitamin B Complex Capsules",
          quantity : "60",
          rating : "4.4",
          number_rating : "40",
          strikedoffprice: "595",
          disscount_percent : "24",
          price: "448",
        },
        {
          image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/cropped/z4x6mnuiyhfdjhb0qf3w/himalaya-liv.52-syrup.jpg",
          name: "Tata 1mg Calcium & Vitamin D Supplement Tablet",
          quantity : "15",
          rating : "4.4",
          number_rating : "95",
          strikedoffprice: "99",
          disscount_percent : "9",
          price: "90",
        },
        {
          image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/cropped/vyjaio6d8j0hkhhokbzl/himalaya-liv.52-ds-syrup.jpg",
          name: "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Immunity Booster Capsule",
          quantity : "10",
          rating : "3.9",
          number_rating : "36",
          strikedoffprice: "175",
          disscount_percent : "43",
          price: "99",
        },
        {
          image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/dpr2tomgk41bdt7wqysj/organic-india-lkc-liver-kidney-care-capsule.jpg",
          name: "1mg Sports Multivitamin Energy & Immunity Booster Zinc, Vitamin C, Vitamin D, Calcium and Iron Tablet",
          quantity : "60",
          rating : "4",
          number_rating : "92",
          strikedoffprice: "1195",
          disscount_percent : "58",
          price: "497",
        },
        ];
    
    



    // array by me

  
    // Accu-check.......
    let sallpdt1 = [
        {
          // 1
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/mv4twhhsnbrlhpsgjc0c/tata-1mg-cod-liver-oil-capsule.jpg",
              name: "Tata 1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron Immunity Booster Tablet",
            quantity : 60,
            rating : 4.3,
            number_rating : 667,
            strikedoffprice: 1170,
            disscount_percent : 60,
            price: 995,
          },
          {
            // 2
            image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/xjqqvjpkg70zbcpibkyj/tata-1mg-milk-thistle-capsules-for-liver-detox-70-silymarin-with-dandelion-ginger.jpg",
            name: "Tata 1mg Senior 50+ Multivitamin & Multimineral Immunity Booster Zinc, Vitamin C, Calcium, and Vitamin D Veg Tablet",
            quantity : 60,
            rating : "4.3",
            number_rating : "457",
            strikedoffprice: "895",
            disscount_percent: "55",
            price: "398",
          },
          {
            // 3
            image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/ktf4a4jed8pplljfncrj/nutrabay-pro-cla-capsule.jpg",
            name: "Tata 1mg Myo-Inositol Tablet",
            quantity : "30",
            rating : "4.2",
            number_rating : "102",
            strikedoffprice: "595",
            disscount_percent : "50",
            price: "298",
          },
          {
            // 4
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/m4pgzop080oaibzxwxtc/himalaya-liv.-52-tablet.jpg",
            name: "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Immunity Booster Capsule",
            quantity : "60",
            rating : "4.1",
            number_rating : "972",
            strikedoffprice: "995",
            disscount_percent : "50",
            price: "498",
          },
          {
            // 5
            image_url:
            "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/tvuovptgm7qcl0lgb1dg/carbamide-forte-milk-thistle-extract-600mg-vegetarian-tablet.jpg",
            name: "Tata 1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron Immunity Booster Tablet",
            quantity : "30",
            rating : "4.3",
            number_rating : "647",
            strikedoffprice: "510",
            disscount_percent : "56",
            price: "225",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/cropped/z4x6mnuiyhfdjhb0qf3w/himalaya-liv.52-syrup.jpg",
            name: "Tata 1mg Multivitamin & Multimineral Supplement Tablet",
            quantity : "15",
            rating : "4.3",
            number_rating : "174",
            strikedoffprice: "99",
            disscount_percent : "9",
            price: "90",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/cropped/vyjaio6d8j0hkhhokbzl/himalaya-liv.52-ds-syrup.jpg",
            name: "Tata 1mg Vitamin B Complex Capsules",
            quantity : "60",
            rating : "4.4",
            number_rating : "40",
            strikedoffprice: "595",
            disscount_percent : "24",
            price: "448",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/dpr2tomgk41bdt7wqysj/organic-india-lkc-liver-kidney-care-capsule.jpg",
            name: "Tata 1mg Calcium & Vitamin D Supplement Tablet",
            quantity : "15",
            rating : "4.4",
            number_rating : "95",
            strikedoffprice: "99",
            disscount_percent : "9",
            price: "90",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/cropped/ojyohfyqi9bd8hl72kod/dhootapapeshwar-arogyavardhini-bati.jpg",
            name: "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Immunity Booster Capsule",
            quantity : "10",
            rating : "3.9",
            number_rating : "36",
            strikedoffprice: "175",
            disscount_percent : "43",
            price: "99",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/cropped/z4x6mnuiyhfdjhb0qf3w/himalaya-liv.52-syrup.jpg",
            name: "1mg Sports Multivitamin Energy & Immunity Booster Zinc, Vitamin C, Vitamin D, Calcium and Iron Tablet",
            quantity : "60",
            rating : "4",
            number_rating : "92",
            strikedoffprice: "1195",
            disscount_percent : "58",
            price: "497",
          },


        {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/dpr2tomgk41bdt7wqysj/organic-india-lkc-liver-kidney-care-capsule.jpg",
              name: "Carbamide Forte Multivitamins with Probiotics for Women Vegetarian Tablet",
            quantity : "100",
            rating : "4.2",
            number_rating : "42",
            strikedoffprice: "795",
            disscount_percent : "37",
            price: "499",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/zpu2vr9ujmngf1ztx0ge/sbl-carduus-marianus-mother-tincture-q.jpg",
              name: "Carbamide Forte Multivitamin Sports Vegetarian Tablet",
            quantity : "60",
            rating : "4.4",
            number_rating : "10",
            strikedoffprice: "875",
            disscount_percent : "43",
            price: "499",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/tzspt28mdlta8bdsfgzw/dr.-reckeweg-cholesterinum-trituration-tablet-3x.jpg",
              name: "Carbamide Forte Multivitamins with Probiotics Vegetarian Tablet",
            quantity : "60",
            rating : "3.8",
            number_rating : "72",
            strikedoffprice: "375",
            disscount_percent : "20",
            price: "299",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/cropped/d0u0ejwgbfmrirokqec6/sbl-cholesterinum-trituration-tablet-3x.jpg",
              name: "Carbamide Forte Multivitamins with Probiotics for Women Vegetarian Tablet",
            quantity : "60",
            rating : "4.2",
            number_rating : "42",
            strikedoffprice: "575",
            disscount_percent : "39",
            price: "349",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/55bcdac124db4082aa8d4b73a0919b75/pentasure-hepatic-powder-creamy-vanilla.jpg",
              name: "Carbamide Forte Multivitamins with Probiotics for Women Vegetarian Tablet",
            quantity : "60",
            rating : "4.2",
            number_rating : "42",
            strikedoffprice: "575",
            disscount_percent : "60",
            price: "3490",
          },
          {
            image_url:
              "https://onemg.gumlet.io/images/c_fit,h_150,q_auto,f_auto,w_150/cropped/pd5fsotqvx0mjkkcim3b/sri-sri-tattva-liv-on-500mg-tablet.png",
              name: "Carbamide Forte Multivitamins with Probiotics for Women Vegetarian Tablet",
            quantity : "60",
            rating : "4",
            number_rating : "42",
            strikedoffprice: "5705",
            disscount_percent : "50",
            price: "567",
          }
         
    ];
    
    // scardDisplay1();
    
    // scardDisplay1(gnc);
    // scardDisplay1(redivit);
    // scardDisplay1(himalayanOranics);
    // scardDisplay1(adorreal);
    
    scardDisplay1(sallpdt1);
    
    
    function scardDisplay1(array){
      array.map(function(obj, index, array){
      
        let div1 = document.createElement("div");///
        div1.setAttribute("id", "sky1");
        
        
        let div2 = document.createElement("div");//
        div2.setAttribute("id", "sky2");
        let img1 = document.createElement("img");
        img1.setAttribute("id", "sky2i");
        img1.setAttribute("src", obj.image_url);
        img1.setAttribute("alt", "product image");
        div2.append(img1);
        
        
        let div3 = document.createElement("div");//
        let p1 = document.createElement("p");
        p1.setAttribute("id", "sky3");
        p1.innerText = obj.name;
        div3.append(p1);
        
        
        let div3i = document.createElement("div");//
        let p2 = document.createElement("p");
        p2.setAttribute("id", "sky4");
        p2.innerText = "bottle of "+obj.quantity+" tablets";
        div3i.append(p2);
        
        
        let div4 = document.createElement("div");//
        div4.setAttribute("id", "skym5iii");
        
        let span1 = document.createElement("span");
        span1.setAttribute("id", "skym5");
        let span2 = document.createElement("span");
        span2.setAttribute("id", "sky5");
        span2.innerText = obj.rating;
        let i1 = document.createElement("i");
        i1.setAttribute("class","fa-solid fa-star")
        span1.append(span2, i1);
        
        let span3 = document.createElement("span");
        span3.setAttribute("id", "skym6");
        span3.innerText = obj.number_rating+" ratings";
        
        div4.append(span1, span3);
        
        
        let div5 = document.createElement("div");//
        
        let span5 = document.createElement("span");
        span5.setAttribute("id", "sky7");
        span5.innerText= "MRP";
        let i2 = document.createElement("i");
        i2.setAttribute("id", "sky7i");
        i2.setAttribute("class","fa-solid fa-indian-rupee-sign")
        let span6 = document.createElement("span");
        span6.setAttribute("id", "skym7");
        span6.innerText = obj.strikedoffprice;
        span5.append(i2, span6);
        
        let span7 = document.createElement("span");
        span7.setAttribute("id", "sky8i");
        span7.innerText = obj.disscount_percent +"% OFF";
        
        div5.append(span5, span7);
        
        
        let div6 = document.createElement("div");//
        div6.setAttribute("class", "sky9m");
        
        let p3 = document.createElement("p");
        let i3 = document.createElement("i");
        i3.setAttribute("class","fa-solid fa-indian-rupee-sign");
        let span9 = document.createElement("span");
        span9.setAttribute("id", "sky9")
        span9.innerText = obj.price;
        p3.append(i3, span9);
        
        
        let p4 = document.createElement("p");
        p4.setAttribute("id", "sky10");
        p4.innerText = "ADD";
        div6.append(p3, p4);
        
        //----------- for add to cart
        p4.addEventListener("click", function(){saddtocart1(obj, index, array)});
        //----------- for add to cart
        
        
        div1.append(div2, div3, div3i, div4, div5, div6);
        
        document.getElementById("sfinalcard1id").append(div1);
        
      });
    }
    
    
    
    
    let cartArrayS1 = JSON.parse(localStorage.getItem("cartArrayS1")) || [];
    
    //-------------------add to cart function
    function saddtocart1(obj, index, array){
        let addedItemDetails = {
            image_url: obj.image_url,
            name: obj.name,
            quantity : obj.quantity,
            rating : obj.rating,
            number_rating : obj.number_rating,
            strikedoffprice: obj.strikedoffprice,
            disscount_percent : obj.disscount_percent,
            price: obj.price,
        };

        cartArrayS1.push(addedItemDetails);
        localStorage.setItem("cartArrayS1", JSON.stringify(cartArrayS1));
        location.reload();
    }
    
    

    // function to pop the nubmer of items into the cart
    //# id = "cartItembox"  line 88
    if(cartArrayS1.length == 0){
            (document.querySelector("#cartItembox")).style.display = "none";
    }
    else{
        (document.querySelector("#cartItembox")).style.display = "block";
        (document.querySelector("#cartItembox")).innerText = cartArrayS1.length;
    }
    

    //-------XXXXXXXXX------add to cart function
    
    
    
    
    
      // close the box as we click
      document.getElementById("sLater1").addEventListener("click", caretchange);
  
      
      // SORT By rating
      document.getElementById("srating").addEventListener("click", sortByRating);
      function sortByRating(){
              document.querySelector("#sfinalcard1id").innerText = "";
              sallpdt1.sort(function(a,b){
              if(Number(a.rating) <   Number(b.rating)){
                  return 1;
              }
              else if(Number(a.rating) > Number(b.rating)){
                  return -1;
              }
              return 0;
          });
          document.getElementById("srevelence").innerText = "Average Customer Rating";
          document.getElementById("srevelence").style.paddingRight = "22px";
          scardDisplay1(sallpdt1);
      };
    
    
    
      // SORT By LTH
      document.getElementById("slth").addEventListener("click", priceSortlth);
      function priceSortlth(){
              document.querySelector("#sfinalcard1id").innerText = "";
              sallpdt1.sort(function(a,b){
              if(Number(a.price) > Number(b.price)){
                  return 1;
              }
              else if(Number(a.price) < Number(b.price)){
                  return -1;
              }
              return 0;
          });
          document.getElementById("srevelence").innerText = "Price: Low to High";
          scardDisplay1(sallpdt1);
      };
            
    
    
      // SORT By HTL
      document.getElementById("shtl").addEventListener("click", priceSorthtl);
      function priceSorthtl(){
              document.querySelector("#sfinalcard1id").innerText = "";
              sallpdt1.sort(function(a,b){
              if(Number(a.price) < Number(b.price)){
                  return 1;
              }
              else if(Number(a.price) > Number(b.price)){
                  return -1;
              }
              return 0;
          });
          document.getElementById("srevelence").innerText = "Price: High to Low";
          scardDisplay1(sallpdt1);
      };
    
    
    
      // SORT By discont
      document.getElementById("sdiscount").addEventListener("click", sortByDiscount);
      function sortByDiscount(){
              document.querySelector("#sfinalcard1id").innerText = "";
              sallpdt1.sort(function(a,b){
              if(Number(a.disscount_percent) < Number(b.disscount_percent)){
                  return 1;
              }
              else if(Number(a.disscount_percent) > Number(b.disscount_percent)){
                  return -1;
              }
              return 0;
          });
          document.getElementById("srevelence").innerText = "Discount";
          document.getElementById("srevelence").style.paddingRight = "110px";
          scardDisplay1(sallpdt1);
      };
    
    
    
      // sort by brand CHECKBOX
  
      // document.getElementById("Tata 1mg").addEventListener("click", soBybrant1);
      const checkbox1 = document.getElementById("Tata 1mg");
      checkbox1.addEventListener('change', (event) => {
          document.querySelector("#sfinalcard1id").innerText = "";
          if(event.currentTarget.checked) {
              
              scardDisplay1(tata1mg);
          }
          else {
              scardDisplay1(sallpdt1);
          }
      });
        
    
      const checkbox2 = document.getElementById("Carbamide Forte");
      checkbox2.addEventListener('change', (event) => {
          document.querySelector("#sfinalcard1id").innerText = "";
          if(event.currentTarget.checked) {
              
              scardDisplay1(carbamide);
          }
          else {
              scardDisplay1(sallpdt1);
          }
      });
    
      const checkbox3 = document.getElementById("Zingavita");
      checkbox3.addEventListener('change', (event) => {
          document.querySelector("#sfinalcard1id").innerText = "";
          if(event.currentTarget.checked) {
              
              scardDisplay1(zingavita);
          }
          else {
              scardDisplay1(sallpdt1);
          }
      });
    
      const checkbox4 = document.getElementById("HealthVit");
      checkbox4.addEventListener('change', (event) => {
          document.querySelector("#sfinalcard1id").innerText = "";
          if(event.currentTarget.checked) {
              
              scardDisplay1(healthvit);
          }
          else {
              scardDisplay1(sallpdt1);
          }
      });
    
      const checkbox5 = document.getElementById("GNC");
      checkbox5.addEventListener('change', (event) => {
          document.querySelector("#sfinalcard1id").innerText = "";
          if(event.currentTarget.checked) {
              
              scardDisplay1(gnc);
          }
          else {
              scardDisplay1(sallpdt1);
          }
      });
    
      const checkbox6 = document.getElementById("HealthKart");
      checkbox6.addEventListener('change', (event) => {
          document.querySelector("#sfinalcard1id").innerText = "";
          if(event.currentTarget.checked) {
              
              scardDisplay1(healthKart);
          }
          else {
              scardDisplay1(sallpdt1);
          }
      });
    
      const checkbox7 = document.getElementById("Adorreal");
      checkbox7.addEventListener('change', (event) => {
          document.querySelector("#sfinalcard1id").innerText = "";
          if(event.currentTarget.checked) {
              
              scardDisplay1(adorreal);
          }
          else {
              scardDisplay1(sallpdt1);
          }
      });
    
      const checkbox8 = document.getElementById("Redivit");
      checkbox8.addEventListener('change', (event) => {
          document.querySelector("#sfinalcard1id").innerText = "";
          if(event.currentTarget.checked) {
              
              scardDisplay1(redivit);
          }
          else{
              scardDisplay1(sallpdt1);
          }
      });



      // Sort by discount percent like greater then 10% or 20%...
      let whatdiscount = 0;

      let checkboxdis1  = document.getElementById("Less than 10%");
      checkboxdis1.addEventListener('change', (event) => {
        document.querySelector("#sfinalcard1id").innerText = "";
        if(event.currentTarget.checked) {
            
          sideFilterDiscount(9);
        }
        else{
            scardDisplay1(sallpdt1);
        }
      });


      let checkboxdis2  = document.getElementById("10% and above");
      checkboxdis2.addEventListener('change', (event) => {
        document.querySelector("#sfinalcard1id").innerText = "";
        if(event.currentTarget.checked) {
            
          sideFilterDiscount(10);
        }
        else{
            scardDisplay1(sallpdt1);
        }
      });


      let checkboxdis3  = document.getElementById("20% and above");
      checkboxdis3.addEventListener('change', (event) => {
        document.querySelector("#sfinalcard1id").innerText = "";
        if(event.currentTarget.checked) {
            
          sideFilterDiscount(20);
        }
        else{
            scardDisplay1(sallpdt1);
        }
      });


      let checkboxdis4  = document.getElementById("30% and above");
      checkboxdis4.addEventListener('change', (event) => {
        document.querySelector("#sfinalcard1id").innerText = "";
        if(event.currentTarget.checked) {
            
          sideFilterDiscount(30);
        }
        else{
            scardDisplay1(sallpdt1);
        }
      });



      function sideFilterDiscount(whatdiscount){
        document.querySelector("#sfinalcard1id").innerText = "";
        let sallpdt2 = sallpdt1.filter(function(obj){
          if(whatdiscount <= 9){
            if(Number(obj.disscount_percent) < whatdiscount){
              return 1;
            }
            else {
              return 0;
            }
            return 0;

          }
          else{
            if(Number(obj.disscount_percent) > whatdiscount){
              return 1;
            }
            else {
              return 0;
            }
            return 0;

          }
            
        });
        scardDisplay1(sallpdt2);
      };

      //------------------------------------------------------------------



}

/* ProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProduct  */
