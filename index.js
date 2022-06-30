function orderFood()
{
    let id,url;
    let od1=document.querySelector("#burger");
    if(od1.checked)
    {
         id="order111";
        url="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg";
        order(id,url);
    }

    let od2=document.querySelector("#pizza");
    if(od2.checked)
    {
        id="order112";
        url="https://images.indulgexpress.com/uploads/user/imagelibrary/2018/11/2/original/285A5419.JPG?w=400&dpr=2.6";
        order(id,url);
    }

    let od3=document.querySelector("#sandwich");
    if(od3.checked)
    {
        id="order113";
        url="https://insanelygoodrecipes.com/wp-content/uploads/2021/03/Homemade-Grilled-Cheese-Sandwich-with-Tomatoes.png";
        order(id,url);
    }

    let od4=document.querySelector("#momos");
    if(od4.checked)
    {
        id="order114";
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg";
        order(id,url);
    }



function order(od,url){
    let status="open";
    let mypromise=new Promise(function(resolve,reject)
    {
        
        let time=Math.random()*10*3000;
        setTimeout(function()
        {
            if(status==="open")
            {
                resolve(od);

            }
            else{
                reject();
            }
        },time)
    
    });

  
    mypromise.then(function(od)
    {
        document.querySelector("#div1").innerHTML=null;
        let image1=document.createElement("img");
        image1.src=url;
        document.querySelector("h1").innerText=od;
        document.querySelector("#div1").append(image1);
        console.log(od," is ready");
    
    })
}
}  