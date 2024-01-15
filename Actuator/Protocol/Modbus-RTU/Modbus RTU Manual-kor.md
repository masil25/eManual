Modbus RTU Manual
# 소개

MODBUS 프로토콜은 산업용 프로토콜로 PLC통신 등에 주로 사용되는 표준이 되는 프로토콜입니다.
주로 사용하는 방식은 RTU방식과 ASCII방식이 주로 사용되고, 요즘에는 TCP방식도 나와있습니다.

1979년부터 업계의 사실상 직렬 표준인 MODBUS는 수 백만 개의 자동화 장치가 지속적으로 통신할 수 있도록 지원하고 있습니다. 
MODBUS는 요청/응답 프로토콜이며 기능 코드별로 지정된 서비스를 제공합니다. 프레임의 구성은 Application Data Unit인 ADU와 Protocol Data Unit인 PDU로 구성되어 있습니다.



# 프레임 구조
mightyZAP은 MODBUS-RTU 프로토콜 내용을 준수합니다.  
본 매뉴얼에 나오지 않은 사항들은 아래의 관련 표준 문서를 참조하여 주시기 바랍니다. ()
## Packet Discri
MODBUS 프로토콜은 기본 통신 계층과 관계없이 간단한 PDU(프로토콜 데이터 단위)를 정의합니다. 특정 버스나 네트워크에서 MODBUS 프로토콜 을 매핑하면 ADU(응용 프로그램 데이터 단위)에 몇 가지 추가 필드가 추가될 수 있습니다.  

![[Pasted image 20240115151825.png]]
<p align="center">Gernerral Modbus Frame</p>
MODBUS 애플리케이션 데이터 단위(ADU)는 MODBUS 전송을 시작하는 클라이언트에 의해 구축됩니다. 이 함수는 어떤 종류의 작업을 수행할지 서버에(mightyZAP) 알려줍니다. MODBUS 애플리케이션 Protocol은 Client가 시작한 요청의 형식을 설정합니다.

### Modbus RTU Protocol


![](https://blog.kakaocdn.net/dn/BZAcw/btqxDt4uOn5/Uxx3rBmxbIfC6tyy5Gcrb1/img.png)

MODBUS RTU FORMAT

RTU방식의 경우 시작과 끝에 3.5공백문자시간으로 구분됩니다.

다음으로 국번 8bit, Function 8bit, data n byte, CRC 16bit 입니다.

CRC의 경우 CRC-16을 사용하는데 검색하시면 구하는 함수는 쉽게 구하실 수 있습니다.

![](https://blog.kakaocdn.net/dn/l7bYN/btqxFTOr9XL/ta0CmIkib0Cctcqx7JXA30/img.png)

Online CRC Calculator(crccalc.com) 

참고로 Poly는 0x8005, init value는 0xFFFF입니다.

MODBUS RTU의 PDU 예를 들면 0x01 0x05 0x00 0x00 0x00 0x01 0x0C 0x0A 입니다.(CRC의 경우 LSB입니다,)

두번째로 MODBUS-ASCII방식입니다.

![](https://blog.kakaocdn.net/dn/cRug6c/btqxDt4vffi/kKnL52eCzKH6QukgKpQzNK/img.png)

MODBUS-ASCII

ASCII방식은 시작문자는 콜론(:)으로하고, 끝문자는 CR/LF로 끝납니다.

중간에 들어가는 PDU는 RTU와 같고 CRC대신 LRC를 사용합니다.

LRC는  modulo-256방식을 사용합니다.

예를들어 패킷이 247, 3, 19, 137, 0, 10일때 바이트를 하나씩 더해 256이 넘으면 빼주고, 다 더해서 나온 수를 256에서 빼줍니다.

그럼 96이 되는데 이게 LRC가 됩니다.

위 예에서 최종 패킷은 247 3 19 137 0 10 96이 됩니다.

세번째는 MODBUS-TCP 방식 입니다.

![](https://blog.kakaocdn.net/dn/8dtJ3/btqxC5JH4ko/N2maI9h4KTmB1rxh3ZXmG0/img.png)

MODBUS-TCP

MODEBUS TCP의 경우 PDU앞에 MBAP라는 헤더가 있습니다.

MBAP는 Modbus Application Protocol의 약자입니다.

Transaction identifier는 요청 or 응답을 한쌍으로 구분하기 위한 번호

Protocol identifier는 Modbus TCP의 경우 0

Length field는 Length field이후 부터 프레임 끝까지의 길이

Unit identifier는 Slave의 address입니다.

**2. Function Code**

Modbus의 Function code는 목적에 따라 정해져 있습니다.

![](https://blog.kakaocdn.net/dn/6aK7A/btqxDtKojH4/FWvz3XggPDWkt6PALE005K/img.png)

Modbus function code

위 그림처럼 많은 코드가 지정되어 있지만 가장 많이 사용되는 것은 굵게 표시된 코드들입니다.

그리고 참고로 이름에 따라 입출력과 bit가 정해져 있습니다.

Coils : 읽기, 쓰기 가능, 1bit(on/off)

Discrete inputs : 읽기 가능, 1bit(on/off)

Input Registers : 읽기 가능, 16bits(0~65,535)

Holding Registers : 읽기, 쓰기 가능, 16bits(0~65,535)

굵은 글씨중 Function code 2번과 4번빼고는 출력이라 생각하시면 됩니다.

**3. 요청 / 응답 예**

첫번째 예로 function code 4번을 사용하여 0번레지스터부터 9번레지스터까지 읽어오는 예입니다.

![](https://blog.kakaocdn.net/dn/bBydak/btqxECUbEa5/9ztOkEnHHWzK0U25TpYnW1/img.png)

Function code 04

![](https://blog.kakaocdn.net/dn/ApWT0/btqxF9wY58L/tCb165MS47U5zk7kIxXFP1/img.png)

Function 04의  TX Packet(Modbus RTU)

TX 패킷을 보면 차례대로 주소, function, 시작 레지스터 주소, 개수, 그리고 CRC로 이루어져 있습니다.

CRC만 LSB이고 나머지는 MSB입니다.

![](https://blog.kakaocdn.net/dn/wS80B/btqxECNpGjH/hjJwuqk6Ld8VmxgA1kK7xK/img.png)

Function 04의 RX Packet(Modbus RTU)

RX 패킷도 마찬가지로 주소, function이 나오고 길이정보가 나옵니다. 그뒤에는 2byte씩 레지스터 값이 나옵니다.

마지막 2byte는 CRC입니다.

Function 4번은 16bit이기때문에 16bit씩 응답이 옵니다.

두번째 예는 function code 5번을 사용하여 1번코일을 set해보겠습니다.

![](https://blog.kakaocdn.net/dn/dgoTj0/btqxCPN5GAI/l2WZKN7fWXsjI6rkSHYXW0/img.png)

Function code 05

![](https://blog.kakaocdn.net/dn/mLJc1/btqxDVfFg4e/kZ8J9hEaOkg0yTLd0snXH1/img.png)

Function 05의 TX/RX Packet

Function 05의 APU는 Coil주소와 SET Flag인 0xFF00만 지정해 주면 됩니다.

Coil 출력이 성공적으로 되었다면 응답도 똑같은 Packet으로 전달됩니다.

만약 CRC가 잘못되면 어떤 응답이 올까요?

![](https://blog.kakaocdn.net/dn/cYlAhT/btqxEQxTNhl/feTtvRv2KGLqu9bRkdO2h1/img.png)

CRC 오류

CRC를 잘못보내게 되면 응답으로 function 부분에 0x80이 더 더해서 오게 됩니다.

그리고 바로 뒤에 Exception Code가 오는데 이 code는 01~0B까지 있습니다.

![](https://blog.kakaocdn.net/dn/bweUWo/btqxEi9yssS/IPuCkn5UuEm7E8xkxoLiy0/img.png)

Exception Code

코드별 의미는 위 표와 같습니다.

CRC가 잘못되어 데이터가 이상하다고 응답이 왔네요.

보낼때도 CRC를 제대로 보내야 하지만, 받을때도 CRC를 체크하시는 것이 좋습니다.

출처: [https://answerofgod.tistory.com/entry/MODBUS-프로토콜](https://answerofgod.tistory.com/entry/MODBUS-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C) [The Answer's Engineering Blog:티스토리]