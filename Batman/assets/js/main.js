$(document).ready(function () {
    let TabsItem = $('.tabs-item');
    console.log(TabsItem);
    
    TabsItem.on('click', function (event){
        event.preventDefault();
        /*let activeContent = $(this).attr('href');*/
        
        let activeContent = $(this).attr('href');
        console.log(activeContent);
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-active-item').toggleClass('tabs-active-item');
        $(this).toggleClass('tabs-active-item');
        
        
        
        
    });
    
});