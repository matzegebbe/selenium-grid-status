## docker start

```
docker build -t matzeihn/selenium-hub-export .
docker run -d --name selenium-hub-export -p $LOCAL_WEB_PORT:4445 matzeihn/selenium-hub-export $SELENIUM_HUB_IP $SELENIUM_HUB_PORT
docker run -d --name selenium-hub-export -p 4445:4445 matzeihn/selenium-hub-export 172.20.73.182 4444
```
