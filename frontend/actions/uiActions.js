export const TOGGLE_MEMBER_INDEX = 'TOGGLE_MEMBER_INDEX';
export const CHANGE_SERVER = 'CHANGE_SERVER';


export const toggleMemberIndex = toggleBool => {
    return {
        type: TOGGLE_MEMBER_INDEX,
        memberIndex: toggleBool,
    }
};

export const changeServer = serverId => {
    return {
        type: CHANGE_SERVER,
        serverId: serverId
    }
};