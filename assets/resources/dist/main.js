$("form").submit(function(t){t.preventDefault();var a=$("body"),o={module:$(a).attr("module"),action:$(a).attr("action"),formtype:$(this).attr("default"),name:$(this).attr("name"),ajax:$(a).attr("url")+"/"+$(a).attr("module")+"/"+$(this).attr("name")};null!=o.formtype&&"true"==o.formtype&&null!=o.name?(console.log("Sending: "+o.name+" data to: "+o.ajax),$.ajax({url:o.ajax,type:"post",data:$(this).serialize(),success:function(t){console.log(t)},error:function(t,a,o){console.log(a,o)}})):alert("Not a custom form!")});