$(function(){
    $("#btnMatch").click(function(){
        if($("#name").val()==""){
            alert("你尚未填寫姓名");
            $("#name").focus();
        }else if($("#age").val()==""){
            alert("你尚未填寫年齡");
            eval("form1['phone'].focus()");
        }else if($("#height").val()==""){
            alert("你尚未填寫身高");
            eval("form1['address'].focus()");
        }else{
            document.form1.submit();
        }
    });

});


function match(name, age, height, weight){
    var level=0, result;

    if (age >= 30 &&  age <= 35) {
        count +=1;
    }

    if (height >= 175) {
        count +=2;
    }

    if (weight <= 70) {
        count +=4;
    }

    switch(count) {
        case(3) :
            result = name + "：小美願意跟你相親 (條件1 年齡 + 身高)")
            break;

        case(5) :
            result = name + "：小美願意跟你相親 (條件2 年齡 + 體重)")
            break;

        case(6) :
            result = name + "：小美願意跟你相親 (條件3 體重 + 身高)")
            break;

        case(7) :
            result = name + "：小美願意跟你相親 (條件4 年齡 + 體重 + 身高)")
            break;
        default :
            result = name + "：抱歉，小美不願意和你相親");
            break;
    }
    return result;
    console.log(result);

}
