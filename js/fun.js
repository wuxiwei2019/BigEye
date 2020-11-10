/*
* @Author: Administrator
* @Date:   2020-11-09 17:17:44
* @Last Modified by:   Administrator
* @Last Modified time: 2020-11-10 15:08:35
*/
$(document).ready(function(){
    $("#btn_check").click(function(){
        inputText =  $("#inputCode").val();
        outputText = "你的输入内容是：" + inputText + "\n识别的结果："
        console.log(inputText);
        $("#outputCode").val(outputText);
        check(inputText);
    });
    function check(inputText){
        $.each (reg.base, function (i, item)
        {
           var reg2 = new RegExp(item.regStr,'g');
           //console.log(inputText);
           if(reg2.test(inputText.toString())){
                outputText =  $("#outputCode").val();
                outputText = outputText + "\n" + item.name + " --->：True";
                outputText = outputText + "\nAlphabat:" + item.regStr;
                $("#outputCode").val(outputText);
           }else{
                //outputText =  $("#outputCode").val();
                //outputText = outputText + "\n" + item.name + " --->：False";
                //$("#outputCode").val(outputText);
           }
           console.log(item.name + ":" + item.regStr);
        });
    }
});

