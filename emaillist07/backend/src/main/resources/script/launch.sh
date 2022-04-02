#! /bin/bash

SERVICE_NAME=emaillist07
SCRIPT_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)
JAVA=$(whereis java | awk '{print $2}')
PID=$(ps -ef | grep java | grep $SERVICE_NAME.jar | awk '{print $2}')

if  [ ! -z "$PID" ] 
then
	echo "stopping [$1]"
	kill -9 $PID
	sleep 10
fi

echo "starting [$1]"
nohup $JAVA -Dspring.profiles.active=production -jar $SCRIPT_DIR/$SERVICE_NAME.jar >> $SCRIPT_DIR/launch.log &