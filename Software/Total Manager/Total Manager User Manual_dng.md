
# 1 Getting Started - Total Manager 
The Total Manager is the new generation of dedicated software that allows users to easily manage and control mightyZAP Actuators.  The Total Manager supports various OSs such as Windows, Linux, and iOS, and has an improved user interface. In addition to the existing L12/D12/D7/12Lf series actuators, user is also able to manage the parameters of new 17Lf series. 
This manual covers the basics of installing Total Manager and using each function.

## 1.1 Introduction
mightyZAP Total Manager is a multi-purpose software with various functions like motion test, parameter settings, parameter monitoring, and firmware updates. User is also able to set up and test special features depending on their actuator model.

>Please refer to the manual of each model for special function settings and test details.

![[total_image.png|500]]

## 1.2 Environment
mightyZAP uses Half Duplex TTL, RS485, and CAN communications depending on the communication version. Users need to use some sort of signal converter for communication between PC and mightyZAP.
The USB Interface Board for mightyZAP (IR-USBXX) can be purchased from our e-shop for easier PC connection. 
User is also able to use the 3rd party converter, but for convenience & safety reasons, it is recommended to use our Interface Board .

> <font color="#ff0000">⚠️ 주의 사항</font><br
>  - Make sure to use "data transferable" USB cable between PC and USB converter.    
>     Charging only cable does not support data communication.  
> -  Make sure proper wiring when using 3rd party converter. 

## 1.3 Feature
### 1.3.1 Information
Displays basic information related to the connected actuator, such as model name, stroke length, rate load, and firmware version. This is the first screen that appears when user runs the software.  ==(아래 그림이 깨짐)==
![[Software/Total Manager/img/Information.png|700]]

### 1.3.2 Parameter
In the Parameter section, user is able to do aMotion test, changing parameters, and monitoring parameter.
User can select and control only single mightyZAP even if multiple actuators are connected, and the screen is divided into Non-voltatile Memory and Volatile Memoty screens depending on the type of parameter. For detailed explanations of each parameter, please refer to the user manual of each actuator series,  - [[Actuator/Mini 17Lf/Manual/mightyZAP 17Lf User Manual_eng#2. Control Table]] - for the 17Lf series. The parameter configuration varies depending on the connected actuator series and model, and the screen configuration changes depending on the screen size. 
![[control-view.png|700]]

### 1.3.3 Update
It is for the future firmware update. Generally, the latest firmware is applied from the factory, but in very rare cases, a firmware update may be required for products stored by the resellers. If necessory, user can proceed with the update after downloading the update file for user's model from our website.
Additionally, in this update menu, if the servo motor is not searched due to update failure or user error, user is able to restore the firmware.  ==(아래 그림이 깨짐)==
![[update-view.png|700]]

# 2 Total Manager Download & Installation
Total Manager is compatible with Windows, Mac OS, and Linux.
## 2.1 OS Requirement
- Windows : ==Windows 7==(32bit) / Windows 10 64bit ==이상==
- Mac OS : Big Sur ==이상== 64bit
- Linux : Ubuntu LTD 20.04 ==64bit==          
>Please download proper installation file for each OS at [mightyZAP Total Manager Download](https://github.com/mightyZap1/totalmanager/releases) 

## 2.2 Installation
### 2.2.1 Windows
To install Total Manager software on a Windows PC, please check the OS version of Windows and download the appropriate version. 
- ==32bit Windows : mightyZAPTotalManagerx.y.z_ia32.exe==
- ==64bit Windows : mightyZAPTotalManagerx.y.z_x64.exe==  

**How to check Windows Version 
- Windows  7 : Control Panel -> System ==확인==
- Windows 10 or newer : ==설정 -> 시스템 -> 정보==   (==About->System Type??==)
<font color="#4f81bd">How to check OS Version </font>
![[windows_version_check.jpg]]
**mightyZAP Total Manager Download Link**

Run the downloaded file and install it according to the instructions of the installation guide. Installation may take several minutes.
![[window_install.jpg]]
Now, user can use mightyZAP Total Manager software on Windows.

### 2.2.2 Linux
Download the file package dedicated for Linux OS.  
To install Total Manager for Debian/Ubuntu-based Total Manager, download and install the .deb package (64bit) through the following command line.
```
$ sudo dpkg -i [file].deb
```

### 2.2.3 Mac OS
Download the file package dedicated for Mac OS. 
Double-click the downloaded file, then installation window appears as shown below. Drag the mightyZAP Total Manager icon and place it to the Application.  Installation is completed.  
![[Software/Total Manager/img/macOS_install.png|500]]

## 2.3 Screen Layout
The screen layout is divided into four parts: Header, Side bar, Contents, and Footer in general. 
![[Software/Total Manager/img/mainView-description.png|700]]
<font color="#0070c0"><font color="#548dd4">① Main Toolbar</font></font> : Perform actuator reset, restart, data undo/redo, etc. 
<font color="#548dd4">② SCAN</font> : Connect Software's communication(COM port) and search connected mightyZAP  
<font color="#548dd4">③ Main Menu</font> : Always located on the side bar and user can select the main functions of the manager software such as Information, Control, Update, and Setting. 
<font color="#0070c0">④ Actuator List</font> : Searched mightyZAP model name to be shown along with the communication speed (baudrate) and protocol type.  
<font color="#0070c0">⑤ Main contents</font> : 매니저에 제공하는 Main 기능 표시  
<font color="#0070c0">⑥ Actuator Information</font> : Selected mightyZAP's model name, firmware version, and communication method are displayed.
<font color="#0070c0">⑦ Communication Status</font> : Displays Communication status such as protocol type and transmission/reception errors.
<font color="#0070c0">⑧ Manager Status</font> :  Displays Manager software's version and Language (English/Korean)

## 2.4 USB Interface Board 
A USB-TTL or RS-485 serial converter is required for Total Manager to communicate with mightyZAP.  Below explanation is based on our genuine USB Interface Board - IR-USB02 or 03.
First, connect to the PC using a USB cable with IR-USB02 or 03. 
(IR-USB02 is equipped with a Micro 5 pin USB connector, and IR-USB03 is equipped with a new C type USB connector.)
> <font color="#ff0000">⚠️ CAUTION </font>     
> <font color="#ff0000">Be sure to use data transferrable cable, not a "charging only" cable.</font>

### 2.4.1 For Windows
당사의 Interface Board 는 출시시점에 따라 2가지 Type이 있으며, 각 type에 따라 드라이버를 설치하는 방식이 다릅니다. 아래의 설명을 참조하여 드라이버를 설치 합니다.

- **IR-USB02 Driver installation** (CH340x)
	Download the driver for IR-USB02 from the link below. ==(링크 없음.  )==
    After running the downloaded file, click the INSTALL button to install the driver. 
	![[ch340x_win_install.jpg]]
- **IR-USB03 Driver installation**  
	Download the driver for IR-USB03 from the link below. ==(링크 연결안됨.)
	-  [USB Interface Board Window Driver]  
	Run the downloaded file to install the driver. 
	![[ftdi_win_install.png|650]]

- **Connection check**
Connect the USB Interface Board to the PC.   ==(링크연결안됨)==
Check if the serial port is connected properly at [System]-[Device Manager]-[Port]. 
If connected properly, user can see that a new COM port is added as shown in the image below.
![[serialPort_check_win.jpg]]

### 2.4.2 Linux[ubuntu/Demian]. (==링크없음==)
<font size="5"> Driver Installation</font>
##### 1) CH341 Driver 
CH341 driver is only used for IR-USB-02.
The serial drivers for CH340 and CH341 are built-in starting from Linux kernel version 2.6.24, and its location is drivers/usb/serial/ch341.c. However, if user wishs to keep the driver up-to-date, please see below.
 - Please download the driver for Linux from the website below.
   [LINUX_CH341 Driver Donwload(ZIP)](https://www.wch.cn/downloads/CH341SER_LINUX_ZIP.html)  
 - Unzip the downloaded file.
 - Open a terminal window and move to the downloaded directory.
 - Enter the following commands
```bash
$ make clean  
$ make  
$ sudo make load    
```
 - To check the installed driver, connect IR-USB02 to the PC and enter the following command.  If installed properly, it should be displayed as "ch34x".
```bash
$ sudo dmesg | grep ch34    
[   xxx] usbcore: registered new interface driver ch341  
[   xxx] usbserial: USB Serial support registered for ch341-uart  
[   xxx] ch341 1-6.4.3:1.0: ch341-uart converter detected  
[   xxx] usb 1-6.4.3: ch341-uart converter now attached to ttyUSB1  
```
##### 2) FTDI Driver
The FTDI Driver is used in all models except USB-02 (such as old IR-USB01, new IR-USB03, etc.). The FTDI VCP driver is built into the Linux kernel. To ensure that all FTDI devices have VCP driver support, FTDI recommends installing the latest kernel release on user's Linux system.  On Linux, the VCP driver appears as /dev/ttyUSBx.
How to Check Com port:
- Connect the USB Interface board to the PC with a proper USB cable.
- Open a terminal window and type the following, the output will appear as follows:
```bash
$ dmesg|grep FTDI  
[   xxx] USB Serial support registered for FTDI USB Serial Device  
[   xxx] ftdi_sio 9-1:1.0: FTDI USB Serial Device converter detected  
[   xxx] usb 9-1: FTDI USB Serial Device converter now attached to ttyUSB0  
[   xxx] ftdi_sio: v1.6.0:USB FTDI Serial Converters Driver  
```

#### Obtaining Serial Port Permissions
Ubuntu basically requires users to log in as a regular user, not as a root user, so user needs to set permissions to handle system devices such as the Serial Port.
First, enter the command below to check the connected port name.
```
$ dmesg|grep tty  
[   xxx] printk: console [tty0] enabled  
[   xxx] usb 1-6.1.4: FTDI USB Serial Device converter now attached to ttyUSB0  
[   xxx] ftdi_sio ttyUSB0: FTDI USB Serial Device converter now disconnected from ttyUSB0  
[   xxx] usb 1-6.1.4: FTDI USB Serial Device converter now attached to ttyUSB0  
```


Check the usage group using the serial port identified through the “ls -l” command.
```bash
$ ls -l /dev/ttyUSB0  
crw-rw---- 1 root dialout 188,  0 11월  1 10:49 /dev/ttyUSB0  
```

Use the “id Gn” command to check which group the currently logged in user belongs to.
```baSH
$ id -Gn  
user adm cdrom sudo dip plugdev  
```

Since the currently logged-in user is not included in the dialout group, add the dialout group to the current user.
```bash
$ sudo adduser $USER dialout
[sudo] password for user.
Adding user 'user' to group 'dialout' ...
Adding user user to group dialout
Done
```

After adding to a group, user must log out and log in again for the changes to take effect.

### 2.4.3 Mac OS
Download the USB Interface Board Driver.  (==링크없음==)
	-  [USB Interface Board Window Driver]  
Run the downloaded file and install the driver according to the guide.  ==(이미지 없음)==
	[이미지 ]  
Connect the USB Interface Board to the PC.  (==링크없음==)
Check if the serial port is connected properly at [System information]-[Hardware]-[USB]. 
[이미지]  ==(이미지 없음)==

# 3 Total Manager Description
## 3.1 통신 연결 및 검색
아래의 이미지와 같이 프로그램을 실행 한 후 상단 매뉴바에서 Scan 버튼을 누르면 Actuator Scan을 위한 팝업 창이 활성화 됩니다.   
![[ConnectAndSCAN.png|700]]

### 3.1.1 SCAN 화면 구성
Actuaotor Scan 팝업 창의 화면 구성은 아래와 같습니다.  
![[ScanActuator-Desc.png|700]]
- **Serial Port**  : USB Interface Board의 Serial Port
- **Protocol** : 통신 프로토콜 설정, Actutator Model에 따라 다르며 Scan시 중복 선택 가능
- **Baudrate Select** :  통신 속도 설정 (default 57600bps) Scan시 중복 선택 가능
- **Scan 결과 창** : SCAN 진행 상황과 결과를 출력한다.
- **SCAN, CLOSE** : SCAN 실행 및 창 닫기 버튼
### 3.1.2 통신 설정
##### 1. Port 선택
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
![[Software/Total Manager/img/InformationMenu.png|700]]
### 3.2.1 서보모터 List 확인
아래의 그림과 같이 매니저에 왼쪽에는 검색된 서보모터가 Display 됩니다.  
Actuator List는 Baudrate와 Protocol에 따라 분류되어 표시 되며,  Baudrate 별로 접거나 펼 수 습니다
![[ActuatorList.png|700]]

### 3.2.2 정보 확인
Actuator List를 선택하면 해당 Actuator의 모델 명, Stroke 길이, 정격 부하, 통신 Protocol 등의 정보가 표시됩니다. 
![[Actuator_Information.png]]
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
  ><font color="#4f81bd">Tip</font>  
  >Goal Position TextBox를 클릭한 후 다음과 같이 키보드 키로 제어가 가능합니다.  
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
><font color="red">⚠️ 주의 사항  </font>  
>펌웨어 업데이트 시에는 업데이트를 진행할 actuator 하나만 연결하고 SCAN 작업을 진행하여 Actuator List에 하나의 actuator만 남아 있어야 합니다.  하나 이상의 actuator 가 연결 된 상태에서 업데이트를 진행하면 업데이트가 비정상적으로 진행되어 실패하게 되고 해당  actuator 는 동작이 되지 않게 됩니다.  
  
**업데이트 파일 선택**  
firmware update를 진행 할 경우 그림과 같이 Select file 버튼을 눌러 다운로드 받은 업데이트 파일을 선택해야 합니다.    
![[UpdateSelect-Button.png|700]]
><font color="#ff0000">⚠️ 주의 사항  </font>
>이때 다른 모델의 firmware file 을 선택하지 않게 조심해야 합니다. Actuator List에 나와있는 Model 명과 uipdate file의 이름이 동일한지 확인해야 합니다.

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
><font color="#ff0000">⚠️ 주의사항</font>  
>Factroy Reset 중에 Actuator가 Calibration을 위해 최대/최소로 위치이동을 합니다. 정상적인 Calibration을 위해 장치에 연결하지 않고 무부하에 최대 동작거리를 유지할 수 있는 공간에서 진행해 주시기 바랍니다.

Factory Reset은 Update Page에 들어오면 상단 메뉴바에 추가 되어있는 것을 확인할 수 있습니다.   
해당 아이콘을 클릭하면 Factory Reset 을 하기 위한 팝업 창이 활성화 됩니다.
![[FactoryReset-Button.png|700]]
##### 1. 화면 구성
Factory Reset을 선택하면 팝업 창이 나타납니다. 팝업창에는 Factory Reset 관련 Option 선택창과 Text Area가 나타나고 하단에 Factory Reset 을 위한 버튼이 존재합니다.  
![[FactoryReset-Disc..png|500]]
##### 2. Options
Factory Reset에 대한 Option은 2가지로 ID Remind와 Baudrate Remind 입니다. 그 외의 다른 Parameter들은 모두 초기화 됩니다.  
일반적인 Reset 에서는 초기화 되지 않는 Protocol, Min/Max Position Calibration이 초기화 되고, Potentiometer의 Calibration을 실행하면서 해당 내부 Parameter도 수정이 됩니다.  
Factopry Reset 후에도 유지하고 싶은 Option을 선택하시면 됩니다.  
##### 3. Factory Reset 
하단의 Factory Reset 버튼을 클릭하면, Factory Reset을 실행합니다. 실행 중 진행되는 사항을 Option 선택 아래의 Text Area 창에 표시합니다. 
![[FactoryReset-Popup.png]]
Factory Reset 진행이 되면서 Actuator가 몇 번의 시스템 재 시작을 하면서 LED가 깜빡입니다. 또한 Potenmtiometer Calibration 시에는 Actuator가 최대로 확장 및 수축 행동을 하면서 Calibration 을 진행합니다.  
최종적으로 Factory Reset이 완료되면 하단의 Close 버튼이 활성화 되면서 Parameter 창으로 이동하여 reset된 Data를 보여줍니다.
![[FActoryRest-Complete.png]]

> <font color="#ff0000">⚠️ 주의 사항</font>  
> Calibration 을 하기 앞서, 정확한 Calibration 작업을 위해 Actuator 에 연결되어있는 모든 기구물을 제거하여, 무 부하 상태에서 Full Stroke 구간에 걸쳐 기구 간섭이 없도록 합니다.
