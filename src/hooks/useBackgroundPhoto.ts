import { fetchPhoto } from '@/remote/unsplash'
import { useQuery } from 'react-query'

export const useBackgroundPhoto = () => {
  return useQuery({
    queryKey: ['backgroundPhoto'],
    queryFn: fetchPhoto,
    staleTime: Infinity,
    cacheTime: Infinity,
  })
}
