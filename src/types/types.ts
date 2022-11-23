//Profile
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts:ContactsProfileType
  photos: PhotosType
  aboutMe: string
}
export type ContactsProfileType ={
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType ={
  small: string | null
  large: string | null
}
export type PostsType = {
  id: string,
  message: string | undefined,
  count: number,
}
//Users
export type UsersType = {
  id: string
  photos: PhotosType
  followed: boolean
  name: string
  status: string
  location: LocationType
}
export type LocationType = {
  country: string,
  city: string,
}
//Dialogs
export type DialogsPageType = {
  dialogsData: Array<DialogsDataType>,
  messagesData: Array<MessagesData>,
  newMessage: string,
}
export type DialogsDataType = {
  id: number,
  name: string,
}
export type MessagesData = {
  id: string,
  message: string,
}
//SideBar
export type List = {
  id: string,
  namePage: string,
}
export type FriendsType = {
  id: string
  avatar: string,
  name: string,
}