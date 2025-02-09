import React from 'react';
import {SiteLayout} from "../../layout";

export default function Error404() {
    return (
        <SiteLayout>
            <div>
                <h2 style={{
                    lineHeight: '200px',
                    textAlign: 'center'
                }}>Whoops - 404 Not Found</h2>
            </div>
        </SiteLayout>
    );
}