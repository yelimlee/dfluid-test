import axios from 'axios'

export const fetchPhoto = async () => {
  const ACCESS_KEY = process.env.REACT_APP_API_KEY
  const savedPhoto = localStorage.getItem('dfluidBackgroundImg')

  if (savedPhoto) {
    return savedPhoto
  } else {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`,
    )
    const photoUrl = response.data.urls.full
    localStorage.setItem('dfluidBackgroundImg', photoUrl)
    return photoUrl
  }
}
