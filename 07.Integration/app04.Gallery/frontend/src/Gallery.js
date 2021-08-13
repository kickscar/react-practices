import React, {useState, useEffect} from 'react';
import Header from "./Header";
import ImageList from "./ImageList";
import styles from './assets/scss/Galery.scss';

export default function Gallery() {
    const [imageList, setImageList] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'applcation/json'
                }
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setImageList(json.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    const notifyImage = {
        add: async function(comment, file) {
            try {

                // Create FormData
                const formData = new FormData();
                formData.append('comments', comment);
                formData.append('file', file);

                // Post
                const response = await fetch(`/api`, {
                    method: 'post',
                    headers: { 'Accept': 'applcation/json' },
                    body: formData
                });

                // fetch success?
                if (!response.ok) {
                    throw `${response.status} ${response.statusText}`;
                }

                // API success?
                const json = await response.json();
                if (json.result !== 'success') {
                    throw json.message;
                }

                // re-rendering(update)
                setImageList([json.data, ...imageList]);
            } catch (err) {
                console.error(err);
            }
        },
        delete: async function(no) {
            try {
                // Delete
                const response = await fetch(`/api/${no}`, {
                    method: 'delete',
                    headers: { 'Accept': 'applcation/json' },
                    body: null
                });

                // fetch success?
                if (!response.ok) {
                    throw `${response.status} ${response.statusText}`;
                }

                // API success?
                const json = await response.json();
                if (json.result !== 'success') {
                    throw json.message;
                }

                // re-rendering(update)
                setImageList(imageList.filter((item) => item.no !== parseInt(json.data)));
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
        <div className={ styles.Gallery }>
            <Header notifyImage={ notifyImage }/>
            <ImageList imageList={ imageList } notifyImage={ notifyImage } />
        </div>
    )
}