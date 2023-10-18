let navigationBar = document.querySelector('.navigation-bar');
let iconBasket = document.getElementById("basket");
let sh = document.querySelector(".sh");
let shopPage = document.querySelector(".shop-page");
let shopPgageOff = document.querySelector(".shop-page-off");
let numberGoods = document.getElementById("number-goods");
let sumPrice = document.getElementById("sum-price");

function menuicon(){
    if(navigationBar.style.display == "block"){
        navigationBar.style.display = "none";
    }else{
        navigationBar.style.display = "block"
    }
}

let slideIndex = 1;
function setSlide(input , index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`);
    let slides = [...document.querySelector(".slides").children];
    slides.forEach((element)=>{
        element.classList.remove("active")
    });
    item.classList.add("active")
};

setInterval(()=>{
    slideIndex += 1;
    if(slideIndex == 3){
        slideIndex = 1
    };
    setSlide(`slide${slideIndex}` , slideIndex)
} , 4000)


function f1(){
    let img = document.getElementById('image');
    let title = document.getElementById('title');
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    img.src = "../Auxin/images/f1.jpg";
    title.innerText = "Feron";
    text1.innerText = "ترکیب ویژه رفع زردی تاج گیاه";
    text2.innerText = "محصول Feron با فرمولاسیون جدید توسط مهندسان کشاورزی شرکت Auxin تولید گشته است.این محصول برای رفع زردی برگ گیاهان آپارتمانی سفارش می شود.برای خرید محصول آن را به سبد خرید خود اضافه نمایید."
}

function f2(){
    let img = document.getElementById('image');
    let title = document.getElementById('title');
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    img.src = "../Auxin/images/f2.jpg";
    title.innerText = "Flowerot";
    text1.innerText = "ترکیب ویژه برای گلدهی ، رشد ریشه و شادابی و استحکام گیاه";
    text2.innerText = "محصول Flowerot تولیدی از شرکت Auxin می باشد. این محصول با ترکیبات شیمیایی موجود غذایی مناسب برای گیاه به شمار می رود.یکی از نشانه هایی شادابی گل و سالم بودن آن گلدهی به موقع آن می‌باشد. با این محصول به گیاه خود رسیدگی کنید.برای خرید این محصول آن را به سبد خرید خود اضافه نمایید."
}

function f3(){
    let img = document.getElementById('image');
    let title = document.getElementById('title');
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    img.src = "../Auxin/images/f3.jpg";
    title.innerText = "Growbo";
    text1.innerText = "ترکیب رشدی گیاه به ویژه برای سطح برگ یشتر";
    text2.innerText = "محصول Growbo محصولی جادویی برای افزایش سبزینه گیاه و افزایش فتوسنتز گیاه می باشد. برگ گیاه همچون ریه های انسان برای گیاه عمل می کند این محصول با قابلیتی که دارد باعث افزایش برگ دهی گل و گیاه شده و باعث رشد بیشتر و بهتر گیاه شما می شود.برای خرید این محصول آن را به سبد خرید خود اضافه نمایید."
}

function f4(){
    let img = document.getElementById('image');
    let title = document.getElementById('title');
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    img.src = "../Auxin/images/f4.jpg";
    title.innerText = "Halic";
    text1.innerText = "ترکیب مناسب برای اصلاح خاک و افزایش جذب عناصر غذایی و مقاومت گیاه";
    text2.innerText = "محصول Halic محصولی شگفت انگیز برای اصلاح خاک گلدان می باشد.خاک یکی از اجزای مهم گلدان بوده و مهمترین بخش گل یعنی ریشه در آن جای می گیرد. برای آنکه گیاه بتواند تغذیه سالم داشته باشد به خاک سالم نیاز است .این محصول با فرمولاسیون جدید باعث می شود که مواد مورد نیاز گیاه در دسترس ریشه های آن قرار گیرد و این یعنی رشد بیشتر و بهتر گیاه.برای خرید این محصول شگفت انگیز آن را به سبد خرید اضافه نمایید."
}

function f5(){
    let img = document.getElementById('image');
    let title = document.getElementById('title');
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    img.src = "../Auxin/images/f5.jpg";
    title.innerText = "Jax";
    text1.innerText = "ترکیب ویژه مقاومت گیاه ، افزایش شادابی و براقی برگ";
    text2.innerText = "محصول Jax محصولی از شرکت Auxin مناسب برای افزایش طول عمر گیاه , مقاوم سازی گل و افزایش براقی و سبز بودن برگ گیاهان آپارتمانی.برای خرید محصول آنرا به سبد خرید خود اضافه نمایید."
}

function f6(){
    let img = document.getElementById('image');
    let title = document.getElementById('title');
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    img.src = "../Auxin/images/f6.jpg";
    title.innerText = "Teraf";
    text1.innerText = "ترکیب جادویی برای افزایش ریشه و رشد بهتر گیاه";
    text2.innerText = "محصول teraf محصولی از شرکت Auxin برای افزایش رشد ریشه گیاه.این ترکیب جادویی باعث تقویت ریشه گیاه شده و رشد بهتر و سریع تر گیاه را به دنبال دارد.برای خرید این محصول جادویی آن را به سبد خرید اضافه نمایید."
}

function f7(){
    let img = document.getElementById('image');
    let title = document.getElementById('title');
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    img.src = "../Auxin/images/f7.jpg";
    title.innerText = "Tewntry";
    text1.innerText = "ترکیب ویژه رشد و تقویت عمومی گیاه";
    text2.innerText = "محصول Twentry محصول Auxin مناسب برای هر گیاهی می باشد. این محصول ترکیبی از چند ماده مغذیی گیاه می باشد و از این رو بسیار به صرفه و اقتصادی است. برای خرید این محصول ویژه و اقتصادی کافی است آن را به سبد خرید خود اضافه نمایید."
}


let index = 1;
add.addEventListener("click" , (e)=>{
    add.innerText = "محصول به سبد خرید اضافه شد!";
    setTimeout(() => {
        add.innerText = "افزودن به سبد خرید"
    }, 1000);

    let count = 1;
    
    let body = document.createElement("div");
    shopPage.append(body);
    let goods = document.createElement("div");
    let price = document.createElement("div");
    body.append(goods);
    body.append(price);
    body.className = "body";
    
    body.setAttribute("id" , `body${index}`);

    goods.className = "goods";
    price.className = "price";
    let rightG = document.createElement("div");
    let leftG = document.createElement("div");
    goods.append(rightG);
    goods.append(leftG);
    rightG.className = "right";
    leftG.className = "left";
    let rightP = document.createElement("div");
    let leftP = document.createElement("div");
    price.append(rightP);
    price.append(leftP);
    rightP.className = "right";
    leftP.className = "left";
    let addProduct = document.createElement("span");
    addProduct.innerText = "+";
    let subtractionProduct = document.createElement("span");
    subtractionProduct.innerText = "-";
    let numberProduct = document.createElement("span");
    numberProduct.innerText = count;
    rightP.append(addProduct);
    rightP.append(subtractionProduct);
    rightP.append(numberProduct);
    let imageProduct = document.createElement("img");
    let img = document.getElementById('image');
    imageProduct.src = img.src;
    rightG.append(imageProduct);
    let titleProduct = document.createElement("span");
    let title = document.getElementById('title');
    titleProduct.innerText = title.innerText;
    leftG.append(titleProduct);

    titleProduct.setAttribute("id" , `title${index}`);

    let informationProduct = document.createElement("span");
    let text1 = document.getElementById('text1');
    informationProduct.innerText = text1.innerText;
    leftG.append(informationProduct);
    let priceProduct = document.createElement("span");
    leftP.append(priceProduct);

    index += 1;

    let childShoppage = [...shopPage.children];
    label.style.display = "inline";
    label.innerText = (childShoppage.length)-2;
    numberGoods.innerText = (childShoppage.length)-2;
    
    if(titleProduct.innerText == "Feron"){
        priceProduct.innerText = "25.000";
    }
    if(titleProduct.innerText == "Flowerot"){
        priceProduct.innerText = "37.000";
    }
    if(titleProduct.innerText == "Growbo"){
        priceProduct.innerText = "23.000";
    }
    if(titleProduct.innerText == "Halic"){
        priceProduct.innerText = "40.000";
    }
    if(titleProduct.innerText == "Jax"){
        priceProduct.innerText = "50.000";
    }
    if(titleProduct.innerText == "Teraf"){
        priceProduct.innerText = "29.000";
    }
    if(titleProduct.innerText == "Tewntry"){
        priceProduct.innerText = "80.000";
    }

    let x = Number(sumPrice.innerText);
    let y = Number(priceProduct.innerText);
    x += y*1000;
    sumPrice.innerText = `${x}`;

    addProduct.addEventListener("click" , ()=>{
        count +=1 ;
        numberProduct.innerText = count;
    });
    subtractionProduct.addEventListener("click" , ()=>{
        count -= 1;
        if(count == 0){
            body.remove();
            return count = 0;
        }
        numberProduct.innerText = count;
    });    
});

sh.style.display = "none"
iconBasket.addEventListener("click", ()=>{
    if(sh.style.display == "none"){
        sh.style.display = "block";
    }else{
        sh.style.display = "none";
    }
    let childShoppage = [...shopPage.children];
    if(childShoppage.length == 2){
        shopPage.style.display = "none";
        shopPgageOff.style.display = "flex";
    }else{
        shopPage.style.display = "block";
        shopPgageOff.style.display = "none";
    }
})

