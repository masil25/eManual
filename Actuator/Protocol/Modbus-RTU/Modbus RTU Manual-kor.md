Modbus RTU Manual
# 소개

MODBUS 프로토콜은 산업용 프로토콜로 PLC통신 등에 주로 사용되는 표준이 되는 프로토콜입니다.
주로 사용하는 방식은 RTU방식과 ASCII방식이 주로 사용되고, 요즘에는 TCP방식도 나와있습니다.

1979년부터 업계의 사실상 직렬 표준인 MODBUS는 수 백만 개의 자동화 장치가 지속적으로 통신할 수 있도록 지원하고 있습니다. 
MODBUS는 요청/응답 프로토콜이며 기능 코드별로 지정된 서비스를 제공합니다. 프레임의 구성은 Application Data Unit인 ADU와 Protocol Data Unit인 PDU로 구성되어 있습니다.



# 1 프레임 구조
## 1.1 Packet Discription
mightyZAP은 MODBUS-RTU 프로토콜 내용을 준수합니다.  
본 매뉴얼에 나오지 않은 사항들은 아래의 관련 표준 문서를 참조하여 주시기 바랍니다. ()
### 1.1.1 Packet Structure
MODBUS-RTU 프로토콜의 최대 송수신 패킷 길이는 256 Byte 입니다. 따라서 송수신 패킷의 총 길이가 256Byte 를 넘기지 않도록 주의하여 주십시오.  
MODBUS-RTU 통신 Mode 는 Packet 을 구분하기 위해서 아래 그림과 같이 시작과 끝 사이에 최소 3.5 Char 이상의 이 필요합니다.

![[packet Description.png]]

- 송신 패킷 구조

|  | Additional Address | Fucntion code | Data | < | < | Error Check |  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| byte | 0 | 1 | 2 | . | . | n-1 | n |
|  | mightyZAP ID | Function | Data | . | . | CRC(MSB) | CRC(LSB) |

- 수신 패킷 구조
[정상 응담]

|  | Additional Address | Fucntion code | Data | < | < | Error Check | < |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| byte | 0 | 1 | 2 | . | . | n-1 | n |
|  | mightyZAP ID | Function | Data | . | . | CRC(MSB) | CRC(LSB) |

[비 정상 응답]

|  | Additional Address | Fucntion code | Data | Error Check |  |
| ---- | ---- | ---- | ---- | ---- | ---- |
| byte | 0 | 1 | 2 | n-1 | n |
|  | mightyZAP ID | Function + 0x80 | Exception code | CRC(MSB) | CRC(LSB) |
### 1.1.2 Packet Element 설명
- Node ID  
	- mightyZAP의 IDF로 다중 연결 방식으로 Daisy Chain 연결 지원을  위한 식별자 입니다.  
	- ID가 '0'일 경우 Broadcasting ID로 동작합니다.
- Function Code  
	- mightyZAP에서 지원하는 Modbus-RTU  표준 Function code는 다음과 같습니다.

| Function | Code | Description |
| ---- | ---- | ---- |
| Read Holding Register | 0x03 | mightyZAP의 Data를 읽어오기 |
| Write Single Register | 0x06 | mightyZAP의 특정 주소에 Data값을 Setting  하기 |
| Write Multiple Register | 0x16 | mightyZAP의 연속된 주소에 Data값을 Setting  하기 |

- Data  
- CRC  