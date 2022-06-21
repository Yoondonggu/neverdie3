$(document).ready(function () {
    $("#iamportPayment").click(function () {
        iamportPayment(); //버튼 클릭하면 호출
    });
}) //버튼 클릭하면 실행
function iamportPayment() {
    IMP.init('imp74182072');//아임포트 관리자 콘솔에서 확인한 '가맹점 식별코드' 입력
    IMP.request_pay({ // param
            pg: "html5_inicis", //pg사명 or pg사명.CID (잘못 입력할 경우, 기본 PG사가 띄워짐)
            pay_method: "card", //지불 방법
            merchant_uid: "iamport_test_id1", //가맹점 주문번호 (아임포트를 사용하는 가맹점에서 중복되지 않은 임의의 문자열을 입력// 한 번 쓰면 중복 안된다아아ㅏ)
            name: "테스트상품", //결제창에 노출될 상품명
            amount: 100, //금액
            buyer_email: "ydg5467@gmail.com",
            buyer_name: "윤동구",
            buyer_tel: "01040495467"
        },
        function (rsp) { // callback
            if (rsp.success) {
                alert("[완료] imp_uid : " + rsp.imp_uid + " / merchant_uid : " + rsp.merchant_uid);
            } else {
                alert("[실패] 코드(" + rsp.error_code + ") / 메세지(" + rsp.error_msg + ")");
            }
        });
}