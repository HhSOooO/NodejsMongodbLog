# 开发日记

### 2021/12/05

在老师带领下创建NodejsMongodbLog文件夹

### 2021/12/08

新增index.html

熟悉相关功能

安装express、ejs等环境

并且在一开始上传失败后，通过terminal进行手动上传，所以最终以开发日记为准

### 2021/12/25

确定主题为理发预约系统

用户注册登录界面分为管理员与顾客两个不同身份

顾客可以进行预约

管理员可以进行设置会员的操作

### 2021/12/27

建立了远程仓库

完成了前端界面的大体设计

### 2021/12/29

完成所有前端界面的设计

完成登录注册功能设计

### 2021/12/30

完成后端设计

在调试中好好区分了(req, res) => {}与function(req,res,next){}两者

能进行整体无错运行

### 2022/01/01

进行页面最终美观与完善小细节

### 2022/01/02

上传github，同时进行部署。

# 项目设计部分

## 1）项目总体构成

项目主要由两个模块构成——顾客与管理员

主要完成顾客预约注册登录即对数据库曾删改的操作

以及管理员在总用户列表中更改会员信息即对于数据库查改的操作

## 2）引入的包在项目中的作用相关说明

（1）ejs

进行基本html的操作。

（2）express

Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。通过向模板传递参数来动态渲染HTML页面。

（3）mongoose

方便进行对mongodb数据库进行曾删改查的各项操作，贯穿整个项目使用。

## 3）项目目录结构和各个部分的说明

主页显示基本信息以及实现各界面跳转

登录实现顾客与管理员不同的登录

注册实现新顾客输入新数据

预约使顾客进行填写具体预约信息

管理员可看到会员信息并且进行更改操作

# 使用说明书

### 1.主页

![Screenshot from 2022-01-01 11-54-29](/home/osuser/0807project/NodejsMongodbLog/readme/Screenshot from 2022-01-01 11-54-29.png)

### 2.登录

##### 2.1顾客成功登录-->跳转至首页

<img src="/home/osuser/0807project/NodejsMongodbLog/readme/Screenshot from 2022-01-01 11-58-06.png" alt="Screenshot from 2022-01-01 11-58-06" style="zoom:50%;" />

##### 2.2管理员成功登录-->跳转至会员列表界面

![Screenshot from 2022-01-01 12-02-57](/home/osuser/0807project/NodejsMongodbLog/readme/Screenshot from 2022-01-01 12-02-57.png)

##### 2.3登录失败-->重回登录界面

### 3.注册界面

注册成功回到登录界面需要重新登录

![Screenshot from 2022-01-01 12-04-31](/home/osuser/0807project/NodejsMongodbLog/readme/Screenshot from 2022-01-01 12-04-31.png)

### 4.发型信息界面

通过卡片的预定按钮实现预约跳转

![Screenshot from 2022-01-01 12-05-28](/home/osuser/0807project/NodejsMongodbLog/readme/Screenshot from 2022-01-01 12-05-28.png)

### 5.发型预约界面

预约成功后跳转至首页

![Screenshot from 2022-01-01 12-07-10](/home/osuser/0807project/NodejsMongodbLog/readme/Screenshot from 2022-01-01 12-07-10.png)

### 6.用户注销

注销成功后跳转至登录页面

![Screenshot from 2022-01-01 12-09-49](/home/osuser/0807project/NodejsMongodbLog/readme/Screenshot from 2022-01-01 12-09-49.png)

### 7.管理员会员管理界面

进行会员的登记与取消

![Screenshot from 2022-01-01 11-59-35](/home/osuser/0807project/NodejsMongodbLog/readme/Screenshot from 2022-01-01 11-59-35.png)