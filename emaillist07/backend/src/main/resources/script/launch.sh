#! /bin/bash

SERVICE_NAME=emaillist07
SCRIPT_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)
PID=$(ps -ef | grep java | grep $SERVICE_NAME.jar | awk '{print $2}')

if  [ ! -z "$PID" ] 
then
	echo "stopping [$SERVICE_NAME]"
	kill -9 $PID
	sleep 10
fi

echo "starting [$SERVICE_NAME]"
nohup java -Dspring.profiles.active=production -jar $SCRIPT_DIR/$SERVICE_NAME.jar >> $SCRIPT_DIR/launch.log &