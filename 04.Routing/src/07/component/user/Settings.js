import React, {useEffect} from 'react';
import SiteLayout from "../../layout/SiteLayout";

export default function Settings() {
    useEffect(() => {
        console.log('1.요청', 'ajax user 정보 가져오기');
        console.log('2.응답', 'Access Denied: UnAuthorized');
        location.href = '/user/login';
    }, []);

    return (
        <SiteLayout>
            <div>
                <h2 style={{
                    lineHeight: '200px',
                    textAlign: 'center'
                }}>User - Settings</h2>
            </div>
        </SiteLayout>
    );
}