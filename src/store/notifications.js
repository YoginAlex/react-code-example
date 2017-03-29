const ADD_NOTIFICATION = 'app/notifications/ADD_NOTIFICATION';
const REMOVE_ALL = 'app/notifications/REMOVE_ALL';
const MARK_ALL_READ = 'app/notifications/MARK_ALL_READ';
const TOGGLE = 'app/notifications/TOGGLE';


const initialState = {
    isShown: false,
    notifications: [
        {
            id: 17,
            title: 'Test test test 17',
            unread: true,
            datetime: new Date(),
        },
        {
            id: 16,
            title: 'Test test test 16',
            unread: true,
            datetime: new Date().setHours((new Date()).getHours() - 2),
        },
        {
            id: 14,
            title: 'Test test test 14',
            unread: true,
            datetime: new Date().setDate((new Date()).getDate() - 1),
        },
        {
            id: 13,
            title: 'Test test test 13',
            unread: false,
            datetime: new Date().setDate((new Date()).getDate() - 3),
        },
        {
            id: 12,
            title: 'Test test test 12',
            unread: false,
            datetime: new Date().setDate((new Date()).getDate() - 8),
        },
        {
            id: 11,
            title: 'Test test test 11',
            unread: false,
            datetime: new Date().setDate((new Date()).getDate() - 31),
        },
        {
            id: 10,
            title: 'Test test test 10',
            unread: false,
            datetime: new Date().setDate((new Date()).getDate() - 160),
        }
    ]
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_NOTIFICATION: {
            const { title } = action;

            const maxId = state.notifications.length > 0 ?
                state.notifications.reduce((prev, current) => (
                    (prev.y > current.y) ? prev : current
                )).id
                : 0;

            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        id: maxId,
                        title,
                        unread: true,
                        datetime: new Date()
                    }
                ]
            };
        }

        case TOGGLE: {
            const isShown = action.flag !== undefined
                ? action.flag
                : !state.isShown;

            return {
                ...state,
                isShown
            };
        }

        case REMOVE_ALL: {
            return {
                ...state,
                notifications: [],
                isShown: false
            };
        }

        case MARK_ALL_READ: {
            const notifications = state.notifications.map(n => ({ ...n, unread: false }));

            return {
                ...state,
                notifications
            };
        }

        default:
            return state;
    }
}

export function addNotification(title) {
    return {
        type: ADD_NOTIFICATION,
        title
    };
}

export function toggle(flag) {
    return {
        type: TOGGLE,
        flag
    };
}

export function removeAll() {
    return {
        type: REMOVE_ALL
    };
}

export function markAllAsRead() {
    return {
        type: MARK_ALL_READ
    };
}
