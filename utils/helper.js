import {usersData} from "@/utils/userDB";

export const getFormattedDate = (timeStamp) => {
    const date = new Date(timeStamp);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).split('/').join('-')
}

export const addUser = (newUser) => {
    const newUserId = usersData.length + 1;
    const creationDate = new Date().toISOString()

    const userWithId = { ...newUser, id: newUserId, creationDate };

    usersData.push(userWithId);

    usersData.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
};
