let mobile_menu_icon=document.querySelector(".mobile_menu_icon");
let mobile_menu_icon_top=document.querySelector(".mobile_menu_icon_top");
let mobile_menu_icon_middle=document.querySelector(".mobile_menu_icon_middle");
let mobile_menu_icon_bottom=document.querySelector(".mobile_menu_icon_bottom");
let ul=document.querySelector("ul");
let menu_status=0;

mobile_menu_icon.addEventListener("click", ()=>
{
    if(menu_status ===0)
    {
        ul.style.top="0";
        mobile_menu_icon_top.classList.add('mobile_menu_icon_top_twist');
        mobile_menu_icon_middle.classList.add('mobile_menu_icon_middle_twist');
        mobile_menu_icon_bottom.classList.add('mobile_menu_icon_bottom_twist');
        menu_status=1;
    }
    else{
        ul.style.top='-70em';
        mobile_menu_icon_top.classList.remove('mobile_menu_icon_top_twist');
        mobile_menu_icon_middle.classList.remove('mobile_menu_icon_middle_twist');
        mobile_menu_icon_bottom.classList.remove('mobile_menu_icon_bottom_twist');
        menu_status=0;
    }
})