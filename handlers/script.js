$("#appointments").click(function (e) { 
        e.preventDefault();
        if($("#collapse").attr("class")==="collapse"){
            $(this).attr("class", "nonCollapsed");
        }
        if($("#collapse").attr("class")==="nonCollapsed"){
            $(this).attr("class", "collapsed");
        }

    });
