({
    "getVips" : function(cmp) {
        var action = cmp.get("c.readVips");

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                cmp.set('v.vipAccs', response.getReturnValue());
			}
            else if (state === "INCOMPLETE") {
                alert("Incomplete: " + response.getReturnValue());
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
		$A.enqueueAction(action);
    }
})