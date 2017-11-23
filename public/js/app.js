var MarketContract;

$(function()
{
    // contract deployment
    $("#btn_deploy_contract").on("click", function(){

        if ($("#contractName").val().trim().length == 0){
            alert("Please input contract name");
            $("#contractName").focus();
            return;
        }
        if ($("#baseTokenAddress").val().trim().length == 0){
            alert("Please input BaseTokenAddress");
            $("#baseTokenAddress").focus();
            return;
        }
        if ($("#oracleDataSource").val().trim().length == 0){
            alert("Please input OracleDataSource");
            $("#oracleDataSource").focus();
            return;
        }
        if ($("#oracleQuery").val().trim().length == 0){
            alert("Please input OracleQuery");
            $("#oracleQuery").focus();
            return;
        }
        if ($("#oracleQueryRepeatSeconds").val().trim().length == 0){
            alert("Please input oracleQueryRepeatSeconds");
            $("#OracleQueryRepeatSeconds").focus();
            return;
        }
        if ($("#floorPrice").val().trim().length == 0){
            alert("Please input FloorPrice");
            $("#floorPrice").focus();
            return;
        }
        if ($("#capPrice").val().trim().length == 0){
            alert("Please input CapPrice");
            $("#capPrice").focus();
            return;
        }
        if ($("#priceDecimalPlaces").val().trim().length == 0){
            alert("Please input PriceDecimalPlaces");
            $("#priceDecimalPlaces").focus();
            return;
        }
        if ($("#qtyDecimalPlaces").val().trim().length == 0){
            alert("Please input QtyDecimalPlaces");
            $("#qtyDecimalPlaces").focus();
            return;
        }
        if ($("#secondsToExpiration").val().trim().length == 0){
            alert("Please input SecondsToExpiration");
            $("#secondsToExpiration").focus();
            return;
        }

        if (typeof window.web3 === 'undefined') {
            alert("Please enable metamask.");
        } else if (window.web3.eth.defaultAccount == undefined) {
            alert("Please unlock metamask.");
        } else if (web3.currentProvider.isMetaMask === true) {

            if (typeof web3 !== 'undefined') {
                web3 = new Web3(web3.currentProvider);
            } else {
                // set the provider you want from Web3.providers
                web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
            }
            console.log(web3);

            MarketContract = web3.eth.contract(MarketABI);
            MarketContract.new(
                $("#contractName").val(),
                $("#baseTokenAddress").val(),
                $("#oracleDataSource").val(),
                $("#oracleQuery").val(),
                $("#oracleQueryRepeatSeconds").val(),
                $("#floorPrice").val(),
                $("#capPrice").val(),
                $("#priceDecimalPlaces").val(),
                $("#qtyDecimalPlaces").val(),
                $("#secondsToExpiration").val(),
                function (err, contract) {
                    if(err) {
                        alert(err);
                        console.error(err);
                        return;
                    } else{
                        alert("Market contract has been created");
                        console.log(contract);
                        //console.log(contract.transactionHash);
                        //console.log(contract.address);
                    }
                }
            );
        }
    });
});