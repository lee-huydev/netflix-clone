import { ref, getDownloadURL } from 'firebase/storage';
import { getStorage } from 'firebase/storage';

export const getImages = async(genre, name) => {
    const storage = getStorage()
    const startRef = ref(storage, `Images/${genre}/${name}.jpg`)
    const response = await getDownloadURL(startRef)
    return await response
}

export const getVideo = async(genre, name, type='mkv') => {
    const storage = getStorage()
    const startRef = ref(storage, `Videos/${genre}/${name}.${type}`)
    const response = await getDownloadURL(startRef)
    return await response
}
