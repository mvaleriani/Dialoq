export const TOGGLE_MEMBER_INDEX = 'TOGGLE_MEMBER_INDEX';


export const toggleMemberIndex = toggleBool => {
    return {
        type: TOGGLE_MEMBER_INDEX,
        memberIndex: toggleBool,
    }
};
