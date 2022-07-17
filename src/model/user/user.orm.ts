import { TumDataSource } from "../../data-source"
import { User } from "./entity/user.entity"

const userRepository = TumDataSource.getRepository(User);

export async function GetUser(userId: number) {
    const userList = await userRepository.find({where: {id: userId}})   
    console.log(userList);
     
}

export async function RegisterUser(userName: string) {
    const newUser = userRepository.create({
        name: userName
    })
    await userRepository.save(newUser)
    console.log("Saved a new user with name: " + newUser.name)
}

export async function UpdateUser(userId: number, userName: string) {
    await userRepository.update(userId, { name: userName})
}

export async function DeleteUser(userId: number, userActive: boolean) {
    await userRepository.update(userId, { isActive: userActive })
}
