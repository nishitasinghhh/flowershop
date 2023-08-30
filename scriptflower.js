const boxContainer=document.getElementById("box-container");
const flowers=
[
    {
       id:1,
       discount:"-19%",
       img:"img/yarrow.jpeg",
       name:"Yarrow",
       price1:"$12.99",
       price2:"$15.99"

    },
    {
        id:2,
        discount:"-17%",
        img:"img/Oxeye-Daisy-Arrangement-SS-1034808844.jpg",
        name:"Oxeye-Daisy",
        price1:"$14.99",
        price2:"$16.99"
 
     },
     {
        id:3,
        discount:"-11%",
        img:"img/black-eyes-susan.jpeg",
        name:"Black-eyed-susan",
        price1:"$11.99",
        price2:"$20.99"
 
     },
     {
        id:4,
        discount:"-12%",
        img:"img/echinacea-purpurea-purple-coneflower-phlox-paniculata-e28098white-flame_-dwarf-garden-phlox-and-lavender-2.jpg",
        name:"Coneflower",
        price1:"$21.99",
        price2:"$25.99"
 
     },
     {
        id:5,
        discount:"-12%",
        img:"img/california-poppy.jpeg",
        name:"California-Poppy",
        price1:"$16.99",
        price2:"$24.99"
 
     },
     {
        id:6,
        discount:"-8%",
        img:"img/chicory.jpeg",
        name:"Chicory",
        price1:"$33.99",
        price2:"$34.99"
 
     },
     {
        id:7,
        discount:"-12%",
        img:"img/coneflowers.jpeg",
        name:"Purple-coneflower",
        price1:"$12.99",
        price2:"$15.99"
 
     },
     {
        id:8,
        discount:"-10%",
        img:"img/cornflower.jpeg",
        name:"Flower",
        price1:"$12.99",
        price2:"$15.99"
 
     },
     {
        id:9,
        discount:"-4%",
        img:"img/tickseed.png",
        name:"Tickseed",
        price1:"$10.99",
        price2:"$11.99"
 
     }
];
let cart=[];
let printFlowers=()=>{
    return(boxContainer.innerHTML=flowers.map((flower)=>{
        let {id,discount,img,name,price1,price2}=flower;
        let search=cart.find((flower)=>flower.id===id)||[];
        return `<div class="box">
        <span class="discount">${discount}</span>
        <div class="image">
            <img src="${img}" alt="" width="419" height="505">
            <div class="icon">
                <a href="#" class="fas fa-heart"></a>
                <a href="" class="cart-btn">Add to cart</a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>
        <div class="content">
            <h3>${name}</h3>
            <div class="price">${price1} <span>${price2}</span></div>
        </div>
    </div>`
    }).join(""))
};
printFlowers();