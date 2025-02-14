## 13. Integration - tabbox

#### Backend
1.  SpringBoot Landing Server
2.  빌드 및 실행
    ```    
    $ mvn -f tabbox/backend exec:exec clean package
    $ pwd
    $ java -Dspring.profiles.active=production -jar emaillist08/backend/target/emaillist08.jar 
    ```

#### Frontend
1.  빌드
    ```
    $ npm run build
    ```
 
2.  실행
    
    backend의 maven exec 플러그인이 빌드 실행
