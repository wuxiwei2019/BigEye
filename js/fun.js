/*
* @Author: Administrator
* @Date:   2020-11-09 17:17:44
* @Last Modified by:   Administrator
* @Last Modified time: 2020-11-12 13:02:59
*/
$(document).ready(function(){
    $("#btn_check").click(function(){
        inputText =  $("#inputCode").val();
        outputText = "<h5>你的输入内容是：</h5>" + inputText + "<br><h5>【识别的结果】：</h5>"
        console.log(inputText);
        $("#outputCode").val(outputText);
        check(inputText);
    });
    function addOuputText(reg){
        $.each (reg, function (i, item)
        {
            var reg2 = new RegExp(item.regStr,'g');
            //console.log(inputText);
            if(reg2.test(inputText.toString())){
                outputText =  $("#outputCode").val();
                outputText = outputText + "<p class='text-danger'>" + item.name + " --->：True<br>" ;
                outputText = outputText + "<small class='text-success'>" + "Alphabat:" + item.regStr + "</small></p>" ;
                $("#outputCode").val(outputText);
            }else{
                //outputText =  $("#outputCode").val();
                //outputText = outputText + "\n" + item.name + " --->：False";
                //$("#outputCode").val(outputText);
            }
            console.log(item.name + ":" + item.regStr);
        });
    }
    //刷新输入框内容
    function refOutputText(panel){
        $("#outputCode").val($("#outputCode").val() + panel);
        $("#outputCode").html($("#outputCode").val() + "<br>");
    }
    function addPanel_h(title){
        var panel_h = `
            <div class="panel panel-default">
                <div class="panel-heading">
            ` + title + `
                </div>
                <div class="panel-body">
            `;
        refOutputText(panel_h);
    }
    function addPanel_e(){
        var panel_e =`
                </div>
            </div>
            `;
        refOutputText(panel_e);
    }

    // 代码识别函数
    function check(inputText){
        // 开始base集编码识别
        addPanel_h('base集编码识别');
        addOuputText(reg.base);
        addPanel_e();
        

        // 开始常见编码识别
        addPanel_h('常见编码识别');
        addOuputText(reg.crypto);
        addPanel_e();
    }
});

