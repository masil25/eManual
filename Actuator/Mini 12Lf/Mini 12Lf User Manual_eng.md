
**<font color="#ff0000">Check your product series!</font>
<font color="#ff0000">Does your model number start with 12Lf-?</font>**


> This manual is the dedicated manual for **12Lf FORCE control version actuator** which support force/speed control as well as position control. 
> This manual is for the 12Lf Force control version user who has the model number which starts with **“12Lf”** with our <font color="#ff0000">own IR protocol. </font>
> For the users with 12Lf series who uses MODBUS RTU protocol, please refer separated “Force control/MODBUS RTU” manual and for the users who have the actuator which starts with D or L, please refer to the separate “Position control” actuator manual. 


# 1. Before Use
## 1.1. Introduction
Thank you for purchasing mightyZAP mini Linear servo motors! Please peruse this manual before use to prevent any unexpected damage of product or serious injury of users.  
mightyZAP mini Linear servo motors have been developed to provide reliable, high quality linear solution in compact space. mightyZAP mini Linear servo motors can be applied in various fields such as factory automation, medical devices, robotics, professional UAV and radio control hobby.  


**Features**
- Position Control (Positional Accuracy 50~90um – see spec chart of each model)
- Stall Force Control based on Current feedback
- Speed Control by 1024 Resolution 
- Bulit-in Drive circuit
- 4096 Step High Resolution
- High Performance Coreless Motor 
- Minimized Mechanical Backlash (30um)
- Excellent Substitute for pneumatic cylinder which does not support position control
- Reasonable Cost
 


## 1.2. For Safety
⚠ Please peruse safety instruction below to use mightyZAP safely. Please kindly note that abuse may invalidate your warranty.  

1.   <u>Do NOT press the Rod when the servo is being operated.</u> Motor may be damaged(burnt) if higher force than rated force is applied consistently.   
2.   <u>Apply proper input voltage</u> using power supply or correct battery. For instance, 7.0~12V for 12V input product(12Lf series). The motor may be burnt when higher voltage than 13V is applied to the actuator.   
3.   <u>Lifespan of motor can be varied according to the load and duty cycle and etc.      </u>
	1)       <u>Use under rated force.</u> For instance, rated force of 12Lf-20PT-27 is 20N(approx. 2kg). That is, lifespan of 12Lf-20PT-27 can be maximized when it is used less than 20N force condition.  The lower load comparing to rated force, the longer lifespan of the motor. 
	2)      <u>Use under 50% of Duty Cycle</u> : If DC motor operates continuously without any interval (rest), motor will be overloaded and overload protection feature will cut off the power of servo motor. Therefore, user should consider “Duty cycle” which means the percentage of operating time against interval time. In other words, 50% duty cycle means that motor should rest 50% of time when motor operate during 50% of time to manage motor lifespan more efficiently. Use under 50% of duty cycle for optimized lifespan. The less duty cycle, the longer lifespan.  
	3)      <u>"Force Off" feature when servo motor is in standby mode may prolong the lifespan of servo motor. </u>  However, this feature can be used when there is no problem in your system even if rod position is changed due to external force because "force off" makes servo force is released.  (참조 : [[#1.5. 포스오프기능]] )  
4.    <u>Proper wiring</u> : There is little chance of incorrect wiring when using wire harness with connector provided by our factory. However, if users use soldering or a third-party connector according to user’s desire, please pay attention to mis-wiring between the communication and power lines. Incorrect wiring results in fatal damage to the PC board or certain electrical components. Please refer to the wiring pin map on “4.1.Circuit Connection” page on this manual to prevent incorrect wiring.   
5.   <u>Position command within mechanical limit</u> : There should be mechanical limit which servo rod can move when user install servo motor in their application. Make sure that positional command should be made within user’s mechanical limit. It is too common to mention, but we could see this mistake from time to time. If positional command is out of mechanical limit, servo will be overloaded at certain point of time and power will be cut off to protect the servo due to overload protection feature. (if overload protection is inactivated by user, motor will be not be protected.) Considering precise position control, make sure to re-check this matter when servo is applied.   

![[CautionMotionSync.png]]
6.   <u>It is strictly banned to use multiple qty actuators for single objective.</u> Due to DC motor characteristic, each actuator’s speed can be slightly varied even if they are same model and goal position is same. (may cause overload to one of actuator)

![[Broken_Rod_en.png]]
7.   Do not TWIST the rod with excessive force when tightening the rod end tip. If you apply excessive twisting force to the rod when tightening the rod and tip (while the body is fixed), it may cause damage to internal part (Engineering Plastic rod-insert). Follow below instruction to avoid damage.    
	   **instruction – M3 spanner**
	![[UseSpanner.png]]
		1) Fix the Rod-end with the included M3 spanner (⑤). This is to prevent the rod (①) from turning badly and damage while tightening the M3 nut (②). 
		2) According to preference, install the socket set screw (③) or rod end tip (④) to the proper positioning before hard tightening.
		3) Adjust the angle of the rod end tip (④) to the desired angle. By using a long nose plier(or extra M3 spanner), fix the position by tightening the M3 nut (②) while rod end is fixed with M3 spanner(see above image.). This is “double nuts” concept which fixes mechanical position by friction.

8.  Use properly "Overload protection" feature to protect the servo and your system from damage. Overload protection feature is activated from the factory, and for other protection setting, if necessary, set “Alarm shutdown” feature according to your system's condition. 
9.  Do NOT touch the servo case right after servo operation. It may hot. 
10.  Keep away from water, humidity, dust and oil.
11.  It is designed for indoor purpose. Do not use in outdoor. 
12. Keep out of reach of children.  Keep hands off when servo motor operates to avoid unexpected injury. 


## 1.3. For Storage
Do NOT store/use servo motor under below extreme condition. It may cause malfunction or damage of product.
- Direct light and High temperature more than 70 ˚C or Low temperature lower than minus 20˚C. 
- Highly Humid space / Space having Vibrating condition / Space having Dust / Space causing Electrostatic

## 1.4. Constant Load / Overload Protection 

> **Important Note : Constant load / Overload Protection Force Off Feature**

Overload protection (Overload shutdown) feature is to prevent overload condition which greatly affect the service life and to motor burnout. Please read the following for proper protection and use it according to the conditions.

### 1.4.1. About mechanism of overload protection (overload shutdown) and terminology
- The overload protection mechanism of the 12Lf Force Control series uses a combination of current accumulation and operation time accumulation.
	-	In case of continuous operation AT rated load, Shutdown occurs after about 30 sec as the accumulated current value.
	-	In case of continuous operation UNDER rated load, Shutdown occurs after longer than 30 sec, but Shutdown will be made within max. 180 sec even at the lowest load.
	-	In case of continuous operation ABOVE rated load, Shutdown occurs shorter than 30 seconds due to the high amount of current accumulation. For example, shutdown occurs within 2 seconds when the maximum current of 1.6A flows.  
- Duty cycle is the ratio of the time which motor is actually driven against the time of motor rest.
- Duty cycle 50% means that 50% of the time should be restored if the motor runs 50% of the time. 
- Motor operating time includes the time which the motor rotates/moves normally as well as the time which motor draws current by stuck condition without motor rotating. 

### 1.4.2. Overload shutdown Disable
The overload shutdown function protects the servo actuator under overload conditions. Depending on the application, there are applications that need to be operated under severe conditions, even if the overall mechanism protection is more important than the servo actuator, or even if the life of the servo actuator is shortened.  For this case, shutdown function can be disabled through mightZAP servo manager software so that shutdown does not work under overload situation.  However, in the 12Lf force control series, the goal current can be set so that the motor can be protected by not exceeding the set maximum current even in an overload situation. 

### 1.4.3. Recovery after overload shutdown
Since the communication line is still functioning after shutdown, it can be restored to the initial state by “Restart” command or by reconnecting power. Be sure to remove the cause of overload before restoration.

### 1.4.4. Exception and Cautions
- **Caution 1)** When the spring is installed between the application and the actuator, or it is installed in Z axis (the direction of gravity), it makes external force to the actuator. Under these conditions, the servo actuator operates slightly, but continuously to keep its position.  If this condition persists, actuator may invoke Overload shutdown in some cases. To prevent this, use Force Off command while external power is applied.
- **Caution 2)** Each time overload shutdown is executed, it is not big but it damages the motor. Therefore, the cause of overload must be removed after the first overload shutdown so that shutdown does not occur frequently.


### 1.4.5. Overload Protection Function
Using Overload protection function, we can protect motor damage from overload condition.  
Overload protection function is being activated from the factory.  When it is activated, motor power will be cut off in case of overload condition to protect the servo actuator   

The easiest way to set(activate/inactivate) Overload protection function is to connect servo with Servo Manager Software using IR-USB01 PC USB interface. Go to "Shutdown Alarm Setting” and simply click(activate) "Overload Error".   

Another method to set Overload protection is to use a Command packet. You can send "Store data" command to the address(0X12) which is the address for Alarm Shutdown.  Set bit 5 (see below) for Overload error from  to "1"(Overload activation), then send "Store data" command to the servo motor. Servo force will be cut off under overload condition if the bit is set at "1".(1= Overload protection activation / 0=Inactivation)  


| Error               | bit |
|:--------------------|:----|
| NONE                |   7 |
| NONE                |   6 |
|<font color="#ff0000"> Overload Error </font>     |   <font color="#ff0000">5</font> |
| NONE                |   4 |
| NONE                |   3 |
| NONE                |   2 |
| NONE                |   1 |
| Input Voltage Error |   0 |  

Refer to below example for"Store Data" command.  

Command Packet 

| HEADER   | ID   | Size | Command | Factor #1<br>Address<br> | Factor #2<br>Data<br> | Checksum |
|:---------|:-----|:-----|:--------|:-------------------------|:----------------------|:---------|
| 0xFFFFFF | 0x00 | 0x04 |    0xF3 |                     0x12 |                  0x20 |     0xD6 |  


>⚠ **<font color="#ff0000"> Caution  </font>Use within Rated Load**
>For proper performance and better lifespan of mightZAP, it is strongly requested to use it within the rated load range. 


## 1.5. Force Off 
**Force Off Function**
- After the servo actuator moves to the designated position, the operation stops unless there is an external force that causes the position value change. If the position value of the actuator is continuously changed due to vibration or external force, the actuator is operated continuously without rest to stick to the designated position value, which affects the lifespan of the motor. 
- In this case, if the Force Off function is properly utilized, the motor power can be released to allow the motor to rest while maintaining its position with mechanical friction (Mechanical Self Lock function). Even when it is necessary to keep the position for a relatively long time after reaching a certain position, shutting off the power of the motor using the Force off parameter as an added safety function helps to manage the lifespan of the motor.
- Under force off condition, communication is still alive while motor power is off, so servo will move again when servo gets new position command without giving “Force ON” command. 
- Force Off feature can be available for the actuator having “Mechanical self-lock” feature. Please see the chart below to see availability. (Below chart shows self-lock force of 27mm stroke mightyZAP only.  Refer to the separate specification for 40/53/90mm stroke version’s Self lock force.)


| Rated Load Spec | Mechanical Self-Lock |
|:----------------|:---------------------|
|10-20N | NOT Available     |
| 27-100N | Available |  

For Force Off, send 0x00 as a "Store data" command to the address(0X80) which is the address for Force ON/OFF. (For Force ON, send 0x01) 

Refer to below example for "Store Data" command.

**Command Packet** 

| HEADER   | ID   | Size | Command | Factor #1<br>Address<br> | Factor #2<br>Data<br> | Checksum |
|:---------|:-----|:-----|:--------|:-------------------------|:----------------------|:---------|
| 0xFFFFFF | 0x00 | 0x04 |    0xF3 |                     0x80 |                  0x00 |     0x88 |    



><font color="#245bdb">TIP</font>
>Under Force Off status, if user send "Goal Position" command, it is not necessary to send Force ON packet additionally because "Goal Position" command already includes "Force On" packet in it. . 


---

# 2. Basic Information
## 2.1. Component
![[12Lf_Standard_Accessories.png]]

![[Rod_end_tip_M3Nut.png]]
* #3 M3 nut can be used to fix the hinge and hinge base. Also, M3 nut should be used between rod-end nut and rod-end tip as a stopper as shown on the picture. 


## 2.2. Dimension (mm)
Please refer to detailed dimension from 3D drawing at our website. (www.mightyzap.com →Digital Archives →12Lf Force control series→Drawing)

### 2.2.1. 27mm Stroke Lineup  
<font color="#245bdb">Stroke can be extended to 30mm using IR-UEB02</font>  
![[Dimension_12Lf-xx-27.png]]

### 2.2.2. 40mm Stroke Lineup

![[Dimension_12Lf-xx-40.png]]

### 2.2.3. 53mm Stroke Lineup

![[Dimension_12Lf-xx-53.png]]

### 2.2.4. 90mm Stroke Lineup

![[Dimension_12Lf-xx-90.png]]

## 2.3. Specification
### 2.3.1. 12Lf Series Specifications

|Rated Load|Stroke	|Communication(RS-485)|Communication(TTL/PWM)|Rated Load/<br>Max Speed(No Load)|Stall Force at Current<br>(1.6A/800mA/100mA)|Mechanical  <br>Self Lock  <br>(Z Axis Use) | 리드스크류 / 기어비 / 기어타입|
|---|---|---|---|---|---|---|---|
|10N|40mm|12Lf-10F-40|12Lf-10PT-40|10N / 110mm/s|60N / 40N / 10N|없음  <br>(Z축 적용주의)|리드각 20°  <br>/ 10:1  <br> / Engineering  <br>Plastic Gears|
|^|53mm|12Lf-10F-53|12Lf-10PT-53|^|^|^|^|
|^|90mm|12Lf-10F-90|12Lf-10PT-90|^|^|^|^|
|12N|27mm|12Lf-12F-27|12Lf-12PT-27|12N / 110mm/s|100N / 60N / 8N|^|^|
|17N|40mm|12Lf-17F-40|12Lf-17PT-40|17N / 80mm/s|100N / 60N / 8N|^|리드각 15°  <br>/ 10:1  <br> / Engineering  <br>Plastic Gears|
|^|53mm|12Lf-17F-53|12Lf-17PT-53|^|^|^|^|
|^|90mm|12Lf-17F-90|12Lf-17PT-90|^|^|^|^|
|20N|27mm|12Lf-20F-27|12Lf-20PT-27|20N / 80mm/s|120N / 72N / 9.6N|^|^|
|27N|40mm|12Lf-27F-40|12Lf-27PT-40|27N / 28mm/s|160N / 96N / 12.8N|있음  <br>(Z축 적용가능)|리드각 5°  <br>/ 10:1  <br> / Engineering  <br>Plastic Gears|
|^|53mm|12Lf-27F-53|12Lf-27PT-53|^|^|^|^|
|^|90mm|12Lf-27F-90|12Lf-27PT-90|^|^|^|^|
|35N|27mm|12Lf-35F-27|12Lf-35PT-27|35N / 28mm/s|210N / 126N / 16.8N|^|^|
|42N|40mm|12Lf-42F-40|12Lf-42PT-40|42N / 15mm/s|240N / 144N / 19.2N|^|리드각 5°  <br>/ 20:1  <br> / Metal Gear|
|^|53mm|12Lf-42F-53|12Lf-42PT-53|^|^|^|^|
|55N|27mm|12Lf-55F-27|12Lf-55PT-27|55N / 15mm/s|300N / 180N / 24N|^|^|
|78N|40mm|12Lf-78F-40|12Lf-78PT-40|78N / 7.7mm/s|420N / 252N / 33.6N|^|리드각 5°  <br>/ 50:1  <br> / Metal Gears|
|^|53mm|12Lf-78F-53|12Lf-78PT-53|^|^|^|^|
|100N|27mm|12Lf-100F-27|12Lf-100PT-27|100N / 7.7mm/s|600N / 360N / 48N|^|^|


### 2.3.2. 12Lf Series Common Specifications	

|   -                                     |   Stroke                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |    <                            |    Unidirectional               |    <           |
|:----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:--------------------------------|:---------------|
|   Repeatability<br>                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  27mm / 40mm    |    <                            |                30μm (0.03mm)    |    <           |
|    ^                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         53mm    |    <                            |                40μm (0.04mm)    |    <           |
|    ^                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         90mm    |    <                            |                50μm (0.05mm)    |    <           |
|    Mechanical Backlash                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                0.03mm (30μm)    |    <                            |    <                            |    <           |
|    Rod Type                             |    Metal Alloy Rod                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |    <                            |    <                            |    <           |
|    Motor Type                           |    Coreless Motor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |    <                            |    <                            |    <           |
|    Rated Voltage                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          12V    |    <                            |    <                            |    <           |
|   <div>Motor Watt</div>                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          26W    |    <                            |    <                            |    <           |
|    Recommended Duty Cycle               |    At Rated Load                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |    <                            |    At Max Applicable Load       |    <           |
|    ^                                    |    Max&nbsp;50%                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |    <                            |    Max&nbsp;20%                 |    <           |
|    Current Accuracy                     |    ±15% at Over 50mA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |    <                            |    <                            |    <           |
|    Position Sensor                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    10KΩ linear Potentiometer    |    <                            |    <                            |    <           |
|    Input Voltage Range                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      7 ~ 13V    |    <                            |    <                            |    <           |
|    Current Consumption                  |    Idle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |    Rated                        |    Stall                        |    <           |
|    ^                                    |    ^                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |    ^                            |    Default                      |    MAX         |
|    ^                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         20mA    |                        380mA    |                        800mA    |        1.6A    |
|    Audible Noise                        |    Approx. 50db at 1m                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |    <                            |    <                            |    <           |
|    LED Indication                       |                                                                                                                                                                                          Two Errors Indications (Input voltage, Overload)                                                                                                                                                                                                                                                                                       |    <                            |    <                            |    <           |
|   Pulse Signal / Pulse Range            |    PWM (PT version, R/C Hobby Signal) /&nbsp;<span style="background-color: var(--background-primary);">900μs(Retracted)-1500μs(Center)-2100μs (Extended)</span>                                                                                                                                                                                                                                                                                                                                                                |    <                            |    <                            |    <           |
|    Data Communication / Protocol        |   <div>RS-485 or TTL(PT version) /&nbsp;<span style="background-color: var(--background-primary); color: var(--text-normal); font-family: var(--font-interface); font-size: var(--font-ui-medium);">IR Robot open protocol (Default) / MODBUS RTU (Switchable)</span></div><div><br></div>                                                                                                                                                                                                                                      |    <                            |    <                            |    <           |
|    Ingress Protection                   |    IP-54 (Dust & Water Tight)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |    <                            |    <                            |    <           |
|    Size / Weight                        |    -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |    <                            |    <                            |    <           |
|                                 27mm    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             57.5(L)x29.9(W)x15(H)mm / 49~52g    |    <                            |    <                            |    <           |
|                                 40mm    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               86.9(L)x36(W)x18(H)mm / 96~99g    |    <                            |    <                            |    <           |
|                                 53mm    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            111.5(L)x36(W)x18(H)mm / 124~127g    |    <                            |    <                            |    <           |
|                               90mm      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             151.5(L)x36(W)x18(H)mm / 약177g      | &lt;                            |      <                          |      <         |
|  Operating Temperature                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 -10℃ ~ 60℃      | &lt;                            |      <                          |      <         |
|      Wire Harness                       |      TTL(PT version) :&nbsp; Molex to Molex Type&nbsp;(Molex 50-37-5033, 3pins) / 200mm length, 0.08×60(22AWG) &lt;br&gt; or RS485(F version) : Molex to Molex Type (Molex 0510650400, 4pins) / 200mm length, 0.08×60(22AWG)                                                                                                                                                                                                                                                                                                    | &lt;                            |      <                          |      <         |  

*  Design and Specification can be changed without prior notice for further improvement.   




# 3. Application
## 3.1. Factory Automation
![[Applications_FactoryAutomation.png]]
- Better Replacement of Pneumatic Cylinder
- Real-Time Automatic Width Adjustment Conveyer
- Real-Time Automatic Product Alignment (Up/Down or Left/Right)
- Automatic Value Control (oil or water)
- Automatic Dispensing with Syringe
- Automatic Clamping System
- Fitting or Adjusting Distance
- Pick & Place
- In & out / Extension & retraction 
- Open & Closing (On-Off )
- Change of Direction
- Hexapod/Tripod movement

## 3.2. Production & Test JIGs
![[Applications_GeneralUsage.png]]
- Hole Punching Jig
- Hole Inspection Jig
- Switch Inspection Jig
- Touch Panel Inspection Jig
- PC Board Testing Jig
## 3.3. Robotics
![[Applications_Robotics.png]]
- Robot Joints
- Robot Grippers
- Linear Control  Parts of Surgical Robot
## 3.4. UAV / Professional Drone
![[Applications_UAV,Drone.png]]
- Fixed wing (Aileron/Elevator/Throttle/Flap/Air Brake/ Rudder/ Throttle)
- Helicopter (Swash Plate Control/Rudder)
- Multicopter (Retract, Dropping Device)
- Linear control parts for Military products
- Pan/Tilt Camera control
## 3.5. Medical / Lab Equipment 
![[Applications_Medical.png]]
- Linear position control for Medical Devices (HIFU, etc)
- Camera or Laser Focusing Control
- Laboratory Test Equipment

## 3.6. Education / Hobby
![[Applications_OtherUsage.png]]
- 3D Printer
- Arduino or Rapsberry Pie Control
- Maker's DIY Project


# 4. Servo Control
## 4.1. Circuit Connection
mightyZAP(12Lf-xx<font color="#ff0000">PT</font>-xx) supports both data communication (Half Duplux TTL) as well as simple pulse(PWM) control. For the control under data communication, UART signal of main board should be converted into Half Duplex Type signal.  TTL Conversion circuit will be as below.   
### 4.1.1. TTL/PWM (3Pin Connector-Model 12Lfxx-xx<font color="#ff0000">PT</font>-xx Series) 

![[CircuitConnection_TTL_en.png]]

The direction of data signal for TxD and RxD of TTL level will be determined according to the level of direction_port as below.
	- The level of "direction_port" is LOW :Data signal will be inputted to RxD.
	- The level of "direction_port" is HIGH :TxD signal will be outputted as Data.
	※ Both GNDs between actuator and controller should be connected as above diagram. 

> ※ For PWM control, please connect PWM signal(3~5V) to the Data pin above. (GND,VDD are same as above) 
> ※ In case of using PWM communication, position control is possible, but feedback data such as the current position value cannot be received, and serial daisy chain connection is not supported since data communication is not supported.
> ※ Feedback data reception and Daisy chain connection are possible by TTL or RS-485 communication.



### 4.1.2. RS-485(4Pin Connector - Model 12Lf-xx<font color="#ff0000">F</font>-xx Series)
Model 12Lfxx-xx<font color="#ff0000">F</font>-xx Series uses RS-485 communication. Pin map and Conversion circuit will be as below.

|PIN NUMBER(COLOR)|PIN NAME|FUNCTION(RS485)|
|---|---|---|
|1(Yellow)|D-|RS485 –|
|2(White)|D+|RS485 +|
|3(Red)|VCC|Power +|
|4(Black)|GND|Power -|


![[CircuitConnection_RS485.png]]
※ If the power is supplied from outside, you can connect to 485 D+, 485 D- only. 

You can convert TX and RX mode by controlling “Direction_Port pin” in above circuit. 
	- The level of "direction_port" is LOW : Data signal will be inputted to RxD.
	- The level of "direction_port" is HIGH : TxD signal will be outputted as Data
	※ Both GNDs between actuator and controller should be connected as above diagram. 


## 4.2. Communication
![[Communication_MainController.png]]
mightyZAP and your main controller will communicate by exchanging data packet. The sorts of packet are Command packet (Main controller to mightyZAP) and Feedback packet(mightZAP to your main controller) 

### 4.2.1. Specification

#### 4.2.1.1. Communication specification    
- 2 Mode in One (Pulse / Data Mode Auto-Switching)
  mightyZAP 12Lf-xxPT-xx series will automatically recognize the input signal between data mode(TTL) and pulse mode(PWM).
- Data Mode (TTL/RS-485)
  Asynchronous Serial communication (8 bit, 1 Stop bit, None Parity)

|Item|Spec|
|---|---|
|Structure|Half-duplex UART|
|Baud Rate|57600bps(default)|
|Data Size|8bit|
|Parity|non-parity|
|Stop Bit|One bit|

⚠ <font color="#ff0000">CAUTION</font> 
>- mightyZAP uses half duplex communication, and need to put proper delay time to prevent communication error. 
>- Recommendable delay time is 5msec for data write, 10msec for data read. 
>- Otherwise, there can be communication collision and motor failure. 
>- Above delay time is not minimum, but proper delay time for safety. 

- PWM Pulse Mode 
	PPM(Pulse Position Modulation) Compatible [ Radio-Control Servo Pulse Mode]
	(900us(Retracted)~1500 us(Center)~2100 us(Fully Extended). Under PWM mode, position command available without feedback data.

  ![[Commu_spec_PWMPulseMode.png]]
※ Short stroke : Retract stroke / Long stroke : Extend stroke

> ※ Since PWM control is vulnerable to noise, it is highly recommended to control with a saturation-type PWM signal (continuous PWM) rather than a single PWM signal, so that it does not break at a specific frequency. Recommended frequency is 50Hz(20ms).
> ※ In case of using PWM communication, position control is possible, but feedback data such as the present position value cannot be received, and serial daisy chain connection is not supported since data communication is not supported.  Feedback data reception and Daisy chain connection are possible by TTL or RS-485 communication.
> ※ Alternatively, PWM control is possible in the following way. 
> Frequency 50Hz / Duty rate 4.5% ~ 10.5%. (Control by 0.05% unit)


#### 4.2.1.2. Data specification    
Data range is basically determined as below in both Data and Pulse modes.

|Rod Stroke|Data Mode|Pulse Mode|
|---|---|---|
|Short (Retracting) Stroke|0|900us|
|Half Stroke|2047|1500us|
|Long (Extending) Stroke**|4095**|2100us|

> <font color="#245bdb">TIP </font>
> <sup>**For 27mm stroke mightyAP, long stroke limit is set at 27mm, but user is able to extend the long stroke to max.30mm. Data value for 27mm stroke is 3686. (for better mechanical stability against lateral load, 27mm is recommended.)</sup>

#### 4.2.1.3. Daisy-Chain Connection
After receiving Command Packet at multiple qty of mightZAPs, the servo whose ID is N will be operated only. (Only N ID servo will send Feedback packet and execute Command.) 
![[DaisyChainConnection.png]]
⚠ <font color="#ff0000">CAUTION</font>  Unique ID  
> - Each mightZAP servo must have an individual ID to prevent interference between same IDs. Therefore, you need to set individual IDs for each servo in the network node. 
> - User may assign 253 different IDs and connect 253pcs servos in serial via TTL protocol. For RS-485 protocol, 253 IDs can be assigned, but available serial connection is up to 32pcs servo motors due to RS-485 node regulation.
> - As factory default ID is 0, so please assign different, individual IDs for each actuator from ID0~253 for daisy chain connection. 


### 4.2.2. Data Map
#### 4.2.2.1. IR Protocol
##### 4.2.2.1.1. Data Memory Map    
 **Memory using data (Non-volatile)**
	- Data to be saved in non-volatile memory which maintains data even after power OFF/ON. 
	- All data will be reset to default value when Factory Reset command is executed. 

|Address|Name|Description|Access|Default|
|---|---|---|---|---|
|0 (0x00)|Model Number(L)|Lower byte of Model number|R||
|1 (0x01)|Model Number(H)|High byte of Model number|R||
|2 (0x02)|Version of Firmware|Firmware version info|R|-|
|3 (0x03)|ID|Servo ID|RW|0 (0x00)|
|4 (0x04)|Baud Rate|Communication Speed|RW|32 (0x20)|
|6 (0x06)|Short Stroke Limit(L)|Lower byte of Short Stroke Limit|RW|0 (0x00)|
|7 (0x07)|Short Stroke Limit(H)|High byte of Short Stroke Limit|RW|0 (0x00)|
|8 (0x08)|Long Stroke Limit(L)|Lower byte of Long Stroke Limit|RW|102 (0x66)|
|9 (0x09)|Long Stroke Limit(H)|High byte of Long Stroke Limit|RW|14 (0x0E)|
|10 (00x0A)|Protocol Type|Comm. Protocol (MODBUS RTU or  IR Open)|RW|0x01 (IRPROTOCOL)|
|12 (0x0C)|the Lowest Limit Voltage|Lowest Voltage Limit|R|Each SPEC|
|13 (0x0D)|the Highest Limit Voltage|Highest Limit Voltage|R|Each SPEC|
|14 (0x0E)|Motor Operating Rate(L)|Lower byte of Motor Operating Rate|RW|255 (0xFF)|
|15 (0x0F)|Motor Operating Rate (H)|High byte of Motor Operating Rate|RW|3 (0x03)|
|16 (0x10)|Feedback Return Mode|Feedback Return Mode|RW|1 (0x01)|
|17 (0x11)|Alarm LED|Alarm LED Function|RW|33 (0x21)|
|18 (0x12)|Alarm Shutdown|Alarm Shutdown Function|RW|33(0x21)|
|19 (0x13)|Start Compliance Margin|Start Compliance Margin|RW|Each SPEC|
|20 (0x14)|End Compliance Margin|End Compliance Margin|RW|Each SPEC|
|21 (0x15)|Speed Limit(L)|Lower byte of average motor speed limit|RW|255(0xFF)|
|22 (0x16)|Speed Limit(H)|High byte of average motor speed limit|RW|3(0x03)|
|24 (0x18)|Calibration Short Stroke (L)|Lower byte of Calibration Short Stroke|R|0 (0x00)|
|25 (0x19)|Calibration Short Stroke (H)|High byte of Calibration Short Stroke|R|0 (0x00)|
|26 (0x1A)|Calibration Long Stroke (L)|Lower byte of Calibration Long Stroke|R|255 (0xFF)|
|27 (0x1B)|Calibration Long Stroke (H)|High byte of Calibration Long Stroke|R|15 (0x0F)|
|33 (0x21)|Acceleration Ratio|Moving Acceleration Ratio|RW|Each SPEC|
|34 (0x22)|Deceleration Ratio|Moving Deceleration Ratio|RW|Each SPEC|
|35 (0x23)|Current I Gain|Current Integral Gain|RW|Each SPEC|
|36 (0x24)|Current P Gain|Current Proportional Gain|RW|Each SPEC|
|37 (0x25)|Speed D Gain|Derivative Gain|RW|Each SPEC|
|38 (0x26)|Speed I Gain|Integral Gain|RW|Each SPEC|
|39 (0x27)|Speed P Gain|Proportional Gain|RW|Each SPEC|
|46 (0x2E)|Min Position Calibration|Min Position Value Trim|RW|Each SPEC|
|47 (0x2F)|Max Position Calibration|Max Position Value Trim|RW|Each SPEC|
|52 (0x34)|Current Limit (L)|Lower Byte of Current Limit|RW|32 (0x20)|
|53 (0x35)|Current Limit (H)|High Byte of Current Limit|RW|3 (0x03)|

##### 4.2.2.1.2. Parameter Map    
**Parameter Using Data (Volatile)  **
	- All data to be reset to default value whenever power is On.

| Address    | Name                             | Description                                | Access | Default       |
|:-----------|:---------------------------------|:-------------------------------------------|:-------|:--------------|
| 128 (0x80) | Force ON/OFF                     | Force On/ Off                              | RW     |    1 (0x01)** |
| 129 (0x81) | LED                              | LED On/Off                                 | RW     |      0 (0x00) |
| 134 (0x86) | Goal Position(L)                 | Low byte of Goal position value            | RW     | -             |
| 135 (0x87) | Goal Position(H)                 | High byte of Goal position value           | RW     | -             |
| 136 (0x88) | Goal Speed(L)                    | Low byte of Goal speed value               | RW     | Speed Limit   |
| 137 (0x89) | Goal Speed(H)                    | High byte of Goal speed value              | RW     | Speed Limit   |
| 138 (0x8a) | Goal Current(L)                  | Low byte of Goal curent value              | RW     | Current Limit |
| 139 (0x8b) | Goal Current(H)”                 | High byte of Goal curent value             | RW     | Current Limit |
| 140 (0x8C) | Present Position(L)              | Low byte of present position value         | R      | -             |
| 141 (0x8D) | Present Position(H)              | High byte of present position value        | R      | -             |
| 142 (0x8e) | Present Current (L)              | Low byte of present Current                | R      | -             |
| 143 (0x8f) | Present Current (H)              | High byte of present Current               | R      | -             |
| 144 (0x90) | Present Motor Operating Rate (L) | Low byte of present motor operating value  | R      | -             |
| 145 (0x91) | Present Motor Operating Rate (H) | High byte of present motor operating value | R      | -             |
| 146 (0x92) | Present Voltage                  | Current voltage                            | R      | -             |
| 150 (0x96) | Moving                           | Moving status                              | R      |      0 (0x00) |  

<font color="#ff0000">**Applied from firmware ver.2.0 or higher </font>  

#### 4.2.2.2 MODBUS RTU (이 부분만 모드버스 매뉴얼에서)    
##### 4.2.2.2.1 Data Memory Map    
- Multi write function is not supported. 
- All data will be reset to default value when Reset command is executed. 

|    Address    |    addr      |    Name                                    |    Access    |    Default          |    MIN    |    MAX     |    Type                     |
|:--------------|:-------------|:-------------------------------------------|:-------------|:--------------------|:----------|:-----------|:----------------------------|
|      40001    |    0x0000    |    Model Number                            |    R         |    -                |           |            |                             |
|      40002    |    0x0001    |    Version of Firmware                     |    R         |    -                |           |            |   ^                         |
|      40003    |    0x0002    |    ID                                      |    RW        |                1    |      1    |     247    |   ^                         |
|      40004    |    0x0003    |    Baud Rate                               |    RW        |         32(0x20)    |     16    |     128    |   ^                         |
|      40005    |    0x0004    |    Protocol Type (MODBUS RTU / IRROBOT)    |    RW        |                0    |      0    |       1    |   ^                         |
|      40006    |    0x0005    |    Short Stroke Limit                      |    RW        |        0(0x0000)    |      0    |    4095    |   ^                         |
|      40007    |    0x0006    |    Long Stroke Limit                       |    RW        |    Individual Spec           |      0    |    4095    |   ^                         |
|      40008    |    0x0007    |    Lowest Limit Voltage                    |    R         |               70    |    -      |    -       |   ^                         |
|      40009    |    0x0008    |    Highest Limit Voltage                   |    R         |              130    |    -      |    -       |   ^                         |
|      40010    |    0x0009    |    Alarm LED                               |    RW        |               33    |    -      |    -       |   ^                         |
|      40011    |    0x000a    |    Alarm Shutdown                          |    RW        |               33    |    -      |    -       |   ^                         |
|      40012    |    0x000b    |    Start Compliance Margin                 |    RW        |                7    |      0    |     255    |   ^                         |
|      40013    |    0x000c    |    End Compliance Margin                   |    RW        |                2    |      0    |     255    |   ^                         |
|      40014    |    0x000d    |    Speed Limit                             |    RW        |             1023    |      0    |    1023    |   ^                         |
|      40015    |    0x000e    |    Current Limit                           |    RW        |              800    |      0    |    1600    |   ^                         |
|      40016    |    0x000f    |    Calibration Short Stroke                |    R         |    Individual Spec           |      0    |    4095    |   ^                         |
|      40017    |    0x0010    |    Calibration Long Stroke                 |    R         |    Individual Spec           |      0    |    4095    |   ^                         |
|      40018    |    0x0011    |    Acceleration Ratio                      |    RW        |    Individual Spec           |      0    |     255    |   ^                         |
|      40019    |    0x0012    |    Deceleration Ratio                      |    RW        |    Individual Spec           |      0    |     255    |   ^                         |
|      40020    |    0x0013    |    Current I Gain                          |    RW        |    Individual Spec           |      0    |     255    |   ^                         |
|      40021    |    0x0014    |    Current P Gain                          |    RW        |    Individual Spec           |      0    |     255    |   ^                         |
|      40022    |    0x0015    |    Speed D Gain                            |    RW        |    Individual Spec           |      0    |     255    |   ^                         |
|      40023    |    0x0016    |    Speed I Gain                            |    RW        |    Individual Spec           |      0    |     255    |   ^                         |
|      40024    |    0x0017    |    Speed P Gain                            |    RW        |    Individual Spec           |      0    |     255    |   ^                         |
|      40025    |    0x0018    |    Min Stroke Position                     |    RW        |    Individual Spec           |      0    |     255    |   ^                         |
|      40026    |    0x0019    |    Max Stroke Position                     |    RW        |    Individual Spec           |      0    |     255    | Non-Volatile          |
|               |              |                                            |              |                     |           |            |                             |
|      40051    |    0x0032    |    Force ON/OFF                            |    RW        |              1**    |      0    |       1    |                             |
|      40052    |    0x0033    |    LED                                     |    RW        |                0    |      0    |     255    |  ^                          |
|      40053    |    0x0034    |    Goal Position                           |    RW        |    -                |      0    |    4095    |  ^                          |
|      40054    |    0x0035    |    Goal Speed                              |    RW        |    Speed Limit      |      0    |    1023    |  ^                          |
|      40055    |    0x0036    |    Goal Current                            |    RW        |    Current Limit    |      0    |    1600    |  ^                          |
|      40056    |    0x0037    |    Present Position                        |    R         |    -                |      0    |    4095    |  ^                          |
|      40057    |    0x0038    |    Present Current                         |    R         |    -                |      0    |    1600    |  ^                          |
|      40058    |    0x0039    |    Present Motor Operating Rate            |    R         |    -                |      0    |    2048    |  ^                          |
|      40059    |    0x003a    |    Present Voltage                         |    R         |    -                |      0    |     255    |  ^                          |
|      40060    |    0x003b    |    Moving                                  |    R         |    -                |      0    |       1    |  ^                          |
|      40061    |    0x003c    |    Hardware Error State                    |    R         |                0    |      0    |     255    | Volatile              |  

<font color="#ff0000">** from firmware 2.0 or above</font>

### 4.2.3. Data Description
#### 4.2.3.1. Non-Volatile Memory

1. Model Number   
	The model number of MightyZAP
	"Read" only to discriminate & recognize concerned model

2. Version of Firmware  
   Check if current firmware is the latest version. 
3. ID (1~247 / Default : 1)
	ID to discriminate each servo.  Different IDs should be assigned in Daisy-Chain system. (Default ID : 1)
	- In case of ID = 0, it is operated under "Broadcasting Mode (move all actuators)" and Feedback Packet does not work.
	- In case of ID = 1 ~247, ID "N" which is stored in the servo will be operated individually. 
> 	ID is a non-volatile memory area. If you change the data, communication may stop for a short time during saving process. Therefore, please be careful of frequent value changes during operation.
4. Baud Rate  
	Determining communication speed.  Default value is 57600bps
	Servo system MUST be rebooted to apply changed baud rate to the actuator.

**Setting Value** 

|Value |Baud Rate(bps)|
|---|---|
|16 (0x10)|115200|
|32 (0x20)|57600|
|48(0x30)|38400|
|64 (0x40)|19200|
|128 (0x80)|9600|
 

> Baud Rate is a non-volatile memory area. If you change the data, communication may stop for a short time during saving process. Therefore, please be careful of frequent value changes during operation.

> In old Firmware version 1.5 or lower, Baudrate 38400bps is not provided. 

5. Stroke Limit (0~4095)  
   Stroke limit between Short Stroke (A) and Long Stroke (C) which is the max/min. value of Goal Position. If the Goal Position value is smaller than the Short Stroke Limit value or greater than the Long Stroke Limit value, Goal Position value is replaced with the Stroke Limit value. 

   (Range : 0 ~ 4095 )
   ![[StrokeLimit.png]]
> Stroke limit is a non-volatile memory area. If you change the data, communication may stop for a short time during saving process. Therefore, please be careful of frequent value changes during operation.

6. Protocol type (Default : IR Protocol)
Select the communication protocol method.

|Value|Protocol|Description|
|---|---|---|
|0 (0x00)|MODBUS RTU|Industrial RS485 Standard Communication Protocol  <br>※Refer to the separate MODBUS Protocol user manual|
|1(0x01)|IR Protocol|IRROBOT Open Protocol|


> non-volatile memory area. If you change the data, communication may stop for a short time during saving process. Therefore, please be careful of frequent value changes during operation.

> In old Firmware version 1.5 or lower, only IR Protocol is provided. (MODBUS available from V2.0 or higher) 

7. The Highest / Lowest Limit Voltage
  Max/Min. value of input voltage (unit : 0.1V)
  According to input voltage, speed and force of actuator can be varied. 
  For detailed info, please refer to the data sheet of each model.

|Input Volt|Default Value|
|---|---|
|Lowest Voltage|7.0 [V]|
|Highest Voltage|13 [V]|
- If higher voltage than 13V supplied, input voltage error will be triggered and motor power will be shutdown. 

8. Motor Operating Rate (0~1023 / Default : 1023)
   It represents the maximum operating rate of the motor and the maximum PWM value supplied to the motor. If it is set to less than 400, the motor may not operate. Please note that changing the Motor Operating Rate also changes the speed and stall force.
>    non-volatile memory area. If you change the data, communication may stop for a short time during saving process. Therefore, please be careful of frequent value changes during operation.

9. Feedback Return Mode
  Feedback packet return mode after receipt of Command Packet
  
|Mode|Feedback Packet Return or NOT|
|---|---|
|0|Do NOT sending Feedback packet for all Commands. (Except for Echo command)|
|1|Sending Feedback packet only for Load Data Command.|
|2|Sending Feedback packet for all Commands.|
  
> non-volatile memory area. If you change the data, communication may stop for a short time during saving process. Therefore, please be careful of frequent value changes during operation.

> Under Broadcast ID(0xFE) mode, feedback packet will NOT be sent regardless values of Feedback Return Mode.

10. Alarm LED  (Default : 33)  
    If concerned bit is set as "1" when error occurs, error LED indication will be activated. (1 : activate, 0: deactivate)

|Error|bit|LED Indicate|
|---|---|---|
|Overload Error|5|Red Blink|
|Input Voltage Error|0|Red Steadily ON|
In case of Input Voltage Error, the alarm is immediately cleared when the error is resolved.
In case of Overload Error, the alarm is not cleared even after overload condition is resolved, but can be cleared by rebooting the power or restarting the system.
> non-volatile memory area. If you change the data, communication may stop for a short time during saving process. Therefore, please be careful of frequent value changes during operation.  


<font color="#ff0000">11. Alarm Shutdown (Default : 33) ★국문이랑 내용다름★</font> 
    Force will be OFF if concerned bit is set as "1" when error occurs. (1 : activate, 0: deactivate)

|Error|bit|
|---|---|
|NONE|7|
|NONE|6|
|Overload Error|5|
|NONE|4|
|NONE|3|
|NONE|2|
|NONE|1|
|Input Voltage Error|0|

Lowest input voltage의 경우 모터가 Force Off(shutdown) 되지는 않습니다.   
highest voltage 및 Overload Error의 경우 Force Off (shutdown) 되며, 전원 재 부팅 또는 System Restart 명령을 내려야 shutdown이 해제됩니다.  

> <font color="#245bdb">> **TIP  ** </font>
> <font color="#245bdb">> Overload 보호 자동 shutdown기능은 공장 출하 시 활성화 되어 출하되며, 나머지 기능도 사용자 필요에 따라 서보 매니저 프로그램을 통해 활성화 / 비활성화가 가능합니다.</font>  

> 비휘발성 메모리 영역입니다. 데이터를 변경할 경우 저장하는 동안 통신이 짧은 시간 멈출 수 있습니다. 운영 중 빈번한 값의 변경은 주의하시기 바랍니다.  

12. Compliance Margin
    
    - Start Compliance Margin(Long/Short) / 시작점 컴플라이언스 마진(권장 Margin 값 : 7)
	    - Minimum margin value for the servo actuator to start position movement.
	    - For example, if the compliance margin is 7 and the current position value is 400, motor start will be made when positional value between 407(400+7) and 393(400-7) is set. 
	    - Likewise, when the positional change occurs by more than +/-7(out of 393~407) from the present position value due to physical external pressure or electrical noise, the motor starts to run to compensate position.
	    - For this reason, the larger this value means more stable operation without jittering even in the environment where the external pressure, electrical noise, or the clearance increases, but the sensitivity to drive to the desired position may be reduced. In other words, generally, increasing this value increases durability, and reducing it increases precision.
	    - This value must be equal to or greater than the "End compliance margin value" described below.  Setting it to a lower value may cause an error.

      - End Compliance Margin (Recommended margin value : 4)
	      - Minimum margin value for the servo actuator to complete position movement. 
	      - For example, if actuator is instructed to move to a position value of 400, and assuming that it cannot physically stop at a position value of 400 exactly due to software & mechanical clearance, acceleration, etc. of the servo, End compliance margin will be a criteria to judge if the positional command has been performed properly. If this value is set to 4 and the position command value is set to 400, actuator judges that positional movement has been made properly when it reaches within 396~404 range and then stop movement.
	      - If this value is increased for stable operation, you should not increase it beyond the "Start Compliance Margin” value which is described above, and if this value is decreased too much to increase the accuracy, it may bring adverse effect such as jitter.
	      - The smaller the End Compliance Margin, the more sensitive and better the positioning accuracy. However, if it is reduced below a certain value, the effect becomes insignificant.
	      - If the End Compliance Margin is increased, the operation becomes cleaner and more stable when the target position is reached. Especially, the faster the product, the better the effect. However, if it is too large, conversely, the precision may deteriorate.
> 	      - non-volatile memory area. If you change the data, communication may stop for a short time during saving process. Therefore, please be careful of frequent value changes during operation.

13. Current Limit (0~1600 / Default : 800)  
	- 모터의 최대 전류 제한 값입니다(0~1600). 즉, 모터의 최대힘인 stall 전류를 제어하여 stall force를 조정합니다.  
	- 제어값은 0~1600으로 설정하며, 제어값 1600은 최대 stall 전류값 1600mA를 나타냅니다. (오차범위 :+/-15%)  
	- 공장 출하시에는 800(mA)으로 셋팅되어 유사시 불필요한 최대 stall 전류사용을 방지하되, 최대속도를 보장합니다.   
	- Current Limit를 높게 설정할수록 과부하 상황에서 모터가 낼 수 있는 최대 force도 올라가지만, 모터 수명단축의 원인이 될 수도 있습니다.  
	- 메모리에 저장되는 비휘발성 파라메터인 Current Limit 값은 초기설정에서만 설정하시기를 권장하며, 동작 중 빈번한 전류 변경은 휘발성 파라메터인 Goal Current명령을 사용하시기를 추천드립니다.                    
	- 비휘발성 Current Limit 값을 변경할 경우, 전원재인가시 휘발성 파라메터인 Goal Current 도 같이 변경됩니다.  
	- 제품마다의 내부 기구저항 편차에 따라 저전류(200mA이하) 설정에서는 액츄에이터의 동작이 불규칙하거나 움직이지 않을 수도 있으니, 가급적 200mA이상의 전류설정을 해 주시기 바랍니다.   
	- 전류설정에 따른 stall force값의 차이는 데이터 시트의 그래프를 참고하여 주십시오.   
> 	  비휘발성 메모리 영역입니다. 데이터를 변경할 경우 저장하는 동안 통신이 짧은 시간 멈출 수 있습니다. 운영 중 빈번한 값의 변경은 휘발성 파라메터인 Goal Current를 사용하시기 바랍니다.  

14. Speed Limit (0~1023 / Default : 1023)  
	- 모터의 평균 이동속도 제한 값입니다(0~1023). 0일 때 기동력 OFF 상태이고 1023일 때 최대 속도를 냅니다.  
	- Speed Limit 를 변경해도 Force에 영향을 주지 않습니다.  
	- 다만, 너무 낮은 Speed Limit 설정 시 모터의 반응이 늦어지거나 움직이지 못할 수 있습니다.   
	- Speed Limit 값을 변경할 경우 Goal Speed도 같이 변경됩니다.  
> 	  비휘발성 메모리 영역입니다. 데이터를 변경할 경우 저장하는 동안 통신이 짧은 시간 멈출 수 있습니다. 운영 중 빈번한 값의 변경은 주의하시기 바랍니다.  

> 	Firmware Version 1.5 에서의 Goal Speed와 같습니다.  

15. Calibration Stroke  
	- Calibration Short Stroke : Short Stroke위치 보정 값, 공장에서 설정된 Short Stroke Calibration 값을 저장  
	- Calibration Long Stroke : Long Stroke위치 보정 값,공장에서 설정된 Long Stroke Calibration 값을 저장  

16. Acceleration / Deceleration (0~255 / Default : Individual  사양)  
    ![[DataDescription_AccelerationDeceleration.png]]
	- 모터의 가감속률을 나타냅니다.  
	- Acceleration : 모터의 이동 시작 시의 가속도 값으로 값이 클 경우 모터가 급 가속을 하게 됩니다. 반대로 값이 낮을 경우 부드러운 가속을 하지만, 너무 낮을 경우 모터가 움직이지 않을 수도 있습니다.  
	- Deceleration : 모터의 위치 도달 시의 감속도 값으로 값이 클 경우 목표위치에서 급 감속을 하게 되어 목표 위치 값을 벗어나 정지하게 되고, 다시 벗어난 위치에서 목표위치로의 이동을 하게 되는 바운딩 현상이 나타나 정상적인 제동이 이루어지지 않을 수 있습니다. 너무 낮은 감속은 서보모터가 지나치게 느려지는 동작을 하게 되어 목표위치까지 도달하는 시간이 늦어질 수 있습니다.  
> 	  Acceleration / Deceleration 수정 시 작은 변화 값부터 적용하신 후 테스트 해주세요.  

> 	비휘발성 메모리 영역입니다. 데이터를 변경할 경우 저장하는 동안 통신이 짧은 시간 멈출 수 있습니다. > 운영 중 빈번한 값의 변경은 주의하시기 바랍니다.  

17. Current PI (0~255 / Default : Individual  사양)
	- 모터의 전류제어를 위한 PI 값  
	- 정해진 값이 보다 큰 PI값을 적용할 경우 Goal Current와의 오차에 대해 거칠게 동작할 수 있습니다.  
	- 정해진 값보다 작은 PI값을 적용할 경우 Goal Current와의 오차에 부드럽게 동작하나 Goal Current 값과의 오차가 크게 나타날 수 있습니다.  
> 	  수정 시 작은 변화 값부터 적용하신 후 테스트 해주세요.    
> 	  비휘발성 메모리 영역입니다. 데이터를 변경할 경우 저장하는 동안 통신이 짧은 시간 멈출 수 있습니다. 운영 중 빈번한 값의 변경은 주의하시기 바랍니다.   

18. Speed PID (0~255 / Default : Individual  사양)  
	- 모터의 속도제어를 위한 PID 값  
	- 정해진 값이 보다 큰 PID값을 적용할 경우 Goal Speed와의 오차에 대해 거칠게 동작하여 Overshoot 또는 과도 응답상태로 정해진 위치 값에 정지하지 못하고 모터가 진동할 수 있습니다.  
	- 정해진 값보다 작은 PI값을 적용할 경우 Goal Speed 와의 오차에 부드럽게 동작하나 Goal speed 값과의 오차가 크게 나타날 수 있습니다.  
> 	  수정 시 작은 변화 값부터 적용하신 후 테스트 해주세요.    
> 	  비휘발성 메모리 영역입니다. 데이터를 변경할 경우 저장하는 동안 통신이 짧은 시간 멈출 수 있습니다.  운영 중 빈번한 값의 변경은 주의하시기 바랍니다.  

19. Min/Max Position Calibration (0~255 / Default : Individual  사양)  
	- Min Position : Goal Position의 값이 ‘0’일경우 최소 Stroke의 위치  
	- Max Position : Goal Position의 값이 ‘4095’일경우 최대 Stroke의 위치  
	  ![[Min.MaxPositionCalibration.png]]
	  - Stroke Limit 명령과는 달리 Goal Position의 범위[0~4095]가 제한되지 않고 실제 사용 Stroke의 길이의 변화가 생깁니다.  
	- 각 서보모터의 출하 시 Min/Max Position 값은 ±0.5mm의 오차를 가지고 있습니다. 해서, Position Calibration 명령은 각 오차의 값을 보정하여, 동일한 Goal Position 값에 대한 약간씩 다른 서보들의 시작위치와 종료위치를 동기화 시킬 때 사용합니다.  

| Parameter| Goal Position 범위| 비고|
|---|---|---|
| Stroke Limit| Short Stroke Limit ~ Long Stroke Limit | 가용 스트로크 범위 제한 없이,입력범위(0~4095)만 제한            |
| Position Calibration |0~4095(최대사용) | 입력범위 (0~4095) 제한은 없으나, 가용 스트로크 범위가 변동될 수 있음. |  
(예, 12Lf-20F-27의 Min Position 3.8mm/ Min Position Calibration값이 5 일 경우, Min Position Calibration 값을 높이면 Min Position 값이 늘어나고 전체 Stroke 구간은 Min Position이 늘어남만큼 줄어들게 됩니다.)   
> 비휘발성 메모리 영역입니다. 데이터를 변경할 경우 저장하는 동안 통신이 짧은 시간 멈출 수 있습니다. 운영 중 빈번한 값의 변경은 주의하시기 바랍니다.  


#### 4.2.3.2. 휘발성 메모리 영역    
20. Force ON/OFF (Default : 1 / Force ON)
    - 기동력 활성화 여부 설정 ( 0일 때 OFF, 1일 때 ON)  
    
|value|동작상태|
|---|---|
|0|모터의 전원을 차단하여서 기동력이 발생 되지 않도록 합니다.|
|1|모터의 전원을 인가하여서 기동력이 발생하도록 합니다.|
> <font color="#245bdb">> **TIP**</font>
> <font color="#245bdb">> 당사 리니어 서보는 모터의 전원이 해제되어도 기구적인 설계 특성상 위치를 고수하려는 특성이 있습니다. 27N이상 정격부하 사양의 제품은 전원 차단 시에도 기구적인 마찰력으로 위치를 고수합니다. 따라서, 설비에서 서보 모터가 특정 위치를 지속적으로 고수하고 있어야 하는 경우 Force Off 명령으로 모터 전원을 차단하여 모터의 수명을 연장시킬 수 있습니다. 이 경우 통신은 여전히 유지되며, 모터의 전원만 차단됩니다. 다시 위치 이동 명령을 내리게 되면 자동으로 Force ON되어 다음 명령을 수행하게 됩니다.</font>

21. LED
	- Error 표시가 되지 않을 때 사용자가 임의로 LED 제어하여 디스플레이 효과를 낼 수 있음.   (LED에러표시가 우선) 

|bit|동작상태|
|---|---|
|0|LED Disable (1일 때 모두 꺼짐)|
|1|RED LED 제어|
|2|GREEN LED 제어|

22. Goal Position (0~4095)
	- 목표 위치의 값. 이동 시키고자 하는 위치 값입니다. 목표위치 값은 Short/Long stroke limit 설정치에 영향을 받습니다. (즉, stroke limit 범위 밖으로는 위치 명령을 내려도 stroke limit위치까지만 움직임)  
	- 27mm stroke제품의 경우, Long stroke limit설정으로 인해 27mm에서의 Goal position 값은 3686입니다. 원할 경우 30mm(4095)로 늘려 사용할 수 있습니다.   

23. Goal Speed (0~1023 / Default : 1023)
	- 모터의 평균 이동속도 목표값(0~1023). 액츄에이터의 동작 중 속도변경을 원하는 경우 사용합니다.   
	- 초기 전원 인가시 비휘발성 Speed Limit에서 값을 불러와 Goal Speed에 저장합니다.  
	- Speed Limit 명령보다 빠르게 반응하며, 가동 중 실시간으로 속도를 변경하는 데 사용할 수 있습니다.  
	- 0일 때 기동력 OFF 상태이고 1023일 때 최대 속도를 냅니다.  
	- Goal Speed를 변경해도 Force에 영향을 주지 않습니다.  
	- 다만, 너무 낮은 값을 설정 시 모터의 반응이 늦어지거나 움직이지 못할 수 있습니다.   

24. Goal Current (0~1600 / Default : 800)
	- 모터의 최대 전류 제한 값입니다(0~1600). 즉, 모터의 최대힘인 stall 전류를 제어하여 stall force를 조정합니다.  
	- 기능적으로는 비휘발성 파라메터인 Current Limit과 동일하지만, 동작중의 빈번한 전류설정 변경은, 응답이 빠른 휘발성 파라메터인 Goal Current 명령을 사용하시기 바랍니다.   
	- 제어값은 0~1600으로 설정하며, 제어값 1600은 최대 stall 전류값 1600mA를 나타냅니다. (오차범위 :+/-15%)  
	- 공장 출하시에는 800(mA)으로 셋팅되어 유사시 불필요한 최대 stall 전류사용을 방지하되, 최대속도를 보장합니다.   
	- Stall force에 가깝게 Goal Current를 설정할수록 과부하 상황에서 모터가 낼 수 있는 최대 force도 올라가지만, 모터 수명단축의 원인이 될 수도 있습니다.  
	- 메모리에 저장되는 비휘발성 파라메터인 Current Limit 값은 초기설정에서만 설정하시기를 권장하며, 동작 중 빈번한 전류 변경은 휘발성 파라메터인 Goal Current명령을 사용하시기를 추천드립니다.                    
	- 비휘발성 Current Limit 값을 변경할 경우, 전원재인가시 휘발성 파라메터인 Goal Current 도 같이 변경됩니다.  
	- 제품마다의 내부 기구저항 편차에 따라 저전류(200mA이하) 설정에서는 액츄에이터의 동작이 불규칙하거나 움직이지 않을 수도 있으니, 가급적 200mA이상의 전류설정을 해 주시기 바랍니다.   
	- 전류설정에 따른 stall force값의 차이는 데이터 시트의 그래프를 참고하여 주십시오.   

25. Present Position [0~4095]
	- 현재 Stroke 위치 값을 나타냅니다.  
	- 0~4095의 범위로 표시되며 모터가 정지한 후에도 margin 값 이내의 미세한 위치 변동이 나타날 수 있으며 이는 정상동작입니다.  

26. Present Motor Operating Rate [0~2047]
	- Motor의 현재 가동률의 값 입니다.   
	- Goal current와 Goal speed, 가감속 조정등에 따라 달리 표시됩니다.   
	- 0~2047의 범위로 표시 됩니다.  
	- 0은 모터가 정지한 상태를 나타냅니다.  
	- 1~1023 범위의 값은 Short Stroke(수축) 방향으로의 모터 가동률 상태이고,  
	- 1024~2047 범위의 값은 Long Stroke(확장) 방향으로의 모터 가동률 상태입니다.  

27. Present Current [0~1600]
	- Motor의 현재 전류 사용 값 입니다.  
	- 0~1600의 범위로 표시 됩니다.  
	- 전류 값은 실제 전류값의 오차를 포함한 값으로, 참고 용도로 사용하시기 바랍니다.  

28. Present Voltage
	- 현재 입력 전압 값이며 단위는 0.1V입니다.  
	- 예를 들어, 74이면 7.4V입니다.  

29. Moving
	- 움직임 유무  

|Value|Description|
|---|---|
|0|Motor 정지 상태|
|1|Motor 가동 중|


'''## 4.2. 통신
''### 4.2.1. Specification
<font color="#ff0000">''### 4.2.2. Packet Description (삭제) </font>
''### 4.2.3. Data Map
''### 4.2.4. Data Description
<font color="#ff0000">''### 4.2.5. Command 예제 Packet (삭제)</font>
# 5. 별매 악세서리
## 5.1. 메탈 브라켓 (IR-MB02/IR-MB03/IR-MB04) 

![[ACC_IR-MB02.png]]
 - IR-MB02  
![[ACC_IR-MB03.png]]
- IR-MB03  
![[ACC_IR-MB04.png]]
- IR-MB04  
IR-MB02는 27mm 스트로크 제품 전용 가로 고정 브라켓입니다. 수직/전면 고정을 위해 IR-MB04를 사용하시기 바랍니다. 41/56/96mm 스트로크 제품은 케이스에 내부 장착된 마운팅 홀을 통해 취부가능하지만, 전용 IR-MB03을 통해 보다 유연한 설치가 가능합니다.  도면을 공개하고 있어, 고객사에서 직접 제작도 가능합니다.    
## 5.2. PC USB Interface (IR-USB02)
![[ACC_IR-USB02.png]]
IR-USB02을 사용하면 PC를 통하여 아래와 같은 제어를 할 수 있습니다.   
전용 PC 소프트웨어 mightyZAP Manager가 제공됩니다.  
![[mightyZAPManager.png]]
- 운용 파라메터 및 저장 메모리 셋팅
- 모션 테스트
- 전압, 온도, 현재 위치, 전류, 전압, 모터 가동률 모니터링
- 시스템 초기화 및 펌웨어 업데이트

## 5.3. 엔드베어링 (IR-EB01)
![[ACC_IR-EB01.png]]
브라켓을 통한 고정이 아닌, 로드엔드와힌지부에 베어링을 장착하여 최적의 설치 및 운용이 가능하도록 합니다. M2.5와 M3규격의 엔드베어링 1셋트를 구성합니다.  

## 5.4. 아두이노 기반 EZ Controlller (IR-CT01)
![[ACC_IR-CT01.png]]
제어기가 없는 고객사를 위한 mightyZAP전용 컨트롤러/테스터
간단한 조작의 아두이노 기반 컨트롤러
기본 제어 프로그램 내장, 사용자 프로그래밍 가능 (아두이노 예제 제공)
위치 지정 다이얼, 위치명령 버튼스위치, 위치명령 슬라이드 내장
외부 스위치 또는 전압레벨 신호를 통한 제어 가능
아날로그/디지털 센서 연결을 위한 별도 3개씩의 I/O 핀 제공
블루투스 또는 지그비(Zigbee) 통신을 위한 외부통신 단자

## 5.5. 라즈베리파이 HAT (IR-STS02)
![[ACC_IR-STS02.png]]
Raspberry Pi B3 또는 Raspberry Pi Zero에 호환되는 HAT(Hardware Attached on Top) 보드입니다. mightyZAP Raspberry Pi HAT 제품은 40 GPIO 핀을 통해서 라즈베리파이의 위에 바로 결합할 수 있는 제품입니다. TTL, RS-485, PWM 통신 인터페이스와 GPIO핀을 내장하고 있어 Raspberry Pi를 통한 mightyZAP 제어가 가능합니다. 

## 5.6. 별매 익스텐션 와이어 (IR-EW01~10)
![[ACC_IR-EW00.png]]
산업현장에서 필요에 따라 사용할 수 있는 확장된 길이의 익스텐션 와이어입니다. 
- IR-EW01 :Extension wire - 3pin TTL 1000mm
- IR-EW02 :Extension wire - 3pin TTL 2000mm
- IR-EW03 :Extension wire - 4pin RS-485 2000mm
- IR-EW04 :Extension wire - 4pin RS-485 4000mm
- IR-EW08 :Extension wire - 3pin TTL 500mm
- IR-EW09 :Extension wire - 4pin RS-485 500mm
- IR-EW10 :Extension wire - 4pin RS-485 1000mm
쉴드 처리가 되어 있지 않으므로 노이즈 환경이 많은 설비에서는, 별도의 쉴드 와이어를 사용하시기 바랍니다. 배선을 위한 커넥터와 커넥터 터미널은 당사에서 별도로 구매가 가능합니다.

## 5.7. 로드앤드 팁 (IR-GT01) 
![[ACC_IR_GT01.png]]
Rod-End Grip Tip은 mightyZAP의 rod end에 연질의 패드가 부착된 팁을 장착하여, 어플리케이션 대상체에 물리적인 손상을 주지 않도록 하는 제품입니다. 예를 들어, Flat grip tip에 고무/실리콘 패드를 부착하여, 상처나기 쉬운 물체를 밀거나 접촉하여 제어할 때, 또는 실리콘의 마찰력을 이용해서 물체를 잡거나 들어올릴 때 사용할 수 있습니다.


> 추가적인 악세서리 정보는 당사 웹사이트의 악세서리 메뉴를 참고하시기 바랍니다. 
 

# 6. 보증 및 수리
## 6.1. 보증 및 수리
마이티잽의 보증기간은 구매일로부터 1년입니다. 보증 수리를 받기 위해서는 제품 구매일을 증명할 수 있는 영수증 등을 지참하시어 구매처 또는 본사 고객만족실로 문의를 하여 주시기 바랍니다.  단, 정상적인 기어의 마모, 와이어 피복의 벗겨짐, 모터의 소손 등 사용자의 오용과 과실에 따르는 문제는 보증에서 제외됩니다. 또한, 임의 분해 및 임의 수리에 따르는 고장 또한 보증 대상에서 제외되오니, 모든 수리는 지정된 업체에 의해 진행되어야 함을 양지하여 주시기 바랍니다.  



> (주) 아이알로봇 고객만족실 070-7600-9466 / 경기도 부천시 원미구 평천로 655 부천테크노파크 401동 1303호 /   이메일 :cs@irrobot.com



  