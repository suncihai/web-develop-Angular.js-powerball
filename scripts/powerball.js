var app=angular.module('app',[]);

app.controller('myCtrl',function($scope){
	$scope.lotteryswitch1=true;
    $scope.lotteryswitch2=false;

    $scope.showlotteryboard=function(value){
        $scope.lotteryswitch1=value;
        $scope.lotteryswitch2=!value;
    }

    var whiteballArr=[];
	for(var i=0;i<69;i++){
	   var tmp={num:(i+1)}
       whiteballArr.push(tmp);
	};

	$scope.whiteball1=whiteballArr;
	$scope.whiteball2=whiteballArr;
	$scope.whiteball3=whiteballArr;
	$scope.whiteball4=whiteballArr;
	$scope.whiteball5=whiteballArr;

    //function to filter out the opposite 
	$scope.not=function(actual,expected){
        if(actual!=expected){
        	return true;
        }
        return false;
	};
    
    //if we random out two same numbers in our balls, try again.
	function filtersame(arr){
        for(var i=0;i<arr.length;i++){
        	for(var j=i+1;j<arr.length;j++){
        		if(arr[j]==arr[i]){
        			return true;
        		}
        	}
        }
        return false;
	}
    
    //if we use selection to pick specific number, we will not random that number box again.
    var selector1dirty=false;
    var selector2dirty=false;
    var selector3dirty=false;
    var selector4dirty=false;
    var selector5dirty=false;

    $scope.selector1dirty=function(){
        selector1dirty=true;
    }
    $scope.selector2dirty=function(){
        selector2dirty=true;
    }
    $scope.selector3dirty=function(){
        selector3dirty=true;
    }
    $scope.selector4dirty=function(){
        selector4dirty=true;
    }
    $scope.selector5dirty=function(){
        selector5dirty=true;
    }
    
    //random pick all the ball numbers
	$scope.randompick=function(){
			do{
                if(!selector1dirty){
                    $scope.selectedWhiteball1={num:Math.ceil(Math.random()*69)};
                }
			    if(!selector2dirty){
                    $scope.selectedWhiteball2={num:Math.ceil(Math.random()*69)};
                }
				if(!selector3dirty){
                   $scope.selectedWhiteball3={num:Math.ceil(Math.random()*69)}; 
                }
				if(!selector4dirty){
                    $scope.selectedWhiteball4={num:Math.ceil(Math.random()*69)};
                }
				if(!selector5dirty){
                    $scope.selectedWhiteball5={num:Math.ceil(Math.random()*69)};                
                }
                var tmparr=[$scope.selectedWhiteball1.num,$scope.selectedWhiteball2.num,$scope.selectedWhiteball3.num,$scope.selectedWhiteball4.num,$scope.selectedWhiteball5.num]
            }while(filtersame(tmparr));

            var ball1 = $scope.selectedWhiteball1.num;
            var ball2 = $scope.selectedWhiteball2.num;
            var ball3 = $scope.selectedWhiteball3.num;
            var ball4 = $scope.selectedWhiteball4.num;
            var ball5 = $scope.selectedWhiteball5.num;
            
            var NewArr=[ball1,ball2,ball3,ball4,ball5];
            function sortNumber(a,b){return a-b};
            NewArr.sort(sortNumber);
            
            $scope.selectedWhiteball1={num:NewArr[0]};
            $scope.selectedWhiteball2={num:NewArr[1]};
            $scope.selectedWhiteball3={num:NewArr[2]};
            $scope.selectedWhiteball4={num:NewArr[3]};
            $scope.selectedWhiteball5={num:NewArr[4]};

            selector1dirty=false;
            selector2dirty=false;
            selector3dirty=false;
            selector4dirty=false;
            selector5dirty=false;
	};
})