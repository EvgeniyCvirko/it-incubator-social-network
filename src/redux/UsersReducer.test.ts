import {
    changeFollowed,
    changeUnFollowed,
    LocationType,
    PhotosType, setCurrentPage, setFollowingInProgress, setIsFetching, setTotalUsersCount, setUsers,
    usersPageReducer,
    UsersPageType
} from "./UsersReducer";

const user1 = {
    id: '1',
    photos: {} as PhotosType,
    followed: true,
    name: 'Alex',
    status: 'New',
    location: {} as LocationType,
}

const user2 = {
    id: '2',
    photos: {} as PhotosType,
    followed: false,
    name: 'Misha',
    status: 'Old',
    location: {} as LocationType,
}
let startState: UsersPageType ={
    users: [user1,user2 ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

test('User should be follow after click', () =>{
    const action = changeFollowed('2')
    const endState = usersPageReducer(startState, action)
    expect(endState.users[1].followed).toBe(true)
})

test('User should be unfollow after click', () =>{
    const action = changeUnFollowed('1')
    const endState = usersPageReducer(startState, action)
    expect(endState.users[0].followed).toBe(false)
})

test('Users current page should be after change', () =>{
    const action = setCurrentPage(10)
    const endState = usersPageReducer(startState, action)
    expect(endState.currentPage).toBe(10)
})

test('total users page count should be after change', () =>{
    const action = setTotalUsersCount(10)
    const endState = usersPageReducer(startState, action)
    expect(endState.totalUsersCount).toBe(10)
})

test('isFetching should be after change', () =>{
    const action = setIsFetching(true)
    const endState = usersPageReducer(startState, action)
    expect(endState.isFetching).toBe(true)
})

test('followingInProgress should be after click', () =>{
    const action1 = setFollowingInProgress('2',false)
    const action2 = setFollowingInProgress('1',true)
    const endState1 = usersPageReducer(startState, action1)
    const endState2 = usersPageReducer(startState, action2)
    expect(endState1.followingInProgress.length).toBe(0)
    expect(endState2.followingInProgress[0]).toBe('1')
})

test('users should be after get', () =>{
    const action = setUsers([user1, user2])
    const endState = usersPageReducer(startState, action)
    expect(endState.users[0].name).toBe('Alex')
    expect(endState.users[1].name).toBe('Misha')
})