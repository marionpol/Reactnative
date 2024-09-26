import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';



export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '66f4f9680005ff35060d',
    databaseId: '66f4fb410024d06c0262',
    userCollectionId: '66f4fb5c003692e799e7',
    videoCollectionId: '66f4fb7a0010ebda699c',
    storageId: '66f4fceb001ebd87b6c6'
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId,
} = appwriteConfig

const client = new Client();

client
    .setEndpoint(endpoint) 
    .setProject(projectId) 
    .setPlatform(platform) 
;




const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);

const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)
        await signIn(email, password)

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
            accountId: newAccount.$id,
            email: email,
            username: username,
            avatar: avatarUrl
            }
        );
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(databaseId, userCollectionId,
        [Query.equal('accountId', currentAccount.$id)])

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
}

export const getAllPosts = async () => {
    try {
     const posts = await databases.listDocuments(
        databaseId,
        videoCollectionId
     )
     return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}



export { createUser };
