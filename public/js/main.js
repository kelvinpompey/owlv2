(function($){
    console.log('jQuery?', $); 
    
    var html; 
    $.get('/contactus2.html', function(res){         
        html = res; 
    });
    
    $(document).ready(function(){
        $("a[href='/contactus.html']").click(function(evt){
            evt.preventDefault(); 
            var main = $(html).find("#main"); 
            console.log(main.html());         
            
            new ui.Dialog({title: 'Contact Us', message: main }).show().closable();
            $(".close").html("<img src='img/close.png'/>"); 

            
        });        
        
        var animator = function()
        {
            console.log('this', this); 
            $(this).addClass('animated wiggle'); 
            var self = this; 
            setTimeout(function(){
                $(self).removeClass('animated wiggle');     
            }, 600); 
                
        };
        
        $("#gobutton").click(animator);         
        $("img[src='img/go-btn.png']").click(animator); 
        
        
        
    }); 

    
})(jQuery); 