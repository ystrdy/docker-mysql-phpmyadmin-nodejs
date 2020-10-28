# MySQL PHPMyAdmin NodeJS

在Docker中运行MySQL、PHPMyAdmin和NodeJS

---

## 安装依赖

确保已经安装了以下软件：

* [Git](https://git-scm.com/downloads)
* [Docker](https://docs.docker.com/engine/installation/)
* [Docker Compose](https://docs.docker.com/compose/install/)

---

## 克隆项目

先安装[Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)，然后克隆项目到本地

```sh
git clone git@github.com:ystrdy/docker-mysql-phpmyadmin-nodejs.git
```

切换到项目目录

```sh
cd docker-mysql-phpmyadmin-nodejs
```

### 项目树

```sh
.
├─ .dockerignore
├─ .env
├─ .gitignore
├─ docker-compose.yml
├─ Dockerfile
├─ README.md
├─app
│  ├─ package-lock.json
│  ├─ package.json
|  ├─ node_modules
│  └─src
│     └─ index.js
└─data
    └─mysql
```

---

## 运行和停止项目

1. 启动

    ```sh
    docker-compose up -d --build
    ```

    **等待几分钟后**

    ```sh
    docker-compose logs -f # 查看日志
    ```

2. 打开浏览器

    * [http://localhost:3000](http://localhost:3000)
    * [http://localhost:8080](http://localhost:8080) PHPMyAdmin (用户名：root, 密码：root)

3. 停止并清理

    ```sh
    docker-compose down -v
    docker image rm docker-mysql-phpmyadmin-nodejs_app
    ```

---

## 使用Docker命令

### 数据库相关

#### 访问数据库

```sh
docker exec -it mysql bash
```

然后

```sh
mysql -u"$MYSQL_ROOT_USER" -p"$MYSQL_ROOT_PASSWORD"
```

### 使用mysql2连接数据库

```javascript
const mysql = require('mysql2/promise');
mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'test',
}).then(connection => {
    console.log('mysql connected.');
});
```
