
본 문서는 Modbus.org의 문서를 참고하여 MightyZap에서 사용하는 Modbus RTU를 중심으로하여 설명하고 있습니다. Modbus에 대한 자세한 설명은 Modbus.org 사이트를 참조하여 주시기 바랍니다.
### 1. Modbus Introduction
최초 의 Modbus 프로토콜인 Modbus RTU (원격 터미널 장치)는 원래 1979년 Modicon(현재 Schneider Electric) 시스템에서 PLC와 함께 사용하기 위한 프로그래밍 프로토콜로 게시되었습니다. Modbus는 개방형 프로토콜이지만 "Modbus"라는 단어는 Schneider Electric의 등록 상표입니다.
Modbus RTU는 간단한 직렬 통신 프로토콜입니다. 시간이 지나면서 TCP/IP(전송 제어 프로토콜/인터넷 프로토콜) 및 UDP(사용자 데이터그램 프로토콜)와 같은 널리 사용되는 전송 프로토콜을 사용하여 보다 복잡한 구현을 허용하는 표준에 대한 필요성이 커졌습니다 . 1999년에 개발된 Modbus 변형은 이러한 요구를 해결했습니다.

Modbus 는 client/server 기반 프로토콜입니다. 시리얼 통신에서는 client로 설정된 장비만이 server로 정보를 요청할 수 있습니다.  

### 2. Context
Modbus Protocol을 사용하면 모든 유형의 네트워크 아키텍처에서 쉽게 통신 할 수 있습니다.
![[Pasted image 20231016164954.png]]  
![[Pasted image 20231018161942.png]]


Gateway는 Modbus Protocol을 사용하여 모든 버스 도는 네트워크 간의 통신이 가능합니다.(Gateways allow a communication between several types of buses or network using the MODBUS protocol.)
<font color="#ff0000">MightyZap에서는 RS485 통신을 이용한 MODBUS RTU를 사용합니다.</font>

데이지 체인


### 3. General Description
#### 3.1  Protocol Description  
MODBUS 프로토콜은 기본 통신 계층과 관계없이 간단한 PDU(프로토콜 데이터 단위)를 정의합니다. 특정 버스나 네트워크에서 MODBUS 프로토콜을 매핑하면 ADU(응용 프로그램 데이터 단위)에 몇 가지 추가 필드가 추가될 수 있습니다.  
![[modbusRTUFrame.png]]

| Name                  | Lenth(bits) | Function                                                                                                                                                                                           |
|:----------------------|:------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Start                 |          28 | 최소 3 1/2 character time 간격(mark condition)                                                                                                                                                         |
| Server ID             |           8 | MightyZap ID                                                                                                                                                                                       |
| Function Code         |           8 | Function Code를 나타냅니다.                                                                                                                                                                              |
| Data                  | N * 8       | Message type에 따라 다르게 채워집니다.                                                                                                                                                                        |
| CRC&nbsp; Error check |          16 | <span style="color: rgb(64, 64, 64); font-family: Lato, proxima-nova, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 14.4px; background-color: rgb(243, 246, 246);">Error checks</span> |
| stop                  |          28 | 최소 3 1/2 character time 간격(mark condition)<br>                                                                                                                                                     |  
###### PDU(Protocol Data Unit)
- Fucntion Code :   수행할 작업 종류를 나타내는 Code
- Data Field : Fucntion code에 의해 정의된 동작에 대한 추가 정보를 포함하는 데이터 필드입니다. 여기에는 레지스터 주소 및 처리할 항목 수 및 필드의 실체 데이터 byte 수 등이 포함될 수 있습니다.
  특정 Fucntion에서는 데이터 필드가 존재하지 않을 수도 있습니다.  
###### ADU(Application data Unit)
- Protocol Data Unit
- Salve ID   
- CRC Error Check   
#### 3.2 Data Encoding  
MODBUS는 주소와 데이터 항목에 'big-Endian 표현을 사용합니다. 단일 바이트(255) 보다 큰 숫자가 전송되면 최상위 바이트가 먼저 전송됩니다. 

| Registger Size | value  | note                     |
|:---------------|:-------|:-------------------------|
|         16 bit | 0x1234 | 0x12를 먼저 보내고 0x34를 보냅니다. |  

#### 3.3 MODBUS Data model
MODBUS는 독특한 특성을 지닌  테이블을 기반으로 데이터 모델을 나눕니다.  
4개의 기본 테이블은 다음과 같습니다.  

| 객체 유형             | Access     | Size    | 주소 공간         |
|:------------------|:-----------|:--------|:--------------|
| Coil              | Read/Write |   1 bit |  0001 ~ 09999 |
| Discription Input | Read Only  |   1 bit | 10001 ~ 19999 |
| Input Register    | Read Only  | 16 bits | 30001 ~ 39999 |
| Holding register  | Read/Write | 16 bits | 40001 ~ 49999 |  

### 4. Function Code
Function code는 MightyZap 에서 제공하는 Function만 표기합니다. 자세한 Function code를 원하실 경우 Modbus.org 를 참조하여 주시기 바랍니다.   

|  Funtion                |  Code  |  Description       |
|:------------------------|:-------|:-------------------|
|  Read Holding Register  |  0x03  |  Register의 메모리 읽기  |
|  Write Single Register  |  0x06  |  Register의 메모리 쓰기  |
| Diagnostics             |   0x08 | 시스템 진단             |  

##### 4.1 Read Single Register (0x03)  
이 기능 코드는 원격 장치에서 1~125개의 연속 입력 레지스터를 읽는 데 사용됩니다.  
Request PDU는 시작 레지스터 주소와 레지스터 수를 지정합니다. PDU에서 레지스터는 0부터 시작하여 주소가 지정됩니다.
따라서 1-16번 입력 레지스터는 0-15로 주소가 지정됩니다.
###### Request (PDU)
| Function Code              | 1 Byte | 0x03             |
|:-------------------------- |:------ |:---------------- |
| Starting Address           | 2 byte | 0x0000 to 0xFFFF |
| Quantity of Register&nbsp; | 2 Byte | 1 to 125(0x7d)   |
###### Response (PDU)   
| Function code  |      1 Byte |   0x03 |
|:---------------|:------------|:-------|
| Byte ount      |      1 Byte | 2 X N* |
| Register value | N * 2 Bytes |        |  
N* =  Quantity of Registers
###### Error (PDU)    
| Error Code     | 1 Byte | 0x83                 |
|:-------------- |:------ |:-------------------- |
| Exception code | 1 Byte | 01 or 02 or 03 or 04 |                        |
`- Exception code에 대한 자세한 자료는 5.Exception 을 참조하여 주시기 바랍니다.

다음은 Register 108 ~ 110을 읽어오는 요청 예제 입니다.
###### Request (PDU)
| Function | Starting Address Hi | Starting Address Lo | No of Register&nbsp; Hi | No of Register Lo |
|:---------|:--------------------|:--------------------|:------------------------|:------------------|
|     0x03 |                0x00 |                0x6b |                    0x00 |              0x03 |  
- starting Address : 108(0x006b)
- No of Register : 3(0x0003)
###### Response (PDU)
| Function | Byte Count | Register value Hi(108) | Register value Lo(108) | Register value Hi(109) | Register value Lo(109) | Register value Hi(110) | Register value Lo(110) |
|:---------|:-----------|:-----------------------|:-----------------------|:-----------------------|:-----------------------|:-----------------------|:-----------------------|
|     0x03 |       0x06 |                   0x02 |                   0x2b |                   0x00 |                   0x00 |                   0x00 |                   0x64 |  
- Byte Count : Register value 의 총 곗수
- Register 108 Value : 0x022b(555)
- Register 109 Value : 0x0000(0)
- Register 110 Value : 0x0064(100)
##### 4.2 Write Single Register (0x06)
이 Function code는 MightyZap의 하나의 레지스터의 내용을 쓰는데 사용됩니다.  
Request PDU는 기록할 레지스터의 주소를 지정합니다. 레지스터는 0부터 시작하여 주소가 지정됩니다. 다라서 1번 레지스터는 0으로 주소가 지정됩니다.  
정상적인 응답은 요청의 Echo이며, 레지스터 내용을 저장한 후에 응답합니다.
###### Request (PDU)
|  Function Code               |  1 Byte  |               0x06 |
|:-----------------------------|:---------|:-------------------|
|  Starting Address            |  2 byte  |  0x0000 to 0xFFFF  |
|  Quantity of Register&nbsp;  |  2 Byte  |   0x0000 to 0xFFFF |  
###### Response (PDU) 
|Function Code|1 Byte|0x06|
|:--|:--|:--|
|Starting Address|2 byte|0x0000 to 0xFFFF|
|Quantity of Register|2 Byte|0x0000 to 0xFF|
###### Error (PDU)
| Error Code     | 1 Byte | 0x86             |
|:-------------- |:------ |:-------------------- |
| Exception code | 1 Byte | 01 or 02 or 03 or 04 |                        |
* Exception code에 대한 자세한 자료는 5.Exception 을 참조하여 주시기 바랍니다.

다음은 Register 2dp 0x0003을 저장하는 요청 예제 입니다.
###### Request (PDU)
| Function | Starting Address Hi | Starting Address Lo | No of Register&nbsp; Hi | No of Register Lo |
|:---------|:--------------------|:--------------------|:------------------------|:------------------|
|     0x03 |                0x00 |                0x6b |                    0x00 |              0x03 |  
- starting Address : 108(0x006b)
- No of Register : 3(0x0003)
###### Response (PDU)
| Function | Starting Address Hi | Starting Address Lo | No of Register&nbsp; Hi | No of Register Lo |
|:---------|:--------------------|:--------------------|:------------------------|:------------------|
|     0x03 |                0x00 |                0x6b |                    0x00 |              0x03 |  

#### 4.3 Write Mulitple registers (0x10)
이 기능 코드는 원격 장치에 연속 레지스터 블록(1~123개 레지스터)을 쓰는 데 사용됩니다.
요청된 기록 값은 요청 데이터 필드에 지정됩니다. 데이터는 레지스터 당 2바이트로 압축됩니다.
정상적인 응답은 기능 코드, 시작 주소 및 기록된 레지스터의 수량을 반환합니다.
###### Request (PDU)  
|   Function Code                |     1 Byte   |                 0x10 |
|:-------------------------------|:-------------|:---------------------|
|   Starting Address             |     2 byte   |   0x0000 to 0xFFFF   |
|   Quantity of Register&nbsp;   |     2 Byte   |       0x0000 to 007B |
| Byte Count                     |       1 Byte |               2 x N* |
| Registers Value                | N* x 2 Bytes | value                |  
###### Request (PDU)
| Function code         | 1 Bytes |             0x10 |
|:----------------------|:--------|:-----------------|
| Starting Address      | 2 Bytes | 0x0000 to 0xFFFF |
| Quantity of Registers | 2 bytes |   1 to 123(0x7B) |  
###### Error (PDU)
| Error code    | 1 Byte |                 0x90 |
|:--------------|:-------|:---------------------|
| Exception code | 1 Byte | 01 or 02 or 03 or 04 |  

다음은 시작 Register가 2번이고 0x000A 와 0x0101을 쓸 경우 입니다.
###### Request  
| Function | Starting Address Hi | Starting Address Lo | Quantity of Registers Hi | Quantity of Registers Lo | Byte Count | Registers Value Hi | Regitsters Value Hi | Registers Value Hi | Registers Value Lo |
|:---------|:--------------------|:--------------------|:-------------------------|:-------------------------|:-----------|:-------------------|:--------------------|:-------------------|:-------------------|
|     0x10 |                0x00 |                0x01 |                     0x00 |                     0x02 |       0x04 |               0x00 |                0x0A |               0x01 |               0x01 |  
###### Response
| Function | Starting Address Hi | Starting Address Lo | Quantity of Registers Hi | Quantity of Registers Lo |
|:---------|:--------------------|:--------------------|:-------------------------|:-------------------------|
|     0x10 |                0x00 |                0x01 |                     0x00 |                     0x02 |  
/////
#### 4.4 Exception Code
클라이언트 장치가 서버 장치에 요청을 보낼 때 정상적인 응답을 기대합니다.
클라이언트의 쿼리에서 네 가지 가능한 이벤트 중 하나가 발생할 수 있습니다.
- 서버 장치가 통신 오류 없이 요청을 수신하고 쿼리를 정상적으로 처리할 수 있으면 정상적인 응답을 반환합니다.
- 통신 오류로 인해 서버가 요청을 받지 못한 경우 응답이 반환되지 않습니다. 클라이언트 프로그램은 결국 요청에 대한 시간 초과 조건을 처리합니다.
- 서버가 요청을 받았지만 통신 오류(패리티, LRC, CRC 등)를 감지하면 응답이 반환되지 않습니다. 클라이언트 프로그램은 결국 요청에 대한 시간 초과 조건을 처리합니다.
- 서버가 통신 오류 없이 요청을 받았으나 처리할 수 없는 경우
  (예를 들어 요청이 존재하지 않는 출력이나 레지스터를 읽는 것인 경우) <font color="#ff0000">서버는 클라이언트에 오류의 성격을 알리는 예외 응답을 반환합니다.</font>

Exception 응답 메세지에는 정상적인 응답과 구별되는 두 가지 필드가 있습니다.
 -  **Function code** : 정상 응답에서는 Fucntion Code 를 Request 의 Function code를 그대로 표시합니다., 그러나 Exception Code에서는 Request 의 Function Code에 0x80을 더하여 반환합니다.
 - **Data Field** : 정상적인 응답에서 서버는 데이터 필드에 데이터를 반환할 수 있습니다. Exception 응답에서 서버는 데이터 필드에 Exception code를 반환합니다.

아래는 Exception code를 표로 정리한것입니다.

| Code | Name                 | Meaning                                      |
|:-----|:---------------------|:---------------------------------------------|
| 0X01 | ILLEGAL FUNCTION     | 지원하지 않는 Function에 대해서 요구가 있을 경우              |
| 0X02 | ILLEGA DATA ADDRESS  | 사용하지 않는 Address의 Data를 요구하거나 수정하려는 경우        |
| 0X03 | ILLEDGA DATA VALUE   | Data 수정을 할 때 Data 허용 범위 밖에 값으로 수정하려는 경우      |
| 0X04 | SLAVE DEVICE FAILURE | Server가 요청된 작업을 수행하는 동안 복구할 수 없는 오류가 발생했을 경우 |
| 0X06 | SLAVE DEVICE BUSY    | Server가 다른 처리 중이어서 응답을 할 수 없을 때              |  
 

### 제한 사항
Modbus는 1970년대 후반에 PLC와 통신하도로기 설계되어서 데이터 유형의 수는 당시 PLC에서 해석 가능한 유형으로 제한한다.  

### Function code  
Modbus의 Fucntion code는 3가지의 번주가 있습니다.
 - Public Function Codes :  사용자 정의 코드를 제외한 1부터 127까지,  Modbus.org 커뮤니티에서 검증되었으며 공개적으로 문서화되고 고유성이 보장됩니다.
 - User-Define Function Codes : 65~72, 100~110의 두 가지 범위로 제공됩니다.
 - Reserved Function codes : 일부 회사에서 레거시 제품에 사용하며 공개적으로 사용할 수 없습니다.
 일반적으로 사용되는 기능 코드의 예가 아래의 표에 나왕있습니다.
 
### Illigal code

### Modbus Frame Structure // 프레임 구조
Modbus 프로토콜은 기본 통신 계층과 독립적인 PDU(프로토콜 데이터 단위)를 정의합니다. 사용되는 버스나 네트워크 유형에 따라 ADU(Application Data Unit)에 추가 필드가 도입될 수 있습니다.  
  

Error Code
서버가 클라이언트에 응답할 때 함수 코드 필드를 사용하여 정상적인(오류 없는) 응답이나 예외 응답이라고 하는 일종의 오류가 발생했음을 나타냅니다. 정상적인 응답의 경우 서버는 원래 함수 코드를 에코하고 요청된 데이터를 반환합니다.
