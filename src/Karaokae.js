import React, { useRef, useState } from 'react'

export function Karaokae() {
    const [total, setTotal] = useState(0);
    const noStudentCard = useRef();
    const hasStudentCard = useRef();
    const noStudentCardRadio = useRef();
    const studentCardRadio = useRef();
    const calculateTotal = () => {
        const noStudentCardValue = noStudentCard.current.value;
        const hasStudentCardValue = hasStudentCard.current.value;
        const noCardRatePerHour = 120;
        const cardRatePerHour = 80;
        let calculatedTotal = 0;
        if (noStudentCardRadio.current.checked) {
            if (noStudentCardValue === "") {
                alert("กรุณากรอกจำนวนชั่วโมง");
                return;
            }
            calculatedTotal = noStudentCardValue * noCardRatePerHour;
        } else if (studentCardRadio.current.checked) {
            if (hasStudentCardValue === "") {
                alert("กรุณากรอกจำนวนชั่วโมง");
                return;
            }
            calculatedTotal = hasStudentCardValue * cardRatePerHour;
        }
        setTotal(calculatedTotal);
    };
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <table border="2" className={`borderStyle`}>
                <tbody>
                    <tr><td colSpan="2" id="karaoke">ร้านคาราโอเกะ</td></tr>
                    <tr>
                        <td>
                            <br />&nbsp;&nbsp;
                            <input type="radio" name="c1" ref={noStudentCardRadio} /> ไม่มีบัตรนักศึกษา <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน
                            <input type="text" size="2" style={{textAlign: 'center'}} ref={noStudentCard} /> ชั่วโมง <br />
                            &nbsp;&nbsp;
                            <input type="radio" name="c1" ref={studentCardRadio} /> มีบัตรนักศึกษา <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน
                            <input type="text" size="2" style={{textAlign: 'center'}} ref={hasStudentCard} /> ชั่วโมง <br /><br />
                        </td>
                    </tr>
                </tbody>
            </table><br />
            <button onClick={calculateTotal}>คิดเงิน</button><br />
            รวมเป็นเงินทั้งสิ้น = <input type="text" style={{textAlign: 'center'}} value={total} readOnly/> บาท
        </div>
    );
}