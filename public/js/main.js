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

            
        });        
    }); 

    
})(jQuery); 