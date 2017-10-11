$("#C_left a").click(function(){
			localStorage.setItem("index",$(this).index())
		})
		window.onload=function(){
			
			var index=localStorage.getItem("index")||0
			console.log(index)
			$("#C_left a").eq(index).addClass("act").siblings().removeClass("act")
			$("#C_left a").eq(index).find("em").addClass("janAct").parent("a").siblings().find("em").removeClass("janAct")
			
		}