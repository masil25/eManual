
# 1 Total Manager 시작하기
mightyZAP Total Manager는 다양한 운영체제에서 mightyZAP Actuator를 쉽게 관리 및 제어할 수 있는 Software입니다.
Total Manager에서는 다양한 OS를 제공하고, 사용자 인터페이스를 개선하고 신규 mightyZAP 모델을 추가로 지원하는 신규mightyZAP Manager 입니다.

이 가이드에서는 Total Manager의 설치와 각 기능의 사용법에 대한 기본 사항을 다룹니다. 

## 1.1 개요
mightyZAP Total Manager는 다양한 기능을 가진 다목적 Software입니다. mightyZAP의 동작 Test와 Parameter 설정 및 동작 상태 Monitoring과 Firmware Update를 기본적으로 제공합니다.  
또한 모델에 따른 특수 기능을 설정 및 테스트 할 수도 있습니다. 
> [!tip] TIP  
> 특수 기능 설정 및 테스트 내용은 각 모델의 매뉴얼을 참조하시기 바랍니다.

![[total_image.png|500]]

## 1.2 사용 환경
mightyZAP은 Half Duplex TTL, RS485, CAN 통신을 사용합니다. PC와의 통신을 위한 Converter를 사용해야 mightyZAP과의 통신이 가능합니다.  
mightyZAP을 위한 USB Interface Board를 당사의 웹사이트에서 판매하고 있습니다. 해당  Interface Board를 사용할 경우 손쉽게 mightyZAP을 PC와 연결할 수 있습니다.  
시중의 Convertor를 구매하여 사용하실 수 있지만, 안전성을 위하여 가급적 당사의 Interface Board를 사용하여 주시기 바랍니다.

> [!warning] 주의 사항  
> PC와 Interface Board 연결에 충전 전용 Cable을 사용하여 통신이 연결되지 않는 경우가 있습니다. 반드시 Data통신이 가능한 Cable인지 확인하시고 사용하여 주시기 바랍니다.

## 1.3 Feature
### 1.3.1 Information
mightyZAP의 Model 명, Stroke, Rate Load, Firmware Version 등 Actuator와 관련된 기본 정보를 표시합니다. Software를 실행하였을 경우 제일 처음에 나타나는 화면입니다.  
![[Information_tag.png|700]]
### 1.3.2 Parameter
mightyZAP을  제어하거나 Parameter를 변경 및 Monitoring을 할 수 있습니다.   
연결된 여러 개의 mightyZAP 중 선택하여 하나의 mightyZAP을 제어할 수 있으며, Parameter의 Type에 따라 Non-voltatile Memory와 Volatile Memoty 화면으로 나누어져 있습니다.    
사용 모델에 따라 Parameter의 구성이 달라지며, 화면의 크기에 따라 화면 구성이 변하게 됩니다.  
![[Parameter.png|700]]

### 1.3.3 update
mightyZAP의 Firmware를 Update할 때 사용합니다. 당사의 Webpage에서 해당 모델에 맞는 업데이트 파일을 다운로드 받으신 후 업데이트를 진행 하실 수 있습니다.  
또한, Update Fail 및 사용자의 실수로 인해 서보모터가 검색이 되지 않을 경우 Firmware를 검사 및 복구 하실 수도 있습니다.  
![[update-veiw.png|700]]
# 2 Total Manager 다운로드 및 설치
Total Manager는 Window , Mac OS, Linux 에서 모두 설치가 가능합니다.
## 2.1 요구 사항
- Windows : windows 7(32bit) / windows 10 64bit 이상
- Mac OS : Big Sur 이상 64bit
- Linux : Ubuntu LTD 20.04 64bit
> [!tip] TIP  
> [mightyZAP Total Manager Download](https://github.com/mightyZap1/totalmanager/releases) 페이지에서 각 OS에 맞게 다운로드 하실 수 있습니다.

## 2.2 Install
### 2.2.1 Windows
Windows 컴퓨터에서 mightyZAP Total Manager를 설치하려면 사용 중인 Windows의 OS 버전을 확인하신 후 버전에 맞게 다운로드하여 주시기 바랍니다.   
- 32bit windows : mightyZAPTotalManagerx.y.z_ia32.exe (추후 32bit지원 종료)
- 64bit windows : mightyZAPTotalManagerx.y.z_x64.exe  

**Windosw Version 확인 방법**
- windows  7 : 제어판 -> 시스템 확인
- windows 10 이상 : 설정 -> 시스템 -> 정보
<font color="#4f81bd">OS Version 확인 방법</font>
![[windows_version_check.jpg|700]]

다운로드한 파일을 실행하여, 설치 가이드의 지침에 따라 설치하시면 됩니다.  
설치에는 몇 분 정도 걸릴 수 있습니다.
![[window_install.jpg|700]]
이제 Window에서 mightyZAP Total Manager를 사용하실 수 있습니다.  

### 2.2.2 Linux
Linux 전용 패키지를 다운로드 합니다.
Debian/Ubuntu 기반 배포용 Total Manager를 설치하기 위해서는 다음과 같은 Command Line을 통해 .deb 패키지(64bit)를 다운로드하고 설치하는 것입니다.
```
$ sudo dpkg -i [file].deb
```
### 2.2.3 Mac OS
Mac OS 전용 패키지를 다운로드 합니다.
다운로드 파일을 더블 클릭하면 아래와 같이 설치 화면이 나타납니다. mightyZAP Total Manager 아이콘을 드래그 하여 Applications에 놓으면 설치가 완료됩니다. 

![[macOS_install.png|500]]
## 2.3 화면 구성
화면 구성은 크게 4가지로  Header 부분과 Side bar, Contents, Footer로 구성되어있다.  
![[mainView-description.png|700]]
<font color="#4f81bd">1. Main Toolbar  </font>  
mightyZAP의 Reset, Restart, Data Undo/Redo 등을 수행  
<font color="#4f81bd">2. SCAN  </font>  
 Software의 통신을 연결하고 mightyZA P 검색  
<font color="#4f81bd">3. Main Menu</font>  
Information, control, Update, Manager Setting 등 Manager에서 제공하는 기능 선택 Side bar Menu  
<font color="#4f81bd">4. Actuator List</font>  
검색된 mightyZAP의 이름이 통신 속도와 Protocol에 따라 분류되어 표시  
<font color="#4f81bd">5. Main contents</font>  
매니저에 제공하는 Main 기능 표시  
<font color="#4f81bd">6. Actuator Information</font>  
선택된 Actuator의 모델명, Firmware Version, 통신 방식 등이 표기    
<font color="#4f81bd">7. 통신 상태</font>  
통신 Protocol 및 송수신 Error 등 통신 상태 표시  
<font color="#4f81bd">8. Manager Status</font>    
Manager 의 버전 및 Language 등 표시  
## 2.4 USB Interface Board 
mightyZAP Total Manager와 mightyZAP의 통신을 위하여 Serial Convertor 가 필요합니다.  
해당 설명은 당사의 USB Interface Board를 기준으로 설명이 되어있습니다.  
먼저 USB Cable을 이용하여 PC와 연결하여 주시기 바랍니다.   
> [!warning] 주의사항     
> 충전 전용 케이블이 아닌 통신이 가능한 케이블을 사용하여 주셔야합니다.

### 2.4.1 Windows
당사의 Interface Board 는 2가지 Type으로 되어있으며, 각 버전에 따라 드라이버를 다르게 설치해야 합니다. 아래의 설명을 참조하여 드라이버를 설치 합니다.

- **IR-USB02 Driver 설치** (CH340x)
	아래의 링크에서 IR-USB03의 Driver를 다운로드 합니다.
	-  [Driver Link](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)  
	다운로드 받은 파일을 실행한 후 INSTALL 버튼을 클릭하여 드라이버를 설치합니다
	![[ch340x_win_install.jpg]]
- **IR-USB03 Driver 설치**  
	아래의 링크에서 IR-USB03의 Driver를 다운로드 합니다.  
	-  [Driver Link](https://ftdichip.com/wp-content/uploads/2021/08/CDM212364_Setup.zip)  
	다운로드 받은 파일을 실행하여 드라이버를 설치합니다.  
	![[ftdi_win_install.png|650]]

- **Interface Board 연결 확인**  
  USB Interface Board를 PC와 연결합니다.  
  [시스템]-[장치관리자]-[port]에서 Serial Port가 정상적으로 연결되었는지 확인합니다. 
  정장적으로 연결되어 있을 경우 이미지에서와 같이 새로운 com port가 추가된것을 확인할 수 있습니다.  
  ![[serialPort_check_win.jpg]]
### 2.4.2 Linux[ubuntu/Demian]
1) CH341 Driver   
   CH341 driver는 USB-02 Model에서 만 사용됩니다.   
   CH340, CH341 의 시리얼 드라이버는 Linux 커널 버전 2.6.24부터 내장되어 있으며, 해당 위치는 drivers/usb/serial/ch341.c입니다.  
   다만 드라이버를 최신 상태로 유지 하기 원하실 경우 아래의 방법을 사용하기 바랍니다.
 - 아래의 사이트에서 Linux용 드라이버를 다운로드 받으시기 바랍니다.  
   [LINUX용 CH341 Driver Donwload(ZIP)](https://www.wch.cn/downloads/CH341SER_LINUX_ZIP.html)  
 - 다운로드한 파일의 압축을 풉니다.
 - 터미널 창을 열고 다운로드한 디렉토리로 이동을 합니다.
 - 다음의 명령들을 입력합니다
```bash
$ make clean  
$ make  
$ sudo make load    
```
 - 설치된 드라이버를 확인하기 위해 USB-02를 PC와 연결한 후 다음의 명령을 입력합니다.  
   정상적으로 설치가 되었다면 "ch34x"로 표시되어야 합니다.
```bash
$ sudo dmesg | grep ch34    
[   xxx] usbcore: registered new interface driver ch341  
[   xxx] usbserial: USB Serial support registered for ch341-uart  
[   xxx] ch341 1-6.4.3:1.0: ch341-uart converter detected  
[   xxx] usb 1-6.4.3: ch341-uart converter now attached to ttyUSB1  
```
2) FTDI Driver
FTDI Driver는 USB-02를 제외한 모든 모델에서 사용됩니다.  
FTDI VCP 드라이버는 Linux  커널에 내장되어 있습니다. 모든 FTDI 장치에 VCP 드라이버 지원이 있는지 확인하기 위해 FTDI는 Linux  시스템에 최신 커널 릴리즈를 설치할 것을 권장합니다. Linux 에서는 VCP 드라이버가 "/dev/ttyUSBx" 로 표시됩니다.  
Comport를 확인하는 방법 :  
- USB Interface board를 PC와 Cable로 연결한다.
- 터미널 창을 열고 다음을 입력하면 다음과 같이 출력이 나타납니다.
```bash
$ dmesg|grep FTDI  
[   xxx] USB Serial support registered for FTDI USB Serial Device  
[   xxx] ftdi_sio 9-1:1.0: FTDI USB Serial Device converter detected  
[   xxx] usb 9-1: FTDI USB Serial Device converter now attached to ttyUSB0  
[   xxx] ftdi_sio: v1.6.0:USB FTDI Serial Converters Driver  
```

**Serial Port 권한 얻기**  
우분투는 기본적으로  root 사용자가 아닌 일반 사용자로 로그인하도록 하기 때문에 Serial Port와 같은 시스템 장치를 다루기 위해서는 권한 설정을 해야 합니다.   
먼저 연결된 Port 명을 확인하기 위해 아래의 명령을 입력합니다.
```
$ dmesg|grep tty  
[   xxx] printk: console [tty0] enabled  
[   xxx] usb 1-6.1.4: FTDI USB Serial Device converter now attached to ttyUSB0  
[   xxx] ftdi_sio ttyUSB0: FTDI USB Serial Device converter now disconnected from ttyUSB0  
[   xxx] usb 1-6.1.4: FTDI USB Serial Device converter now attached to ttyUSB0  
```


"ls -l" 명령을 이용하여 확인된 Serial Port를 이용하여 사용 그룹을 확인합니다.
```bash
$ ls -l /dev/ttyUSB0  
crw-rw---- 1 root dialout 188,  0 11월  1 10:49 /dev/ttyUSB0  
```

"id -Gn" 명령을 통해 현재 로그인 중인 사용자가 속한 그룹을 확인합니다.
```baSH
$ id -Gn  
user adm cdrom sudo dip plugdev  
```

현재 로그인한 사용자에서 dialout 그룹이 포함되어 있지 않기 때문에, 현재 사용자에게 dialout 그룹을 추가해 줍니다.
```bash
$ sudo adduser $USER dialout
[sudo] password for user.
Adding user 'user' to group 'dialout' ...
Adding user user to group dialout
Done
```

그룹에 추가 한 후에는 반드시 로그아웃 후 로그인 해야 변경 사항이 적용 됩니다.
### 2.4.3 Mac OS
#### 2.4.3.1 USB 02(CH34x Driver)
USB Interface Board Driver를 다운로드 합니다.  
	- https://www.wch.cn/download/CH341SER_ZIP.html  
다운로드한 파일을 실행하고, 다운로드한 파일 중 <font color="#4f81bd">"CH34X_DRV_INSTRUCTIONS.pdf"</font> 파일의 가이드에 따라 드라이버를 설치합니다.  
OS X 11.0 이상을 사용하고 OS가 Rosetta를 지원하지 않는 경우 dmg 형식 드라이버를 설치해야 합니다(4단계 수행). 그렇지 않으면 pkg 형식 드라이버를 설치해야 합니다. 기본적으로(3단계를 따르세요).  
**Step 1. Install pkg format Driver**  
![[CH34x_install.png|600]]  
![[CH34x_Install success.png|600]]  
  
OS X 11.0 이상에 pkg 형식 드라이버를 설치할 때 다음을 수행해야 합니다. 

**Step 2. Install CH32xVCPDriver Application**  
"LaunchPad"를 열고 "CH34xVCPDriver" 애플리케이션을 찾아 앱을 열고 "Install" 버튼을 Click 합니다.  
![[ch34x_app.png|600]]  
OS X 10.9~OS X 10.15를 사용하는 경우 "다시 시작"을 클릭하여 컴퓨터를 다시 시작해야 합니다.
다시 시작한 후 <font color="#4f81bd"><b>Step 4</b></font> 단계를 수행하십시오.

**Step 3. OS X 11.0 이상을 사용하고 OS가 Rosetta를 지원하지 않는 경우**  
	dmg 형식 드라이버를 설치할 때 dmg 파일을 클릭하고 Drag해야 합니다.
	OS의 응용 프로그램 폴더에 "CH34xVCPDriver"를 넣은 다음 "LaunchPad"를 열고 찾습니다.
	“CH34xVCPDriver” 애플리케이션을 실행하고 앱을 열고 “설치” 버튼을 클릭하세요.  
![[ch34x_app.png|600]]    

**Step 4. Driver  설치 확인**  
USB-02을 USB 포트에 연결하고 [System Report]->[Hardware]->[USB]을 선택하면, 오른쪽은 “USB Device Tree”에서 연결한 장치를 찾을 수 있습니다.  
USB 장치가 제대로 작동하는 경우 "Vendor ID"가 [0x1a86]으로 나타납니다.
![[Software/Total Manager/img/ch34x_confirm_Driver.png|600]]  
**Step 5. Comport 확인**  
응용 프로그램-유틸리티 폴더에서 "터미널" 프로그램을 열고 다음 명령을 입력하세요.  
~~~
$ ls /dev/tty*
tty.wchusbserial121311
~~~
  "tty.wchusbserialx"가 표시되어야 합니다. 여기서 "x"는 Windows COM 포트 할당과 유사하게 할당된 장치 번호입니다.
>[!note] Note
>추가적인 내용은 다운로드한 파일 중 <font color="#4f81bd">"CH34X_DRV_INSTRUCTIONS.pdf"</font> 을 참조하여 주시기 바랍니다.  
#### 2.4.3.2 USB 03(FTDI Driver)
해당 Driver 설치 설명은 해당 Driver 설치 설명은 Mac OS X10.15 and macOS 11/12을 기준으로 설명을 드립니다.  그 이전 OS X 버전의 경우 FTDI 사의 2016년  "Mac OS X Installation Guide"을 참조하여 주시기 바랍니다.

USB Interface Board Driver를 다운로드 합니다.  
- https://ftdichip.com/drivers/vcp-drivers/  

**Step 1. Application folder에 설치 하기**  
다운로드 받은 "FTDIUSBSerialDextInstaller_x_y_z.app" 파일을 Application 폴더로 옮깁니다.  
![[FTDI_driver_file.png|500]]
**Step 2. FTDI USB Serial Dext VCP Install**  
FTDIUSBSerialDextInstaller_x_y_z 실행 시킨 후 아래와 같이 Install 버튼을 클릭합니다.  
![[FTDI_install.png|600]]    
만약 아래와 같이, "System Extention blocked" 메세지가 나왔을 경우 "Open System Settings" 버튼을 클릭하여 시스템 창을 엽니다.   
[Privacy & Security] 항목에서  "FTDIUSBSerialDextInstall_x_y_z.app"을 허용 버튼을 눌러 설치를 지속합니다.  
![[Allow_FTDI_Driver.png|700]]

설치가 완료되면 아래와 같이 표시가 됩니다.
![[FTDI Succeeded Install.png|500]]  
**Step 3. Driver  설치 확인**   
USB-03을 USB 포트에 연결하고 [System Report]->[Hardware]->[USB]을 선택하면, 오른쪽은 “USB Device Tree”에서 연결한 장치를 찾을 수 있습니다.  
USB 장치가 제대로 작동하는 경우 아래의 그림과 같이 Model 명이 나타납니다.
![[Software/Total Manager/img/ch34x_confirm_Driver.png|700]]
**Step 4. Comport 확인**  
[Application]-[Utility] 폴더에서 "터미널" 프로그램을 열고 다음 명령을 입력하세요.  
~~~
$ ls /dev/tty*
tty.usbserial-x
~~~
  "tty.usbserial-x"가 표시되어야 합니다. 여기서 "x"는 Windows COM 포트 할당과 유사하게 할당된 장치 번호입니다.
# 3 Total Manager Description
## 3.1 통신 연결 및 검색
아래의 이미지와 같이 프로그램을 실행 한 후 상단 매뉴바에서 Scan 버튼을 누르면 Actuator Scan을 위한 팝업 창이 활성화 됩니다.   
![[ConnectAndSCAN.png|700]]

### 3.1.1 SCAN 화면 구성
Actuaotor Scan 팝업 창의 화면 구성은 아래와 같습니다.  
![[ScanActuator-Desc.png|600]]
- **Serial Port**  : USB Interface Board의 Serial Port
- **Protocol** : 통신 프로토콜 설정, Actutator Model에 따라 다르며 Scan시 중복 선택 가능
- **Baudrate Select** :  통신 속도 설정 (default 57600bps) Scan시 중복 선택 가능
- **Scan 결과 창** : SCAN 진행 상황과 결과를 출력한다.
- **SCAN, CLOSE** : SCAN 실행 및 창 닫기 버튼
### 3.1.2 통신 설정
**1. Port 선택**  
위 [[#2.4 USB Interface Board]] 의 설명을 참조하시어 Serial Port 명을 확인 하신 후 진행하시기 바랍니다.  연결된 Serial Port와 동일한 Port를 선택한 후 OPEN 버튼을 클릭하여 Serial Port를 연결합니다.  
![[ScanActuator-PortSelect.png|700]]
Serial Port 를 Open하면 Option 항목이 활성화 됩니다.  
모든 옵션은 중복으로 선택할 수 있으며 검색 시 순차적으로 진행이 됩니다.  
All 버튼을 누르게 되면 모든 선택하거나 모두 선택 해지를 하게 됩니다.
   ![[yrdy-2023-07-25_10.39.gif]]
  
다음은 모델에 따른 기본 설정 값에 대한 예시 입니다.   

|   예시 모델         |   Protocol(dafault)                 |   Baudrate (dafault)          |
|:------------------|:----------------------------|:---------------------|
|   **Mini L12/12Lf**   | Own Protocol                |             57600pbs |
|   **Mini 17Lf**       | Modbus Protocol             |             57600pbs |  

### 3.1.3 Actuator 검색
 SCAN 버튼을 누르게 되면 선택한 옵션에 따라 차례로 검색을 시작하여 해당 결과를 표시합니다.
 원하는 Actuator 가 모두 검색 되었을 경우, 완료를 기다리지 않고 STOP 버튼을 click하면 검색을 종료하면 됩니다.  
 ![[SCAN_Desc.png|700]]
 검색이 완료되었으면 Close 버튼을 click하여 Popup 창을 닫습니다.
## 3.2 Information
mightyZAP Actuator의 Model명, Rated Load, Stroke, firmware Version등 관련된 정보를 표시하는 페이지 입니다.  
Manager가 실행이 되면 처음 표시하는 창이  창이며, 아래의 이미지와 같이 사이드 바 메뉴의 첫번째 아이콘을 클릭하여 해당 페이지로 이동합니다. 
![[InformationMenu.png|700]]
### 3.2.1 서보모터 List 확인
아래의 그림과 같이 매니저에 왼쪽에는 검색된 서보모터가 Display 됩니다.  
Actuator List는 Baudrate와 Protocol에 따라 분류되어 표시 되며,  Baudrate 별로 접거나 펼 수 습니다
![[ActuatorList.png|700]]

### 3.2.2 정보 확인
Actuator List를 선택하면 해당 Actuator의 모델 명, Stroke 길이, 정격 부하, 통신 Protocol 등의 정보가 표시됩니다. 
![[Actuator_Information.png|700]]
이중 중요한 일부 정보가 Manager의 하단 Footer에 표시됩니다.
![[FooterDiscription.png]]
Footer에 표시된 정보는 information Page가 아닌 다른 Page에서도 볼 수 있습니다. 
## 3.3 Parameter
mightyZAP Actuator를 설정 및 간단한 동작 테스트를 하고, 동작 상태를 Monitoring하는 페이지 입니다.  
Menu 선택 창에서 아래의 그림과 같은 아이콘을 클릭하면 해당 페이지로 이동합니다.  
![[Parameter.png|700]]
사용자 환경에 맞게 Stroke, ID, Baudrate 등을 설정하고 간단한 동작 테스트를 진행할 수 있습니다.  
각 Parameter에 대한 설명은 해당 모델의 사용자 매뉴얼에서 Parameter 설명을 참조하시기 바랍니다.  

### 3.3.1 화면 구성
Parameter 페이지의 구성은 Non-Volatile Memory 영역과 Volatile Memory 영역으로 나뉩니다.
Non-volatile Meomory는 비 휘발성 메모리 영역의 Parameter로 수정 및 저장된 Data가 내부 Falsh Memeory에 저장이 되며, 모터의 전원이 꺼지게 되어도 지워지지 않고 저장되어있습니다.  
Volatile Memory는 휘발성 메모리 영역으로 내부 Ram에 저장이 되며, 전원이 꺼지기 전까지는 해당 Data를 저장하고 있지만, 전원이 꺼지게 되면 해당 Data는 초기화 됩니다.  
Parameter 영역은 매니저의 크기를 줄일 경우, 주로 사용되어지는 Volatile-Memeory 영역이 상단으로 이동합니다.   
![[DynamicSize.png|700]]

**Tooltip 기능**
각 Paremater 이름의 옆에는 <span style="aline-text:center;display:inline-block;background-color:black; color:white;width:20px;border-radius:5px;">?</span>를 한 아이콘이 있습니다. 해당 아이콘에  mouse를 가져가 대면 해당 Paremater에 대한 간단한 설명이 표시됩니다.  
![[tooltip.png|500]]
### 3.3.2 Parameter Control
- **Slide Control** : <font color="#4f81bd">Non-volatile Memory</font>  
  Non-Volatile Memeory의 가장 일반적인 Data 변경 방식으로 Slide bar의 Drag 또는 TextBox에 직접 Data를 입력하는 방법으로 Data를 변경 합니다.   
  ![[SlidebarVolatile.png|500]]
  값을 변경할 경우 오른쪽의 TextBox의 값이 푸른색으로 변경되며, 변경한 data를 저장하기 위해서는 S  버튼을 클릭해야 합니다.   
  ![[SlidebarActive.png|600]]
  S 버튼을 클릭하지 않고 다른 Parameter를 변경하려 할 경우 Data는 원래 상태로 복구 되며 TextBox의 font가 다시 흰색으로 변경됩니다.  
  
- **Slide Control** : <font color="#4f81bd">Volatile Memory</font>  
  Volatile Memory에서의 Slide Control 방식은 Non-Volatile Memory 방식과 유사하지만, S 버튼이 없으며, Slide bar를 Drag할 경우 변경된 Data가 즉시 적용됩니다.  
  ![[Slide_volatile_desc.png|400]]  
  또한 TextBox를 통해 Data를 입력할 경우 Data를 변경한 후 Enter key를 입력하면 변경된 Data가 즉시 적용됩니다.
  또한 Data가 변경되도 TextBoxd의 Font는 푸른색으로 변경되지 않습니다.
  ![[SlideVolatile_active.png|400]]  
  > [!tip] Tip  
  > Goal Position TextBox를 클릭한 후 다음과 같이 키보드 키로 제어가 가능합니다.  
  > 	'a' : 최소 stroke로 이동  
  > 	's' : stroke 중간 위치로 이동  
  > 	'd' : 최대 Stroke로 이동    
- **Check Control Box** : <font color="#4f81bd">Non-volatile Memory</font>   
  Check Control은 check 기능을 이용하여 Data를 변경 가능하며, 이때 Textbox는 Read Only 상태로 Data값과 상태만을 확인할 수 있습니다.  
  ![[checkbox-Volatile.png|600]]
  checkbox는 모두 선택, 모두 해제, 부분 선택 모두 가능하며,선택 값이 변경되었을 경우 TestBox의 font가 푸른색으로 변경됩니다.  
  수정한 값을 적용하기 위해서는 S 버튼을 눌러 수정된 값을 저장해야 합니다.  
  버튼을 클릭하지 않고 다른 Parameter를 변경하려 할 경우 Data는 원래 상태로 복구 되며 TextBox의 font가 다시 흰색으로 변경됩니다.   
- **Select Control box** : <font color="#4f81bd">Non-volatile Memory</font>   
   Select Control box는 Select 기능을 이용하여 Data를 변경 가능하며, 이때 Textbox는 Read Only 상태로 Data값과 상태만을 확인할 수 있습니다.
  select 값이 변경되었을 경우 TestBox의 font가 푸른색으로 변경되며, 
  수정한 값을 적용하기 위해서는 S 버튼을 눌러 수정된 값을 저장해야 합니다.
  ![[SelectBox-NonVolatile-Disc.png|700]]  
  버튼을 클릭하지 않고 다른 Parameter를 변경하려 할 경우 Data는 원래 상태로 복구 되며 TextBox의 font가 다시 흰색으로 변경됩니다.  
- **Select Control box** : <font color="#4f81bd">Volatile Memory</font>   
  Volatile Memory 의 Select Control Box에는 TextBox가 존재하지 않습니다.
  Select 기능을 이용하여 선택된 Data를 즉시 적용합니다.  
  ![[Selectbox-Volatile.png]] 
- **Button Control Box** : <font color="#4f81bd">Volatile Memory</font>   
   Button control Box 기능은 Volatilte Memory에 만 있는 기능으로 Motor의 동작을 정지하기 위해 사용됩니다.
   아래의 그림과 같이 Button은 활성화 비활성화에 따라 2가지의 이미지를 가지고 있으며, 해당 Parameter에 대한 자세한 설명은 해당 제품의 사용자 메뉴얼을 참조하여 주시기 바랍니다.
   ![[Button-Volatile.png|700]]
### 3.3.3 Monitoring
Monitoring 기능은 mightyZAP Actuator의 현재 위치, 모터 입력 값, 전류 등을 실시간으로 확인하는 기능을 가지고 있습니다.  
Parameter 항목은 Model에 따라 다르게 표시되며, Check box를 통해 하나의 Parameter만 선택하실 수 있습니다.  
![[Monitoring-Data.png|600]]
Monitoring 기능은 아래와 같이 구성 되어있습니다.
- **Data 범위**  
  Data 표현 범위는 선택된 Parameter의 표현 범위에 맞게 변경이 됩니다.
- **Sample 표현 갯 수**  
  최대 Display되는 Sample 갯 수는 200개이며 이전 Data는 확인할 수 없습니다. Sample Counter의 최대 표현 수는 899이며 이보다 클 경우 0으로 리셋이 됩니다.
- **Interval**    
  Interval은 Data Sample 당 읽어오는 시간 간격을 의미하며 약 50ms 간격으로 동작 합니다.     
- **Hover 기능**  
  마우스를 그래프 위에 놓으면 해당 위치의 데이터 값과 Sample Counter 값을 표기합니다.
## 3.4 Update    
펌웨어를 업데이트 하는 페이지 입니다.  Firmware의 버전은 최신 버전을 유지하는 것을 추천 드립니다. 다만 수정된 펌웨어를 적용하기 전에  변경 사항이 사용자의 Apllication과 적합한지 테스트 하신 후에 적용하시기 바랍니다.   
펌웨어 파일은 당사의 homepage에서 다운로드 받으시기 바랍니다.  
[Firmware Download](https://mightyzap.com/en/digitalarchive4/?category1=Firmware&mod=list&pageid=1)
### 3.4.1 화면 구성    
Update Page는 이미지와 같이 펌웨어 업데이트, Actuator Recovery 영역으로 되어있으며, 각각의 실행은 상단 header의 메뉴에서 해당 아이콘을 선택하여 실행할 수 있습니다.  
![[Software/Total Manager/img/Information_tag.png|700]]
### 3.4.2 Firmware Update   
**Actuator 연결**  
업데이트를 진행할 서보 모터를 연결하고 SCAN 을 합니다.  
> [!warning] 주의 사항  
> 펌웨어 업데이트 시에는 업데이트를 진행할 actuator 하나만 연결하고 SCAN 작업을 진행하여 Actuator List에 하나의 actuator만 남아 있어야 합니다.  하나 이상의 actuator 가 연결 된 상태에서 업데이트를 진행하면 업데이트가 비정상적으로 진행되어 실패하게 되고 해당  actuator 는 동작이 되지 않게 됩니다.  
  
**업데이트 파일 선택**  
firmware update를 진행 할 경우 그림과 같이 Select file 버튼을 눌러 다운로드 받은 업데이트 파일을 선택해야 합니다.    
![[UpdateSelect-Button.png|700]]
> [!warning] 주의 사항  
> 이때 다른 모델의 firmware file 을 선택하지 않게 조심해야 합니다. Actuator List에 나와있는 Model 명과 uipdate file의 이름이 동일한지 확인해야 합니다.

**업데이트** 
모든 사항이 준비가 다 되었으면 상단 메뉴바에서 Update 아이콘을 클릭합니다.   
![[Update-Button.png|700]]
이때 둘 이상의 actuator 가 연결되었을 경우 다음과 같은 경고창이 나타나고 SCAN  작업을 다시 합니다. 
![[OneServo-kor.png]]
 mightyZAP이 업데이트를 위해서 재 시작하는데 정상적으로 통신이 이루어지지 않는 경우 아래의 그림과 같이 커넥터를 다시 연결하라는 메세지가 나타납니다. 이때 mightyZAP에 연결된 커넥터를 빼신 후 다시 연결하시면 정상 적으로 업데이트가 진행 됩니다.  
![[Update-Reconnect.png|600]]

**업데이트 완료**
업데이트가 진행되면 그림과 같이 progress bar가 진행이 됩니다. 100%까지 완료되면 update 완료 메세지가 나타납니다.    
![[Update-Complete.png|700]]
필요에 따라 reset이나 Factory Reset을 추가적으로 진행하시면 됩니다.  
  
**펌웨어 업데이트 실패**  
업데이트가 실패 되었을 경우 아래의 이미지와 같이 Fail 문구가 나타납니다. 그럴 경우 먼저 업데이트를 다시 실행하여 주시기 바랍니다. 이 때 업데이트 파일이 업데이트 모델의 업데이트 파일인지 확인하신 후 실행하여 주시기 바랍니다.   
추가적인 업데이트 시도에도 업데이트 실패 시 아래의 Recovery를 실행하여 주시고 그래도 실패할 경우 당사에 문의를 주시기 바랍니다.  
### 3.4.3 Recovery  
Firmware 가 업데이트 실패 또는 SCAN을 통해 서보 모터를 검색하지 못할 경우 Recovery를 진행합니다. 문제가 발생한 Actuator 만을 연결한 후 상단 메뉴의 Recovery 아이콘을 클릭합니다.  
![[Recovery-Button.png|700]]
Recovery 진행 사항은 각 단계마다 이미지 또는  Text로 그 단계를 표시합니다.
![[Recovery-StateWindow.png|500]]
 - **Actuator Search**  
   검색 단계에서는 각 모든 Baudrate와 Protocol로 mightyZAP을 검색합니다. 이때 mightyZAP이 검색이 될 경우 Recovery를 완료하고 mightyZAP을 Servo List에 자동으로 추가합니다.  
   ![[REcovery-Complete.png|700]]

- **Restart**   
   검색이 되지 않았을 경우 아래의 팝업 창이 나타나면서 커넥터를 다시 연결하라는 문구가 나타납니다. Close 버튼을 누르면 업데이트 창에 "Reconnect Actuator" 문구가 나타납니다. 이때 서보모터의 연결된 커넥터를 제거 한 후 다시 연결하여 주시기 바랍니다.
  ![[Update-Reconnect2.png|700]]
- **Check Bootloader &Update Firmware**  
  커넥터를 다시 연결하면 Bootloader를 확인 한 후 복구할 Actuator의 Update 파일을 선택하라는 팝업 창이 나타납니다. Select 버튼을 누른 후 Update때와 같이 업데이트 파일을 선택하시면  업데이트가 진행이 됩니다.
  ![[Recovery-FileSelect.png|700]]
- **Calibration**  
  Recovery는 Update와는 다르게 Update 후 Calibration 작업을 진행합니다. Calibration 단계에서는 서보모터의 Stroke가 수축 및 확장 작업을 진행하며 완료 될 때 까지 기다리시면 됩니다.  
- **Done**
  완료가 되면 업데이트 완료 팝업이 나타나고, SCAN 창이 활성화 됩니다. 
  ![[UpdateComplete-SCAN.png]]

### 3.4.4 Reset
mightyZAP의 Parameter를 초기화하는 명령입니다. 이때 ID, Baudrate, Protocol 및 Calibration Parameter는 초기화 되지 않습니다.  
![[reset_selcect.png]]  
![[resetPopup.png|300]]
Reset 아이콘을 클릭하면 다음과 같은 Popup창이 나타납니다.  OK 버튼을 누르면 Parameter가 리셋이 되며 화면이 깜빡이며 Parameter 창으로 이동하며 Data를 다시 불러옵니다.  
![[resetAction.gif]]
### 3.4.5 Restart  
mightyZAP의 시스템을 재 시작 할 때 사용합니다. Overload Shutdown 초기화 또는 변경된 Non Volatile Parameter의 Data를 확인하기 위해 사용합니다.  
![[restartSelect.png]]  
해당 버튼을 누르면 화면이 한번 깜빡이고 Parameter창으로 이동하여 Data를 다시 읽어옵니다.
### 3.4.6 Factory Reset   
Actuator의  상태를 공장 출하 시의 초기 상태로 돌리고, 위치 값을 결정하는 Potentiometer의 Calibration을 진행합니다.  
> [!warning] 주의 사항   
> Factroy Reset 중에 Actuator가 Calibration을 위해 최대/최소로 위치이동을 합니다. 정상적인 Calibration을 위해 장치에 연결하지 않고 무부하에 최대 동작거리를 유지할 수 있는 공간에서 진행해 주시기 바랍니다.

Factory Reset은 Update Page에 들어오면 상단 메뉴바에 추가 되어있는 것을 확인할 수 있습니다.   
해당 아이콘을 클릭하면 Factory Reset 을 하기 위한 팝업 창이 활성화 됩니다.
![[FactoryReset-Button.png|700]]
**1. 화면 구성**  
Factory Reset을 선택하면 팝업 창이 나타납니다. 팝업창에는 Factory Reset 관련 Option 선택창과 Text Area가 나타나고 하단에 Factory Reset 을 위한 버튼이 존재합니다.  
![[FactoryReset-Disc..png|500]]
**2. Options**  
Factory Reset에 대한 Option은 2가지로 ID Remind와 Baudrate Remind 입니다. 그 외의 다른 Parameter들은 모두 초기화 됩니다.  
일반적인 Reset 에서는 초기화 되지 않는 Protocol, Min/Max Position Calibration이 초기화 되고, Potentiometer의 Calibration을 실행하면서 해당 내부 Parameter도 수정이 됩니다.  
Factopry Reset 후에도 유지하고 싶은 Option을 선택하시면 됩니다.  
**3. Factory Reset**  
하단의 Factory Reset 버튼을 클릭하면, Factory Reset을 실행합니다. 실행 중 진행되는 사항을 Option 선택 아래의 Text Area 창에 표시합니다.   
![[FactoryReset-Popup.png]]
Factory Reset 진행이 되면서 Actuator가 몇 번의 시스템 재 시작을 하면서 LED가 깜빡입니다. 또한 Potenmtiometer Calibration 시에는 Actuator가 최대로 확장 및 수축 행동을 하면서 Calibration 을 진행합니다.  
최종적으로 Factory Reset이 완료되면 하단의 Close 버튼이 활성화 되면서 Parameter 창으로 이동하여 reset된 Data를 보여줍니다.  
![[FActoryRest-Complete.png]]

> [!warning] 주의 사항   
> Calibration 을 하기 앞서, 정확한 Calibration 작업을 위해 Actuator 에 연결되어있는 모든 기구물을 제거하여, 무 부하 상태에서 Full Stroke 구간에 걸쳐 기구 간섭이 없도록 합니다.
