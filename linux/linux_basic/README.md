# Linux basic

## Linux에 대해
Linux distro로
- Debian : Debian, Ubuntu, KNOPPIX(CD Linux)
- Red Hat : Fedora, RedHat Enterprise, CentOS, Vine Linux(Jp)
- Slackware : openSUSE(Novell), SUSE Linux Enterprise

등이 있고

**Kernel**(펌웨어의 느낌)
- Management the Memory, File System, CPU, Device, etc

가 있는데 상식으로 알아두고 Ubuntu만 알아도 대부분의 linux는 다 다룰 수 있게 된다.

### Linux Shell
linux kernal을 좀 더 쉽게 할 수 있도록 shell이란게 나왔다<br>
즉, 바깥족에서 kernel을 제어하고 조작하는데
Shell Teyps
 - sh (Bourne shell) : By Unix Shell, Super shell <최상위 근본이 되는 셀>
 - bash (Bourne-agin shell) : Super shell in Linux <리눅스의 가장 슈퍼셀>
 - csh (C shell) : C like syntax 
 - tcsh (Enhanced-C shell): c
 - ksh (korn shell) : by David Korn, Powerful Script Language
 - zch (Z shell) : Unix/GNU shell script, Powerful Script Language

등이 있다

### Linux File System Directories
- /**bin** : 기본 명령어
- /boot : for booting
- /dev : device file, cd-rom
- /**etc** : config, passwd, rc.d
- /home : user home dir
- /**lib** : shared library
- /media : ssd
- /opt : application software package
- /**proc** : process info
- /root : root home dir
- /**sbin** : 관리자용, ifconfig
- /srv : system data
- /**tmp** : temporary dir
- /**usr** : source or programs
- /usr/local
- /**var** : logs, ftp, spool, mail
- /**lost+found**

기본적으로 알아두어야 나중에 이해하기 쉬운 폴더들이라고 생각해야한다

### Linux Ports (IANA)
- **20**  FTP (data)
- **21**  FTP (Control)
- 22  **SSH** / rsync / rcp
- 23  **Telnet**
- 25  **SMTP** (Simple Mail Transfer)
- 465 SMTPS
- 43  whois
- 53  **DNS**
- 80   **HTTP**
- 443  **HTTPS**
- **110**  POP3
- 995  POP3S
- 123  NTP (Network Time Protocol)
- 143  IMAP2/4
- 993  IMAPS
- 514  SysLog

### Tip부분

- tab : 자동완성 기능
- 화살표 위, 아래 : 업다운 이전 작성한 명령어를 불러온다
- ! : 히스토리중에 찾아서 실행한다. 다만 가장 최근부터 옛날로 가게된다
- !! : 방금 실행한 명령어를 다시 실행한다
- 컨트롤 A, 컨트롤 D : 맨 앞으론 A 맨 뒤로는 D
- man : man<명령어>를 입력하면 명령어에 대한 설명이 나온다
- histroy : 내가 작성한 명령어 기록이 쭉 나온다

## 기본 명령어

`addUser`를 통해 일단 계정을 하나 만들자<br>
`adduser moiLee`입력시 초기 비밀번호를 입력하라고 한다<br>
패드워드를 입력하면 fullname을 입력하고 여러 질문이 나오는데 마지막 correct에서 Y를 입력하면 계정이 나오게 된다.<br>

이후 `cd /home`이란 유저 디렉토리로 이동한뒤 `ll`입력해보면 만들어져 있는 유저를 확인할 수 있다<br>
