/**
 * Created by harshilkumar on 3/29/17.
 */
$(document).ready(function() {
    $(document).on("click", "#varify_amount", function () {
        var from_account_num = $('#from_acnt_input').val();
        var to_account_num = $('#to_acnt_input').val();
        var from_user_account = $('#bank_acnt_num').val();
        var to_user_account = $('#to_acnt_num').val();

        var amount = $('#amount_info').val();

        var all_val = "Values from input: "+from_account_num+": - :"+to_account_num+": - :"+from_user_account+": - :"+to_user_account+": - :"+amount;
        console.log(all_val);
        alert(all_val);
    });
});