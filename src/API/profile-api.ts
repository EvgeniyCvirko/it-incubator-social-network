import {instance, ResponseType} from './api';
import {PhotosType, ProfileType} from '../types/types';

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`)
  },
  getUserStatus(userId: string) {
    return instance.get<string>(`profile/status/${userId}`)
  },
  updateUserStatus(status: string) {
    return instance.put<ResponseType>(`profile/status/`, {status: status})
  },
  savePhoto(file: File) {
    const formData = new FormData()
    formData.append('image', file)
    return instance.put<ResponseType<{ photos: PhotosType }>>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  updateProfile(profile: ProfileType) {
    return instance.put<ResponseType>(`profile`, profile)
  },
}



