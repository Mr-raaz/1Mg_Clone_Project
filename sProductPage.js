

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



    // sort by relevence

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


    // final card div

    //8
    let gnc = [
        {
            image_url: "https://onemg.gumlet.io/images/f_auto,h_150,q_auto,w_150,c_fit/my1scryvvmp8purgjgpz/gnc-women-s-one-daily-multivitamin-tablet.jpg",
            name: "GNC Women's One Daily Multivitamin Tablet",
            quantity : 60,
            rating : 4.4,
            number_rating : 10,
            strikedoffprice: 1449,
            disscount_percent : 27,
            price: 1058,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/f_auto,h_150,q_auto,w_150,c_fit/wvqpb8ddteboevvf2jzg/gnc-mega-men-one-daily-multivitamin-tablet.jpg",
            name: "GNC Mega Men One Daily Multivitamin Tablet",
            quantity : 60,
            rating : 4.3,
            number_rating : 9,
            strikedoffprice: 1299,
            disscount_percent : 27,
            price: 948,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/f_auto,h_150,q_auto,w_150,c_fit/oxkgwqx5ddedixqb9kga/gnc-women-s-multivitamin-50-plus-tablet.jpg",
            name: "GNC Women's Multivitamin 50 Plus Tablet",
            quantity : "120",
            rating : 4.5,
            number_rating : 14,
            strikedoffprice: 2399,
            disscount_percent : 30,
            price: 1679,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/indk4fqda4lytpoog8h4/gnc-multivitamin-active-caplet.jpg",
            name: "GNC Multivitamin Active Caplet",
            quantity : 180,
            rating : 3.4,
            number_rating : 5,
            strikedoffprice: 5399,
            disscount_percent : 10,
            price: 4859,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/cropped/f9rteoekdcypb9awphdl/gnc-mega-men-50-plus-one-daily-multivitamin-caplet.png",
            name: "GNC Mega Men 50 Plus One Daily Multivitamin",
            quantity : 60,
            rating : 4.1,
            number_rating : 18,
            strikedoffprice: 3099,
            disscount_percent : 10,
            price: 2789,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/cropped/mqseqysn5qbgxv7efofy/gnc-milestones-teen-multivitamin-for-girls-12-17-caplet.jpg",
            name: "GNC Milestones Teen - Multivitamin For Girls 12-",
            quantity : 120,
            rating : 3.9,
            number_rating : 17,
            strikedoffprice: 2899,
            disscount_percent : 10,
            price: 2609,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/cropped/khbkcpr6hdslpnuy5tyt/gnc-mega-men-dietary-supplement-multivitamin-caplet.png",
            name: "GNC Mega Men Dietary Supplement Multivitamin",
            quantity : 90,
            rating : 4.2,
            number_rating : 41,
            strikedoffprice: 3149,
            disscount_percent : 10,
            price: 2834,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/cropped/it6teqfzt4al8fkvjeke/gnc-mega-men-dietary-supplement-multivitamin-caplet.jpg",
            name: "GNC Mega Men Dietary Supplement Multivitamin",
            quantity : 180,
            rating : 3.6,
            number_rating : 14,
            strikedoffprice: 5099,
            disscount_percent : 10,
            price: 4589,
        }
    
    ];
    
    //8
    let himalayanOranics = [
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/vrcp1xrwz7ote3wst3su/himalayan-organics-multivitamin-with-probiotics-vegetarian-tablet.jpg",
            name: "Himalayan Organics Multivitamin with",
            quantity : 180,
            rating : 4.1,
            number_rating : 20,
            strikedoffprice: 955,
            disscount_percent : 37,
            price: 599,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/fkuu8yklzr19q0v0g0vq/himalayan-organics-whole-food-multivitamin-for-women-vegetarian-capsule.jpg",
            name: "Himalayan Organics Whole Food Multivitamin for",
            quantity : 60,
            rating : 3.9,
            number_rating : 25,
            strikedoffprice: 795,
            disscount_percent : 18,
            price: 649,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/dya6z45qd9usszdo1w0s/himalayan-organics-organic-multivitamin-vegetarian-capsule.jpg",
            name: "Himalayan Organics Organic Multivitamin",
            quantity : 60,
            rating : 7.7,
            number_rating : 7,
            strikedoffprice: 1125,
            disscount_percent : 46,
            price: 601,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/f7sk6efgrihcfyqjhznv/himalayan-organics-multivitamin-with-probiotics-vegetarian-tablet-for-women.jpg",
            name: "Himalayan Organics Multivitamin with",
            quantity : 120,
            rating : 4.8,
            number_rating : 25,
            strikedoffprice: 795,
            disscount_percent : 13,
            price: 691.7,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/ntty7q5qjjyddi20apb6/himalayan-organics-multivitamin-sports-tablet.jpg",
            name: "Himalayan Organics Multivitamin Sports Tablet",
            quantity : 60,
            rating : 3.9,
            number_rating : 19,
            strikedoffprice: 899,
            disscount_percent : 50,
            price: 447,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/gmpayr20lbztmszga37w/himalayan-organics-whole-food-multivitamin-for-men-vegetarian-capsule.jpg",
            name: "Himalayan Organics Whole Food Multivitamin for Men",
            quantity : 60,
            rating : 3.3,
            number_rating : 13,
            strikedoffprice: 795,
            disscount_percent : 18,
            price: 649,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/qyvjuyzcf1yzc0rxvooh/himalayan-organics-plant-based-calcium-magnesium-zinc-d3-k2-vegetarian-capsule.jpg",
            name: "Himalayan Organics Plant Based Calcium +",
            quantity : 120,
            rating : 4.1,
            number_rating : 11,
            strikedoffprice: 1255,
            disscount_percent : 13,
            price: 1091.9,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/gcxfdjouuf8suzudgous/himalayan-organics-immunity-multivitamin-with-probiotics-vegetarian-tablet.jpg",
            name: "Himalayan Organics Immunity Multivitamin",
            quantity : 180,
            rating : 4.6,
            number_rating : 7,
            strikedoffprice: 975,
            disscount_percent : 38,
            price: 599,
        }
    
    ];
    
    //7
    let healthKart = [
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/pypjoepvlpoyoty22hi6/healthkart-hk-vitals-multivitamin-women-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Women Tablet",
            quantity : 90,
            rating : 4.6,
            number_rating : 39,
            strikedoffprice: 999,
            disscount_percent : 45,
            price: 549,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/grcvrktohcvunrfvytzd/healthkart-hk-vitals-multivitamin-multimineral-amino-acids-taurine-ginseng-extract-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Multimineral,",
            quantity : 60,
            rating : 4.3,
            number_rating : 145,
            strikedoffprice: 950,
            disscount_percent : 42,
            price: 549,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/kb8saujzo1lgk3d8ntzx/healthkart-hk-vitals-multivitamin-women-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Women Tablet",
            quantity : 60,
            rating : 4.6,
            number_rating : 39,
            strikedoffprice: 650,
            disscount_percent : 38,
            price: 399,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/ahyzwwqf4zx5b1um2xqb/healthkart-hk-vitals-multivitamin-multimineral-amino-acids-taurine-ginseng-extract-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Multimineral,",
            quantity : 60,
            rating : 4.3,
            number_rating : 145,
            strikedoffprice: 650,
            disscount_percent : 38,
            price: 399,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/wdoraijworktsk6p8va8/healthkart-hk-vitals-multivitamin-with-probiotics-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin with",
            quantity : 60,
            rating : 4.5,
            number_rating : 29,
            strikedoffprice: 499,
            disscount_percent : 30,
            price: 349,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/e6o21s5zcpqivq7kt96g/healthkart-hk-vitals-advanced-multivitamin-with-bcaa-tablet.jpg",
            name: "HealthKart HK Vitals Advanced Multivitamin",
            quantity : 60,
            rating : 3.9,
            number_rating : 16,
            strikedoffprice: 999,
            disscount_percent : 40,
            price: 599,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/ifftnbmx5xwmi5ixtezs/healthkart-hk-vitals-multivitamin-women-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Women Tablet",
            quantity : 30,
            rating : 4.6,
            number_rating : 39,
            strikedoffprice: 349,
            disscount_percent : 20,
            price: 279,
        }
    
    ];
    
    //6
    let adorreal = [
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/f00328ed20e74d4183c3cd61a76c07e2/adorreal-testo-booster-capsule.jpg",
            name: "Adorreal Testo Booster Capsule",
            quantity : 60,
            rating : 3.5,
            number_rating : 46,
            strikedoffprice: 699,
            disscount_percent : 5,
            price: 664,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/20aa8ef1205b44a59ee54d4462a3c217/adorreal-immunity-support-capsule.jpg",
            name: "Adorreal Immunity Support Capsule",
            quantity : 60,
            rating : 4.9,
            number_rating : 50,
            strikedoffprice: 699,
            disscount_percent : 5,
            price: 664,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/77cd501fa53c452989c058432eaf2e38/adorreal-vitamins-probiotics-capsule.jpg",
            name: "Adorreal Vitamins + Probiotics Capsule",
            quantity : 60,
            rating : 3.4,
            number_rating : 45,
            strikedoffprice: 599,
            disscount_percent : 5,
            price: 569,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/2de41c0c2db04982ab297964569e608f/adorreal-coenzyme-complex-capsule.jpg",
            name: "Adorreal Coenzyme Complex Capsule",
            quantity : 60,
            rating : 4.6,
            number_rating : 31,
            strikedoffprice: 1299,
            disscount_percent : 5,
            price: 1234,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/f353ea207a684cdfafcb3b0dfe409aa9/adorreal-whey-protein-powder-chocolate.jpg",
            name: "Adorreal Whey Protein Powder Chocolate",
            quantity : 350,
            rating : 4.7,
            number_rating : 34,
            strikedoffprice: 999,
            disscount_percent : 5,
            price: 949,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/52dc7c09c9c9428fb5aacf7e6954fdf4/adorreal-biotin-complex-capsule.jpg",
            name: "Adorreal Biotin Complex Capsule",
            quantity : 60,
            rating : 3.8,
            number_rating : 64,
            strikedoffprice: 999,
            disscount_percent : 5,
            price: 949,
        }
    
    ];
    
    //6
    let redivit = [
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/pf5tav1uzn8bgnb4v0tx/redivit-oral-drops.jpg",
            name: "Redivit Oral Drops",
            quantity : 15,
            rating : 4.8,
            number_rating : 47,
            strikedoffprice: 69,
            disscount_percent : 11,
            price: 61,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/xiflpgbdm0xja9lid5py/redivit-5g-tablet.jpg",
            name: "Redivit 5G Tablet",
            quantity : 15,
            rating : 3.8,
            number_rating : 45,
            strikedoffprice: 180,
            disscount_percent : 15,
            price: 153,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/hijrvwnixamxrsjwjk6a/redivit-9g-softgel-capsule.jpg",
            name: "Redivit 9G Softgel Capsule",
            quantity : 10,
            rating : 2.9,
            number_rating : 5,
            strikedoffprice: 190,
            disscount_percent : 14,
            price: 162,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/oo54jefvumi0fq3orsow/redivit-syrup.jpg",
            name: "Redivit Syrup",
            quantity : 200,
            rating : 4.8,
            number_rating : 15,
            strikedoffprice: 130,
            disscount_percent : 14,
            price: 111,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/a8apqgoa8yj5ndabm6yx/redivit-tablet.jpg",
            name: "Redivit Tablet",
            quantity : 30,
            rating : 3.8,
            number_rating : 42,
            strikedoffprice: 290,
            disscount_percent : 0,
            price: 290,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/rs44jz3htctq0qqll0gz/redivit-gold-tonic.jpg",
            name: "Redivit Gold Tonic",
            quantity : 225,
            rating : 3.5,
            number_rating : 36,
            strikedoffprice: 165,
            disscount_percent : 15,
            price: 140,
        }
    
    ];
    
    
    let sallpdt1 = [
    
        {
            image_url: "https://onemg.gumlet.io/images/f_auto,h_150,q_auto,w_150,c_fit/my1scryvvmp8purgjgpz/gnc-women-s-one-daily-multivitamin-tablet.jpg",
            name: "GNC Women's One Daily Multivitamin Tablet",
            quantity : 60,
            rating : 4.4,
            number_rating : 10,
            strikedoffprice: 1449,
            disscount_percent : 27,
            price: 1058,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/f_auto,h_150,q_auto,w_150,c_fit/wvqpb8ddteboevvf2jzg/gnc-mega-men-one-daily-multivitamin-tablet.jpg",
            name: "GNC Mega Men One Daily Multivitamin Tablet",
            quantity : 60,
            rating : 4.3,
            number_rating : 9,
            strikedoffprice: 1299,
            disscount_percent : 27,
            price: 948,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/f_auto,h_150,q_auto,w_150,c_fit/oxkgwqx5ddedixqb9kga/gnc-women-s-multivitamin-50-plus-tablet.jpg",
            name: "GNC Women's Multivitamin 50 Plus Tablet",
            quantity : "120",
            rating : 4.5,
            number_rating : 14,
            strikedoffprice: 2399,
            disscount_percent : 30,
            price: 1679,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/indk4fqda4lytpoog8h4/gnc-multivitamin-active-caplet.jpg",
            name: "GNC Multivitamin Active Caplet",
            quantity : 180,
            rating : 3.4,
            number_rating : 5,
            strikedoffprice: 5399,
            disscount_percent : 10,
            price: 4859,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/cropped/f9rteoekdcypb9awphdl/gnc-mega-men-50-plus-one-daily-multivitamin-caplet.png",
            name: "GNC Mega Men 50 Plus One Daily Multivitamin",
            quantity : 60,
            rating : 4.1,
            number_rating : 18,
            strikedoffprice: 3099,
            disscount_percent : 10,
            price: 2789,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/cropped/mqseqysn5qbgxv7efofy/gnc-milestones-teen-multivitamin-for-girls-12-17-caplet.jpg",
            name: "GNC Milestones Teen - Multivitamin For Girls 12-",
            quantity : 120,
            rating : 3.9,
            number_rating : 17,
            strikedoffprice: 2899,
            disscount_percent : 10,
            price: 2609,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/cropped/khbkcpr6hdslpnuy5tyt/gnc-mega-men-dietary-supplement-multivitamin-caplet.png",
            name: "GNC Mega Men Dietary Supplement Multivitamin",
            quantity : 90,
            rating : 4.2,
            number_rating : 41,
            strikedoffprice: 3149,
            disscount_percent : 10,
            price: 2834,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/cropped/it6teqfzt4al8fkvjeke/gnc-mega-men-dietary-supplement-multivitamin-caplet.jpg",
            name: "GNC Mega Men Dietary Supplement Multivitamin",
            quantity : 180,
            rating : 3.6,
            number_rating : 14,
            strikedoffprice: 5099,
            disscount_percent : 10,
            price: 4589,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/vrcp1xrwz7ote3wst3su/himalayan-organics-multivitamin-with-probiotics-vegetarian-tablet.jpg",
            name: "Himalayan Organics Multivitamin with",
            quantity : 180,
            rating : 4.1,
            number_rating : 20,
            strikedoffprice: 955,
            disscount_percent : 37,
            price: 599,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/fkuu8yklzr19q0v0g0vq/himalayan-organics-whole-food-multivitamin-for-women-vegetarian-capsule.jpg",
            name: "Himalayan Organics Whole Food Multivitamin for",
            quantity : 60,
            rating : 3.9,
            number_rating : 25,
            strikedoffprice: 795,
            disscount_percent : 18,
            price: 649,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/dya6z45qd9usszdo1w0s/himalayan-organics-organic-multivitamin-vegetarian-capsule.jpg",
            name: "Himalayan Organics Organic Multivitamin",
            quantity : 60,
            rating : 7.7,
            number_rating : 7,
            strikedoffprice: 1125,
            disscount_percent : 46,
            price: 601,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/f7sk6efgrihcfyqjhznv/himalayan-organics-multivitamin-with-probiotics-vegetarian-tablet-for-women.jpg",
            name: "Himalayan Organics Multivitamin with",
            quantity : 120,
            rating : 4.8,
            number_rating : 25,
            strikedoffprice: 795,
            disscount_percent : 13,
            price: 691.7,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/ntty7q5qjjyddi20apb6/himalayan-organics-multivitamin-sports-tablet.jpg",
            name: "Himalayan Organics Multivitamin Sports Tablet",
            quantity : 60,
            rating : 3.9,
            number_rating : 19,
            strikedoffprice: 899,
            disscount_percent : 50,
            price: 447,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/gmpayr20lbztmszga37w/himalayan-organics-whole-food-multivitamin-for-men-vegetarian-capsule.jpg",
            name: "Himalayan Organics Whole Food Multivitamin for Men",
            quantity : 60,
            rating : 3.3,
            number_rating : 13,
            strikedoffprice: 795,
            disscount_percent : 18,
            price: 649,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/qyvjuyzcf1yzc0rxvooh/himalayan-organics-plant-based-calcium-magnesium-zinc-d3-k2-vegetarian-capsule.jpg",
            name: "Himalayan Organics Plant Based Calcium +",
            quantity : 120,
            rating : 4.1,
            number_rating : 11,
            strikedoffprice: 1255,
            disscount_percent : 13,
            price: 1091.9,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/gcxfdjouuf8suzudgous/himalayan-organics-immunity-multivitamin-with-probiotics-vegetarian-tablet.jpg",
            name: "Himalayan Organics Immunity Multivitamin",
            quantity : 180,
            rating : 4.6,
            number_rating : 7,
            strikedoffprice: 975,
            disscount_percent : 38,
            price: 599,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/pypjoepvlpoyoty22hi6/healthkart-hk-vitals-multivitamin-women-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Women Tablet",
            quantity : 90,
            rating : 4.6,
            number_rating : 39,
            strikedoffprice: 999,
            disscount_percent : 45,
            price: 549,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/grcvrktohcvunrfvytzd/healthkart-hk-vitals-multivitamin-multimineral-amino-acids-taurine-ginseng-extract-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Multimineral,",
            quantity : 60,
            rating : 4.3,
            number_rating : 145,
            strikedoffprice: 950,
            disscount_percent : 42,
            price: 549,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/kb8saujzo1lgk3d8ntzx/healthkart-hk-vitals-multivitamin-women-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Women Tablet",
            quantity : 60,
            rating : 4.6,
            number_rating : 39,
            strikedoffprice: 650,
            disscount_percent : 38,
            price: 399,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/ahyzwwqf4zx5b1um2xqb/healthkart-hk-vitals-multivitamin-multimineral-amino-acids-taurine-ginseng-extract-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Multimineral,",
            quantity : 60,
            rating : 4.3,
            number_rating : 145,
            strikedoffprice: 650,
            disscount_percent : 38,
            price: 399,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/wdoraijworktsk6p8va8/healthkart-hk-vitals-multivitamin-with-probiotics-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin with",
            quantity : 60,
            rating : 4.5,
            number_rating : 29,
            strikedoffprice: 499,
            disscount_percent : 30,
            price: 349,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/e6o21s5zcpqivq7kt96g/healthkart-hk-vitals-advanced-multivitamin-with-bcaa-tablet.jpg",
            name: "HealthKart HK Vitals Advanced Multivitamin",
            quantity : 60,
            rating : 3.9,
            number_rating : 16,
            strikedoffprice: 999,
            disscount_percent : 40,
            price: 599,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/q_auto,h_150,f_auto,w_150,c_fit/ifftnbmx5xwmi5ixtezs/healthkart-hk-vitals-multivitamin-women-tablet.jpg",
            name: "HealthKart HK Vitals Multivitamin Women Tablet",
            quantity : 30,
            rating : 4.6,
            number_rating : 39,
            strikedoffprice: 349,
            disscount_percent : 20,
            price: 279,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/f00328ed20e74d4183c3cd61a76c07e2/adorreal-testo-booster-capsule.jpg",
            name: "Adorreal Testo Booster Capsule",
            quantity : 60,
            rating : 3.5,
            number_rating : 46,
            strikedoffprice: 699,
            disscount_percent : 5,
            price: 664,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/20aa8ef1205b44a59ee54d4462a3c217/adorreal-immunity-support-capsule.jpg",
            name: "Adorreal Immunity Support Capsule",
            quantity : 60,
            rating : 4.9,
            number_rating : 50,
            strikedoffprice: 699,
            disscount_percent : 5,
            price: 664,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/77cd501fa53c452989c058432eaf2e38/adorreal-vitamins-probiotics-capsule.jpg",
            name: "Adorreal Vitamins + Probiotics Capsule",
            quantity : 60,
            rating : 3.4,
            number_rating : 45,
            strikedoffprice: 599,
            disscount_percent : 5,
            price: 569,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/2de41c0c2db04982ab297964569e608f/adorreal-coenzyme-complex-capsule.jpg",
            name: "Adorreal Coenzyme Complex Capsule",
            quantity : 60,
            rating : 4.6,
            number_rating : 31,
            strikedoffprice: 1299,
            disscount_percent : 5,
            price: 1234,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/f353ea207a684cdfafcb3b0dfe409aa9/adorreal-whey-protein-powder-chocolate.jpg",
            name: "Adorreal Whey Protein Powder Chocolate",
            quantity : 350,
            rating : 4.7,
            number_rating : 34,
            strikedoffprice: 999,
            disscount_percent : 5,
            price: 949,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/52dc7c09c9c9428fb5aacf7e6954fdf4/adorreal-biotin-complex-capsule.jpg",
            name: "Adorreal Biotin Complex Capsule",
            quantity : 60,
            rating : 3.8,
            number_rating : 64,
            strikedoffprice: 999,
            disscount_percent : 5,
            price: 949,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/pf5tav1uzn8bgnb4v0tx/redivit-oral-drops.jpg",
            name: "Redivit Oral Drops",
            quantity : 15,
            rating : 4.8,
            number_rating : 47,
            strikedoffprice: 69,
            disscount_percent : 11,
            price: 61,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/xiflpgbdm0xja9lid5py/redivit-5g-tablet.jpg",
            name: "Redivit 5G Tablet",
            quantity : 15,
            rating : 3.8,
            number_rating : 45,
            strikedoffprice: 180,
            disscount_percent : 15,
            price: 153,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/hijrvwnixamxrsjwjk6a/redivit-9g-softgel-capsule.jpg",
            name: "Redivit 9G Softgel Capsule",
            quantity : 10,
            rating : 2.9,
            number_rating : 5,
            strikedoffprice: 190,
            disscount_percent : 14,
            price: 162,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/oo54jefvumi0fq3orsow/redivit-syrup.jpg",
            name: "Redivit Syrup",
            quantity : 200,
            rating : 4.8,
            number_rating : 15,
            strikedoffprice: 130,
            disscount_percent : 14,
            price: 111,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/a8apqgoa8yj5ndabm6yx/redivit-tablet.jpg",
            name: "Redivit Tablet",
            quantity : 30,
            rating : 3.8,
            number_rating : 42,
            strikedoffprice: 290,
            disscount_percent : 0,
            price: 290,
        },
    
        {
            image_url: "https://onemg.gumlet.io/images/w_150,f_auto,c_fit,q_auto,h_150/rs44jz3htctq0qqll0gz/redivit-gold-tonic.jpg",
            name: "Redivit Gold Tonic",
            quantity : 225,
            rating : 3.5,
            number_rating : 36,
            strikedoffprice: 165,
            disscount_percent : 15,
            price: 140,
        },
    
        
    
    
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
    
    
        div1.append(div2, div3, div3i, div4, div5, div6);
    
        document.getElementById("sfinalcard1id").append(div1);
    
    });



    // SORT BT HTL

    function salarySort(){
        let salarySt = document.getElementById("sortSalary").value;
        
        if(salarySt == "htl"){
          document.querySelector("tbody").innerText = "";
          jobList.sort(function(a,b){
            if(a.ExpectedSalary < b.ExpectedSalary){
              return 1;
            }
            else if(a.ExpectedSalary > b.ExpectedSalary){
              return -1;
            }
            return 0;
          });
          display(jobList);
        }
        
        else if(salarySt == "lth"){
          document.querySelector("tbody").innerText = "";
          jobList.sort(function(a,b){
            if(a.ExpectedSalary > b.ExpectedSalary){
              return 1;
            }
            else if(a.ExpectedSalary < b.ExpectedSalary){
              return -1;
            }
            return 0;
          });
          display(jobList);
        }
  
      };
    








};








}

/* ProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProductProduct  */
