본 문서는 MightyZap에서 사용하는 Modbus RTU를 중심으로하여 설명하고 있습니다. Modbus에 대한 자세한 설명은 아래의 사이트를 참조하여 주시기 바랍니다.
### Modbus thro
최초 의 Modbus 프로토콜인 Modbus RTU (원격 터미널 장치)는 원래 1979년 Modicon(현재 Schneider Electric) 시스템에서 PLC와 함께 사용하기 위한 프로그래밍 프로토콜로 게시되었습니다. Modbus는 개방형 프로토콜이지만 "Modbus"라는 단어는 Schneider Electric의 등록 상표입니다.
Modbus RTU는 간단한 직렬 통신 프로토콜입니다. 시간이 지나면서 TCP/IP(전송 제어 프로토콜/인터넷 프로토콜) 및 UDP(사용자 데이터그램 프로토콜)와 같은 널리 사용되는 전송 프로토콜을 사용하여 보다 복잡한 구현을 허용하는 표준에 대한 필요성이 커졌습니다 . 1999년에 개발된 Modbus 변형은 이러한 요구를 해결했습니다.

### Modbus RTU
Modbus에는 여러 가지 변형이 있습니다. 동일한 네트워크 세그먼트에서 상호 운용이 불가능하고 용도가 다르기 때문에 버전이 아닌 변형입니다
Modbus RTU는 가장 일반적인 변형이며 직렬 연결에 사용됩니다.

Modbus 직렬 연결에는 Modbus RTU와 Modbus ASCII의 두 가지 유형이 있습니다. 편의상 Modbus RTU 및 Modbus ASCII는 일반적으로 Modbus RTU라고 하며 직렬 케이블을 사용하는 변형으로 그룹화됩니다.

Modbus RTU를 사용하면 데이터가 바이너리로 전송됩니다. Modbus ASCII를 사용하면 데이터가 읽을 수 있는 ASCII로 표시됩니다. 바이너리 메시지는 ASCII보다 짧고 이론적으로 전송 및 수신 속도가 빠른 반면, ASCII 메시지는 관리자가 쉽게 모니터링할 수 있다는 장점이 있습니다.

Modbus TCP와 달리 Modbus RTU는 사용되는 물리적 신호 표준에 따라 하나의 클라이언트 장치와 최대 247개의 서버 장치만 가질 수 있으며 각 장치마다 별도의 포트가 필요합니다.

MODBUS는 공개적으로 배포되고 로열티가 없기 때문에 산업 환경에서 인기가 많습니다. 산업용으로 개발되어서 다른 표준에 비해 비표 및 유지 관리가 비교가 쉽고 전송할 데이터에 대한 제한도 거의 없습니다.

통신과 장비
modbus는 master/slave 기반 프로토콜이다. 시리얼 통신에서는 master로 설정된 장비만이 salve로 정보를 요청할 수 있으며, 요청된 정보는 읽기와 쓰기가 가능하다.
일반적으로 Master는 하나만 존재한다.
### 제한 사항
Modbus는 1970년대 후반에 PLC와 통신하도로기 설계되어서 데이터 유형의 수는 당시 PLC에서 해석 가능한 유형으로 제한한다.  
#### 2. MODBUS는 프로객체 유형
| 객체 유형             | Access     | Size    | 주소 공간         |
|:------------------|:-----------|:--------|:--------------|
| Coil              | Read/Write |   1 bit |  0001 ~ 09999 |
| Discription Input | Read Only  |   1 bit | 10001 ~ 19999 |
| Input Register    | Read Only  | 16 bits | 30001 ~ 39999 |
| Holding register  | Read/Write | 16 bits | 40001 ~ 49999 |  


### Function code
### Illigal code

### Modbus Frame Structure // 프레임 구조
Modbus 프로토콜은 기본 통신 계층과 독립적인 PDU(프로토콜 데이터 단위)를 정의합니다. 사용되는 버스나 네트워크 유형에 따라 ADU(Application Data Unit)에 추가 필드가 도입될 수 있습니다.
##### PDU(Protocol Data Unit)
- Fucntion Code :   수행할 작업 종류를 나타내는 Code
- Data Field : Fucntion code에 의해 정의된 동작에 대한 추가 정보를 포함하는 데이터 필드입니다. 여기에는 레지스터 주소 및 처리할 항목 수 및 필드의 실체 데이터 byte 수 등이 포함될 수 있습니다.
Modbus 애플리케이션 프로토콜은 기본 통신 계층과 관계없이 간단한 PDU(프로토콜 데이터 단위)를 정의합니다.
![[modbus_pdu.png]]  
특정 버스 또는 네트워크에서 MODBUS 프로토콜을 매핑하면 프로토콜 데이터 단위에 몇 가지 필드가 추가됩니다. Modbus 전송을 시작하는 클라이언트는 modbus pdu를 구축한 다음 적절한 통신 pdu를 구축합니다.