import React, {useState, useEffect} from 'react';
import Header from "./Header";
import ImageList from "./ImageList";
import styles from '../../assets/scss/component/gallery/Gallery.scss';

export default function Index() {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/gallery', {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
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
        })();
    }, []);

    const addImage = async (comment, file) => {
        try {
            // Create FormData
            const formData = new FormData();
            formData.append('comment', comment);
            formData.append('file', file);

            // Post
            const response = await fetch(`/api/gallery`, {
                method: 'post',
                headers: {'Accept': 'application/json'},
                body: formData
            });

            if (!response.ok) {
                throw `${response.status} ${response.statusText}`;
            }

            // API success?
            const json = await response.json();
            if (json.result !== 'success') {
                throw json.message;
            }

            // Rendering(Update)
            setImageList([json.data, ...imageList]);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteImage = async (no) => {
        try {
            // Delete
            const response = await fetch(`/api/gallery/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json'
                },
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
            setImageList(imageList.filter((item) => item.no !== parseInt(json.data.no)));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={styles.Gallery}>
            <Header addImage={addImage}/>
            <ImageList imageList={imageList} deleteImage={deleteImage}/>
        </div>
    )
}